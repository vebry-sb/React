import { motion } from 'framer-motion'; // Mengimpor motion dari framer-motion untuk menambahkan animasi
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; // Mengimpor elemen-elemen dari recharts untuk membuat grafik garis

// Data pertumbuhan pengguna per bulan
const usersData = [
  { name: 'Jan', users: 1200 },
  { name: 'Feb', users: 1350 },
  { name: 'Mar', users: 1450 },
  { name: 'Apr', users: 1320 },
  { name: 'May', users: 1280 },
  { name: 'Jun', users: 1400 },
  { name: 'Jul', users: 1500 },
  { name: 'Aug', users: 1650 },
  { name: 'Sep', users: 1400 },
  { name: 'Oct', users: 1300 },
  { name: 'Nov', users: 1350 },
  { name: 'Dec', users: 1442 },
];

const UserGrowthChart = () => {
  return (
    <motion.div
      className="relative bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }} // Animasi awal, membuat elemen mulai dengan opacity 0 dan bergeser 20px ke bawah
      animate={{ opacity: 1, y: 0 }} // Animasi akhir, membuat elemen menjadi sepenuhnya terlihat dan kembali ke posisi normal
      transition={{ delay: 0.2 }} // Menunda animasi selama 0.2 detik
    >
      <h2 className="text-xl font-medium mb-4 text-gray-100">Users Growth</h2>

      <div className="h-80">
        {/* Responsif container untuk grafik */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={usersData}>
            {/* Grid kartesian yang menambah garis bantu pada grafik */}
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            {/* Sumbu X untuk nama bulan */}
            <XAxis dataKey="name" stroke="#9CA3AF" />
            {/* Sumbu Y untuk jumlah pengguna */}
            <YAxis stroke="#9CA3AF" />
            {/* Tooltip yang muncul saat hover */}
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)', // Gaya latar belakang tooltip
                borderColor: '#4B5563', // Warna border tooltip
              }}
              itemStyle={{ color: '#E5E7EB' }} // Gaya untuk teks item tooltip
            />
            {/* Garis grafik untuk menunjukkan pertumbuhan pengguna */}
            <Line
              type="monotone" // Jenis garis grafik yang halus
              dataKey="users" // Data yang akan digunakan untuk garis
              stroke="#6366F1" // Warna garis grafik
              strokeWidth={3} // Ketebalan garis
              dot={{ fill: '#6366F1', strokeWidth: 2, r: 6 }} // Titik pada garis yang berwarna biru
              activeDot={{ r: 8, strokeWidth: 2 }} // Titik aktif yang lebih besar saat di-hover
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserGrowthChart;
