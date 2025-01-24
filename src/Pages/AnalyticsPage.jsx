import React from 'react' // Mengimpor React untuk membuat komponen
import Header from "../components/common/Header" // Mengimpor komponen Header yang digunakan untuk menampilkan header halaman
import AnalyticCard from '../components/analyticts/AnalyticCard' // Mengimpor komponen AnalyticCard untuk menampilkan kartu analitik
import RevenueCHart from '../components/analyticts/RevenueCHart' // Mengimpor komponen RevenueCHart untuk menampilkan grafik pendapatan
import ChannelPerformence from '../components/analyticts/ChannelPerformence' // Mengimpor komponen ChannelPerformence untuk menampilkan performa saluran
import CustomerSegmentation from '../components/analyticts/CustomerSegmentation' // Mengimpor komponen CustomerSegmentation untuk menampilkan segmentasi pelanggan
import ProductPerformence from '../components/analyticts/ProductPerformence' // Mengimpor komponen ProductPerformence untuk menampilkan performa produk
import UserRetention from '../components/analyticts/UserRetention' // Mengimpor komponen UserRetention untuk menampilkan analitik retensi pengguna
import AIPoweredInsights from '../components/analyticts/AIPoweredInsights'

// Komponen utama untuk halaman Analytics
const AnalyticsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'> {/* Membuat div dengan latar belakang gelap untuk halaman Analytics */}
      
      <Header title="Analytics"/> {/* Menampilkan komponen Header dengan judul "Analytics" */}

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'> {/* Membuat kontainer utama untuk konten halaman dengan padding dan lebar maksimum */}
        
        <AnalyticCard /> {/* Menampilkan komponen AnalyticCard untuk menampilkan informasi analitik secara ringkas */}
        <RevenueCHart /> {/* Menampilkan grafik pendapatan */}

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'> {/* Membuat grid untuk menampilkan elemen secara responsif, satu kolom untuk ukuran kecil dan dua kolom untuk ukuran besar */}
          
          <ChannelPerformence /> {/* Menampilkan komponen ChannelPerformence untuk analitik performa saluran */}
          <ProductPerformence /> {/* Menampilkan komponen ProductPerformence untuk analitik performa produk */}
          <UserRetention /> {/* Menampilkan komponen UserRetention untuk analitik retensi pengguna */}
          <CustomerSegmentation /> {/* Menampilkan komponen CustomerSegmentation untuk segmentasi pelanggan */}
          
        </div>
        <div>
            <AIPoweredInsights />
        </div>

      </main>
    </div>
  )
}

export default AnalyticsPage; // Mengekspor komponen AnalyticsPage sebagai komponen utama
