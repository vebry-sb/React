import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/common/Header'
import Profile from '../components/settings/Profile'
import SettingSection from '../components/settings/SettingSection'


const SettingsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Settings" />

    <main className='"max-w-7xl mx-auto py-6 px-4 lg:px-8"'>
      <Profile />
      

    </main>

    </div>
  )
}

export default SettingsPage