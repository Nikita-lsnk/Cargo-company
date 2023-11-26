import React from 'react'
import styled from 'styled-components'
import Header from './components/navbar/Header'
import './App.css'
import Home from './pages/home_page/Home'
import Footer from './components/footbar/Footer'
import { Navigate, Route, Routes} from 'react-router-dom'
import About from './pages/about_page/About'
import Bus from './pages/transport_page/Bus'
import Car from './pages/transport_page/Car'
import Truck from './pages/transport_page/Truck'
import Distance from './pages/distance_page/Distance'
import Program from './pages/program_page/Program'
import Price from './pages/price_page/Price'
import Contact from './pages/contact_page/Contact'

const App = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/car" element={<Car />} />
          <Route path="/truck" element={<Truck />} />
          <Route path="/distance" element={<Distance />} />
          <Route path="/program" element={<Program />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>

      </Container>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  display: flex;
  margin: 0;
  /* min-height: 100vh; */
  width: 100%;
  /* background-color: #F5F5F5; */
  
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;