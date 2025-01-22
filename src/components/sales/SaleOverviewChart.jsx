import { useState } from "react";
import { motion } from "framer-motion";
import { AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Area } from "recharts";

const SaleOverviewChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

  const monthlySalesData = [
    { month: "Jan", sales: 400 },
    { month: "Feb", sales: 300 },
    { month: "Mar", sales: 500 },
    { month: "Apr", sales: 450 },
    { month: "May", sales: 600 },
    { month: "Jun", sales: 700 },
    { month: "Jul", sales: 550 },
    { month: "Aug", sales: 650 },
    { month: "Sep", sales: 800 },
    { month: "Oct", sales: 750 },
    { month: "Nov", sales: 900 },
    { month: "Dec", sales: 850 },
  ];

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Sales Overview</h2>
        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <AreaChart data={monthlySalesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            {/* Tambahkan komponen Area untuk grafik */}
            <Area type="monotone" dataKey="sales" stroke="#10B981" fill="#10B981" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SaleOverviewChart;
