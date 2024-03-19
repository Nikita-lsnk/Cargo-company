import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ModalWindow = () => {

  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <Container>
        
          <Title>{t("success_modal_title")}</Title>
          <SubTitle>{t("success_modal_subtitle")}</SubTitle>
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
  color: #3256A4;
`;
const SubTitle = styled.span`
  display: block;
  text-align: center;
  max-width: 500px;
  font-size: 16px;
  line-height: 19.5px;
`;
const MainButton = styled.button`
  padding: 15px 45px;
  background-color: #3256A4;
  border: none;
  height: fit-content;
  color: white;
  font-size: 18px;
  font-weight: 700;
  z-index: 100;
  width: fit-content;
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }

  &:active {
    transform: scale(0.99);
  }
`;
const StyledLink = styled(Link)`
  :hover, :focus{
    cursor: pointer;
  }
`;