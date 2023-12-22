import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Header } from './components/Hero/Header'
import { Title } from './components/Section1/Title'
import { Intense } from './components/Section2/Intense'
import { TitleLast } from './components/Section3/TitleLast'
import { Prices } from './components/Prices/Prices'
import { Footer } from './components/Footer/Footer'

export const App = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Title/>
    <Intense/>
    <TitleLast/>
    <Prices/>
    <Footer/>
    </>

  )
}
