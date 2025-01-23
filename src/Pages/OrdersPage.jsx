import Header from "../components/common/Header"; 
import { motion } from "framer-motion"

import { CircleCheckBig, Clock1, DollarSign, ShoppingBag, Timer } from "lucide-react";
import StatCard from "../components/common/StatCard";
import OrderListTable from "../components/order/OrderListTable";
import DailyOrderChart from "../components/order/DailyOrderChart";
import OrderStatusDistribution from "../components/order/OrderStatusDistribution";


const orderStats = {
  totalOrders: 1485, 
  pendingOrders: 84, 
  completedOrders: 1401, 
  totalRevenue: 124956, 
};

const OrdersPage = () => {
  return (
    
    <div className="flex-1 overflow-auto relative z-10">
      {/* Header dengan judul "Users" */}
      <Header title="Orders"/>
      
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Menampilkan kartu statistik pengguna */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-8"
          initial={{ opacity: 0, y: 20 }} // Menyediakan animasi ketika halaman pertama kali dimuat
          animate={{ opacity: 1, y: 0 }} // Animasi untuk perubahan opacity dan posisi
          transition={{ duration: 1 }} // Durasi animasi
        >
          {/* Kartu statistik: Total Pengguna */}

          <StatCard
            name="Total Orders"
            icon={ShoppingBag}
            value={orderStats.totalOrders.toLocaleString()}
            color="#6366F1"
          />
          {/* Kartu statistik: Pengguna Baru Hari Ini */}
          <StatCard
            name="Pending Orders"
            icon={Clock1}
            value={orderStats.pendingOrders}
            color="#10B981"
          />
          {/* Kartu statistik: Pengguna Aktif */}
          <StatCard
            name="Completed Orders"
            icon={CircleCheckBig}
            value={orderStats.completedOrders.toLocaleString()}
            color="#F59E0B"
          />
          {/* Kartu statistik: Tingkat Churn */}
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={orderStats.totalRevenue.toLocaleString()}
            color="#EF4444"
          />
        </motion.div>

        {/* Menampilkan Tabel Pengguna */}
        <OrderListTable />

        {/* Menampilkan Grafik Pengguna */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Grafik Pertumbuhan Pengguna */}
          <DailyOrderChart />
          <OrderStatusDistribution />
        </div>
      </main>
    </div>
  )
}

export default OrdersPage