import React from 'react'; // Mengimpor React untuk membuat komponen
import { motion } from 'framer-motion'; // Mengimpor motion dari framer-motion untuk menambahkan animasi
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts'; // Mengimpor komponen yang diperlukan untuk membuat grafik radar menggunakan recharts

// Data untuk segmentasi pelanggan yang berisi kategori segmen dan jumlah pengguna berdasarkan gender
const CUSTOMERSEGMENTATIONDATA = [
    { segment: "Young", male: 500, female: 600, total: 1100 }, // Segmen Young
    { segment: "Young Adult", male: 800, female: 750, total: 1550 }, // Segmen Young Adult
    { segment: "Middle-Aged", male: 600, female: 650, total: 1250 }, // Segmen Middle-Aged
    { segment: "Older Adults", male: 400, female: 450, total: 850 }, // Segmen Older Adults
    { segment: "Seniors", male: 300, female: 350, total: 650 }, // Segmen Seniors
];

const CustomerSegmentation = () => {
  return (
    <motion.div
        className="relative bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700" // Styling untuk kontainer komponen
        initial={{ opacity: 0, y: 20 }} // Animasi saat elemen pertama kali dimuat dengan opacity 0 dan posisi sedikit lebih tinggi
        animate={{ opacity: 1, y: 0 }} // Animasi setelah elemen muncul dengan opacity 1 dan posisi normal
        transition={{ delay: 0.2 }} // Penundaan animasi selama 0.2 detik
    >
        <h2 className='text-xl font-semibold text-gray-100'>Customer Segmentation</h2> {/* Judul grafik */}

        <div>
            {/* Responsif container untuk grafik, yang menyesuaikan dengan ukuran layar */}
            <ResponsiveContainer width="100%" height={400}> 
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={CUSTOMERSEGMENTATIONDATA}>
                    {/* Menambahkan grid untuk grafik radar */}
                    <PolarGrid stroke='#374151' />
                    {/* Menambahkan sumbu sudut untuk kategori segmen */}
                    <PolarAngleAxis dataKey="segment" stroke='#9CA3AF' />
                    {/* Menambahkan sumbu radius untuk menunjukkan jumlah pengguna, dengan domain 0 hingga 1500 */}
                    <PolarRadiusAxis angle={30} domain={[0, 1500]} stroke='#9CA3AF' />
                    
                    {/* Radar untuk data pengguna laki-laki, dengan warna biru */}
                    <Radar name="Male" dataKey="male" stroke="#6366F1" fill="#6366F1" fillOpacity={0.6} />
                    {/* Radar untuk data pengguna perempuan, dengan warna oranye */}
                    <Radar name="Female" dataKey="female" stroke="#F97316" fill="#F97316" fillOpacity={0.6} />
                    {/* Radar untuk data total pengguna, dengan warna hijau */}
                    <Radar name="Total" dataKey="total" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />

                    <Legend /> {/* Menampilkan legenda untuk kategori radar */}
                    {/* Menambahkan tooltip yang akan menampilkan informasi saat bagian radar diklik */}
                    <Tooltip 
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)", // Latar belakang tooltip transparan
                            borderColor: "#4B5563" // Warna border tooltip
                        }}
                        itemStyle={{ color: "#E5E7EB" }} // Warna teks dalam tooltip
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  );
}

export default CustomerSegmentation; // Mengekspor komponen CustomerSegmentation untuk digunakan di bagian lain aplikasi
