import { Bell } from 'lucide-react';
import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import SettingSection from './SettingSection'; // Pastikan komponen SettingSection ada

const Notifications = () => {
  // Menggunakan useState yang benar
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: true,
  });

  // Fungsi untuk menangani perubahan status toggle
  const handleToggle = (type) => {
    setNotifications((prevState) => ({
      ...prevState,
      [type]: !prevState[type], // Membalik status untuk jenis notifikasi yang dipilih
    }));
  };

  return (
    <SettingSection icon={Bell} title="Notification">
      <ToggleSwitch 
        Label="Push Notifications"
        isOn={notifications.push}
        onToggle={() => handleToggle('push')} // Panggil handleToggle dengan jenis 'push'
      />
      <ToggleSwitch 
        Label="Email Notifications"
        isOn={notifications.email}
        onToggle={() => handleToggle('email')} // Panggil handleToggle dengan jenis 'email'
      />
      <ToggleSwitch 
        Label="SMS notifications"
        isOn={notifications.sms}
        onToggle={() => handleToggle('sms')} // Panggil handleToggle dengan jenis 'sms'
      />
    </SettingSection>
  );
};

export default Notifications;
