import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, TrendingUp, UserCheck } from 'lucide-react';

const INSIGHTS = [
    {
        icon: <TrendingUp aria-hidden="true" />,
        color: "text-green-500",
        insight: "Revenue is up 15% compared to last month, driven primarily by a successful email campaign.",
    },
    {
        icon: <TrendingDown aria-hidden="true" />,
        color: "text-red-500",
        insight: "Churn rate has increased by 5% this month due to product dissatisfaction.",
    },
    {
        icon: <UserCheck aria-hidden="true" />,
        color: "text-blue-500",
        insight: "Customer retention is up 10% after implementing a new loyalty program.",
    },
    {
        icon: <DollarSign aria-hidden="true" />,
        color: "text-yellow-500",
        insight: "Average transaction value has risen by 8% thanks to product bundling.",
    },
];

const InsightItem = ({ icon, color, insight }) => (
    <motion.div
        className="flex items-center space-x-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
    >
        <div
            className={`p-2 rounded-full ${color} bg-opacity-20`}
            aria-label="Insight Icon"
            title={insight}
        >
            {icon}
        </div>
        <p className="text-gray-300">{insight}</p>
    </motion.div>
);

const AIPoweredInsights = () => {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
            <h2 className="text-xl font-semibold text-gray-100 mb-4">AI-Powered Insights</h2>
            <div className="space-y-4">
                {INSIGHTS.map((item, index) => (
                    <InsightItem
                        key={`${index}-${item.color}`}
                        icon={item.icon}
                        color={item.color}
                        insight={item.insight}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default AIPoweredInsights;
