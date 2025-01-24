import { motion } from 'framer-motion'; // Mengimpor motion untuk menambahkan animasi pada elemen
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'; // Mengimpor komponen yang diperlukan untuk grafik pie dari recharts

const ChannelData = [
    { name: "Organic Search", value: 4000 },
    { name: "Direct Traffic", value: 3000 },
    { name: "Referral", value: 2000 },
    { name: "Social Media", value: 1500 },
    { name: "Email", value: 1800 },
    { name: "Paid Search", value: 2500 },
    { name: "Other", value: 1000 },
];

const COLORS = [
    "#F7EC09", // Kuning cerah
    "#3EC70B", // Hijau terang
    "#3B44F6", // Biru gelap
    "#A149FA", // Ungu
    "#FF5722", // Oranye
    "#2196F3", // Biru muda
    "#FF9800", // Kuning-oranye
];

const ChannelPerformence = () => {
  return (
    <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700' // Styling untuk elemen kontainer
    
            initial={{ opacity: 0, y: 20 }} // Animasi awal dengan opacity 0 dan posisi vertikal sedikit lebih tinggi
            animate={{ opacity: 1, y: 0 }} // Animasi setelah elemen muncul dengan opacity 1 dan posisi normal
            transition={{ delay: 0.3 }} // Penundaan animasi selama 0.3 detik
        >
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>Channel Performence</h2> {/* Judul grafik */}
    
            <div style={{width: "100%", height: 300}}> {/* Kontainer untuk grafik */}
                <ResponsiveContainer> {/* Menjadikan grafik responsif agar dapat menyesuaikan dengan ukuran kontainer */}
                    <PieChart> {/* Membuat grafik pie */}
                        <Pie
                            data={ChannelData} // Data penjualan berdasarkan kategori
                            cx='50%' // Posisi sumbu X (pusat horizontal)
                            cy='50%' // Posisi sumbu Y (pusat vertikal)
                            outerRadius={80} // Menentukan radius luar untuk bagian grafik
                            fill='#8884d8' // Warna dasar untuk setiap bagian
                            dataKey='value' // Kunci untuk data nilai yang digunakan di dalam grafik
    
                            // Menampilkan label untuk setiap bagian pie dengan nama kategori dan persentase
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                            {/* Menentukan warna untuk setiap bagian pie berdasarkan urutan data */}
                            {ChannelData.map((entry, index) => (
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

export default ChannelPerformence