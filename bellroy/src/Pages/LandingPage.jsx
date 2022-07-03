import { Box } from '@chakra-ui/react'
import React from 'react'
import { Banner } from '../Components/Banner'
import { Navbar } from '../Components/Navbar'

export const LandingPage = () => {
  return (
    <Box>
        <Navbar/>
        <Banner/>
    </Box>
  )
}
