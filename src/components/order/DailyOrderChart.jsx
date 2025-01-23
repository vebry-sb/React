import { motion } from 'framer-motion' // Import motion untuk animasi
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'; // Import komponen yang dibutuhkan dari 'recharts'

const dailyOrderData = [
  { date: "01/01", orders: 120 },
  { date: "02/01", orders: 150 },
  { date: "03/01", orders: 180 },
  { date: "04/01", orders: 170 },
  { date: "05/01", orders: 200 },
  { date: "06/01", orders: 250 },
  { date: "07/01", orders: 230 },
]; // Data penjualan harian dengan tanggal dan jumlah pesanan

const DailyOrderChart = () => {
  return (
    <motion.div
          className="relative bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
          initial={{ opacity: 0, y: 20 }} // Animasi awal (opacity 0 dan y = 20)
          animate={{ opacity: 1, y: 0 }} // Animasi akhir (opacity 1 dan y = 0)
          transition={{ delay: 0.2 }} // Penundaan animasi selama 0.2 detik
        >
          <h2 className="text-lg font-medium mb-4 text-gray-100">Daily Orders</h2> {/* Judul grafik */}
    
          <div className="h-80">
            {/* Container responsif untuk grafik */}
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyOrderData}>
                {/* Grid kartesian untuk grafik, memberikan garis bantu */}
                <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                {/* Sumbu X yang menunjukkan tanggal dengan data dari "date" */}
                <XAxis dataKey="date" stroke="#9CA3AF" />
                {/* Sumbu Y untuk jumlah pesanan */}
                <YAxis stroke="#9CA3AF" />
                {/* Tooltip yang akan muncul saat kursor berada di atas grafik */}
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(31, 41, 55, 0.8)', // Latar belakang tooltip
                    borderColor: '#4B5563', // Warna border tooltip
                  }}
                  itemStyle={{ color: '#E5E7EB' }} // Warna item tooltip
                />
                {/* Line untuk menggambarkan data penjualan */}
                <Line
                  type="monotone" // Tipe garis (monotone artinya garis yang halus)
                  dataKey="orders" // Kunci data untuk sumbu Y (penjualan)
                  stroke="#6366F1" // Warna garis
                  strokeWidth={3} // Lebar garis
                  dot={{ fill: '#6366F1', strokeWidth: 2, r: 6 }} // Titik pada grafik
                  activeDot={{ r: 8, strokeWidth: 2 }} // Titik aktif (lebih besar saat disentuh)
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
  )
}

export default DailyOrderChart; // Mengekspor komponen untuk digunakan di bagian lain aplikasi
