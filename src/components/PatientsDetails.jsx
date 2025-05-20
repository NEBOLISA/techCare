import React from 'react'

import ProfileData from './ProfileData'
import calendar from '../assets/calendarIcon.svg'
import { CgGenderFemale } from 'react-icons/cg'
import phone from '../assets/PhoneIcon.svg'
import insurance from '../assets/InsuranceIcon.svg'
import { useAppContext } from '../contexts/AppContext'

const PatientsDetails = () => {
    const { selectedPatient } = useAppContext()
    const profileData = [
      {
        title: 'date of birth',
        value: selectedPatient?.date_of_birth,
        src: calendar
      },
      {
        title: 'gender',
        value: selectedPatient?.gender,
        src: <CgGenderFemale />
      },
      {
        title: 'contact info',
        value: selectedPatient?.phone_number,
        src: phone
      },
      {
        title: 'emergency contact',
        value: selectedPatient?.emergency_contact,
        src: phone
      },
      {
        title: 'insurance provider',
        value: selectedPatient?.insurance_type,
        src: insurance
      }
    ]
  return (
    <div>
      <div className='flex items-center justify-center flex-col'>
        <img
          src={selectedPatient?.profile_picture}
          alt='profileImage'
       
          className='w-34 h-34 rounded-full'
        />
        <p className=' manrope-bold text-lg mt-4'>{selectedPatient?.name}</p>
      </div>
          {profileData.map((data, index) => (
              <div key={index}>
                  
                  <ProfileData title={data.title} value={data.value} src={data.src} />
              </div>
      ))}

      <div className='flex items-center justify-center mt-8'>
        <button className='bg-[#01F0D0] px-6 py-2 cursor-pointer manrope-bold text-xs rounded-full'>Show All Information</button>
      </div>
    </div>
  )
}

export default PatientsDetails
