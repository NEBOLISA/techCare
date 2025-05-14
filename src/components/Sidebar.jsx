import React from 'react'
import { IoClose } from 'react-icons/io5'
import logo from '../assets/Logo.svg'
const Sidebar = ({ setIsSidebarOpen, isSidebarOpen, home, patients, calendar, message, transactions, settings, more, activeTab, handleTabClick }) => {

  
    
  return (
    <div
      className={`${
        isSidebarOpen
          ? 'opacity-100 visible  transition-opacity duration-300 ease-in-out'
          : 'opacity-0 invisible   transition-opacity duration-300 ease-in-out'
      } bg-black/50 transition-all duration-400 ease-in-out absolute top-0 left-0 bottom-0  w-full h-screen flex justify-end`}
    >
      <div className='fixed top-0  transition-all duration-300 ease-in-out left-0 w-2/3 h-screen bg-white shadow-lg p-4'>
        <IoClose
          onClick={() => {
            setIsSidebarOpen(false)
          }}
          className='absolute top-4 right-4 w-7 h-7'
        />
        <img src={logo} alt='appLogo'  className='sm:w-40 w-29' />
        <ul className='flex gap-8 flex-col mt-10'>
          <li
            onClick={() => handleTabClick('overview')}
            className={`${
              activeTab === 'overview'
                ? 'bg-[#01F0D0] hover:opacity-100 transition-opacity duration-[400ms] ease-in-out '
                : ''
            } text-black px-3 py-2 rounded-full cursor-pointer hover:opacity-65 sm:text-lg text-md font-bold flex items-center'
                        `}
          >
            <img
              src={home}
              alt='homeIcon'
              
              className='w-6 h-6  inline-block sm:mr-6 mr-3'
            />
            Overview
          </li>
          <li
            onClick={() => handleTabClick('patients')}
            className={`${
              activeTab === 'patients'
                ? 'bg-[#01F0D0] hover:opacity-100 transition-opacity duration-[400ms] ease-in-out'
                : ''
            } px-3 py-2 rounded-full text-black cursor-pointer hover:opacity-65 sm:text-lg text-md font-bold flex items-center'
                        `}
          >
            <img
              src={patients}
              alt='patientsIcon'
              className='w-6 h-6  inline-block sm:mr-6 mr-3'
            />
            Patients
          </li>
          <li
            onClick={() => handleTabClick('schedule')}
            className={`${
              activeTab === 'schedule'
                ? 'bg-[#01F0D0] hover:opacity-100 transition-opacity duration-[400ms] ease-in-out'
                : ''
            } text-black px-3 py-2 rounded-full cursor-pointer hover:opacity-65 sm:text-lg text-md font-bold flex items-center`}
          >
            <img
              src={calendar}
              alt='calendarIcon'
              
              className='w-6 h-6  inline-block sm:mr-6 mr-3'
            />
            Schedule
          </li>
          <li
            onClick={() => handleTabClick('message')}
            className={`${
              activeTab === 'message'
                ? 'bg-[#01F0D0] hover:opacity-100 transition-opacity duration-[400ms] ease-in-out'
                : ''
            } text-black px-3 py-2 rounded-full cursor-pointer hover:opacity-65 sm:text-lg text-md font-bold flex items-center`}
          >
            <img
              src={message}
              alt='messageIcon'
            
              className='w-6 h-6  inline-block sm:mr-6 mr-3'
            />
            Message
          </li>
          <li
            onClick={() => handleTabClick('transactions')}
            className={`${
              activeTab === 'transactions'
                ? 'bg-[#01F0D0] hover:opacity-100 transition-opacity duration-[400ms] ease-in-out'
                : ''
            } text-black px-3 py-2 rounded-full cursor-pointer hover:opacity-65 sm:text-lg text-md font-bold flex items-center`}
          >
            <img
              src={transactions}
              alt='transcationsIcon '
            
              className='w-6 h-6  inline-block sm:mr-6 mr-3'
            />
            Transactions
          </li>
        </ul>
        <div className='flex items-center justify-between mt-10 absolute right-3 left-3 bottom-5'>
          <img src={settings} alt='settingsIcon' className='cursor-pointer w-6 h-6' />
          <img src={more} alt='moreIcon' srcset='' className='cursor-pointer w-6 h-6' />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
