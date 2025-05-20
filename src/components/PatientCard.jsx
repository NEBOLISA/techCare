import React from 'react'
import more from '../assets/more_horiz.svg'
const PatientCard = ({isActive, name,gender,age,image}) => {
  return (
    <div
      className={`${
        isActive ? 'bg-[#D8FCF7]' : ''
      } px-3 py-3 flex items-center justify-between cursor-pointer`}
    >
      <div className='flex items-center gap-4 '>
        <img src={image} alt='profileImage'  className='w-8 h-8 rounded-full' />
        <div>
          <p className='font-bold manrope-bold text-sm'>{name}</p>
                  <p className='font-extraLight manrope-light text-xs'>{gender}, <span>{age}</span></p>
        </div>
      </div>
      <img
        src={more}
        alt='moreIcon'
        className='w-4 h-4 cursor-pointer '
       
      />
    </div>
  )
}

export default PatientCard
