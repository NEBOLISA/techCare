import React from 'react'
import download from '../assets/downloadIcon.svg'
const LabResultAction = ({result}) => {
  return (
    <div className='flex items-center justify-between hover:bg-[#F6F7F8] p-2 cursor-pointer mb-2'>
      <p className='capitalize text-[#072635] text-xs monrope-light'>
        {result}
      </p>
      <img src={download} alt='downloadIcon' className='w-4 h-4' />
    </div>
  )
}

export default LabResultAction
