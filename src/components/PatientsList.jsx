import React from 'react'
import searchIcon from '../assets/searchIcon.svg'
import PatientCard from './PatientCard'
import { useAppContext } from '../contexts/AppContext'
const PatientsList = ({ data }) => {

const { selectedPatient, setSelectedPatient } = useAppContext(); 
  const handleSelectedPatient = (data) => {
    setSelectedPatient(data)
  }
  return (
    <div>
      <div className='flex justify-between items-center mb-6'>
        <p className='text-lg  text-[#072635] p-3 manrope-bold'>Patients</p>
        <img
          src={searchIcon}
          className='w-7 h-7 cursor-pointer pr-3'
          alt='searchIcon'
          srcset=''
        />
      </div>
      <div className='overflow-x-auto  max-h-[73vh]'>
        {data?.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSelectedPatient(item)}
            className='w-full'
          >
            <PatientCard
              name={item?.name}
              gender={item?.gender}
              age={item?.age}
              image={item?.profile_picture}
              isActive={selectedPatient?.name === item?.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PatientsList
