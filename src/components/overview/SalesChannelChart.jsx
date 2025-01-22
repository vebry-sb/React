// Mengimpor komponen-komponen yang diperlukan
import { motion } from 'framer-motion'; // Untuk animasi transisi elemen
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'; // Komponen untuk membuat grafik batang dari library recharts

// Array data yang berisi informasi saluran penjualan dan nilainya
const SalesChannelData = [
  { name: 'Website', value: 45600 },  // Saluran Website dengan nilai penjualan 45600
  { name: 'Mobile App', value: 38200 },  // Saluran Mobile App dengan nilai penjualan 38200
  { name: 'Marketplace', value: 29800 },  // Saluran Marketplace dengan nilai penjualan 29800
  { name: 'Social Media', value: 18700 },  // Saluran Social Media dengan nilai penjualan 18700
];

// Array warna untuk bar yang digunakan dalam grafik batang
const COLORS = ['#6366F1', '#8B5CF6', '#EC4899', '#10B981', '#F59E08', '#3B82F6', '#6EE7B7'];

const SalesChannelChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700" // Styling menggunakan Tailwind CSS
      initial={{ opacity: 0, y: 20 }} // Animasi awal: opacity 0 dan posisi vertikal (y) diatur 20px
      animate={{ opacity: 1, y: 0 }} // Animasi akhir: opacity 1 dan posisi vertikal diatur ke 0 (normal)
      transition={{ delay: 0.4 }} // Penundaan animasi selama 0.4 detik
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales by Channel</h2> {/* Judul bagian grafik */}

      <div className="h-80"> {/* Membuat kontainer untuk grafik dengan tinggi tetap */}
        <ResponsiveContainer width="100%" height="100%"> {/* Membuat grafik responsif agar menyesuaikan ukuran kontainer */}
          <BarChart data={SalesChannelData}> {/* Membuat BarChart dengan data yang diberikan */}
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" /> {/* Menambahkan grid ke grafik dengan warna tertentu */}
            <XAxis dataKey="name" stroke="#9CA3AF" /> {/* Menambahkan sumbu X dengan data nama saluran penjualan */}
            <YAxis stroke="#9CA3AF" /> {/* Menambahkan sumbu Y untuk menampilkan nilai penjualan */}
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)', // Gaya latar belakang tooltip
                borderColor: '#4B5563', // Warna border tooltip
              }}
              itemStyle={{ color: '#E5E7EB' }} // Gaya item tooltip (warna teks)
            />
            <Legend /> {/* Menampilkan legenda untuk menjelaskan warna batang */}
            
            {/* Membuat Bar (batang) untuk setiap saluran penjualan */}
            <Bar dataKey="value" fill="#6366F1"> {/* Batang utama dengan warna default */}
              {SalesChannelData.map((entry, index) => (
                // Menambahkan warna pada setiap batang sesuai urutan data
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesChannelChart; // Mengekspor komponen untuk digunakan di bagian lain aplikasi
