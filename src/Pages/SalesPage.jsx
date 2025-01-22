import { motion } from 'framer-motion'
import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'
import SalesOverviewChart from '../components/overview/SalesOverviewChart';
import SalesChannelChart from '../components/overview/SalesChannelChart';
import SaleOverviewChart from '../components/sales/SaleOverviewChart';
import DailySalesTrend from '../components/sales/DailySalesTrend';
import SalesCategoryChart from '../components/sales/SalesCategoryChart';

const salesStats = {
  totalRevenue: "$1,250,000", // Total pendapatan dalam format mata uang
  avargeOrderValue: "$125.50", // Nilai rata-rata pesanan dalam format mata uang
  conversienRate: "12.5%", // Tingkat konversi dalam format persentase
  salesGrowth: "18.2%", // Pertumbuhan penjualan dalam format persentase
};


const Sales = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title ="Sales" />
      <main className='max-q-7xl mx-auto py-6 px-4 lg:px-8'>

        {/* Sales Stats */}
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'

          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}    
        >
          <StatCard 
            name='Total Revenue' 
            icon={DollarSign} 
            value={salesStats.totalRevenue} 
            color="#6366f1"
          />
          <StatCard 
            name='Avg. Oerder Value' 
            icon={ShoppingCart} 
            value={salesStats.avargeOrderValue} 
            color="#10B981"
          />
          <StatCard 
            name='Conversion Rate' 
            icon={TrendingUp} 
            value={salesStats.conversienRate} 
            color="#F59E0B"
          />
          <StatCard 
            name='Sales Growth' 
            icon={CreditCard} 
            value={salesStats.salesGrowth} 
            color="#EF4444 "
          />

        </motion.div>

        <SaleOverviewChart />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
            <DailySalesTrend />
            <SalesCategoryChart />
        </div>

      </main>
    </div>
  )
}

export default Sales