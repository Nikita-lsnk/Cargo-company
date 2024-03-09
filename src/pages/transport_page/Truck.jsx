import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'
import Footer from '../../components/footbar/Footer'
import { useTranslation } from 'react-i18next'

const Truck = () => {

  const { t, i18n } = useTranslation();

  return (
    <Container>
      <HeaderSection
        title={t("truck_header_section_title")}
        picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1703023916/%D1%84%D0%BE%D0%BD_%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D1%8B_%D0%B3%D1%80%D1%83%D0%B7%D0%BE%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B7%D0%BA%D0%B8_udggfc.jpg"}
        subTitle={t("truck_header_section_subtitle")}
      />
      <ContainerColor>
        <MainText style={{ marginTop: '-40px' }}>

          <BeforeBlock></BeforeBlock>
          <TextInfo>
            {/* <SubTitle>Hledáte spolehlivého partnera pro přepravu Vašich zásilek? Rychle a bezpečně dopravíme Vaši zásilku v rámci silniční přepravy do celé Evropy. <b>Pro tuzemské dopravy nabízíme návěsy o nosnosti 25 tun.</b></SubTitle> */}
            <SubTitle>{t("truck_main_subtitle_one")}</SubTitle>
          </TextInfo>
          <TextInfo>
            <AdvantBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
              <SubTitle>{t("truck_advant_subtitle_one")}</SubTitle>
            </AdvantBlock>
            <AdvantBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
              <SubTitle>{t("truck_advant_subtitle_two")}</SubTitle>
            </AdvantBlock>
            <AdvantBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
              <SubTitle>{t("truck_advant_subtitle_three")}</SubTitle>
            </AdvantBlock>
            <AdvantBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
              <SubTitle>{t("truck_advant_subtitle_four")}</SubTitle>
            </AdvantBlock>
            <AdvantBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
              <SubTitle>{t("truck_advant_subtitle_five")}</SubTitle>
            </AdvantBlock>
            <AdvantBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
              <SubTitle>{t("truck_advant_subtitle_six")}</SubTitle>
            </AdvantBlock>
          </TextInfo>
          <TextInfo>
            <SubTitle>{t("truck_main_subtitle_two")}</SubTitle>
          </TextInfo>
        </MainText>
      </ContainerColor>
      <FooterBlock>
        <Footer />
      </FooterBlock>
    </Container>
  )
}

export default Truck

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