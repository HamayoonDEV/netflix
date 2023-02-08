import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className='home' >
        {/* nav bar */}
        <Navbar/>
        {/* banner */}
        <Banner/>

        {/** row */}
    </div>
  )
}

export default Home