import React, { useEffect, useRef, useState } from 'react'
import searchIcon from '../assets/searchIcon.svg'
import PatientCard from './PatientCard'

import { useAppContext } from '../contexts/AppContext'
const PatientsList = ({ data }) => {
  const { selectedPatient, setSelectedPatient } = useAppContext()
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const handleSelectedPatient = (data) => {
    setSelectedPatient(data)
  }
    const inputRef = useRef(null)
    const [compData, setCompData] = useState(data)
    const searchTermRef = useRef(searchTerm)
    useEffect(() => {
            searchTermRef.current = searchTerm
        }, [searchTerm])
  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
          setSearchOpen(false)
          setCompData(data)
          setSearchTerm('')
      }
      
    }
      
      function handleKeyPressDownClose(event) {
          if (event.key === 'Enter') {
         
          setSearchOpen(false)
          setCompData(data)
          setSearchTerm('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyPressDownClose)
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleKeyPressDownClose)
    }
  }, [])
useEffect(() => {
    const newData = data?.filter((item) => item?.name?.toLowerCase()?.includes(searchTerm.toLowerCase()))
     setCompData(newData)
},[searchTerm])
  return (
    <div ref={inputRef}>
      <div className=' mb-6'>
        {!searchOpen && (
          <div className='flex justify-between items-center'>
            <p className='text-lg  text-[#072635] p-3 manrope-bold'>Patients</p>

            <img
              onClick={() => {
                setSearchOpen(true)
              }}
              src={searchIcon}
              className='w-7 h-7 cursor-pointer pr-3'
              alt='searchIcon'
            />
          </div>
        )}
        {searchOpen && (
          <div className='mx-2 mb-4'>
            <input
              value={searchTerm}
              type='search'
              
              onChange={() => setSearchTerm(event.target.value)}
              id ='searchInput'
              className='w-full bg-[#eeeeee] px-3 py-2  rounded-md shadow-md outline-[#D8FCF7]'
            />
          </div>
        )}
      </div>

      <div className='overflow-x-auto  max-h-[73vh]'>
        {compData?.length !== 0 ? (
          compData?.map((item, index) => (
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
          ))
        ) : (
          <div className='w-full flex justify-center items-center h-[10vh]'>
            <p className='manrope-bold text-md text-[#7c7c7c]'>
              Patient Does not Exist
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PatientsList
