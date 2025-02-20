import React from 'react'

const ToggleSwitch = ({Label, isOn, onToggle}) => {
  return (
    <div className='flex items-center justify-between'>
        <span className='text-gray-300'>{label}</span>
        <button
            className={`
                relative line-flex items-center h-6 rounded-full w-11 transition-color focus:outline-none ${isOn ? "bg-indigo-600" : "bg-gray-600"}
                `}
                onClick={onToggle}
        >
            <span 
                className={`inline-block size-4 transform transition-transform bg-white rounded-full ${inOn ? "translate-x-6" : "translate-x-1"}`}
            />
        </button>
    </div>
  )
}

export default ToggleSwitch