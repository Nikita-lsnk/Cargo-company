import React from 'react'
import styled from 'styled-components'
import SliderBlock from '../../components/slider/SliderBlock'
import Advant from './Advant'
import Popular from './Popular'
import Footer from '../../components/footbar/Footer'

const Home = () => {
  return (
    <Container>
      <SliderBlock/>
      <Advant/>
      <Popular/>
      <Footer/>
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  /* margin-bottom: 50px; */
`;