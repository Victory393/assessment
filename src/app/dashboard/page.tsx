import { Card, CardContent } from "@/components/ui/card";
import AreaChartExample from "@/components/AreaChartExample";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react";

export default function Dashboard() {
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
        <Button className="bg-black tracking-wider text-white p-6">Escalate an Issue</Button>
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
      
      {/* Graph and Quick Actions */}
      <div className="grid grid-cols-3 gap-6 mb-8 pl-6 pr-15">
        <Card className="col-span-2">
          <CardContent className="p-2">
            <p className="text-sm font-semibold mb-2">Total Cash Pickup (Across Stores)</p>
            <AreaChartExample />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 space-y-3">
            <p className="text-sm font-medium mb-2">Quick Actions</p>
            <Button variant="outline" className="w-full">Create a new location</Button>
            <Button variant="outline" className="w-full">Create a new Manager</Button>
            <Button variant="outline" className="w-full">Create a new Region</Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Trending Locations */}
      <div className="pl-6 pr-15 text-black">
        <div className="flex items-center justify-between mb-4">  
          <h3 className="font-semibold">Today's Trending Locations</h3>
          <button className="text-sm text-indigo-600 hover:underline">Monitor Location Activities</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-t">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-3">Location Name</th>
                <th className="py-2 px-3">Region</th>
                <th className="py-2 px-3">Manager</th>
                <th className="py-2 px-3">Opening Balance</th>
                <th className="py-2 px-3">Remaining Balance</th>
                <th className="py-2 px-3">Amount Mopped</th>
                <th className="py-2 px-3">Fee Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-3">Lekki Phase 1</td>
                <td className="py-2 px-3">Lagos</td>
                <td className="py-2 px-3">John Doe</td>
                <td className="py-2 px-3">₦5,000,000</td>
                <td className="py-2 px-3">₦4,200,000</td>
                <td className="py-2 px-3">₦800,000</td>
                <td className="py-2 px-3 text-green-600">Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
  );
}
