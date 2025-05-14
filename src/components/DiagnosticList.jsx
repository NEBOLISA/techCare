import React, { useEffect } from 'react'
import TableList from './TableList'
import { useAppContext } from '../contexts/AppContext'

const DiagnosticList = ({ data }) => {
    const { selectedPatient, setSelectedPatient } = useAppContext()

     useEffect(() => {
          if (data?.length > 0) {
            setSelectedPatient(data[0])
          }
      
     }, [data, setSelectedPatient])
  return (
    <div className='max-h-[49vh] overflow-hidden    '>
    
      <TableList data={selectedPatient?.diagnostic_list
} />
    </div>
  )
}

export default DiagnosticList
