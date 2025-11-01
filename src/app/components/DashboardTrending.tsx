"use client";
import { FC, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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
  onBack: () => void;
}

const DashboardTrending: FC<Props> = ({ onBack }) => {
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
  const paginated = filteredLocations.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-100 p-4 flex flex-col space-y-12 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:inset-auto`}
      >
        <div>
          <h1 className="text-xl font-bold mb-6">GETSTAC</h1>
          <nav className="space-y-2">
            <button 
            onClick={onBack}
            className="w-full text-left px-3 py-2 rounded-lg bg-gray-900 text-white flex gap-2">
              <LayoutDashboard /> Dashboard
            </button>
            <button
              onClick={onBack}
              className="w-full text-left px-3 py-2 rounded-lg text-gray-900 hover:bg-gray-100 flex gap-2"
            >
              <Users /> Managers
            </button>
            <button className="w-full text-left px-3 py-2 text-gray-900 rounded-lg hover:bg-gray-100 flex gap-2">
              <MousePointer /> Locations
            </button>
            <button className="w-full text-left px-3 py-2 text-gray-900 rounded-lg hover:bg-gray-100 flex gap-2">
              <LucideChartNoAxesColumnIncreasing /> Billing & Invoices
            </button>
          </nav>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg ml-2">Support</h2>
          <button className="w-full text-left px-3 py-2 rounded-lg text-gray-900  hover:bg-gray-100 flex gap-2">
            <Settings /> Settings
          </button>
          <button className="w-full text-left px-3 py-2 rounded-lg text-gray-900  hover:bg-gray-100 flex gap-2">
            <ShieldCheck /> Whats new?
          </button>
          <button className="w-full text-left px-3 py-2 rounded-lg text-gray-900  hover:bg-gray-100 flex gap-2">
            <ShieldCheck /> Custom Request
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-8">
        {/* Header */}
        <header className="sticky top-0 z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 bg-white w-full p-4 gap-3">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu />
            </button>
            <div>
              <h2 className="text-lg font-normal">Today's Trending Locations</h2>
              <p className="text-sm text-gray-500">Overview of all cash activities at your store</p>
            </div>
          </div>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-black tracking-wider text-white p-4 sm:p-6 w-full sm:w-auto"
          >
            Escalate an Issue
          </Button>
        </header>

        <div className="p-4 sm:p-6 space-y-1">
          <h1 className="text-2xl font-semibold">
            How's your Afternoon going, Adebowale?
          </h1>
          <p className="text-lg text-gray-500">
            How are you feeling this fine afternoon?
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 px-4 sm:px-6 lg:pl-6 lg:pr-15">
          <Card>
            <CardContent className="p-4 space-y-1">
              <p className="text-sm text-gray-500">Balance Across Stores</p>
              <p className="text-lg font-semibold tracking-wider">
                ₦50,000,000
              </p>
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

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4 px-4 sm:pl-10 sm:pr-18">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setRegionFilter(null)}
              className={`px-3 py-1 rounded-full text-sm ${
                !regionFilter
                  ? "bg-indigo-100 text-indigo-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              All stores
            </button>

            {["Bokku-Region 1", "Bokku-Region 2", "Bokku-Region 3"].map(
              (region) => (
                <button
                  key={region}
                  onClick={() => setRegionFilter(region)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    regionFilter === region
                      ? "bg-indigo-100 text-indigo-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {region}
                </button>
              )
            )}
            <div className="flex items-center gap-2">
              <button className="border px-3 py-1.5 rounded-md text-sm bg-gray-50 text-gray-900 hover:bg-gray-100">
                More filters
              </button>
            </div>
          </div>

          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-200 rounded-md bg-white w-full sm:w-auto px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Table */}
        <div className="bg-white overflow-x-auto shadow-sm rounded-2xl mx-4 sm:ml-6 sm:mr-15 text-gray-900">
          <table className="min-w-full text-sm text-left border-0 rounded-2xl">
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
              {paginated.map((loc, idx) => (
                <tr key={idx} className="bg-white shadow-sm">
                  <td className="px-4 py-6 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="h-4 w-4 mr-2 rounded checked:bg-black checked:border-black"
                    />
                    {loc.locationName}
                  </td>
                  <td className="px-4 py-6 whitespace-nowrap">{loc.region}</td>
                  <td className="px-4 py-6 whitespace-nowrap">{loc.manager}</td>
                  <td className="px-4 py-6 whitespace-nowrap">
                    ₦{loc.openingBalance.toLocaleString()}
                  </td>
                  <td className="px-4 py-6 whitespace-nowrap">
                    ₦{loc.remainingBalance.toLocaleString()}
                  </td>
                  <td className="px-4 py-6 whitespace-nowrap">
                    ₦{loc.amountMopped.toLocaleString()}
                  </td>
                  <td className="px-4 py-6 whitespace-nowrap">
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

          {/* Pagination */}
          <div className="flex flex-wrap justify-between items-center border-t border-gray-200 py-3 px-4 gap-3">
            <button
              id="prev-btn"
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 text-sm font-medium text-gray-900 border-2 rounded-lg hover:bg-gray-600 hover:text-white disabled:opacity-50"
            >
              &larr; Previous
            </button>

            <span id="page-info" className="text-sm text-gray-700">
              Page {page} of {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              id="next-btn"
              className="px-4 py-2 text-sm font-medium text-gray-900 border-2 rounded-lg hover:bg-gray-600 hover:text-white disabled:opacity-50"
            >
              Next &rarr;
            </button>
          </div>
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

          <div className="flex gap-4 pb-6">
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

export default DashboardTrending;
