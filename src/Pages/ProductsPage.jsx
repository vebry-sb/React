import Header from "../components/common/Header"; // Mengimpor komponen Header
import { motion } from "framer-motion"; // Mengimpor motion dari framer-motion untuk animasi
import StatCard from "../components/common/StatCard"; // Mengimpor komponen untuk menampilkan statistik
import { DollarSign, Package, TrendingUp, TriangleAlert } from "lucide-react"; // Mengimpor ikon dari lucide-react
import ProductTable from "../components/products/ProductsTable"; // Mengimpor tabel produk
import SalesTrendChart from "../components/products/SalesTrendChart"; // Mengimpor grafik tren penjualan
import CategoryDistributionChart from "../components/products/CategoryDistributionChart"; // Mengimpor grafik distribusi kategori produk

// Halaman untuk melihat produk
const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Product View" /> {/* Menampilkan header dengan judul 'Product View' */}

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Statistik Kartu */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }} // Animasi awal: opacity 0 dan y = 20
          animate={{ opacity: 1, y: 0 }} // Animasi akhir: opacity 1 dan y = 0
          transition={{ duration: 1 }} // Durasi animasi 1 detik
        >
          {/* Kartu Statistik */}
          <StatCard
            name="Total Products" // Nama statistik
            icon={Package} // Ikon yang digunakan
            value="1234" // Nilai statistik
            color="#6366F1" // Warna ikon
          />
          <StatCard
            name="Top Selling Product"
            icon={TrendingUp}
            value="69"
            color="#10B981"
          />
          <StatCard
            name="Low Stock Products"
            icon={TriangleAlert}
            value="12"
            color="#F59E08"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value="$84,515"
            color="#EC4899"
          />
        </motion.div>

        {/* Tabel Produk */}
        <ProductTable /> {/* Menampilkan tabel produk */}

        {/* Grafik Tren Penjualan dan Distribusi Kategori */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesTrendChart /> {/* Grafik tren penjualan */}
          <CategoryDistributionChart /> {/* Grafik distribusi kategori produk */}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage; // Menyediakan komponen ini untuk digunakan di tempat lain