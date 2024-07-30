import React from 'react'
import Navigation from '../Components/Home/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Home/Footer'
function RootLayout() {
  return (

        <>
        <Navigation/>
        <main className='flex items-center justify-center'>
          <Outlet/>
        </main> <br />
        <footer className=' bg-slate-700 text-white '>
          <Footer/>
        </footer>
        </>

  )
}

export default RootLayout