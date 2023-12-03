import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, A11y, Navigation } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';

const SliderBlock = () => {

  const navigate = useNavigate()

  const handleGoToAbout = () => {
    navigate("/about")
  }

  const handleGoToBus = () => {
    navigate("/bus")
  }

  const handleGoToCar = () => {
    navigate("/car")
  }

  const handleGoToTruck = () => {
    navigate("/truck")
  }

  return (
    <Container>
      <Swiper
        modules={[A11y, Autoplay, Navigation]}
        spaceBetween={0}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        slidesPerView={1}
        // autoplay = {true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        
        <SwiperSlide>
          <MainPhoto>
            <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698067861/evx74jof6yzkdpheuspb.jpg" />
            <Overlay />
          </MainPhoto>
          <MainText>
            <Title>Propojení Evropy komfortem a péčí</Title>
            <SubTitle>Nabízíme komplexní řešení v oblasti dopravy, zahrnující autobusové přepravy, osobní přepravu a nákladní dopravu po celé Evropě.</SubTitle>
            <MainButton onClick={handleGoToAbout}>Více informací</MainButton>
          </MainText>
        </SwiperSlide>
        <SwiperSlide>
          <MainPhoto>
            <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701599776/background-03-1920x950_xdjozs.jpg" />
            <Overlay />
          </MainPhoto>
          <MainText>
            <Title>Vaše cesta, náš závazek</Title>
            <SubTitle>Poskytování kvalitních služeb, které jsou připraveny splnit různé potřeby našich klientů s důrazem na kvalitu a spolehlivost</SubTitle>
            <MainButton onClick={handleGoToBus}>Více informací</MainButton>
          </MainText>
        </SwiperSlide>
        <SwiperSlide>
          <MainPhoto>
            <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701599776/osobni_preprava_kfywhm.jpg" />
            <Overlay />
          </MainPhoto>
          <MainText>
            <Title>Soukromá Přeprava pro Vaše Soukromí.</Title>
            <SubTitle>Naše služba privátní osobní přepravy nabízí komfortní a diskrétní způsob dopravy, který se plně přizpůsobuje vašim potřebám</SubTitle>
            <MainButton onClick={handleGoToCar}>Více informací</MainButton>
          </MainText>
        </SwiperSlide>
        <SwiperSlide>
          <MainPhoto>
            <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701599777/nakladn%D0%B1_doprav_hqkwoe.jpg" />
            <Overlay />
          </MainPhoto>
          <MainText>
            <Title>Spolehlivě Překonáváme Hranice</Title>
            <SubTitle>Naše mezinárodní nákladní doprava je synonymem spolehlivosti a efektivity, která umožňuje plynulý převoz nákladu po celé Evropě </SubTitle>
            <MainButton onClick={handleGoToTruck}>Více informací</MainButton>
          </MainText>
        </SwiperSlide>
        <SwiperNext className="swiper-button-next"><ImgArrow src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701032998/icons8-back-50_1_dohamx.png"/></SwiperNext>
        <SwiperBack className="swiper-button-prev"><ImgArrow src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701032998/icons8-back-50_qjf5n7.png"/></SwiperBack>
      </Swiper>
    </Container>
  )
}

export default SliderBlock

const ImgArrow = styled.img`
  width: 30px;
  height: 30px;
`;

const SwiperButton = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  z-index: 1000;
  transform: translateY(-50%);
  cursor: pointer;
  border-radius: 50%;
`;

const SwiperNext = styled(SwiperButton)`
  right: 20px;
`;

const SwiperBack = styled(SwiperButton)`
  left: 20px;
`;

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
  max-height: 100vh;
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;