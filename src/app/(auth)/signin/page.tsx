import Link from "next/link";
import React from "react";

export default function SigninPage() {
  return (
  <div>
    <main className="flex min-h-screen min-w-sm items-center justify-center p-6">
      <form action="" className="flex flex-col bg-white text-(--formtext) text-sm drop-shadow-xl rounded-sm p-18">
        <h2 className="mb-4">Sign in to your account</h2>
        <label htmlFor="email">Email</label>
        <input 
        id="email"
        type="email"
        placeholder="johndoe@email.com"
        className="border-2 border-gray-200 rounded w-sm p-3 my-3 text-gray-600 mb-7"
        />
        <label htmlFor="password">Password <Link href={'/'} className="float-end" >Forgot your password?</Link></label>
        <input 
        id="password"
        type="password"
        placeholder="******"
        className="border-2 border-gray-200 rounded w-sm p-3 my-3 text-gray-600 tracking-widest "
        />
        <div className="items-center mt-4">
          <input 
          type="checkbox"
          className="float-start border-2 rounded mr-2 text-gray-600 accent-black"
          />
          <span>Stay signed in for a week</span>
        </div>
        <button 
        type="submit" 
        className="bg-gray-800 hover:bg-gray-900 text-white p-3 my-6 border rounded-md">Continue</button>
        <span className="text-center">Validate your new account</span>
      </form>
      <span>Don't have an account? <Link href={'/'}>Book  a session first</Link></span>
    </main> 
  </div>
  )
}