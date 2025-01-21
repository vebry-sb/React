import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { User2Icon, UserCheck2, UserPlus, UserX } from "lucide-react";
import UsersTable from "../components/Users/UsersTable";

const userStats ={
  totalUsers: 15842,
  newUsersToday: 235,
  activeUsers: 98510,
  churnRate :3.8,
};

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title='Users'/>

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">

        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8"

          initial ={{opacity: 0, y: 20}}
          animate ={{opacity: 1, y: 0}}
          transition={{duration: 1}}
        >

        <StatCard
          name="Total Users"
          icon={User2Icon}
          value={userStats.totalUsers.toLocaleString()}
          color='#6366F1'
        />

        <StatCard
          name="New Users Today"
          icon={UserPlus}
          value={userStats.newUsersToday}
          color='#10B981'
        />

        <StatCard
          name="Active Users"
          icon={UserCheck2}
          value={userStats.activeUsers.toLocaleString()}
          color='#F59E0B'
        />

        <StatCard
          name="Churn Rate"
          icon={UserX}
          value={userStats.churnRate}
          color='#EF4444'
        />

        </motion.div>

        <UsersTable />
      </main>

    </div>
  )
}

export default UsersPage