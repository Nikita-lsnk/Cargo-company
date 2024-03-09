import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'
import Footer from '../../components/footbar/Footer'
import { useTranslation } from 'react-i18next'

const Car = () => {

  const { t, i18n } = useTranslation();

  return (
    <Container>
      <HeaderSection
        title={t("car_header_section_title")}
        picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1703023916/%D1%84%D0%BE%D0%BD_%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D1%8B_%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B9_%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BF%D0%BE%D1%80%D1%82_jwkahi.jpg"}
        subTitle={t("car_header_section_subtitle")}
      />
      <ContainerColor>
        <MainText style={{ marginTop: '-40px' }}>

          <BeforeBlock></BeforeBlock>
          <TextInfo>
            <SubTitle>{t("car_main_subtitle_one")}</SubTitle>
          </TextInfo>
          <TextInfo>
            <SubTitle>{t("car_main_subtitle_two")}
            </SubTitle>
          </TextInfo>
          <TextInfo>
            <SubTitle>
            {t("car_main_subtitle_three")}</SubTitle>
          </TextInfo>
        </MainText>
      </ContainerColor>
      <FooterBlock>
        <Footer />
      </FooterBlock>
    </Container>
  )
}

export default Car

const ContainerColor = styled.div`
  width: 100%;
  background-color: #f2f6ff;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const FooterBlock = styled.div`
  padding-top: 40px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 100px; */
  margin-bottom: 40px;
  /* margin-bottom: 50px; */
`;

const MainText = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column; 
  gap: 40px;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 1240px) {
    margin: 0 auto;
    width: calc(100% - 80px);
  }
`;

const MainTitle = styled.div`
  
`;

const Title = styled.span`
  color: #393a3c;
  font-size: 46px;
  font-weight: 700;
`;

const BeforeBlock = styled.div`
  height: 4px;
  width: 50px;
  background-color: #3256A4;
  /* margin-left: -55px; */
`;

const TextInfo = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SubTitle = styled.span`
  color: #747474;
  font-size: 16px;
  line-height: 1.375;
`;

const AdvantBlock = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Img = styled.img``;