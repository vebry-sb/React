import Header from "../components/common/Header"; 
import { motion } from "framer-motion"

import { CircleCheckBig, Clock1, DollarSign, ShoppingBag, Timer } from "lucide-react";
import StatCard from "../components/common/StatCard";
import OrderListTable from "../components/order/OrderListTable";
import DailyOrderChart from "../components/order/DailyOrderChart";
import OrderStatusDistribution from "../components/order/OrderStatusDistribution";

// Data statistik pesanan yang akan ditampilkan
const orderStats = {
  totalOrders: 1485,  // Total pesanan
  pendingOrders: 84,  // Pesanan yang masih tertunda
  completedOrders: 1401,  // Pesanan yang telah selesai
  totalRevenue: 124956,  // Total pendapatan
};

const OrdersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      {/* Header yang menampilkan judul halaman "Orders" */}
      <Header title="Orders"/>
      
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Bagian kartu statistik yang akan menampilkan informasi pesanan */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-8"
          initial={{ opacity: 0, y: 20 }} // Menetapkan animasi awal dengan opacity rendah dan posisi bergeser
          animate={{ opacity: 1, y: 0 }} // Mengubah opacity menjadi penuh dan posisi kembali ke normal
          transition={{ duration: 1 }} // Durasi animasi 1 detik
        >
          {/* Kartu statistik: Total Pesanan */}
          <StatCard
            name="Total Orders"
            icon={ShoppingBag}  // Ikon yang digunakan adalah ShoppingBag
            value={orderStats.totalOrders.toLocaleString()}  // Menampilkan jumlah total pesanan dengan format angka
            color="#6366F1"  // Warna ikon dan kartu
          />
          
          {/* Kartu statistik: Pesanan Tertunda */}
          <StatCard
            name="Pending Orders"
            icon={Clock1}  // Ikon yang digunakan adalah Clock1
            value={orderStats.pendingOrders}  // Menampilkan jumlah pesanan yang tertunda
            color="#10B981"  // Warna ikon dan kartu
          />
          
          {/* Kartu statistik: Pesanan Selesai */}
          <StatCard
            name="Completed Orders"
            icon={CircleCheckBig}  // Ikon yang digunakan adalah CircleCheckBig
            value={orderStats.completedOrders.toLocaleString()}  // Menampilkan jumlah pesanan yang selesai dengan format angka
            color="#F59E0B"  // Warna ikon dan kartu
          />
          
          {/* Kartu statistik: Total Pendapatan */}
          <StatCard
            name="Total Revenue"
            icon={DollarSign}  // Ikon yang digunakan adalah DollarSign
            value={orderStats.totalRevenue.toLocaleString()}  // Menampilkan total pendapatan dengan format angka
            color="#EF4444"  // Warna ikon dan kartu
          />
        </motion.div>

        {/* Menampilkan Tabel Daftar Pesanan */}
        <OrderListTable />

        {/* Menampilkan Grafik dalam dua kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Grafik Pertumbuhan Pesanan Harian */}
          <DailyOrderChart />
          
          {/* Grafik Distribusi Status Pesanan */}
          <OrderStatusDistribution />
        </div>
      </main>
    </div>
  )
}

export default OrdersPage
