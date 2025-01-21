import { useState } from 'react'
import { motion } from 'framer-motion';

const userData = [
    {id: 1, name: "john Doe", email: "johndoe@gmail.com", role:"Customer", status:"Active"},
    {id: 2, name: "Yono", email: "yono@gmail.com", role:"Admin", status:"Active"},
    {id: 3, name: "Kenta", email: "kenta@gmail.com", role:"Customer", status:"Active"},
    {id: 4, name: "Paijo", email: "paijo@gmail.com", role:"Customer", status:"Active"},
    {id: 5, name: "Dumbb", email: "dumbb@gmail.com", role:"Moderator", status:"Active"},
    {id: 6, name: "Cena", email: "cena@gmail.com", role:"Customer", status:"Inactive"},
    {id: 7, name: "Buckk", email: "buckk@gmail.com", role:"Customer", status:"Active"},
    {id: 8, name: "Duckk", email: "duckk@gmail.com", role:"Customer", status:"Active"},
    {id: 9, name: "Jane", email: "jane@gmail.com", role:"Customer", status:"Active"},
    {id: 10, name: "Ralph", email: "ralph@gmail.com", role:"Customer", status:"Active"},
]

const UsersTable = () => {
    const [searhTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(userData);
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = userData.filter(
            (user) => user.name.toLowerCase().includes(term) || user.email.toLocaleLowerCase().includes(term)
        );
        setFilteredUsers(filtered);
    }

  return (
    <motion.div 
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'

        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay : 0.2}}
    >
        <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-semibold text-gray-100'>Users</h2>
            <div className='relative'>
                <input 
                    type="text"
                    placeholder='Search users...'
                    className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={searhTerm}
                    onChange={handleSearch}
                />
                <search className='absolute left-3 top-2.5 text-gray-400' size={18}/>
            </div>
        </div>

        <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-700'>
                <thead>
                    <tr>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Name</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Email</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Role</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Status</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Action</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-700'>
                    {filteredUsers.map((user) =>
                    <motion.tr key={user.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.3}}
                    >
                        <td className='px-6 py-4 whitespace-nowrap'>
                            <div className='flex items-center'>
                                <div className='flex-shrink-0 h-10 w-10'>
                                    <div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
                                        {user.name.charAt(0)}
                                    </div>
                                    <div className='ml-4'>
                                        <div className='text-sm font-medium text-gray-100'>{user.name}</div>
                                    </div>
                                </div>
                            </div>
                        </td>


                        
                        
                    </motion.tr>
                    
                    )}

                </tbody>
            </table>
        </div>

    </motion.div>
  )
}

export default UsersTable