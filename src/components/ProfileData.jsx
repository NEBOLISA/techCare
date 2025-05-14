import React from 'react'

const ProfileData = ({title,value,src}) => {
  return (
    <div className='flex items-center gap-3 mt-4'>
      <div className='rounded-full w-8 h-8 bg-[#F6F7F8] flex items-center justify-center'>
        {title === 'gender' ? (src) : title === 'date of birth' ? (
          <img src={src} alt='profileIcon' className='w-3 h-3 ' />
        ) : (
          <img src={src} alt='profileIcon' className='w-8 h-8 ' />
        )}
      </div>
      <div>
        <p className='capitalize text-xs manrope-light text-[#072635]'>
          {title}
        </p>
        <p className='capitalize text-xs manrope-bold text-[#072635]'>
          {value}
        </p>
      </div>
    </div>
  )
}

export default ProfileData
