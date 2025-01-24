import React from 'react'
import Header from "../components/common/Header"
import AnalyticCard from '../components/analyticts/AnalyticCard'
import RevenueCHart from '../components/analyticts/RevenueCHart'
import ChannelPerformence from '../components/analyticts/ChannelPerformence'
import CustomerSegmentation from '../components/analyticts/CustomerSegmentation'
import ProductPerformence from '../components/analyticts/ProductPerformence'
import UserRetention from '../components/analyticts/UserRetention'

const AnalyticsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
      <Header title="Analytics"/>

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <AnalyticCard />
        <RevenueCHart />

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>

        <ChannelPerformence />
        <ProductPerformence />
        <UserRetention />
        <CustomerSegmentation />
        
          

      </div>

      </main>
    </div>
  )
}

export default AnalyticsPage