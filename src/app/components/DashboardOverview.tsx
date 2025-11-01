  import { FC, useState } from "react";
  
  import { Card, CardContent } from "@/components/ui/card";
  import { Area, AreaChart, Tooltip, XAxis, ResponsiveContainer } from "recharts"
  import { chartData }  from "@/data/data";
  import AreaChartExample from "./AreaChartExample";
  import Image from "next/image";
  import { Button } from "@/components/ui/button"
  import Modal from "./Modal";  
  import { trendingLocations } from "@/data/data";
  
  import { UserRound } from "lucide-react";
  
  
  
  interface Props {
    onMonitorClick: () => void;
  }
  
  const DashboardOverview: FC<Props> = ({ onMonitorClick }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [search, setSearch] = useState("");
    const [regionFilter, setRegionFilter] = useState<string | null>(null);
      
      
      const filteredLocations = trendingLocations.filter((loc) => {
        const matchesSearch =
        loc.locationName.toLowerCase().includes(search.toLowerCase()) ||
        loc.manager.toLowerCase().includes(search.toLowerCase());
        
        const matchesRegion = regionFilter
        ? loc.region === regionFilter
        : true;
        
        return matchesSearch && matchesRegion;
        
      });
      
      const [page, setPage] = useState(1);
      const perPage = 6;
      const totalPages = Math.ceil(filteredLocations.length / perPage);
      
      const paginated = filteredLocations.slice((page - 1) * perPage, page * perPage);
      
      
      
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
        <main className="flex-1 overflow-y-auto pb-8">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pl-6 pr-15 justify-between">
            <div className="lg:col-span-2 card p-6 my-4 h-70 rounded-xl text-xs text-gray-900 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="font-semibold">Total Cash Pickup <br />(Across Stores)</div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 border rounded">12 Months</button>
                  <button className="px-3 py-1">6 Months</button>
                  <button className="px-3 py-1">30 Days</button>
                  <button className="px-3 py-1">7 Days</button>
                  <button className="px-3 py-1 border rounded">Export Report</button>
                </div>
              </div>
              
              
              <div className="h-50">
                <ResponsiveContainer>
                  <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    
                    <Tooltip />
                    <Area type="monotone" dataKey="high" stroke="#6366f1" fillOpacity={1} fill="url(#colorHigh)" />
                    <Area type="monotone" dataKey="low" stroke="#1f2937" fillOpacity={0.08} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white p-8 flex flex-col space-y-2 max-h-70 rounded-xl my-4">
              <span className="font-semibold text-gray-900">Quick Actions</span>
              <button className="border rounded-md p-2 border-gray-900 text-gray-900 w-80">Hello</button>
              <button className="border rounded-md p-2 border-gray-900 text-gray-900 w-80">Hello</button>
              <button className="border rounded-md p-2 border-gray-900 text-gray-900 w-80">Hello</button>
              <button className="border rounded-md p-2 border-gray-900 text-gray-900 w-80">Hello</button>
            </div>
          </div>  

          <div className="flex flex-row my-6 pl-6 pr-15 justify-between">
            <h2>Today's Trending Locations</h2>
            <button onClick={onMonitorClick} className="font underline float-end text-gray-900">Monitor Location Activities</button>
          </div>
          
          <div className="bg-white h-auto overflow-y-auto shadow-sm rounded-2xl ml-6 mr-15 text-gray-900">
            <table className="w-full overflow-x-auto text-sm text-left border-0 rounded-2xl border-spacing-y-2">
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
                {trendingLocations.slice(0, 2).map((loc, idx) => (
                  <tr key={idx} className="bg-white shadow-sm rounded-lg py-4">
                    <td className="px-4 py-6">{loc.locationName}</td>
                    <td className="px-4 py-6">{loc.region}</td>
                    <td className="px-4 py-6">{loc.manager}</td>
                    <td className="px-4 py-6">₦{loc.openingBalance.toLocaleString()}</td>
                    <td className="px-4 py-6">₦{loc.remainingBalance.toLocaleString()}</td>
                    <td className="px-4 py-6">₦{loc.amountMopped.toLocaleString()}</td>
                    <td className="px-4 py-6">
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
          </div>
          
          
          
          <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title=""
          className=""
          >
          <div className="space-y-2 mb-4">
            <h2 className="font-semibold text-lg">Candice Ademide is your Account Manager</h2>
            <p className="text-sm font-extralight">The fastest way to have issues resolved is to reach out to your account manager ASAP. 
              Find your account manager's details below
            </p>
          </div>
          
          <div className="flex gap-4 pb-6">
            <Image 
            src={'/vercel.svg'} 
            width={50} height={50} 
            alt="account manager picture" 
            className="border border-black rounded-4xl bg-black p-2" />
            
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-gray-900">Candice Ademide</h3>
              <p>candice.ademide@getstac.com</p>
              <span>+2349087254489</span>
            </div>
          </div>
          <div className="flex flex-col">
            <button 
            className="mt-4 p-2 rounded-md text-sm bg-gray-900 text-white hover:bg-black"
            >
            Send an email
          </button>
          <button 
          className="mt-4 p-2 border rounded-md text-sm bg-white text-black hover:text-gray-700 hover:bg-gray-100"
          >
          Send a message on WhatsApp
        </button>
      </div>
    </Modal>
  </main>
</div>
);
}

export default DashboardOverview;