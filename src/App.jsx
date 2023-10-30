import React from 'react'
import styled from 'styled-components'
import Header from './components/navbar/Header'
import './App.css'
import Home from './pages/home_page/Home'
import Footer from './components/footbar/Footer'
import { Navigate, Route, Routes} from 'react-router-dom'
import About from './pages/about_page/About'
import Bus from './pages/transport_page/Bus'

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