import React from 'react'
import styled from 'styled-components'
import SliderBlock from '../../components/slider/SliderBlock'
import Advant from './Advant'
import Popular from './Popular'

const Home = () => {
  return (
    <Container>
      <SliderBlock/>
      <Advant/>
      <Popular/>
      
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