import { BarChart2, DollarSign, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users, Menu } from 'lucide-react'; // Mengimpor ikon dari lucide-react
import { AnimatePresence, motion } from 'framer-motion'; // Mengimpor animasi dari framer-motion
import React, { useState } from 'react'; // Mengimpor React dan useState hook
import { Link } from 'react-router-dom'; // Mengimpor Link untuk routing

// Menyusun daftar item yang akan ditampilkan di sidebar
const SIDEBAR_ITEMS = [
  {
    name: 'Overview',
    Icon: BarChart2, // Ikon yang digunakan untuk Overview
    color: '#6366f1', // Warna ikon
    path: '/', // Path rute untuk Overview
  },
  {
    name: 'Products',
    Icon: ShoppingBag,
    color: '#8B5CF6',
    path: '/product',
  },
  {
    name: 'Users',
    Icon: Users,
    color: '#EC4899',
    path: '/users',
  },
  {
    name: 'Sales',
    Icon: DollarSign,
    color: '#10B981',
    path: '/sales',
  },
  {
    name: 'Orders',
    Icon: ShoppingCart,
    color: '#F59E08',
    path: '/orders',
  },
  {
    name: 'Analytics',
    Icon: TrendingUp,
    color: '#3B82F6',
    path: '/analytics',
  },
  {
    name: 'Settings',
    Icon: Settings,
    color: '#6EE7B7',
    path: '/settings',
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State untuk mengontrol apakah sidebar terbuka atau tertutup

  return (
    // Sidebar container dengan animasi transisi untuk lebar sidebar (w-64 untuk terbuka dan w-16 untuk tertutup)
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }} // Animasi lebar sidebar
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        {/* Tombol untuk toggle (membuka/menutup) sidebar */}
        <motion.button
          whileHover={{ scale: 1.1 }} // Animasi saat hover
          whileTap={{ scale: 0.9 }} // Animasi saat di-click
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} // Toggle state sidebar
          className="p-2 rounded-full hover:bg-gray-700 transition max-w-fit"
        >
          <Menu size={24} /> {/* Ikon Menu dari lucide-react */}
        </motion.button>

        {/* Navigation Items */}
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.path} to={item.path}> {/* Routing ke halaman yang sesuai */}
              <motion.div
                whileHover={{ scale: 1.05 }} // Animasi saat hover pada item
                whileTap={{ scale: 0.95 }} // Animasi saat di-click pada item
                className="flex items-center p-4 text-sm rounded-lg hover:bg-gray-700 transition-colors mb-2"
              >
                <item.Icon size={20} style={{ color: item.color, minWidth:"20px" }} /> {/* Menampilkan ikon dengan warna tertentu */}
                
                <AnimatePresence>
                  {/* Animasi untuk nama item yang hanya ditampilkan jika sidebar terbuka */}
                  {isSidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }} // Animasi masuk (masih tersembunyi)
                      animate={{ opacity: 1, width: 'auto' }} // Animasi keluar (terlihat sepenuhnya)
                      exit={{ opacity: 0, width: 0 }} // Animasi keluar (tersembunyi)
                      transition={{ duration: 0.2, delay: 0.3 }} // Durasi dan delay animasi
                      className="ml-4 whitespace-nowrap"
                    >
                      {item.name} {/* Nama item sidebar */}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
