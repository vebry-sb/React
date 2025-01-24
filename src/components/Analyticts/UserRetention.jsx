import React from 'react'
import { motion } from 'framer-motion';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';

// Sample data for user retention, including retained, new, and churned users per month
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


// Configuration for line colors
const linesData = [
    { key: "retainedUsers", color: "#6366F1" }, // Blue for retained users
    { key: "newUsers", color: "#FF5733" }, // Red for new users
    { key: "churnedUsers", color: "#00FF9C" }, // Green for churned users
];

const UserRetention = () => {
  return (
    <motion.div
      className="relative bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Final animation state
      transition={{ delay: 0.2 }} // Animation delay
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">User Retention</h2>
    
      <div className="h-80">
        {/* Responsive container for the chart */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={userRetentionData}>
            {/* Cartesian grid lines */}
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            {/* X and Y axes */}
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            {/* Tooltip to show data on hover */}
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4B5563',
              }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            {/* Legend to explain chart colors */}
            <Legend />
            
            {/* Dynamically rendering the lines for retained, new, and churned users */}
            {linesData.map(({ key, color }) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={color}
                strokeWidth={3}
                dot={{ fill: color, strokeWidth: 2, r: 6 }} // Custom styling for dots
                activeDot={{ r: 8, strokeWidth: 2 }} // Styling for active dots
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default UserRetention;
