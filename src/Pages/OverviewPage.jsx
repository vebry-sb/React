// Mengimpor ikon dan komponen yang diperlukan
import { BarChart2, ShoppingBag, User, Zap } from "lucide-react"; // Ikon-ikon untuk digunakan di stat cards
import Header from "../components/common/Header"; // Komponen header untuk menampilkan judul halaman
import StatCard from "../components/common/StatCard"; // Komponen untuk menampilkan statistik dalam bentuk kartu
import { motion } from "framer-motion"; // Untuk animasi transisi elemen
import SalesOverviewChart from "../components/overview/SalesOverviewChart"; // Grafik overview penjualan
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"; // Grafik distribusi kategori produk
import SalesChannelChart from "../components/overview/SalesChannelChart"; // Grafik saluran penjualan

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      {/* Header untuk halaman ini */}
      <Header title="Overview" /> 

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        
        {/* Bagian statistik */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }} // Animasi mulai: opacity 0 dan y (vertikal) 20px
          animate={{ opacity: 1, y: 0 }} // Animasi akhir: opacity 1 dan y 0 (normal)
          transition={{ duration: 1 }} // Durasi animasi selama 1 detik
        >
          {/* StatCard untuk Total Sales */}
          <StatCard 
            name="Total Sales" // Nama statistik
            icon={Zap} // Ikon yang digunakan
            value="$12,345" // Nilai statistik
            color="#6366F1" // Warna untuk statistik ini
          />
          
          {/* StatCard untuk New Users */}
          <StatCard 
            name="New Users" 
            icon={User} 
            value="1,234" 
            color="#8B5CF6" 
          />

          {/* StatCard untuk Total Products */}
          <StatCard 
            name="Total Products" 
            icon={ShoppingBag} 
            value="567" 
            color="#EC4899" 
          />
          
          {/* StatCard untuk Conversion Rate */}
          <StatCard 
            name="Conversion Rate" 
            icon={BarChart2} 
            value="12.5%" 
            color="#10B981" 
          />
        </motion.div>

        {/* Bagian grafik */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Menampilkan grafik overview penjualan dan distribusi kategori */}
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
