import { Routes, Route } from 'react-router-dom'; // Mengimpor Routes dan Route dari react-router-dom
import Sidebar from './components/common/Sidebar'; // Mengimpor Sidebar
import OverviewPage from './pages/OverviewPage'; // Mengimpor halaman Overview
import ProductsPage from './pages/ProductsPage'; // Mengimpor halaman Produk
import UsersPage from './pages/UsersPage';
import SalesPage from './pages/SalesPage'; // Mengimpor halaman Penjualan
import OrdersPage from './pages/OrdersPage'; // Mengimpor halaman Pesanan
import AnalyticsPage from './pages/AnalyticsPage'; // Mengimpor halaman Analitik
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    // Wrapper utama aplikasi dengan flexbox untuk mengatur layout halaman dan memastikan aplikasi mengisi layar penuh
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      
      {/* Background */}
      <div className='fixed inset-0 z-10'>
        {/* Layer latar belakang gradien dari abu-abu gelap ke abu-abu lebih terang */}
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'></div>
        {/* Layer latar belakang blur */}
        <div className='absolute inset-0 backdrop-blur-sm'></div>
      </div>

      {/* Sidebar */}
      <Sidebar />  {/* Sidebar ditampilkan di sebelah kiri */}
      
      {/* Routing: Mengatur rute-rute untuk halaman-halaman yang berbeda */}
      <Routes>
        {/* Rute untuk halaman utama atau overview */}
        <Route path="/" element={<OverviewPage />} />
        
        {/* Rute untuk halaman produk */}
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path='/sales' element={<SalesPage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/analytics' element={<AnalyticsPage />} />
        
      </Routes>

    </div>
  );
}

export default App; // Mengekspor komponen App untuk digunakan di tempat lain
