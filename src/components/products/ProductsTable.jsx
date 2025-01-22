import { useState } from 'react'; // Mengimpor useState untuk menangani state pada komponen
import { motion } from 'framer-motion'; // Mengimpor motion dari framer-motion untuk animasi
import { Edit, Search, Trash } from 'lucide-react'; // Mengimpor ikon Edit, Search, dan Trash dari lucide-react

// Data produk awal
const PRODUCT_DATA = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 78.99,
    stock: 12,
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Leather Wallet',
    price: 98.35,
    stock: 20,
    category: 'Accessories',
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: 150,
    stock: 30,
    category: 'Electronics',
  },
  {
    id: 4,
    name: 'Yoga Mat',
    price: 25.6,
    stock: 40,
    category: 'Fitness',
  },
  {
    id: 5,
    name: 'Coffee Maker',
    price: 80.0,
    stock: 50,
    category: 'Home',
  },
  // Additional data starting from ID 11 to ID 20
  {
    id: 11,
    name: 'Bluetooth Speaker',
    price: 59.99,
    stock: 15,
    category: 'Electronics',
  },
  {
    id: 12,
    name: 'Running Shoes',
    price: 120.0,
    stock: 25,
    category: 'Fitness',
  },
  {
    id: 13,
    name: 'Desk Lamp',
    price: 45.5,
    stock: 30,
    category: 'Home',
  },
  {
    id: 14,
    name: 'Smartphone Stand',
    price: 19.99,
    stock: 100,
    category: 'Accessories',
  },
  {
    id: 15,
    name: 'Ergonomic Chair',
    price: 250.0,
    stock: 10,
    category: 'Furniture',
  },
  {
    id: 16,
    name: 'Electric Kettle',
    price: 35.99,
    stock: 70,
    category: 'Home',
  },
  {
    id: 17,
    name: 'Air Purifier',
    price: 199.99,
    stock: 5,
    category: 'Home',
  },
  {
    id: 18,
    name: 'Outdoor Tent',
    price: 220.0,
    stock: 12,
    category: 'Outdoor',
  },
  {
    id: 19,
    name: 'Portable Charger',
    price: 29.99,
    stock: 40,
    category: 'Electronics',
  },
  {
    id: 20,
    name: 'Smart Thermostat',
    price: 150.0,
    stock: 15,
    category: 'Home',
  },
];

// Komponen utama ProductTable
const ProductTable = () => {
  // State untuk menangani input pencarian
  const [search, setSearch] = useState('');
  // State untuk produk yang difilter berdasarkan input pencarian
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

  // Fungsi untuk menangani perubahan input pencarian
  const handleSearch = (e) => {
    setSearch(e.target.value); // Mengupdate nilai state search
    setFilteredProducts(
      PRODUCT_DATA.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    ); // Memfilter produk berdasarkan nama yang sesuai dengan input pencarian
  };

  return (
    // Wrapper utama dengan animasi
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }} // Properti awal animasi
      animate={{ opacity: 1, y: 0 }} // Properti akhir animasi
      transition={{ delay: 0.3 }} // Penundaan animasi
    >
      {/* Header bagian atas dengan pencarian */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product Table</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Products"
            aria-label="Search Products" // Properti untuk aksesibilitas
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search} // Menghubungkan input dengan state search
            onChange={handleSearch} // Menangani perubahan input pencarian
          />
          {/* Ikon pencarian */}
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Tabel produk */}
      <div className='overflow-auto max-h-96'>
        <table className="min-w-full divide-y divide-gray-700">
          {/* Header tabel */}
          <thead>
            <tr className="text-left text-gray-100">
              <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">
                Product Name
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">
                Price
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">
                Stock
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">
                Category
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">
                Action
              </th>
            </tr>
          </thead>

          {/* Body tabel */}
          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id} // Memberikan key unik untuk setiap baris
                className="hover:bg-gray-700 text-gray-300 transition-colors" // Warna berubah saat hover
                initial={{ opacity: 0, y: 20 }} // Properti awal animasi untuk setiap baris
                animate={{ opacity: 1, y: 0 }} // Properti akhir animasi
                exit={{ opacity: 0, y: -20 }} // Properti animasi saat elemen keluar
                transition={{ delay: 0.1 }} // Penundaan animasi
              >
                {/* Kolom nama produk */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.name}
                </td>
                {/* Kolom harga produk */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  ${product.price.toFixed(2)} {/* Menampilkan harga dengan 2 desimal */}
                </td>
                {/* Kolom stok produk */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.stock}
                </td>
                {/* Kolom kategori produk */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.category}
                </td>
                {/* Kolom aksi */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {/* Tombol edit */}
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>
                  {/* Tombol hapus */}
                  <button className="text-red-400 hover:text-red-300">
                    <Trash size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductTable; // Mengekspor komponen untuk digunakan di file lain
