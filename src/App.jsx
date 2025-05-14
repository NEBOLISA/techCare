
import './App.css'
import DiagnosisHistory from './components/DiagnosisHistory'
import DiagnosticList from './components/DiagnosticList'
import Navbar from './components/Navbar'
import PatientsDetails from './components/PatientsDetails'
import PatientsList from './components/PatientsList'

import LabResultsPanel from './components/LabResultsPanel'
import { useFetch } from './services/useFetch'
import { FadeLoader } from 'react-spinners'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: '#01F0D0'
}
function App() {
let username = 'coalition'
let password = 'skills-test'
let auth = btoa(`${username}:${password}`)
  const { data,error,loading } = useFetch(
  'https://fedskillstest.coalitiontechnologies.workers.dev',
  {
    headers: {
      Authorization: `Basic ${auth}`
    }
  }
)
 const spinner = () => (
   <FadeLoader
     color={'#01F0D0'}
     loading={true}
     cssOverride={override}
     size={20}
     aria-label='Loading Spinner'
     data-testid='loader'
   />
 )
  return (
    <>
      <ToastContainer position='top-right' autoClose={3000} />
      {error && toast.error(error)}
      <div className='bg-[#F6F7F8] sm:p-4 p-1  lg:overflow-y-hidden h-[100vh]'>
        <Navbar />
        <main className='grid grid-cols-1 lg:grid-cols-[300px_1fr_280px] min-h-screen gap-4 sm:p-4 bg-gray-50 px-0 py-3'>
          <aside className='   bg-white rounded-xl shadow py-4 pb-0 overflow-hidden  max-h-[85vh] '>
            {loading ? (
              <div className='flex justify-center items-center h-full'>
                {spinner()}
              </div>
            ) : (
              <PatientsList data={data} />
            )}
          </aside>

          <section className='   overflow-hidden max-h-[88vh]'>
            <div className='max-h-[86vh] overflow-scroll space-y-6'>
              <div
                className={`${
                  loading && 'h-[40vh]'
                } bg-white rounded-xl shadow p-3 `}
              >
                {loading ? (
                  <div className='flex justify-center items-center h-full'>
                    {spinner()}
                  </div>
                ) : (
                  <DiagnosisHistory data={data} />
                )}
              </div>
              <div className={`${loading && 'h-[40vh]'} bg-white rounded-xl shadow p-3 overflow-hidden `}>
                <p className='manrope-bold text-lg mb-6'>Diagnostic List</p>
                {loading ? (
                  <div className='flex justify-center items-center h-full'>
                    {spinner()}
                  </div>
                ) : (
                  <DiagnosticList data={data} />
                )}
              </div>
            </div>
          </section>

          <aside className=' overflow-hidden max-h-[88vh]'>
            <div className='max-h-[86vh] overflow-scroll space-y-6'>
              <div
                className={`${
                  loading && 'h-[60vh]'
                } bg-white rounded-xl shadow p-4`}
              >
                {loading ? (
                  <div className='flex justify-center items-center h-full'>
                    {spinner()}
                  </div>
                ) : (
                  <PatientsDetails />
                )}
              </div>
              <div className='bg-white rounded-xl shadow p-4'>
                <LabResultsPanel />
              </div>
            </div>
          </aside>
        </main>
      </div>
    </>
  )
}

export default App
