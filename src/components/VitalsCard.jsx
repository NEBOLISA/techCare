import React from 'react'

const VitalsCard = ({ bgColor, src, title, value, remark, arrow, marker }) => {
    
    const Unit = () => {
        if (marker === "temp") {
            return '°F'
        } else if (marker === "rate") {
            return 'bpm'
        }

    }
  return (
    <div
      className={`${
        bgColor && bgColor
      } manrope-light  text-[#072635] w-full md:w-[200px]  p-3 rounded-lg`}
    >
      <div className='bg-white rounded-full w-15 h-15 flex items-center justify-center '>
        <img src={src} alt='respicon'  className='w-13 h-13' />
      </div>
      <p className=' text-[12px] manrope-semi mt-3 capitalize'>{title}</p>
     { value && <p className='manrope-bold text-[20px] '>{`${value} ${Unit()}`} </p>}
      <div className='flex items-center justify-start gap-2 mt-4'>
        {arrow && (
          <img src={arrow} className='w-[6px] h-[6px]' alt='remarkArrow'  />
        )}
        <p className='text-[10px]  capitalize'>{remark}</p>
      </div>
    </div>
  )
}

export default VitalsCard
