import Header from "../components/common/Header"; // Mengimpor komponen Header untuk tampilan header halaman
import { motion } from "framer-motion"; // Mengimpor motion dari framer-motion untuk animasi
import StatCard from "../components/common/StatCard"; // Mengimpor komponen StatCard untuk menampilkan statistik pengguna
import { User2Icon, UserCheck2, UserPlus, UserX } from "lucide-react"; // Mengimpor ikon dari lucide-react untuk digunakan di kartu statistik
import UsersTable from "../components/Users/UsersTable"; // Mengimpor komponen UsersTable untuk menampilkan tabel pengguna
import UserGrowthChart from "../components/users/UserGrowthChart"; // Mengimpor komponen UserGrowthChart untuk grafik pertumbuhan pengguna
import UserActivityHeatmap from "../components/users/UserActivityHeatmap"; // Mengimpor komponen UserActivityHeatmap untuk grafik aktivitas pengguna
import UserDemographicsChart from "../components/users/UserDemographicsChart"; // Mengimpor komponen UserDemographicsChart untuk grafik demografi pengguna

// Data statistik pengguna
const userStats = {
  totalUsers: 15842, // Total penggunaa
  newUsersToday: 235, // Pengguna baru hari ini
  activeUsers: 98510, // Pengguna aktif
  churnRate: 0.0323, // Tingkat churn
};

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      {/* Header dengan judul "Users" */}
      <Header title="Users" />

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
            name="Total Users"
            icon={User2Icon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          {/* Kartu statistik: Pengguna Baru Hari Ini */}
          <StatCard
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10B981"
          />
          {/* Kartu statistik: Pengguna Aktif */}
          <StatCard
            name="Active Users"
            icon={UserCheck2}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          {/* Kartu statistik: Tingkat Churn */}
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value={`${(userStats.churnRate * 100).toFixed(2)}%`} // Mengalikan dengan 100 dan menambahkan simbol persen
            color="#EF4444"
          />
        </motion.div>

        {/* Menampilkan Tabel Pengguna */}
        <UsersTable />

        {/* Menampilkan Grafik Pengguna */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Grafik Pertumbuhan Pengguna */}
          <UserGrowthChart />
          {/* Grafik Aktivitas Pengguna */}
          <UserActivityHeatmap />
          {/* Grafik Demografi Pengguna */}
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
