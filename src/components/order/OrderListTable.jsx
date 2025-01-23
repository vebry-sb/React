import React, { useState, useMemo } from 'react'; // Import React dan hooks useState, useMemo
import { motion } from 'framer-motion'; // Import motion untuk animasi
import { Eye } from 'lucide-react'; // Import ikon mata (Eye) dari lucide-react

// Data daftar pesanan
const orderListData = [
  { id: "S1915-1", date: "15/01", customer: "Charlotte Garcia", total: 310.00, status: "Pending", category: "Sports & Outdoors" },
  { id: "P1204-2", date: "24/01", customer: "James Williams", total: 150.00, status: "Processing", category: "Books" },
  { id: "E4501-3", date: "01/01", customer: "John Doe", total: 250.75, status: "Completed", category: "Electronics" },
  { id: "B2114-4", date: "14/01", customer: "Lucas Martin", total: 80.00, status: "Completed", category: "Books" },
  { id: "C3207-5", date: "07/01", customer: "Sophia Martinez", total: 210.00, status: "Cancelled", category: "Clothing" },
  { id: "P1201-6", date: "21/01", customer: "Grace Miller", total: 180.00, status: "Processing", category: "Electronics" },
  { id: "H2803-7", date: "03/01", customer: "Alice Johnson", total: 330.20, status: "Cancelled", category: "Home & Garden" },
  { id: "C3212-8", date: "12/01", customer: "Noah White", total: 600.40, status: "Completed", category: "Clothing" },
  { id: "S1905-9", date: "05/01", customer: "Emily Davis", total: 500.00, status: "Pending", category: "Sports & Outdoors" },
  { id: "S1920-10", date: "20/01", customer: "Henry Hall", total: 280.00, status: "Completed", category: "Sports & Outdoors" },
  { id: "B2109-11", date: "09/01", customer: "Mia Anderson", total: 400.00, status: "Pending", category: "Books" },
  { id: "H2818-12", date: "18/01", customer: "Alexander Lee", total: 320.25, status: "Completed", category: "Home & Garden" },
  { id: "E4506-13", date: "06/01", customer: "William Wilson", total: 75.25, status: "Completed", category: "Electronics" },
  { id: "E4511-14", date: "11/01", customer: "Olivia Jackson", total: 150.00, status: "Cancelled", category: "Electronics" },
  { id: "C3202-15", date: "02/01", customer: "Jane Smith", total: 120.50, status: "Pending", category: "Clothing" },
  { id: "P1202-16", date: "22/01", customer: "David Wilson", total: 540.75, status: "Processing", category: "Clothing" },
  { id: "B2119-17", date: "19/01", customer: "Amelia Walker", total: 410.00, status: "Pending", category: "Books" },
  { id: "S1910-18", date: "10/01", customer: "Liam Thomas", total: 275.80, status: "Completed", category: "Sports & Outdoors" },
  { id: "H2808-19", date: "08/01", customer: "James Taylor", total: 320.50, status: "Completed", category: "Home & Garden" },
  { id: "H2813-20", date: "13/01", customer: "Emma Harris", total: 420.00, status: "Pending", category: "Home & Garden" },
  { id: "C3217-21", date: "17/01", customer: "Evelyn Lewis", total: 245.00, status: "Cancelled", category: "Clothing" },
  { id: "E4516-22", date: "16/01", customer: "Benjamin Rodriguez", total: 500.00, status: "Completed", category: "Electronics" },
  { id: "B2104-23", date: "04/01", customer: "Michael Brown", total: 145.00, status: "Completed", category: "Books" },
  { id: "P1203-24", date: "23/01", customer: "Chloe Taylor", total: 300.50, status: "Processing", category: "Home & Garden" },
];

const OrderListTable = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State untuk input pencarian
  const [selectedTimeRange, setSelectedTimeRange] = useState("All"); // State untuk filter status pesanan

  // Filter daftar pesanan berdasarkan input pencarian dan status
  const filteredOrders = useMemo(() => {
    return orderListData.filter(
      (order) =>
        (order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.status.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedTimeRange === "All" || order.status === selectedTimeRange)
    );
  }, [searchTerm, selectedTimeRange]); // Hasil filter diperbarui ketika searchTerm atau selectedTimeRange berubah

  // Fungsi untuk menangani perubahan input pencarian
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update state searchTerm
  };

  // Fungsi untuk menangani klik lihat detail pesanan
  const handleViewOrder = (orderId) => {
    console.log("Viewing order with ID:", orderId); // Log ID pesanan
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }} // Animasi saat pertama kali muncul
      animate={{ opacity: 1, y: 0 }} // Animasi setelah muncul
      transition={{ delay: 0.2 }} // Penundaan animasi
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Order List</h2> {/* Judul tabel */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search orders..." // Placeholder untuk input pencarian
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-4 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm} // Nilai input terhubung dengan state searchTerm
            onChange={handleSearch} // Panggil handleSearch saat input berubah
          />
        </div>
        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange} // Nilai terhubung dengan selectedTimeRange
          onChange={(e) => setSelectedTimeRange(e.target.value)} // Update selectedTimeRange
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Processing">Processing</option>
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
                  key={order.id} // Gunakan ID unik sebagai key
                  initial={{ opacity: 0 }} // Animasi awal
                  animate={{ opacity: 1 }} // Animasi akhir
                  transition={{ duration: 0.3 }} // Durasi animasi
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === "Completed" 
                        ? "bg-green-800 text-green-100"
                        : order.status === "Processing" 
                        ? "bg-purple-600 text-purple-100"
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
