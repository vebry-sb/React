import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const orderListData = [
  { id: "E4501", date: "01/01", customer: "John Doe", total: 250.75, status: "Completed", category: "Electronics" },
  { id: "C3202", date: "02/01", customer: "Jane Smith", total: 120.50, status: "Pending", category: "Clothing" },
  { id: "H2803", date: "03/01", customer: "Alice Johnson", total: 330.20, status: "Cancelled", category: "Home & Garden" },
  { id: "B2104", date: "04/01", customer: "Michael Brown", total: 145.00, status: "Completed", category: "Books" },
  { id: "S1905", date: "05/01", customer: "Emily Davis", total: 500.00, status: "Pending", category: "Sports & Outdoors" },
  { id: "E4506", date: "06/01", customer: "William Wilson", total: 75.25, status: "Completed", category: "Electronics" },
  { id: "C3207", date: "07/01", customer: "Sophia Martinez", total: 210.00, status: "Cancelled", category: "Clothing" },
  { id: "H2808", date: "08/01", customer: "James Taylor", total: 320.50, status: "Completed", category: "Home & Garden" },
  { id: "B2109", date: "09/01", customer: "Mia Anderson", total: 400.00, status: "Pending", category: "Books" },
  { id: "S1910", date: "10/01", customer: "Liam Thomas", total: 275.80, status: "Completed", category: "Sports & Outdoors" },
  { id: "E4511", date: "11/01", customer: "Olivia Jackson", total: 150.00, status: "Cancelled", category: "Electronics" },
  { id: "C3212", date: "12/01", customer: "Noah White", total: 600.40, status: "Completed", category: "Clothing" },
  { id: "H2813", date: "13/01", customer: "Emma Harris", total: 420.00, status: "Pending", category: "Home & Garden" },
  { id: "B2114", date: "14/01", customer: "Lucas Martin", total: 80.00, status: "Completed", category: "Books" },
  { id: "S1915", date: "15/01", customer: "Charlotte Garcia", total: 310.00, status: "Pending", category: "Sports & Outdoors" },
  { id: "E4516", date: "16/01", customer: "Benjamin Rodriguez", total: 500.00, status: "Completed", category: "Electronics" },
  { id: "C3217", date: "17/01", customer: "Evelyn Lewis", total: 245.00, status: "Cancelled", category: "Clothing" },
  { id: "H2818", date: "18/01", customer: "Alexander Lee", total: 320.25, status: "Completed", category: "Home & Garden" },
  { id: "B2119", date: "19/01", customer: "Amelia Walker", total: 410.00, status: "Pending", category: "Books" },
  { id: "S1920", date: "20/01", customer: "Henry Hall", total: 280.00, status: "Completed", category: "Sports & Outdoors" },
];

const OrderListTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTimeRange, setSelectedTimeRange] = useState("All");

  // Memoize filtered orders based on search term and selected time range
  const filteredOrders = useMemo(() => {
    return orderListData.filter(
      (order) =>
        (order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.status.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedTimeRange === "All" || order.status === selectedTimeRange)
    );
  }, [searchTerm, selectedTimeRange]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewOrder = (orderId) => {
    console.log("Viewing order with ID:", orderId);
    // Implement your view logic here
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Order List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search orders..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-4 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div className="overflow-auto max-h-96">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-gray-400">No orders found</td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === "Completed" 
                        ? "bg-green-800 text-green-100" 
                        : order.status === "Pending"
                        ? "bg-yellow-600 text-yellow-100"
                        : "bg-red-600 text-red-100"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <button className="text-indigo-400 hover:text-indigo-300 mr-2" onClick={() => handleViewOrder(order.id)}>
                      <Eye size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default OrderListTable;
