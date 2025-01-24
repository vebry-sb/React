import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, DollarSign, Eye, ShoppingBag, User,} from "lucide-react";

const analyticData = [
  { name: "Revenue", value: "$194,956", change: 12.5, icon: DollarSign },
  { name: "Users", value: "78,685", change: 8.3, icon: User }, 
  { name: "Orders", value: "9,486", change: -4.3, icon: ShoppingBag },
  { name: "Page Views", value: "1,542,683", change: 18.3, icon: Eye },
];

const AnalyticCard = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {analyticData.map((item, index) => (
        <motion.div
          key={index} // Tambahkan key unik
          className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
          whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-400">{item.name}</h3>
              <p className="mt-1 text-xl font-semibold text-gray-100">
                {item.value}
              </p>
            </div>
            <div
              className={`p-3 rounded-full bg-opacity-20 ${
                item.change >= 0 ? "bg-green-500" : "bg-red-500"
              }`}
            >
              <item.icon
                className="text-white w-6 h-6" 
              />
            </div>
          </div>
          <div
            className={`mt-4 flex items-center ${
              item.change >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {item.change >= 0 ? (
              <ArrowUpRight size="20" />
            ) : (
              <ArrowDownRight size="20" />
            )}
            <span className="ml-1 text-sm font-medium">
              {Math.abs(item.change)}%
            </span>
            <span className="ml-2 text-sm text-gray-400">vs last period</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnalyticCard;
