import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import { Box, Stack } from '@mui/material'
import Appbar from '../components/appbar'
import { UIProvider } from '../context/ui'



function Default() {
  return (
    <>

      <section>
        <Outlet />
      </section>
     
      <Footer />
  
    </>
  )
}

export default Default


