import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Collections from '../components/Collections' 
import LadiesCollections from '../components/LadiesCollections'
import {Gents,Ladies} from "../data"

const MainPage = () => {

  const [gents,setGents]=useState(Gents)
  const [women,setWomen]=useState(Ladies)

  return (
    <div>
      <Header />
      <Banner />
      <Collections gents={gents} />
      <LadiesCollections women={women} />
      <Footer />
    </div>
  )
}

export default MainPage