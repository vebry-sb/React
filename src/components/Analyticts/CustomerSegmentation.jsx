import React from 'react';
import { motion } from 'framer-motion';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';

const CUSTOMERSEGMENTATIONDATA = [
    { segment: "Young", male: 500, female: 600, total: 1100 },
    { segment: "Young Adult", male: 800, female: 750, total: 1550 },
    { segment: "Middle-Aged", male: 600, female: 650, total: 1250 },
    { segment: "Older Adults", male: 400, female: 450, total: 850 },
    { segment: "Seniors", male: 300, female: 350, total: 650 },
];

const CustomerSegmentation = () => {
  return (
    <motion.div
        className="relative bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
    >
        <h2 className='text-xl font-semibold text-gray-100'>Customer Segmentation</h2>

        <div>
            <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={CUSTOMERSEGMENTATIONDATA}>
                    <PolarGrid stroke='#374151'/>
                    <PolarAngleAxis dataKey="segment" stroke='#9CA3AF'/>
                    <PolarRadiusAxis angle={30} domain={[0, 1500]} stroke='#9CA3AF'/>
                    
                    <Radar name="Male" dataKey="male" stroke="#6366F1" fill="#6366F1" fillOpacity={0.6} />
                    <Radar name="Female" dataKey="female" stroke="#F97316" fill="#F97316" fillOpacity={0.6} />
                    <Radar name="Total" dataKey="total" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />

                    <Legend />
                    <Tooltip 
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)", 
                            borderColor: "#4B5563"
                        }}
                        itemStyle={{ color: "#E5E7EB" }}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  );
}

export default CustomerSegmentation;
