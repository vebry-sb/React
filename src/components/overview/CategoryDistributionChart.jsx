// Mengimpor komponen yang diperlukan
import { motion } from 'framer-motion'; // Untuk animasi transisi elemen
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts'; // Komponen untuk membuat grafik pie (lingkaran) dari library recharts

// Data kategori produk dan nilai penjualannya
const categoryData = [
  { name: 'Electronics', value: 4500 },  // Kategori Elektronik dengan nilai penjualan 4500
  { name: 'Clothing', value: 3200 },  // Kategori Pakaian dengan nilai penjualan 3200
  { name: 'Home & Garden', value: 2800 },  // Kategori Rumah & Taman dengan nilai penjualan 2800
  { name: 'Books', value: 2100 },  // Kategori Buku dengan nilai penjualan 2100
  { name: 'Sports & Outdoors', value: 1900 },  // Kategori Olahraga & Luar Ruangan dengan nilai penjualan 1900
];

// Array warna untuk segmen-segmen pie chart
const COLORS = ['#6366F1', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981'];

const CategoryDistributionChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700" // Styling menggunakan Tailwind CSS untuk elemen chart
      initial={{ opacity: 0, y: 20 }} // Animasi awal: opacity 0 dan posisi vertikal (y) diatur 20px
      animate={{ opacity: 1, y: 0 }} // Animasi akhir: opacity 1 dan posisi vertikal diatur ke 0 (normal)
      transition={{ delay: 0.3 }} // Penundaan animasi selama 0.3 detik
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Category Distribution</h2> {/* Judul grafik */}
      
      <div className="h-80"> {/* Membuat kontainer untuk grafik dengan tinggi tetap */}
        <ResponsiveContainer width="100%" height="100%"> {/* Membuat grafik responsif agar menyesuaikan ukuran kontainer */}
          <PieChart>
            <Pie
              data={categoryData} // Data yang digunakan untuk grafik pie
              dataKey="value" // Menentukan nilai yang digunakan untuk ukuran segmen
              cx="50%" // Titik pusat sumbu x grafik (50% artinya di tengah)
              cy="50%" // Titik pusat sumbu y grafik (50% artinya di tengah)
              outerRadius={100} // Menentukan jari-jari luar pie chart
              fill="#8884d8" // Warna default untuk segmen (jika tidak ada warna khusus)
              labelLine={false} // Menonaktifkan garis label
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%` // Format label untuk setiap segmen, menampilkan nama kategori dan persentase
              }
            >
              {/* Memetakan setiap segmen ke warna tertentu dari array COLORS */}
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} /> // Menetapkan warna untuk setiap segmen berdasarkan urutan data
              ))}
            </Pie>
            {/* Tooltip untuk menampilkan informasi tambahan saat hover di atas segmen */}
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)', // Warna latar belakang tooltip
                borderColor: '#4B5563', // Warna border tooltip
              }}
              itemStyle={{ color: '#E5E7EB' }} // Warna teks di tooltip
            />
            <Legend /> {/* Menampilkan legenda untuk menggambarkan arti dari setiap warna segmen */}
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CategoryDistributionChart; // Mengekspor komponen untuk digunakan di bagian lain aplikasi
