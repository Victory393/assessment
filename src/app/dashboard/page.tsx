// app/dashboard/page.tsx or components/Dashboard.tsx
"use client";
import { useState } from "react";
import DashboardOverview from "@/components/DashboardOverview";
import DashboardTrending from "@/components/DashboardTrending";

export default function Dashboard() {
  const [mode, setMode] = useState<"overview" | "trending">("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      {mode === "overview" ? (
        <DashboardOverview onMonitorClick={() => setMode("trending")} />
      ) : (
        <DashboardTrending onBack={() => setMode("overview")} />
      )}
    </div>
  );
}
