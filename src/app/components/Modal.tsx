// components/Modal.tsx
'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';

// Define the interface for type safety
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  // State to track if the component has mounted on the client side
  // This is required for using document and createPortal in Next.js App Router
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the initial render
  useEffect(() => {
    setMounted(true);
  }, []);

  // Effect to handle keyboard accessibility (Escape key closes the modal)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // If not open or not yet mounted, render nothing
  if (!isOpen || !mounted) return null;

  // Use a Portal to render the modal directly under the document body
  // This prevents z-index issues and ensures correct display
  return createPortal(
    <div 
      // Modal Overlay
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-1000 transition-opacity duration-300"
      // Close modal when clicking the overlay
      onClick={onClose}
    >
      <div 
        // Modal Content Box
        className="bg-white rounded-lg shadow-2xl p-6 w-11/12 md:w-1/3 max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        // Prevent clicks inside the modal content from closing the modal
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start pb-3 border-b border-gray-200">
          <h2 id="modal-title" className="text-xl font-bold text-gray-900">
            {title}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-150"
            aria-label="Close modal"
          >
            {/* Close Icon (using SVG for a clean look) */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        {/* Body */}
        <div className="pt-4 text-gray-700">
          {children}
        </div>
      </div>
    </div>,
    document.body // Target DOM node for the portal
  );
};

export default Modal;