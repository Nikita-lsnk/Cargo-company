import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const ModalWindow = () => {
  return (
    <Wrapper>
      <Container>
        
          <Title>SUCCESS</Title>
          <SubTitle>In the near future, a message with the best offer will be sent to your email</SubTitle>
          <StyledLink to='/'><MainButton>Ок</MainButton></StyledLink>
        
      </Container>
    </Wrapper>
  )
}

export default ModalWindow

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  border-radius: 20px;
  gap: 32px;
  background-color: #ffffff;
  padding: 35px 32px;
  @media screen and (max-width: 650px){
    margin-right: 20px;
    margin-left: 20px;
  }
  
  
`;


const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #86BE3F;
`;
const SubTitle = styled.span`
  display: block;
  text-align: center;
  max-width: 500px;
  font-size: 16px;
  line-height: 19.5px;
`;
const MainButton = styled.button`
  background: transparent;
  text-transform: uppercase;
  border: none;
  border-radius: 15px;
  color: #ffffff;
  background-color: #86BE3F;
  padding: 15px 72px;
  font-size: 16px;
  font-weight: 700;
`;
const StyledLink = styled(Link)`
  :hover, :focus{
    cursor: pointer;
  }
`;