import React from 'react'
import { motion } from "framer-motion";
import StatCard from '../components/common/StatCard';
import { UserCheck2, UserPlus2, Users2, UserX2 } from 'lucide-react';
import UsersTable from '../components/Users/UsersTable';
import Header from '../components/common/Header';
import UserGrowth from '../components/Users/UserGrowthChart';
import UserActivityHeatmap from '../components/Users/UserActivityHeatmap';
import UserDemographics from '../components/Users/UserDemographicsChart';

const userStats = {
  totalUsers : 5681561,
  newUsersToday : 243,
  activeUsers : 69486,
  churnRate : "3.56%",

}
  
const UsersPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Users' />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          >
          <StatCard 
          name='Total Users' 
          icon={Users2} 
          value={UserStats.totalUsers.toLocaleString()}
          color='#6366F1' />

          <StatCard
          name='New Users Today'
          icon={UserPlus2}
          value={userPlus.newUsersToday}
          color='#10B981' />
          
          <StatCard
          name='Active Users'
          icon={UserCheck2}
          value={userStats.activeUsers.toLocaleString()}
          color='#10B981' />

          <StatCard
          name='Churn Rate'
          icon={UserX2}
          value={userStats.churnRate}
          color='#F59E08' />

        </motion.div>

        <UsersTable />

        {/* USER CHART */}
        <div className='grid grod-cos-1 lg:grid-cols-2 gap-6 mt-8'>
        
        <UserGrowth />
        <UserActivityHeatmap />
        <UserDemographics />

        </div>

      </main>
    </div>
  )
}

export default UsersPage