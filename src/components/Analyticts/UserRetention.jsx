import React from 'react'
import { motion } from 'framer-motion';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';

const userRetentionData = [
    { month: "Jan", retainedUsers: 1200, newUsers: 3000, churnedUsers: 500 },
    { month: "Feb", retainedUsers: 1250, newUsers: 3100, churnedUsers: 510 },
    { month: "Mar", retainedUsers: 1300, newUsers: 3200, churnedUsers: 520 },
    { month: "Apr", retainedUsers: 1350, newUsers: 3300, churnedUsers: 530 },
    { month: "May", retainedUsers: 1400, newUsers: 3400, churnedUsers: 540 },
    { month: "Jun", retainedUsers: 1450, newUsers: 3500, churnedUsers: 550 },
    { month: "Jul", retainedUsers: 1500, newUsers: 3600, churnedUsers: 560 },
    { month: "Aug", retainedUsers: 1550, newUsers: 3700, churnedUsers: 570 },
    { month: "Sep", retainedUsers: 1600, newUsers: 3800, churnedUsers: 580 },
    { month: "Oct", retainedUsers: 1650, newUsers: 3900, churnedUsers: 590 },
    { month: "Nov", retainedUsers: 1700, newUsers: 4000, churnedUsers: 600 },
    { month: "Dec", retainedUsers: 1750, newUsers: 4100, churnedUsers: 610 },
];


const linesData = [
    { key: "retainedUsers", color: "#6366F1" }, // Blue
    { key: "newUsers", color: "#FF5733" }, // Red
    { key: "churnedUsers", color: "#00FF9C" }, // Green
];

const UserRetention = () => {
  return (
    <motion.div
      className="relative bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">User Retention</h2>
    
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={userRetentionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4B5563',
              }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Legend />
            
            {/* Dynamically render lines for each key-value pair */}
            {linesData.map(({ key, color }) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={color}
                strokeWidth={3}
                dot={{ fill: color, strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, strokeWidth: 2 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default UserRetention;
