import React from 'react'
import styled from 'styled-components'
import SliderBlock from '../../components/slider/SliderBlock'

const Home = () => {
  return (
    <Container>
      <SliderBlock/>
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
`;