import { motion } from "framer-motion"; // Mengimpor motion dari framer-motion untuk menambahkan animasi
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"; // Mengimpor elemen-elemen dari recharts untuk membuat grafik pie

// Warna-warna yang digunakan untuk setiap bagian pie chart
const COLORS = ["#8884D8", "#82CA9D", "FF8042", "#0088FE"];

// Data demografi pengguna berdasarkan rentang usia
const userdemographicData = [
  { name: "18-24", value: 20 },
  { name: "25-34", value: 25 },
  { name: "35-44", value: 15 },
  { name: "45-54", value: 10 },
  { name: "55-64", value: 8 },
  { name: "65+", value: 7 },
];

const UserDemographics = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2"
      initial={{ opacity: 0, y: 20 }} // Animasi awal (opacity 0 dan y = 20)
      animate={{ opacity: 1, y: 0 }} // Animasi akhir (opacity 1 dan y = 0)
      transition={{ delay: 0.5 }} // Penundaan animasi selama 0.5 detik
    >
      <h2 className="text-xl font-medium mb-4 text-gray-100">Users Demographic</h2>
      <div style={{ width: "100%", height: 300 }}>
        {/* Responsive container untuk grafik agar responsif sesuai ukuran layar */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* Pie chart dengan data yang sudah diberikan */}
            <Pie
              data={userdemographicData}
              cx="50%" // Posisi sumbu X (pusat chart)
              cy="50%" // Posisi sumbu Y (pusat chart)
              outerRadius={100} // Radius luar pie chart
              fill="#8884d8" // Warna default untuk bagian pie chart
              dataKey="value" // Menggunakan nilai dari properti 'value' sebagai ukuran bagian pie chart
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} // Menampilkan label dengan nama rentang usia dan persentase
            >
              {/* Mapping setiap data untuk memberikan warna berbeda untuk setiap bagian pie chart */}
              {userdemographicData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            {/* Tooltip yang muncul saat hover di atas bagian pie */}
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.5)", // Latar belakang tooltip
                borderColor: "#4B5563", // Border tooltip
              }}
              itemStyle={{ color: "#E5E73B" }} // Warna teks item di tooltip
            />
            {/* Legend yang menampilkan penjelasan warna untuk setiap bagian pie */}
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserDemographics;
