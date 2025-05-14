import React, { useEffect } from 'react'
import BloodPressureChart from './BloodPressureChart'
import VitalsCard from './VitalsCard'
import respiratory from '../assets/respiratory_rate.svg'
import temp from '../assets/temperature.svg'
import HeartBpm from '../assets/HeartBPM.svg'
import ArrowDown from '../assets/ArrowDown.svg'
import ArrowUp from '../assets/ArrowUp.svg'
import { useAppContext } from '../contexts/AppContext'


const DiagnosisHistory = ({ data }) => {
  const {
    selectedPatient,
    setSelectedPatient,
    selectedMonth,
    setSelectedMonth
  } = useAppContext()
    
  const selectedMonthData = selectedPatient?.diagnosis_history?.find(
    (item) => item?.month === selectedMonth
  )
    useEffect(() => {
      if (data?.length > 0) {
        setSelectedPatient(data[0])
      }
    }, [data, setSelectedPatient])
  useEffect(() => {
    setSelectedMonth(selectedPatient?.diagnosis_history[0]?.month)
  }, [data,selectedPatient])
    
    
    {/* function to set whether the arrw is up or down */}
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
    <div className=''>
      <div className='flex justify-between items-center mb-6 '>
        <p className='manrope-bold text-lg '>Diagnosis History</p>
        <div>
          Month:
          <select
            onChange={(e) => setSelectedMonth(e.target.value)}
            className='border cursor-pointer border-[#C4C4C4] rounded-lg p-2 ml-2 outline-none'
          >
            {selectedPatient?.diagnosis_history?.map((item, index) => (
              <option
                
                key={index}
                value={item?.month}
              >
                {item?.month}, {item?.year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <BloodPressureChart />
      <div className='grid md:flex md:grid-cols-3 justify-between gap-4  grid-cols-1  w-full'>
        <VitalsCard
          bgColor={'bg-[#E0F3FA]'}
          src={respiratory}
          title='Respiratory Rate'
          value={selectedMonthData?.respiratory_rate?.value}
          remark={selectedMonthData?.respiratory_rate?.levels}
          arrow={arrow(selectedMonthData?.respiratory_rate?.levels)}
          marker='rate'
        />
        <VitalsCard
          bgColor={'bg-[#FFE6E9]'}
          src={temp}
          title='temperature'
          value={selectedMonthData?.temperature?.value}
          remark={selectedMonthData?.temperature?.levels}
          arrow={arrow(selectedMonthData?.temperature?.levels)}
          marker='temp'
        />
        <VitalsCard
          bgColor={'bg-[#FFE6F1]'}
          src={HeartBpm}
          title='heart rate'
          value={78}
          remark={selectedMonthData?.heart_rate?.levels}
          arrow={arrow(selectedMonthData?.heart_rate?.levels)}
          marker='rate'
        />
      </div>
    </div>
  )
}

export default DiagnosisHistory
