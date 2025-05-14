import React from 'react'
import LabResultAction from './LabResultAction'
import { useAppContext } from '../contexts/AppContext';

const LabResultsPanel = () => {
    const { selectedPatient } = useAppContext(); 
  return (
    <div className='lg:max-h-[30vh] max-h-[67vh] overflow-hidden'>
          <p className='manrope-bold text-lg mb-6'>Lab Result</p>
          <div className='overflow-auto lg:max-h-30 max-h-[60vh]'>
              
              {selectedPatient?.lab_results?.map((item, index) =>
                  <LabResultAction key={index} result={item} />) || <LabResultAction result={'Blood Test'} />}
      
          </div>
    </div>
  )
}

export default LabResultsPanel
