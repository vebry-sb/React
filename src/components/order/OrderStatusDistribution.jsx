import { motion } from 'framer-motion' // Import motion untuk animasi
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'; // Import komponen yang dibutuhkan dari 'recharts'

const OrderStatusDistributionData = [
  { status: "Pending", count: 120 },
  { status: "Processing", count: 150 },
  { status: "Shipped", count: 200 },
  { status: "Delivered", count: 300 },
  { status: "Cancelled", count: 50 },
];

// Array berisi data status pesanan dan jumlahnya yang digunakan untuk chart
const COLORS = ["#F59E0B", "#3B82F6", "#10B981", "#6366F1", "#EF4444"]; // Warna yang digunakan untuk setiap bagian pie chart

const OrderStatusDistribution = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }} // Animasi awal (opacity 0 dan y = 20)
      animate={{ opacity: 1, y: 0 }} // Animasi akhir (opacity 1 dan y = 0)
      transition={{ delay: 0.5 }} // Penundaan animasi selama 0.5 detik
    >
      <h2 className="text-xl font-medium mb-4 text-gray-100">Users Demographic</h2> {/* Judul untuk grafik */}
      
      <div style={{ width: "100%", height: 300 }}> {/* Mengatur lebar dan tinggi kontainer grafik */}
        {/* ResponsiveContainer memastikan grafik responsif dan mengikuti ukuran layar */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* Pie chart untuk menampilkan distribusi status pesanan */}
            <Pie
              data={OrderStatusDistributionData} // Data yang akan digunakan di pie chart
              cx="50%" // Posisi sumbu X (pusat chart)
              cy="50%" // Posisi sumbu Y (pusat chart)
              outerRadius={100} // Radius luar dari pie chart
              fill="#8884d8" // Warna default untuk bagian pie chart
              dataKey="count" // Menggunakan nilai dari properti 'count' untuk menentukan ukuran bagian pie chart
              label={({ status, percent }) => `${status} ${(percent * 100).toFixed(0)}%`} 
              // Label untuk setiap bagian pie, menampilkan status dan persentase
            >
              {/* Menggambar setiap cell dengan warna yang berbeda berdasarkan indeks */}
              {OrderStatusDistributionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            {/* Tooltip yang muncul saat pengguna hover di atas bagian pie */}
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.5)", // Latar belakang tooltip
                borderColor: "#4B5563", // Warna border tooltip
              }}
              itemStyle={{ color: "#E5E73B" }} // Warna teks item di tooltip
            />
            {/* Legend yang menampilkan penjelasan warna untuk setiap bagian pie */}
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default OrderStatusDistribution; // Mengekspor komponen untuk digunakan di bagian lain aplikasi
