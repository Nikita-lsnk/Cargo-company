import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderSection = ({title, firstLink, firstSub, secondLink, secondSub}) => {
  return (
    <Container>
      <PictureBlock>
        <Overlay />
      </PictureBlock>
      <MainText>
        <Title>{title}</Title>
        <SubBlock>
          
          <StyledLink to={`/${firstLink}`}><SubTitle>{firstSub}</SubTitle></StyledLink>
          <ArrowImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698590300/icons8-arrow-right-50_qlz4gn.png"/>
          <StyledLink to={`/${secondLink}`}><SubTitle>{secondSub}</SubTitle></StyledLink>
        </SubBlock>
      </MainText>
    </Container>
  )
}

export default HeaderSection

const Container = styled.div`
  width: 100%;
`;

const PictureBlock = styled.div`
  position: relative;
  background: url('https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701033972/back_iqlfez.jpg');
  background-size: cover;
  background-position: center center;
  height: 420px;
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(76, 76, 177, 0.5); /* Здесь задаем синее затемнение */
  height: 420px;
`;

const MainText = styled.div`
  position: absolute;
  /* top: 0; */
  right:0;
  left: 0;
  bottom: 45%;
  width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const Title = styled.span`
  font-size: 60px;
  font-weight: 700;
  color: #fff;
  max-width: 600px;
  line-height: 1.13333;

`;

const SubTitle = styled.span`
  font-size: 18px;
  line-height: 1.44444;
  font-weight: 400;
  color: #fff;
  max-width: 600px;
  cursor: pointer;
`;

const SubBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const ArrowImg = styled.img`
  width: 35px;
  height: 20px;
  /* background-color: #c6c1c1; */
`;

const  StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`;