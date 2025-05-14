import React from 'react'
import logo from '../assets/Logo.svg'
import home from '../assets/homeIcon.svg'
import patients from '../assets/patients.svg'
import calendar from '../assets/calendarIcon.svg'
import message from '../assets/chatIcon.svg'
import transactions from '../assets/credit_card.svg'
import jessica from '../assets/jessica.png'
import settings from '../assets/settingsIcon.svg'
import more from '../assets/moreIcon.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import Sidebar from './Sidebar'


const Navbar = () => {
    const [activeTab, setActiveTab] = React.useState('overview')
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  
    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }
    const handleOpenSidebar = () => {
      setIsSidebarOpen(true)
    }
  return (
    <div className='bg-white p-4 h-16 rounded-4xl relative flex justify-between items-center shadow-sm manrope-light'>
      {/* Logo */}
     
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} home={home} patients={patients} calendar={calendar} message={message} transactions={transactions} jessica={jessica} settings={settings} more={more} activeTab={activeTab} handleTabClick={handleTabClick}   />
      

      <div className='flex items-center gap-8 '>
        <GiHamburgerMenu
          className='w-6 h-6 lg:hidden block'
          onClick={handleOpenSidebar}
        />

        <img src={logo} alt='appLogo' srcset='' className='sm:w-32 w-29' />
      </div>

      {/* NavLinks */}
      <div className='lg:block hidden'>
        <ul className='flex gap-6'>
          <li
            onClick={() => handleTabClick('overview')}
            className={`${
              activeTab === 'overview'
                ? 'bg-[#01F0D0] hover:opacity-100 transition-opacity duration-[400ms] ease-in-out '
                : ''
            } text-black px-3 py-2 rounded-full cursor-pointer hover:opacity-65 text-[11px] font-bold flex items-center'
        `}
          >
            <img
              src={home}
              alt='homeIcon'
              srcset=''
              className='w-4 h-4 inline-block mr-2'
            />
            Overview
          </li>
          <li
            onClick={() => handleTabClick('patients')}
            className={`${
              activeTab === 'patients'
                ? 'bg-[#01F0D0] hover:opacity-100 transition-opacity duration-[400ms] ease-in-out'
                : ''
            } px-3 py-2 rounded-full text-black cursor-pointer hover:opacity-65 text-[11px] font-bold flex items-center'
        `}
          >
            <img
              src={patients}
              alt='patientsIcon'
              srcset=''
              className='w-4 h-4 inline-block mr-2'
            />
            Patients
          </li>
          <li
            onClick={() => handleTabClick('schedule')}
            className={`${
              activeTab === 'schedule'
                ? 'bg-[#01F0D0] hover:opacity-100 transition-opacity duration-[400ms] ease-in-out'
                : ''
            } text-black px-3 py-2 rounded-full cursor-pointer hover:opacity-65 text-[11px] font-bold flex items-center`}
          >
            <img
              src={calendar}
              alt='calendarIcon'
              srcset=''
              className='w-4 h-4 inline-block mr-2'
            />
            Schedule
          </li>
          <li
            onClick={() => handleTabClick('message')}
            className={`${
              activeTab === 'message'
                ? 'bg-[#01F0D0] hover:opacity-100 transition-opacity duration-[400ms] ease-in-out'
                : ''
            } text-black px-3 py-2 rounded-full cursor-pointer hover:opacity-65 text-[11px] font-bold flex items-center`}
          >
            <img
              src={message}
              alt='messageIcon'
              srcset=''
              className='w-4 h-4 inline-block mr-2'
            />
            Message
          </li>
          <li
            onClick={() => handleTabClick('transactions')}
            className={`${
              activeTab === 'transactions'
                ? 'bg-[#01F0D0] hover:opacity-100 transition-opacity duration-[400ms] ease-in-out'
                : ''
            } text-black px-3 py-2 rounded-full cursor-pointer hover:opacity-65 text-[11px] font-bold flex items-center`}
          >
            <img
              src={transactions}
              alt='transactionsIcon'
              srcset=''
              className='w-4 h-4 inline-block mr-2'
            />
            Transactions
          </li>
        </ul>
      </div>
      {/* Right Navbar */}
      <div className='flex items-center gap-2 '>
        {/* profile Image */}
        <div className='cursor-pointer'>
          <img
            src={jessica}
            alt='profileImage'
            srcset=''
            className='w-10 h-10 rounded-full'
          />
        </div>

        <div className='flex items-center gap-2 '>
          {/* Profile Name */}
          <div className='cursor-pointer hidden  sm:block'>
            <h3 className='font-bold text-sm'>Dr Jones Simmon</h3>
            <p className='font-extralight text-sm'>General Practicioner</p>
          </div>
          <div className='h-[35px] w-[1px] bg-[#EDEDED] hidden  sm:block'></div>
          <div className=' items-center gap-1 hidden  sm:flex'>
            <img src={settings} alt='settingsIcon' className='w-4 h-4 cursor-pointer' />
            <img src={more} alt='moreIcon' className='w-4 h-4 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
