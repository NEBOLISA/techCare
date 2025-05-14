// src/context/AppContext.jsx
import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [selectedPatientData, setSelectedPatientData] = useState(null)
  const [selectedMonth, setSelectedMonth] = useState("")
  return (
    <AppContext.Provider
      value={{
        selectedPatient,
        setSelectedPatient,
        selectedPatientData,
        setSelectedPatientData,
        selectedMonth,
        setSelectedMonth
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
