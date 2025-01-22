import { motion } from "framer-motion"; // Mengimpor motion untuk animasi dari framer-motion
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"; // Mengimpor komponen yang dibutuhkan dari recharts untuk membuat chart

// Data penjualan harian
const dailySalesData = [
    { day: "Mon", sales: 120 }, // Penjualan pada hari Senin
    { day: "Tue", sales: 150 }, // Penjualan pada hari Selasa
    { day: "Wed", sales: 200 }, // Penjualan pada hari Rabu
    { day: "Thu", sales: 180 }, // Penjualan pada hari Kamis
    { day: "Fri", sales: 220 }, // Penjualan pada hari Jumat
    { day: "Sat", sales: 170 }, // Penjualan pada hari Sabtu
    { day: "Sun", sales: 190 }, // Penjualan pada hari Minggu
];

// Komponen untuk menampilkan grafik penjualan harian
const DailySalesTrend = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700" // Styling untuk kontainer chart
      initial={{ opacity: 0, y: 20 }} // Animasi awal untuk opacity dan posisi vertikal
      animate={{ opacity: 1, y: 0 }} // Animasi saat chart muncul
      transition={{ delay: 0.4 }} // Penundaan sebelum animasi dimulai
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Daily Sales Trend</h2> {/* Judul grafik */}

      <div style={{ width: "100%", height: 300 }}> {/* Menentukan ukuran kontainer grafik */}
        <ResponsiveContainer> {/* Membuat kontainer grafik responsif */}
          <BarChart data={dailySalesData}> {/* Membuat grafik batang dengan data penjualan harian */}
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" /> {/* Grid latar belakang dengan warna dan gaya garis tertentu */}
            <XAxis dataKey="day" stroke="#9CA3AF" /> {/* Menampilkan sumbu X dengan data hari */}
            <YAxis stroke="#9CA3AF" /> {/* Menampilkan sumbu Y dengan warna tertentu */}
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)", // Styling untuk latar belakang tooltip
                borderColor: "#4B5563", // Styling untuk border tooltip
              }}
              itemStyle={{ color: "#E5E7EB" }} // Styling untuk teks item di tooltip
            />
            <Bar dataKey="sales" fill="#10b981" /> {/* Membuat batang dengan data penjualan dan warna hijau */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default DailySalesTrend; // Mengekspor komponen untuk digunakan di bagian lain aplikasi
