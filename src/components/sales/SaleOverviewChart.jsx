import { useState } from "react"; // Mengimpor useState untuk menangani state pada komponen
import { motion } from "framer-motion"; // Mengimpor motion dari framer-motion untuk menambahkan animasi
import { AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Area } from "recharts"; // Mengimpor komponen dari recharts untuk grafik area

// Komponen utama untuk menampilkan grafik overview penjualan
const SaleOverviewChart = () => {
  // State untuk menyimpan rentang waktu yang dipilih
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

  // Data penjualan bulanan
  const monthlySalesData = [
    { month: "Jan", sales: 400 }, // Penjualan bulan Januari
    { month: "Feb", sales: 300 }, // Penjualan bulan Februari
    { month: "Mar", sales: 500 }, // Penjualan bulan Maret
    { month: "Apr", sales: 450 }, // Penjualan bulan April
    { month: "May", sales: 600 }, // Penjualan bulan Mei
    { month: "Jun", sales: 700 }, // Penjualan bulan Juni
    { month: "Jul", sales: 550 }, // Penjualan bulan Juli
    { month: "Aug", sales: 650 }, // Penjualan bulan Agustus
    { month: "Sep", sales: 800 }, // Penjualan bulan September
    { month: "Oct", sales: 750 }, // Penjualan bulan Oktober
    { month: "Nov", sales: 900 }, // Penjualan bulan November
    { month: "Dec", sales: 850 }, // Penjualan bulan Desember
  ];

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8" // Styling untuk kontainer
      initial={{ opacity: 0, y: 20 }} // Animasi untuk opacity dan pergerakan vertikal pada saat render
      animate={{ opacity: 1, y: 0 }} // Menentukan keadaan animasi setelah elemen muncul
      transition={{ delay: 0.2 }} // Menambahkan penundaan sebelum animasi dimulai
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Sales Overview</h2> {/* Judul grafik */}
        
        {/* Dropdown untuk memilih rentang waktu */}
        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange} // Mengikat nilai dropdown dengan state selectedTimeRange
          onChange={(e) => setSelectedTimeRange(e.target.value)} // Mengubah state ketika memilih rentang waktu
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      {/* Kontainer untuk grafik */}
      <div className="w-full h-80">
        <ResponsiveContainer> {/* Menjadikan grafik responsif */}
          <AreaChart data={monthlySalesData}> {/* Grafik Area yang menampilkan data penjualan bulanan */}
            <CartesianGrid strokeDasharray="3 3" stroke="#37415" /> {/* Grid latar belakang untuk grafik */}
            <XAxis dataKey="month" /> {/* Sumbu X dengan data bulan */}
            <YAxis /> {/* Sumbu Y */}
            <Tooltip /> {/* Menampilkan tooltip saat hover di atas grafik */}
            {/* Grafik Area untuk menampilkan data penjualan */}
            <Area type="monotone" dataKey="sales" stroke="#000957" fill="#A0DEFF" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SaleOverviewChart; // Mengekspor komponen untuk digunakan di bagian lain aplikasi
