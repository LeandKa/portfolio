import React from 'react'
import Header from '../src/Header/Header'
import Banner from '../src/Banner/Banner'
import About from '../src/About/About'
import Servicos from '../src/Servicos/Servicos'
import Portfolio from '../src/Portfolio/Portfolio'
import Footer from '../src/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Servicos></Servicos>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  )
}
