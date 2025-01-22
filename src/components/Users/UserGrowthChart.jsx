import { motion } from 'framer-motion'; // Animasi
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; // Grafik

// Data pengguna per bulan
const usersData = [
  { name: 'Jan', users: 1200 },
  { name: 'Feb', users: 1350 },
  { name: 'Mar', users: 1450 },
  { name: 'Apr', users: 1320 },
  { name: 'May', users: 1280 },
  { name: 'Jun', users: 1400 },
  { name: 'Jul', users: 1500 },
  { name: 'Aug', users: 1650 },
  { name: 'Sep', users: 1400 },
  { name: 'Oct', users: 1300 },
  { name: 'Nov', users: 1350 },
  { name: 'Dec', users: 1442 },
];

const UserGrowthChart = () => {
  return (
    <motion.div
      className="relative bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }} // Animasi awal (opacity 0 dan y = 20)
      animate={{ opacity: 1, y: 0 }} // Animasi akhir (opacity 1 dan y = 0)
      transition={{ delay: 0.2 }} // Penundaan animasi selama 0.2 detik
    >
      <h2 className="text-xl font-medium mb-4 text-gray-100">Users Growth</h2>

      <div className="h-80">
        {/* Container responsif untuk grafik */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={usersData}>
            {/* Grid kartesian untuk grafik */}
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            {/* Sumbu X dengan data nama bulan */}
            <XAxis dataKey="name" stroke="#9CA3AF" />
            {/* Sumbu Y */}
            <YAxis stroke="#9CA3AF" />
            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4B5563',
              }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            {/* Garis grafik */}
            <Line
              type="monotone"
              dataKey="users"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: '#6366F1', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserGrowthChart;
