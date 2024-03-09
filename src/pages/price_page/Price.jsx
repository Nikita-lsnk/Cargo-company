import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'
import Footer from '../../components/footbar/Footer'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Price = () => {

  const navigate = useNavigate();

  const handleGoToContact = () => {
    navigate("/contact")
  }

  const { t, i18n } = useTranslation();

  return (
    <Container>
      <HeaderSection
        title={t("price_header_section_title")}
        picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1703023917/%D1%84%D0%BE%D0%BD_%D1%86%D0%B5%D0%BD%D1%8B_bk7itq.jpg"}
        
      />
      <ContainerColor>
        <MainText style={{ marginTop: '-40px' }}>
          {/* <MainTitle>
          <Title>Jedna společnost, nekonečné možnosti.</Title>
        </MainTitle> */}
          <BeforeBlock></BeforeBlock>
          <TextInfo>
            <SubTitle>{t("price_subtitle_one")}</SubTitle>
            <SubTitle>{t("price_subtitle_two")}</SubTitle>
            <SubTitle>{t("price_subtitle_three")}</SubTitle>
            <SubTitle>{t("price_subtitle_four_1")} <b onClick={handleGoToContact} style={{ cursor: 'pointer' }}>{t("price_subtitle_four_button")}</b> {t("price_subtitle_four_2")}  </SubTitle>
          </TextInfo>
          <TextInfoSub>{t("price_text_info_one")}</TextInfoSub>
          <TextInfo>
            <AdvantBlock>
              <SubTitleItem>
                {/* <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/> */}
                <SubTitle> {t("price_advant_subtitle_one")}</SubTitle>
              </SubTitleItem>
              <SubTitleItem>
                {/* <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/> */}
                <SubTitle>{t("price_advant_subtitle_two")}</SubTitle>
              </SubTitleItem>
              <SubTitleItem>
                <SubTitle>{t("price_advant_subtitle_three")}</SubTitle>
              </SubTitleItem>
              <SubTitleItem>
                <SubTitle>{t("price_advant_subtitle_four")}</SubTitle>
              </SubTitleItem>
              <SubTitleItem>
                <SubTitle>{t("price_advant_subtitle_five")}</SubTitle>
              </SubTitleItem>
            </AdvantBlock>

          </TextInfo>
          <TextInfoSub>{t("price_text_info_two")}</TextInfoSub>
          <TextInfo>
            <AdvantBlock>
              <SubTitleItem>
                <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                <SubTitle>{t("price_advant_two_subtitle_one")}</SubTitle>
              </SubTitleItem>
              <SubTitleItem>
                <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                <SubTitle>{t("price_advant_two_subtitle_two")} </SubTitle>
              </SubTitleItem>
              <SubTitleItem>
                <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                <SubTitle>{t("price_advant_two_subtitle_three")}</SubTitle>
              </SubTitleItem>
              <SubTitleItem>
                <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                <SubTitle>{t("price_advant_two_subtitle_four")}</SubTitle>
              </SubTitleItem>
              <SubTitleItem>
                <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                <SubTitle>{t("price_advant_two_subtitle_five")}</SubTitle>
              </SubTitleItem>
              <SubTitleItem>
                <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                <SubTitle>{t("price_advant_two_subtitle_six")}</SubTitle>
              </SubTitleItem>
              <SubTitleItem>
                <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                <SubTitle>{t("price_advant_two_subtitle_seven")}</SubTitle>
              </SubTitleItem>
              <SubTitleItem>
                <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                <SubTitle>{t("price_advant_two_subtitle_eight")} </SubTitle>
              </SubTitleItem>
              <SubTitleItem>
                <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                <SubTitle>{t("price_advant_two_subtitle_nine")}</SubTitle>
              </SubTitleItem>

            </AdvantBlock>

          </TextInfo>
          <TextInfoSub>{t("price_text_info_three")}</TextInfoSub>
          <TextInfo>
            <SubTitle>{t("price_text_info_four")}</SubTitle>
          </TextInfo>
        </MainText>
      </ContainerColor>
      <FooterBlock>
        <Footer />
      </FooterBlock>
    </Container>
  )
}

export default Price

const ContainerColor = styled.div`
  width: 100%;
  background-color: #f2f6ff;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const FooterBlock = styled.div`
  padding-top: 40px;
`;

const TextInfoSub = styled.span`
  color: #393a3c;
  font-size: 26px;
  font-weight: 700;
  @media screen and (max-width: 640px) {
    font-size: 18px;
  }
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
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SubTitle = styled.span`
  color: #747474;
  font-size: 16px;
  line-height: 1.375;
`;

const AdvantBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  /* align-items: center; */
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
`;

const SubTitleItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  gap: 10px;
  margin-left: 40px;
`;