import { motion } from "framer-motion"; // Mengimpor motion dari framer-motion untuk animasi
import { ArrowDownRight, ArrowUpRight, DollarSign, Eye, ShoppingBag, User } from "lucide-react"; // Mengimpor ikon dari lucide-react

// Data untuk analitik yang akan ditampilkan dalam kartu
const analyticData = [
  { name: "Revenue", value: "$194,956", change: 12.5, icon: DollarSign }, // Data untuk Revenue
  { name: "Users", value: "78,685", change: 8.3, icon: User },  // Data untuk Users
  { name: "Orders", value: "9,486", change: -4.3, icon: ShoppingBag }, // Data untuk Orders
  { name: "Page Views", value: "1,542,683", change: 18.3, icon: Eye }, // Data untuk Page Views
];

// Komponen untuk menampilkan kartu analitik
const AnalyticCard = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"> {/* Mengatur grid responsif untuk kartu */}
      {/* Looping melalui data analitik dan menampilkan kartu untuk masing-masing item */}
      {analyticData.map((item, index) => (
        <motion.div
          key={index} // Menambahkan key unik untuk setiap elemen dalam list
          className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700" // Desain kartu dengan latar belakang gelap dan efek blur
          whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }} // Animasi saat kartu di-hover
          initial={{ opacity: 0, y: 20 }} // Menyembunyikan kartu saat pertama kali muncul dengan animasi opacity dan posisi
          animate={{ opacity: 1, y: 0 }} // Mengubah opacity dan posisi kartu setelah animasi selesai
          transition={{ delay: index * 0.1 }} // Menambahkan sedikit penundaan animasi berdasarkan index item
        >
          <div className="flex items-center justify-between"> {/* Bagian atas kartu yang berisi judul dan nilai */}
            <div>
              <h3 className="text-sm font-medium text-gray-400">{item.name}</h3> {/* Nama analitik */}
              <p className="mt-1 text-xl font-semibold text-gray-100">{item.value}</p> {/* Nilai analitik */}
            </div>
            <div
              className={`p-3 rounded-full bg-opacity-20 ${item.change >= 0 ? "bg-green-500" : "bg-red-500"}`} // Ikon dengan warna berdasarkan perubahan (positif hijau, negatif merah)
            >
              <item.icon className="text-white w-6 h-6" /> {/* Menampilkan ikon yang sesuai dengan analitik */}
            </div>
          </div>

          {/* Bagian bawah kartu yang menunjukkan perubahan persentase */}
          <div className={`mt-4 flex items-center ${item.change >= 0 ? "text-green-400" : "text-red-400"}`}>
            {/* Menampilkan ikon panah naik atau turun berdasarkan perubahan */}
            {item.change >= 0 ? (
              <ArrowUpRight size="20" />
            ) : (
              <ArrowDownRight size="20" />
            )}
            <span className="ml-1 text-sm font-medium">
              {Math.abs(item.change)}% {/* Menampilkan perubahan persentase */}
            </span>
            <span className="ml-2 text-sm text-gray-400">vs last period</span> {/* Teks penjelasan bahwa ini adalah perbandingan dengan periode sebelumnya */}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnalyticCard; // Mengekspor komponen AnalyticCard
