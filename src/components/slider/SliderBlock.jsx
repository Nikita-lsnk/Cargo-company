import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, A11y, Navigation } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';

const fadeInDown = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeInUp = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const resetAnimation = keyframes`
  from {
    opacity: 0.99; 
  }
  to {
    opacity: 1;
  }
`;

const ResetAnimation = styled.div`
  &.reset-animation {
    animation: ${resetAnimation} 1s linear;
  }
`;

const SliderBlock = () => {

  const slidesData = [
    {
      title: 'Propojení Evropy komfortem a péčí',
      subTitle:
        'Nabízíme komplexní řešení v oblasti dopravy, zahrnující autobusové přepravy, osobní přepravu a nákladní dopravu po celé Evropě.',
      buttonText: 'Více informací',
      imgSrc:
        'https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698067861/evx74jof6yzkdpheuspb.jpg',
    },
    {
      title: 'Vaše cesta, náš závazek',
      subTitle:
        'Poskytování kvalitních služeb, které jsou připraveny splnit různé potřeby našich klientů s důrazem na kvalitu a spolehlivost.',
      buttonText: 'Více informací',
      imgSrc:
        'https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701599776/background-03-1920x950_xdjozs.jpg',
    },
    {
      title: 'Soukromá Přeprava pro Vaše Soukromí',
      subTitle:
        'Naše služba osobní přepravy nabízí komfortní a diskrétní způsob dopravy, který se plně přizpůsobuje vašim potřebám.',
      buttonText: 'Více informací',
      imgSrc:
        'https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701599776/osobni_preprava_kfywhm.jpg',
    },
    {
      title: 'Spolehlivě Překonáváme Hranice',
      subTitle:
        'Naše mezinárodní nákladní doprava je synonymem spolehlivosti a efektivity, která umožňuje plynulý převoz nákladu po celé Evropě.',
      buttonText: 'Více informací',
      imgSrc:
        'https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701599777/nakladn%D0%B1_doprav_hqkwoe.jpg',
    },
  ];

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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const [animationStates, setAnimationStates] = useState(Array(slidesData.length).fill(false));
  
  const handleSlideChange = () => {
    setCurrentSlide(swiper.realIndex);
  };

  useEffect(() => {
    swiper && swiper.on('slideChange', handleSlideChange);
  }, [swiper]);

  useEffect(() => {
    if (swiper) {
      const resetAnimations = document.querySelectorAll('.reset-animation');
      resetAnimations.forEach((element) => {
        element.classList.remove('reset-animation');
      });

      const currentSlideElement = document.querySelector(
        `.swiper-slide[data-swiper-slide-index="${currentSlide}"]`
      );
      currentSlideElement && currentSlideElement.classList.add('reset-animation');
    }
  }, [currentSlide, swiper]);

  



  return (
    <Container>
      <Swiper
        // key={animationKey}
        modules={[A11y, Autoplay, Navigation]}
        spaceBetween={0}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        slidesPerView={1}
        // autoplay = {true}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => setSwiper(swiper)}
        initialSlide={currentSlide}
      >

        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <ResetAnimation>
              <MainPhoto>
                <Img src={slide.imgSrc} />
                <Overlay />
              </MainPhoto>
              <MainText>
                <Title className="reset-animation">
                  {slide.title}
                </Title>
                <SubTitle className="reset-animation">
                  {slide.subTitle}
                </SubTitle>
                <MainButton
                  onClick={() => {
                    switch (index) {
                      case 0:
                        handleGoToAbout();
                        break;
                      case 1:
                        handleGoToBus();
                        break;
                      case 2:
                        handleGoToCar();
                        break;
                      case 3:
                        handleGoToTruck();
                        break;
                      default:
                        break;
                    }
                  }}
                  className="reset-animation"
                >
                  {slide.buttonText}
                </MainButton>
              </MainText>
            </ResetAnimation>
          </SwiperSlide>
        ))}
        <SwiperNext className="swiper-button-next"><ImgArrow src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701032998/icons8-back-50_1_dohamx.png" /></SwiperNext>
        <SwiperBack className="swiper-button-prev"><ImgArrow src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701032998/icons8-back-50_qjf5n7.png" /></SwiperBack>
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
  background-color: rgba(0, 0, 0, 0.5); 
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
  @media screen and (max-width: 1320px) {
    left: 10%;
  }
  @media screen and (max-width: 1200px) {
    width: 500px;
    left: -30%;
  }
`;

const Title = styled.span`
  font-size: 60px;
  font-weight: 700;
  color: #fff;
  max-width: 600px;
  line-height: 1.13333;
  animation: ${fadeInDown} 1s ease-in-out;
  @media screen and (max-width: 1320px) {
    font-size: 36px;
  }

`;

const SubTitle = styled.span`
  font-size: 18px;
  line-height: 1.44444;
  font-weight: 400;
  color: #fff;
  max-width: 600px;
  animation: ${fadeInUp} 1s ease-in-out;
  @media screen and (max-width: 1320px) {
    font-size: 14px;
  }
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
  animation: ${fadeInUp} 1s ease-in-out;
  @media screen and (max-width: 1320px) {
    padding: 0;
    padding: 9px 25px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;