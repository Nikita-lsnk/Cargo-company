import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderSection = ({title, firstLink, firstSub, secondLink, secondSub, subTitle, picture}) => {

  const pictureStyle = {
    position: 'relative',
    background: `url(${picture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    minHeight: '420px',
    zIndex: '-1',
    
  };

  return (
    <Container>
      <PictureBlock style={pictureStyle}>
        <Overlay />
      </PictureBlock>
      <MainText>
        <Title>{title}</Title>
        <SubBlock>
          <SubTitle>{subTitle}</SubTitle>
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
  gap: 50px;
  @media screen and (max-width: 1240px) {
    margin: 0 auto;
    width: calc(100% - 80px); 
  }
`;

const Title = styled.span`
  font-size: 60px;
  font-weight: 700;
  color: #fff;
  /* max-width: 600px; */
  line-height: 1.13333;
  @media screen and (max-width: 800px) {
    font-size: 36px;
  }
  @media screen and (max-width: 500px) {
    font-size: 24px;
  }

`;

const SubTitle = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  /* max-width: 600px; */
  line-height: 1.13333;
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
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