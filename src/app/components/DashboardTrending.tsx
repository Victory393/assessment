import { FC, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import AreaChartExample from "@/components/AreaChartExample";
import { Button } from "@/components/ui/button"
import Modal from "./Modal";  
import { trendingLocations } from "@/data/trendingLocation";

interface Props {
  onBack: () => void;
}

const DashboardTrending: FC<Props> = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
  <div className="flex h-screen bg-gray-100">
    {/* Sidebar */} 
    <aside className="w-64 text-black bg-white border-r border-gray-100 p-4 flex flex-col space-y-12  ">
      <div>   
        <h1 className="text-xl font-bold mb-6">GETSTAC</h1>
        <nav className="space-y-2">
          <button className="w-full text-left px-3 py-2 rounded-lg bg-gray-900 text-white">Dashboard</button>
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Managers</button>
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Locations</button>
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Billing & Invoices</button>
        </nav>
      </div>
      <div className="space-y-2">
        <h2 className="text-lg ml-2">Support</h2>
        <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Settings</button>
        <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Whats new?</button>
        <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Custom Request</button>
      </div>
    </aside>
    
    {/* Main Content */}
    <main className="flex-1 overfl  ow-auto">
      {/* Header */}
      <header className="flex items-center justify-between mb-6 bg-white w-full p-4">
        <div>
          <h2 className="text-lg font-normal">Adebowale Paul-George</h2>
          <p className="text-sm text-gray-500">Welcome back to Bokku HQ</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="bg-black tracking-wider text-white p-6">Escalate an Issue</Button>
      </header>
      
      <div className="p-6 space-y-1">
        <h1 className="text-2xl font-semibold">How's your Afternoon going, Adebowale?</h1>
        <p className="text-lg text-gray-500">How are you feeling this fine afternoon?</p>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8 pl-6 pr-15">
        <Card>
          <CardContent className="p-4 space-y-1 ">
            <p className="text-sm text-gray-500">Balance Across Stores</p>
            <p className="text-lg font-semibold tracking-wider">₦50,000,000</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 space-y-1">
            <p className="text-sm text-gray-500">Today's Transactions</p>
            <p className="text-lg font-semibold tracking-wider">200</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 space-y-1">
            <p className="text-sm text-gray-500">Total Locations</p>
            <p className="text-lg font-semibold tracking-wider">78</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 space-y-1">
            <p className="text-sm text-gray-500">Total Managers</p>
            <p className="text-lg font-semibold tracking-wider">78</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-white h-auto overflow-y-auto shadow-sm rounded-2xl ml-6 mr-15 text-gray-900">
        <table className="w-full text-sm text-left border-0 rounded-2xl border-spacing-y-2">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-4 py-2">Location Name</th>
              <th className="px-4 py-2">Region</th>
              <th className="px-4 py-2">Manager</th>
              <th className="px-4 py-2">Opening Balance</th>
              <th className="px-4 py-2">Remaining Balance</th>
              <th className="px-4 py-2">Amount Mopped</th>
              <th className="px-4 py-2">Fee Status</th>
            </tr>
          </thead>
          <tbody>
            {trendingLocations.slice(0, 6).map((loc, idx) => (
              <tr key={idx} className="bg-white shadow-sm rounded-lg py-4">
                <td className="px-4 py-4">{loc.locationName}</td>
                <td className="px-4 py-4">{loc.region}</td>
                <td className="px-4 py-4">{loc.manager}</td>
                <td className="px-4 py-4">₦{loc.openingBalance.toLocaleString()}</td>
                <td className="px-4 py-4">₦{loc.remainingBalance.toLocaleString()}</td>
                <td className="px-4 py-4">₦{loc.amountMopped.toLocaleString()}</td>
                <td className="px-4 py-4">
                  <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    loc.feeStatus === "Daily Fee"
                    ? "bg-green-100 text-green-700"
                    : "bg-purple-100 text-purple-700"
                  }`}
                  >
                  {loc.feeStatus}
                </span>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center border-t py-3 px-4">
          <button 
          id="prev-btn" 
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          disabled
          >
          &larr; Previous
        </button>
        
        <span id="page-info" className="text-sm text-gray-700">Page 1 of 10</span>
        
        <button 
        id="next-btn" 
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
        Next &rarr;
      </button>
      </div>
    </div>
    
    
    
    <Modal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    title="User Authentication"
    >
    <p className="mb-4">Please log in or sign up to continue.</p>
    
    {/* Example content inside the modal */}
    <form>
      <input 
      type="email" 
      placeholder="Email" 
      className="w-full p-2 mb-3 border border-gray-300 rounded" 
      />
      <input 
      type="password" 
      placeholder="Password" 
      className="w-full p-2 mb-4 border border-gray-300 rounded" 
      />
      <button 
      type="submit"
      className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-150"
      >
      Log In
    </button>
  </form>
  
  <button 
  onClick={() => setIsModalOpen(false)}
  className="mt-4 text-sm text-gray-500 hover:text-gray-700"
  >
  Maybe later
</button>
</Modal>
</main>
</div>
);
}

export default DashboardTrending;