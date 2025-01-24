import React from 'react';
import SettingSection from './SettingSection';
import { User } from 'lucide-react';

const Profile = () => {
  return (
    <SettingSection icon={User} title="Profile">
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img 
          src="profile.jpg" 
          alt="Profile" 
          className="w-24 h-24 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-100">Blablabla</h3>
          <p className="text-gray-400">Email: blablabla@gmail.com</p>
        </div>
      </div>
      <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto' >
            Edit Profile
        </button>
    </SettingSection>
  );
};

export default Profile;



