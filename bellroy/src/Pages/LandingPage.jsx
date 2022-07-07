import { Box } from '@chakra-ui/react'
import React from 'react'
import { Banner } from '../Components/Banner'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'

export const LandingPage = () => {
  return (
    <Box>
        <Navbar/>
        <Banner/>
        <Footer/>
    </Box>
  )
}
