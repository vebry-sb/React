import React from 'react' // Mengimpor React untuk membuat komponen
import { motion } from 'framer-motion'; // Mengimpor motion dari framer-motion untuk menambahkan animasi
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'; // Mengimpor komponen-komponen untuk membuat grafik batang dengan recharts

// Data untuk performa produk yang mencakup nama produk, penjualan, pendapatan, dan keuntungan
const ProductPerformanceData = [
    { name: "Product A", sales: 4000, revenue: 2342, profit: 5426 },
    { name: "Product B", sales: 2500, revenue: 1832, profit: 4230 },
    { name: "Product C", sales: 3200, revenue: 2100, profit: 4700 },
    { name: "Product D", sales: 1800, revenue: 1200, profit: 2900 },
    { name: "Product E", sales: 2100, revenue: 1500, profit: 3600 },
    { name: "Product F", sales: 3500, revenue: 2000, profit: 4600 },
    { name: "Product G", sales: 2700, revenue: 1800, profit: 4100 },
    { name: "Product H", sales: 4500, revenue: 2500, profit: 5300 },
    { name: "Product I", sales: 3900, revenue: 2200, profit: 4850 },
    { name: "Product J", sales: 3200, revenue: 1800, profit: 4200 },
];

const ProductPerformence = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700" // Styling untuk kontainer komponen
      initial={{ opacity: 0, y: 20 }} // Animasi awal dengan opacity 0 dan posisi sedikit lebih tinggi
      animate={{ opacity: 1, y: 0 }} // Animasi setelah elemen muncul dengan opacity 1 dan posisi normal
      transition={{ delay: 0.4 }} // Penundaan animasi selama 0.4 detik
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Product Performence</h2> {/* Judul grafik */}

      <div style={{ width: "100%", height: 300 }}> {/* Kontainer untuk grafik dengan tinggi 300px */}
        <ResponsiveContainer style={{width: "100%", height: "100%"}}> {/* Membuat grafik responsif terhadap ukuran kontainer */}
          <BarChart data={ProductPerformanceData}> {/* Membuat grafik batang berdasarkan data produk */}
            {/* Grid kartesian untuk grafik */}
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            {/* Sumbu X untuk nama produk */}
            <XAxis dataKey="name" stroke="#9CA3AF" />
            {/* Sumbu Y untuk nilai yang akan ditampilkan (penjualan, pendapatan, dan keuntungan) */}
            <YAxis stroke="#9CA3AF" />
            {/* Tooltip untuk menampilkan informasi lebih lanjut saat hover di atas batang */}
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)", // Latar belakang tooltip transparan
                borderColor: "#4B5563", // Warna border tooltip
              }}
              itemStyle={{ color: "#E5E7EB" }} // Warna teks dalam tooltip
            />
            {/* Legend untuk menampilkan keterangan setiap warna yang digunakan */}
            <Legend />
            {/* Bar chart untuk menampilkan penjualan, pendapatan, dan keuntungan */}
            <Bar dataKey="sales" fill="#7C00FE" /> {/* Batang untuk data penjualan */}
            <Bar dataKey="revenue" fill="#FFAF00" /> {/* Batang untuk data pendapatan */}
            <Bar dataKey="profit" fill="#00FF9C" /> {/* Batang untuk data keuntungan */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ProductPerformence; // Mengekspor komponen ProductPerformence
