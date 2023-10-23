import React from 'react'
import styled from 'styled-components'
import Header from './components/navbar/Header'

const App = () => {
  return (
    <Wrapper>
      <Container>
        <Header/>
        
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