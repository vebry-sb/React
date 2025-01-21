import { motion } from 'framer-motion'; // Mengimpor motion untuk animasi
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts'; // Mengimpor komponen dari Recharts untuk grafik pie

// Data kategori untuk grafik pie
const categoryData = [
  { name: 'Electronics', value: 4500 },
  { name: 'Clothing', value: 3200 },
  { name: 'Home & Garden', value: 2800 },
  { name: 'Books', value: 2100 },
  { name: 'Sports & Outdoors', value: 1900 },
];

// Warna untuk setiap sektor pie chart
const COLORS = ['#6366F1', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981'];

const CategoryDistributionChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }} // Animasi awal: opacity 0 dan y = 20
      animate={{ opacity: 1, y: 0 }} // Animasi akhir: opacity 1 dan y = 0
      transition={{ delay: 0.3 }} // Durasi animasi 0.3 detik
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Category Distribution</h2>
      
      <div className="h-80">
        {/* Responsive Container untuk grafik */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* Grafik Pie */}
            <Pie
              data={categoryData}
              dataKey="value"
              cx="50%" // Titik pusat horizontal dari pie chart
              cy="50%" // Titik pusat vertikal dari pie chart
              outerRadius={100} // Radius luar dari pie chart
              fill="#8884d8" // Warna default
              labelLine={false} // Menonaktifkan garis label
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`} // Menampilkan label dengan persen
            >
              {/* Menggunakan warna yang telah ditentukan pada setiap sektor */}
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            {/* Tooltip untuk menampilkan informasi lebih detail saat hover */}
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)', // Latar belakang tooltip
                borderColor: '#4B5563', // Warna border tooltip
              }}
              itemStyle={{ color: '#E5E7EB' }} // Warna teks di dalam tooltip
            />
            {/* Legend untuk menampilkan keterangan setiap kategori */}
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CategoryDistributionChart; // Menyediakan komponen ini untuk digunakan di tempat lain
