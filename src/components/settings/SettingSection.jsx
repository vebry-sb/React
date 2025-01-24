import React from 'react';
import { motion } from 'framer-motion';

const SettingSection = ({ icon: Icon, title, children }) => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex items-center mb-4">
        {Icon && <Icon className="text-indigo-600 mr-4" size="24" />}
        <h2 className="text-xl font-semibold text-gray-100">{title}</h2>
      </div>
      <div>{children}</div>
    </motion.div>
  );
};

export default SettingSection;
