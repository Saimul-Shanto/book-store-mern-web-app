
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      {/* outlet will render the child routes */}
      <main className='min-h-screen max-w-screen-2xl mx-auto md:px-24 px-4 py-6 font-primary'>
        <Outlet/>
      </main> 
      <footer>Footer</footer>
    </>
  )
}

export default App
