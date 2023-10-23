import React from 'react'
import styled from 'styled-components'

const SliderBlock = () => {
  return (
    <Container>
      <MainPhoto>
        <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698067861/evx74jof6yzkdpheuspb.jpg"/>
        <Overlay />
      </MainPhoto>
      <MainText>
        <Title>Propojení Evropy komfortem a péčí</Title>
        <SubTitle>Nabízíme komplexní řešení v oblasti dopravy, zahrnující autobusové přepravy, osobní přepravu a nákladní dopravu po celé Evropě.</SubTitle>
        <MainButton>Více informací</MainButton>
      </MainText>
    </Container>
  )
}

export default SliderBlock

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const MainPhoto = styled.div`
  position: relative;
  z-index: -1;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Overlay = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Цвет затемнения с непрозрачностью */
`;

const MainText = styled.div`
  position: absolute;
  /* top: 0; */
  right:0;
  left: 0;
  bottom: 30%;
  width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
`;

const MainButton = styled.button`
  background: transparent;
  color: #fff;
  width: fit-content;
  border: 1px solid white;
  padding: 9px 35px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`;