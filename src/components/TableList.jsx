import React from 'react'
import { diagnosisList } from '../data'
const TableList = ({data}) => {
  return (
      <div className='overflow-auto  max-h-[40vh]'>
       
          <table className='min-w-full text-sm text-left'>
           
        <thead className='bg-gray-100 mb-4 sticky    top-0 z-10  rounded-2xl '>
          <tr className=' rounded-l-3xl z-20 '>
            {diagnosisList?.header.map((item, index) => (
                <th
                    key={index}
                className={`${index === 0 && 'rounded-l-full'} ${
                  index === diagnosisList?.header.length - 1 && 'rounded-r-full'
                } px-6 py-2 font-semibold  text-gray-800 `}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>

        {data?.map((item,index) => (
          <tbody key={index} class='divide-y divide-gray-200 text-gray-700  '>
            <tr>
              <td className='px-6 py-3'>{item?.name}</td>
              <td className='px-6 py-3'>{item?.description}</td>
              <td className='px-6 py-3'>{item?.status}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

export default TableList
