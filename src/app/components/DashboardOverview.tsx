import { FC, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Area, AreaChart, Tooltip, XAxis, ResponsiveContainer } from "recharts";
import { chartData } from "@/lib/data/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Modal from "./Modal";
import { trendingLocations } from "@/lib/data/data";
import {
  Bell,
  LayoutDashboard,
  Users,
  MousePointer,
  Settings,
  LucideChartNoAxesColumnIncreasing,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";

interface Props {
  onMonitorClick: () => void;
}

const DashboardOverview: FC<Props> = ({ onMonitorClick }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState<string | null>(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    const filteredLocations = trendingLocations.filter((loc) => {
      const matchesSearch =
      loc.locationName.toLowerCase().includes(search.toLowerCase()) ||
      loc.manager.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = regionFilter ? loc.region === regionFilter : true;
      return matchesSearch && matchesRegion;
    });
    
    const [page, setPage] = useState(1);
    const perPage = 6;
    const totalPages = Math.ceil(filteredLocations.length / perPage);
    const paginated = filteredLocations.slice((page - 1) * perPage, page * perPage);
    
    return (
    <div className="flex h-screen bg-gray-100 max-w-lvw overflow-x-hidden">
      {/* Sidebar */}
      <aside
      className={`fixed md:static z-20 top-0 left-0 h-full w-64 text-black bg-white border-r border-gray-100 p-4 flex flex-col space-y-12 transform transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
      >
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold">GETSTAC</h1>
          <button
          className="md:hidden text-gray-700"
          onClick={() => setSidebarOpen(false)}
          >
          <X />
        </button>
      </div>
      <nav className="space-y-2">
        <button className="w-full text-left px-3 py-2 rounded-lg bg-gray-900 text-white flex gap-2">
          <LayoutDashboard />
          Dashboard
        </button>
        <button
        onClick={onMonitorClick}
        className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 flex gap-2"
        >
        <Users />
        Managers
      </button>
      <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 flex gap-2">
        <MousePointer />
        Locations
      </button>
      <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 flex gap-2">
        <LucideChartNoAxesColumnIncreasing />
        Billing & Invoices
      </button>
    </nav>
  </div>
  <div className="space-y-2">
    <h2 className="text-lg ml-2">Support</h2>
    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 flex gap-2">
      <Settings />
      Settings
    </button>
    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 flex gap-2">
      <ShieldCheck />
      Whats new?
    </button>
    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 flex gap-2">
      <ShieldCheck />
      Custom Request
    </button>
  </div>
</aside>

{/* Overlay */}
{sidebarOpen && (
  <div
  className="fixed inset-0 bg-black bg-opacity-30 md:hidden z-10"
  onClick={() => setSidebarOpen(false)}
  ></div>
  )}
  
  {/* Main */}
  <main className="flex-1 overflow-y-auto pb-8 max-w-full overflow-x-hidden">
    {/* Header */}
    <header className="sticky top-0 z-10 flex justify-between sm:flex-row sm:items-center sm:justify-between mb-6 bg-white w-full p-6 gap-8">
      <div className="flex items-center gap-3">
        <button
        className="md:hidden text-gray-700"
        onClick={() => setSidebarOpen(true)}
        >
        <Menu />
      </button>
      <div>
        <h2 className="text-lg font-normal">Adebowale Paul-George</h2>
        <p className="text-sm text-gray-500">Welcome back to Bokku HQ</p>
      </div>
    </div>
    <div className="items-center justify-center gap-2 flex">
      <Button
      onClick={() => setIsModalOpen(true)}
      className="bg-black tracking-wider text-white p-4 sm:p-4 max-w-full sm:w-auto"
      >
      Escalate an Issue
    </Button>
    <Bell className="stroke-gray-900"/>
  </div>
</header>

{/* Greeting */}
<div className="ml-8 pb-4 sm:px-6 space-y-1">
  <h1 className="text-xl sm:text-2xl font-semibold">
    How's your Afternoon going, Adebowale?
  </h1>
  <p className="text-base sm:text-lg text-gray-500">
    How are you feeling this fine afternoon?
  </p>
</div>

{/* Summary Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 px-4 sm:px-6 lg:px-15">
  {["Balance Across Stores", "Today's Transactions", "Total Locations", "Total Managers"].map((title, i) => (
  <Card key={i}>
    <CardContent className="p-4 space-y-1">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-lg font-semibold tracking-wider">
        {i === 0 ? "₦50,000,000" : i === 1 ? "200" : "78"}
      </p>
    </CardContent>
  </Card>
  ))}
</div>

{/* Chart + Quick Actions */}
<div className="grid grid-cols-3 lg:grid lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-15 sm:flex-col sm:flex">
  <div className="grid col-span-3 lg:col-span-2 card p-4 sm:p-6 my-4 h-70 rounded-xl text-xs text-gray-900 bg-white">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
      <div className="font-semibold">
        Total Cash Pickup <br />
        (Across Stores)
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button className="px-3 py-1 border rounded">12 Months</button>
        <button className="px-3 py-1">6 Months</button>
        <button className="px-3 py-1">30 Days</button>
        <button className="px-3 py-1">7 Days</button>
        <button className="px-3 py-1 border rounded">
          Export Report
        </button>
      </div>
    </div>
    
    <div className="h-50">
      <ResponsiveContainer>
        <AreaChart
        data={chartData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
        <defs>
          <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <Tooltip />
        <Area
        type="monotone"
        dataKey="high"
        stroke="#6366f1"
        fillOpacity={1}
        fill="url(#colorHigh)"
        />
        <Area
        type="monotone"
        dataKey="low"
        stroke="#1f2937"
        fillOpacity={0.08}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
</div>

{/* Quick Actions */}
<div className="col-span-2 lg:col-auto bg-white p-y px-2 sm:p-8 flex flex-col space-y-2 max-h-70 rounded-xl my-4">
  <span className="font-semibold text-gray-900">Quick Actions</span>
  {[1, 2, 3, 4].map((n) => (
    <button
    key={n}
    className="flex flex-col border rounded-md p-2 border-gray-900 text-gray-900 max-w-full sm:w-80"
    >
    Hello
  </button>
  ))}
</div>
</div>

{/* Trending Locations */}
<div className="flex flex-col sm:flex-row my-6 px-4 sm:px-6 lg:px-15 justify-between">
  <h2>Today's Trending Locations</h2>
  <button
  onClick={onMonitorClick}
  className="font underline text-gray-900 mt-2 sm:mt-0"
  >
  Monitor Location Activities
</button>
</div>

{/* Table */}
<div className="bg-white h-auto overflow-x-auto shadow-sm rounded-2xl mx-4 sm:mx-6 lg:mx-15 text-gray-900">
  <table className="min-w-full text-sm text-left border-0 rounded-2xl">
    <thead className="bg-gray-900 text-white">
      <tr>
        <th className="px-4 py-2 whitespace-nowrap">Location Name</th>
        <th className="px-4 py-2 whitespace-nowrap">Region</th>
        <th className="px-4 py-2 whitespace-nowrap">Manager</th>
        <th className="px-4 py-2 whitespace-nowrap">Opening Balance</th>
        <th className="px-4 py-2 whitespace-nowrap">Remaining Balance</th>
        <th className="px-4 py-2 whitespace-nowrap">Amount Mopped</th>
        <th className="px-4 py-2 whitespace-nowrap">Fee Status</th>
      </tr>
    </thead>
    <tbody>
      {trendingLocations.slice(0, 2).map((loc, idx) => (
        <tr key={idx} className="bg-white shadow-sm rounded-lg">
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

{/* Modal */}
<Modal
isOpen={isModalOpen}
onClose={() => setIsModalOpen(false)}
title=""
className=""
>
<div className="space-y-2 mb-4">
  <h2 className="font-semibold text-lg">
    Candice Ademide is your Account Manager
  </h2>
  <p className="text-sm font-extralight">
    The fastest way to have issues resolved is to reach out to your
    account manager ASAP. Find your account manager's details below
  </p>
</div>

<div className="flex flex-col sm:flex-row gap-4 pb-6">
  <Image
  src={"/vercel.svg"}
  width={50}
  height={50}
  alt="account manager picture"
  className="border border-black rounded-4xl bg-black p-2"
  />
  <div className="flex flex-col gap-3">
    <h3 className="font-semibold text-gray-900">Candice Ademide</h3>
    <p>candice.ademide@getstac.com</p>
    <span>+2349087254489</span>
  </div>
</div>

<div className="flex flex-col">
  <button className="mt-4 p-2 rounded-md text-sm bg-gray-900 text-white hover:bg-black">
    Send an email
  </button>
  <button className="mt-4 p-2 border rounded-md text-sm bg-white text-black hover:text-gray-700 hover:bg-gray-100">
    Send a message on WhatsApp
  </button>
</div>
</Modal>
</main>
</div>
);
};

export default DashboardOverview;
