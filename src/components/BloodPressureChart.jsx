import React from 'react'
import ArrowDown from '../assets/ArrowDown.svg'
import ArrowUp from '../assets/ArrowUp.svg'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import { useAppContext } from '../contexts/AppContext'
const BloodPressureChart = () => {
  const { selectedPatient, selectedMonth } = useAppContext()
  const graphData = selectedPatient?.diagnosis_history?.map((item) => ({
    date: item?.month,
    systolic: item?.blood_pressure?.systolic?.value,
    diastolic: item?.blood_pressure?.diastolic?.value
  }))
  const selectedMonthData = selectedPatient?.diagnosis_history?.find(
    (item) => item?.month === selectedMonth
  )
  {
    /* function to set whether the arrow is up or down */
  }
  const arrow = (remark) => {
    if (remark?.toLowerCase() === 'normal') {
      return ''
    } else if (remark?.toLowerCase() === 'lower than average') {
      return ArrowDown
    } else {
      return ArrowUp
    }
  }
  return (
    <div className='mb-3 overflow-hidden'>
      <div className='bg-[#F4F0FE] w-full p-3 rounded-lg grid lg:grid-cols-[3fr_1fr] grid-cols-1'>
        <div className='overflow-auto'>
          <p className='monrope-bold text-[16px] mb-5 ml-7'>Blood Pressure</p>
          <LineChart
            width={550}
            height={250}
            data={graphData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type='monotone' dataKey='systolic' stroke='#C26EB4' strokeWidth={2} />
                      <Line type='monotone' dataKey='diastolic' stroke='#7E6CAB' strokeWidth={2} />

            <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
            <XAxis dataKey='date' />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className='lg:block flex  gap-8 lg:mt-0 mt-5 '>
          <div>
            <div className='flex items-center gap-2 mb-1'>
              <div className='w-2 h-2 rounded-full bg-[#E66FD2]'></div>
              <p className='monrope-light text-xs'>Systolic</p>
            </div>
            <p className='monrope-bold text-lg '>
              {selectedMonthData?.blood_pressure?.systolic?.value}
            </p>
            <div className='flex items-center justify-start gap-2 mt-1'>
              {selectedMonthData?.blood_pressure?.systolic?.levels !==
                'Normal' && (
                <img
                  src={arrow(
                    selectedMonthData?.blood_pressure?.systolic?.levels
                  )}
                  className='w-[6px] h-[6px]'
                  alt='remarkArrow'
                />
              )}
              <p className='text-[10px]  capitalize'>
                {selectedMonthData?.blood_pressure?.systolic?.levels}
              </p>
            </div>
          </div>

          <div className='w-full h-[1px] bg-[#CBC8D4] mt-3 lg:block hidden'></div>
          <div>
            <div className='flex items-center gap-2 mb-1 lg:mt-3 mt-0'>
              <div className='w-2 h-2 rounded-full bg-[#8C6FE6]'></div>
              <p className='monrope-light text-xs'>Diastolic</p>
            </div>
            <p className='monrope-bold text-lg '>
              {selectedMonthData?.blood_pressure?.diastolic?.value}
            </p>
            <div className='flex items-center justify-start gap-2 mt-1'>
              {selectedMonthData?.blood_pressure?.diastolic?.levels !==
                'Normal' && (
                <img
                  src={arrow(
                    selectedMonthData?.blood_pressure?.diastolic?.levels
                  )}
                  className='w-[6px] h-[6px]'
                  alt='remarkArrow'
                />
              )}
              <p className='text-[10px]  capitalize'>
                {selectedMonthData?.blood_pressure?.diastolic?.levels}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BloodPressureChart
