import { motion } from 'framer-motion';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';


const salesByCategory = [
    { name: "Electronics", value: 400 },
    { name: "Fashion", value: 300 },
    { name: "Home Appliances", value: 500 },
    { name: "Books", value: 200 },
    { name: "Toys", value: 350 },
    { name: "Groceries", value: 600 },
    { name: "Beauty Products", value: 450 },
];

const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#EF4444", "#3B82F6", "#A855F7", "#F43F5E"];

const SalesCategoryChart = () => {
  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'

        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{ delay: 0.3}} 
    >
        <h2 className='text-xl font-semibold text-gray-100 mb-4'>Sales by Category</h2>
        <div style={{width: "100%", height: 300}}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={salesByCategory}
                        cx='50%'
                        cy='50%'
                        outerRadius={80}
                        fill='#8884d8'
                        dataKey='value'

                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {salesByCategory.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip 
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColor: "#4B5563",
                        }}
                        itemStyle={{color: "#E5E7EB"}}
                    />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default SalesCategoryChart;
