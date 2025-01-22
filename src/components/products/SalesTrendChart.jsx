import { motion } from 'framer-motion'; // Mengimpor motion dari framer-motion untuk animasi
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'; // Mengimpor komponen yang diperlukan untuk membuat grafik dengan recharts

// Data penjualan untuk grafik
const salesTrendData = [
  { name: 'Week 1', sales: 1200 },
  { name: 'Week 2', sales: 1450 },
  { name: 'Week 3', sales: 1320 },
  { name: 'Week 4', sales: 1550 },
  { name: 'Week 5', sales: 1700 },
  { name: 'Week 6', sales: 1600 },
  { name: 'Week 7', sales: 1750 },
  { name: 'Week 8', sales: 1800 },
  { name: 'Week 9', sales: 1900 },
  { name: 'Week 10', sales: 2000 },
  { name: 'Week 11', sales: 2100 },
  { name: 'Week 12', sales: 2300 },
];

// Komponen untuk grafik overview penjualan
const SalesTrendChart = () => {
  return (
    <motion.div
      className="relative bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }} // Animasi awal (opacity 0 dan y = 20)
      animate={{ opacity: 1, y: 0 }} // Animasi akhir (opacity 1 dan y = 0)
      transition={{ delay: 0.2 }} // Penundaan animasi selama 0.2 detik
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2> {/* Judul grafik */}

      <div className="h-80">
        {/* Container responsif untuk grafik */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salesTrendData}>
            {/* Grid kartesian untuk grafik */}
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            {/* Sumbu X dengan data nama bulan */}
            <XAxis dataKey="name" stroke="#9CA3AF" />
            {/* Sumbu Y */}
            <YAxis stroke="#9CA3AF" />
            {/* Tooltip yang akan muncul saat kursor berada di atas grafik */}
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)', // Warna latar belakang tooltip
                borderColor: '#4B5563', // Warna border tooltip
              }}
              itemStyle={{ color: '#E5E7EB' }} // Warna item tooltip
            />
            {/* Line untuk menggambarkan data penjualan */}
            <Line
              type="monotone" // Tipe garis (monotone artinya garis yang halus)
              dataKey="sales" // Kunci data untuk sumbu Y (penjualan)
              stroke="#6366F1" // Warna garis
              strokeWidth={3} // Lebar garis
              dot={{ fill: '#6366F1', strokeWidth: 2, r: 6 }} // Titik pada grafik
              activeDot={{ r: 8, strokeWidth: 2 }} // Titik aktif (lebih besar saat disentuh)
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesTrendChart; // Menyediakan komponen ini untuk digunakan di tempat lain
