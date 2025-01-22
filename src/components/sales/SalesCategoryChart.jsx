import { motion } from 'framer-motion'; // Mengimpor motion untuk menambahkan animasi pada elemen
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'; // Mengimpor komponen yang diperlukan untuk grafik pie dari recharts

// Data penjualan berdasarkan kategori
const salesByCategory = [
    { name: "Electronics", value: 400 }, // Penjualan kategori Elektronik
    { name: "Fashion", value: 300 }, // Penjualan kategori Fashion
    { name: "Home Appliances", value: 500 }, // Penjualan kategori Peralatan Rumah Tangga
    { name: "Books", value: 200 }, // Penjualan kategori Buku
    { name: "Toys", value: 350 }, // Penjualan kategori Mainan
    { name: "Groceries", value: 600 }, // Penjualan kategori Kebutuhan Pokok
    { name: "Beauty Products", value: 450 }, // Penjualan kategori Produk Kecantikan
];

// Warna yang digunakan untuk setiap kategori
const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#EF4444", "#3B82F6", "#A855F7", "#F43F5E"];

// Komponen utama untuk grafik kategori penjualan
const SalesCategoryChart = () => {
  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700' // Styling untuk elemen kontainer

        initial={{ opacity: 0, y: 20 }} // Animasi awal dengan opacity 0 dan posisi vertikal sedikit lebih tinggi
        animate={{ opacity: 1, y: 0 }} // Animasi setelah elemen muncul dengan opacity 1 dan posisi normal
        transition={{ delay: 0.3 }} // Penundaan animasi selama 0.3 detik
    >
        <h2 className='text-xl font-semibold text-gray-100 mb-4'>Sales by Category</h2> {/* Judul grafik */}

        <div style={{width: "100%", height: 300}}> {/* Kontainer untuk grafik */}
            <ResponsiveContainer> {/* Menjadikan grafik responsif agar dapat menyesuaikan dengan ukuran kontainer */}
                <PieChart> {/* Membuat grafik pie */}
                    <Pie
                        data={salesByCategory} // Data penjualan berdasarkan kategori
                        cx='50%' // Posisi sumbu X (pusat horizontal)
                        cy='50%' // Posisi sumbu Y (pusat vertikal)
                        outerRadius={80} // Menentukan radius luar untuk bagian grafik
                        fill='#8884d8' // Warna dasar untuk setiap bagian
                        dataKey='value' // Kunci untuk data nilai yang digunakan di dalam grafik

                        // Menampilkan label untuk setiap bagian pie dengan nama kategori dan persentase
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {/* Menentukan warna untuk setiap bagian pie berdasarkan urutan data */}
                        {salesByCategory.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip 
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)", // Gaya tooltip dengan latar belakang transparan
                            borderColor: "#4B5563", // Warna border tooltip
                        }}
                        itemStyle={{ color: "#E5E7EB" }} // Warna teks dalam tooltip
                    />
                    <Legend /> {/* Menampilkan legenda untuk grafik */}
                </PieChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default SalesCategoryChart; // Mengekspor komponen untuk digunakan di bagian lain aplikasi
