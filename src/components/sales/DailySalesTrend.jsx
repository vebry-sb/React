import { motion } from "framer-motion"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const dailySalesData = [
    { day: "Mon", sales: 120 },
    { day: "Tue", sales: 150 },
    { day: "Wed", sales: 200 },
    { day: "Thu", sales: 180 },
    { day: "Fri", sales: 220 },
    { day: "Sat", sales: 170 },
    { day: "Sun", sales: 190 },
  ];

const DailySalesTrend = () => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'

    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{ delay: 0.4}}
    >
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Daily Sales Trend</h2>

        <div style={{ width: "100%", height: 300}}>
            <ResponsiveContainer>
                <BarChart data={dailySalesData}>
                    <CartesianGrid strokeDasharray='3 3' stroke="#374151" />
                    <XAxis dataKey='day' stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColor: "#4B5563",
                        }}
                        itemStyle={{ color:"#E5E7EB" }}
                    />
                    <Bar dataKey='sales' fill="#10b981" />
                </BarChart>
            </ResponsiveContainer>
        </div>

    </motion.div>
  )
}

export default DailySalesTrend