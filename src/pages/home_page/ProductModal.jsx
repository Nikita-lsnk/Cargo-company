import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai'


const ProductModal = ({ openModal, setOpenModal, description, price, picture, title }) => {


  return (
    <Wrapper onClick={() => setOpenModal(!openModal)}>
      <Container onClick={e => e.stopPropagation()}>
          <MainPicture>
            <MainImg src={picture} alt="picture" />
          </MainPicture>
        <TextBlock>
          <Close><AiOutlineClose onClick={() => setOpenModal(!openModal)} size={20} style={{ cursor: "pointer" }} /></Close>
          <MainText>
            <Title>{title}</Title>
            <SubTitle>{description}

            </SubTitle>
            <MainPrice> 
                <Price>
                  {price}                
                </Price> 
                <StyledLink to="/contact"><DiscountBtn>Více informací</DiscountBtn></StyledLink>
            </MainPrice>
          </MainText>
          
        </TextBlock>

      </Container>
    </Wrapper>
  )
}

export default ProductModal;

const DiscountBtn = styled.button`
  padding: 15px 35px;
  background-color: #f0e319;
  border: none;
  height: fit-content;
  color: #292a2d;
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
  z-index: 100;
`;

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 1000px;
  border-radius: 20px;
  gap: 32px;
  background-color: #ffffff;
  padding: 35px 32px;
  @media screen and (max-width: 800px){
    width: calc(100% - 160px);
    flex-direction: column;
  }
  
  
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  @media screen and (max-width: 800px){
    gap: 10px;
  }
`;

const Title = styled.span`
  font-size: 20px;
  color: #3256a4;
  font-weight: 700;
`;
const SubTitle = styled.span`
  color: #747474;
  font-size: 16px;
  line-height: 1.375;
  /* max-height: 100px;
  overflow-y: scroll; */

`;

const StyledLink = styled(Link)`
  :hover, :focus{
    cursor: pointer;
  }
`;





const MainPicture = styled.div`
  
`;



const MainImg = styled.img`
  height: 280px;
  width: 370px;
  @media screen and (max-width: 800px) {
   width: 0;
   height: 0;
   width: 100%;
   height: 100%;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 450px;
`;

const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const MainPrice = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  gap: 16px;
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #292a2d;
`;

