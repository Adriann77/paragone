import React from 'react'

import BottomNavbar from '../components/BottomNavbar/BottomNavbar'

import Homepage from '../components/Homepage/Homepage'

const page = () => {
  return (
    <>
      <div className="relative bg-[#F6F5FA] pb-[120px]">
        <Homepage />
      </div>
      <BottomNavbar />
    </>
  )
}

export default page
