import { motion } from 'framer-motion';
import { useState } from 'react';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, Legend } from 'recharts';

const revenueData = [
    { month: "Jan", revenue: 4000, target: 3800 },
    { month: "Feb", revenue: 4500, target: 4000 },
    { month: "Mar", revenue: 4200, target: 3900 },
    { month: "Apr", revenue: 4600, target: 4200 },
    { month: "May", revenue: 4700, target: 4300 },
    { month: "Jun", revenue: 4800, target: 4500 },
    { month: "Jul", revenue: 4900, target: 4600 },
    { month: "Aug", revenue: 5100, target: 4700 },
    { month: "Sep", revenue: 5200, target: 4800 },
    { month: "Oct", revenue: 5300, target: 5000 },
    { month: "Nov", revenue: 5400, target: 5200 },
    { month: "Dec", revenue: 5500, target: 5300 },
];

const RevenueChart = () => {
    const [selectedTimeRange, setSelectedRange] = useState("This Month");

    const timeFilteredData = selectedTimeRange === "This Month"
        ? revenueData
        : revenueData.slice(0, 3); // Filter data sesuai pilihan

    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-100">Revenue vs Target</h2>
                <select
                    className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedTimeRange}
                    onChange={(e) => setSelectedRange(e.target.value)}
                >
                    <option value="This Week">This Week</option>
                    <option value="This Month">This Month</option>
                    <option value="This Quarter">This Quarter</option>
                    <option value="This Year">This Year</option>
                </select>
            </div>
            <div className="w-full h-80">
                <ResponsiveContainer>
                    <AreaChart data={timeFilteredData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#37415" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                            formatter={(value, name) => [`$${value.toLocaleString()}`, name]}
                        />
                        <Legend />
                        <Area type="monotone" dataKey="revenue" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.3} />
                        <Area type="monotone" dataKey="target" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default RevenueChart;
