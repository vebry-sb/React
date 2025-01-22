import { motion } from 'framer-motion' // Mengimpor komponen untuk animasi dari framer-motion
import Header from '../components/common/Header' // Mengimpor komponen Header
import StatCard from '../components/common/StatCard' // Mengimpor komponen StatCard untuk menampilkan statistik
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react' // Mengimpor ikon dari lucide-react
import SalesOverviewChart from '../components/overview/SalesOverviewChart'; // Mengimpor grafik overview penjualan
import SalesChannelChart from '../components/overview/SalesChannelChart'; // Mengimpor grafik channel penjualan
import SaleOverviewChart from '../components/sales/SaleOverviewChart'; // Mengimpor grafik overview penjualan spesifik
import DailySalesTrend from '../components/sales/DailySalesTrend'; // Mengimpor grafik tren penjualan harian
import SalesCategoryChart from '../components/sales/SalesCategoryChart'; // Mengimpor grafik kategori penjualan

// Data statistik penjualan
const salesStats = {
  totalRevenue: "$1,250,000", // Total pendapatan dalam format mata uang
  avargeOrderValue: "$125.50", // Nilai rata-rata pesanan dalam format mata uang
  conversienRate: "12.5%", // Tingkat konversi dalam format persentase
  salesGrowth: "18.2%", // Pertumbuhan penjualan dalam format persentase
};

const Sales = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      {/* Header dengan judul "Sales" */}
      <Header title="Sales" />
      
      {/* Main content area */}
      <main className='max-q-7xl mx-auto py-6 px-4 lg:px-8'>

        {/* Sales Stats: Menampilkan statistik penjualan dalam bentuk kartu */}
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8' // Membuat grid untuk statistik
          initial={{opacity: 0, y: 20}} // Animasi untuk memulai elemen dari bawah dan dengan opacity 0
          animate={{opacity: 1, y: 0}} // Animasi untuk mencapai opacity 1 dan posisi normal
          transition={{duration: 1}} // Durasi animasi
        >
          {/* Kartu statistik total revenue */}
          <StatCard 
            name='Total Revenue' 
            icon={DollarSign} 
            value={salesStats.totalRevenue} 
            color="#6366f1" // Warna biru untuk total revenue
          />
          
          {/* Kartu statistik rata-rata nilai pesanan */}
          <StatCard 
            name='Avg. Oerder Value' 
            icon={ShoppingCart} 
            value={salesStats.avargeOrderValue} 
            color="#10B981" // Warna hijau untuk rata-rata nilai pesanan
          />
          
          {/* Kartu statistik tingkat konversi */}
          <StatCard 
            name='Conversion Rate' 
            icon={TrendingUp} 
            value={salesStats.conversienRate} 
            color="#F59E0B" // Warna kuning untuk tingkat konversi
          />
          
          {/* Kartu statistik pertumbuhan penjualan */}
          <StatCard 
            name='Sales Growth' 
            icon={CreditCard} 
            value={salesStats.salesGrowth} 
            color="#EF4444" // Warna merah untuk pertumbuhan penjualan
          />
        </motion.div>

        {/* Grafik overview penjualan */}
        <SaleOverviewChart />

        {/* Bagian untuk menampilkan grafik lainnya dalam grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
            {/* Grafik tren penjualan harian */}
            <DailySalesTrend />
            
            {/* Grafik kategori penjualan */}
            <SalesCategoryChart />
        </div>

      </main>
    </div>
  )
}

export default Sales // Mengekspor komponen Sales untuk digunakan di bagian lain aplikasi
