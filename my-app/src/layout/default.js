import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import { Box } from '@mui/material'
import { AppbarHeader } from '../styles/appbar'
import Appbar from '../components/appbar'



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


