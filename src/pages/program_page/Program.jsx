import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'
import Footer from '../../components/footbar/Footer'
import { useTranslation } from 'react-i18next'

const Program = () => {

  const { t, i18n } = useTranslation();

  return (
    <Container>
      <HeaderSection
        title={t("program_header_section_title")}
        picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1703023916/%D1%84%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0_%D0%BB%D0%BE%D1%8F%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_d8asqc.jpg"}
        subTitle={t("program_header_section_subtitle")}
      />
      <ContainerColor>
        <MainText style={{ marginTop: '-40px' }}>
          <BeforeBlock></BeforeBlock>
          <TextInfo>
            <SubTitle>{t("program_text_info_one")}
            </SubTitle>
          </TextInfo>
          <TextInfoSub>{t("program_text_info_sub_one")}</TextInfoSub>
          <TextInfo>

            <AdvantBlock>
              {/* <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" /> */}
              <SubTitle>{t("program_advant_title_one")}</SubTitle>
              <SubTitleItem>
                {/* <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699864726/icons8-diamond-48_2_ew58bt.png"/> */}
                <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                <SubTitle>{t("program_advant_subtitle_one")}</SubTitle>
              </SubTitleItem>
              <SubTitleItem>
                {/* <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699864726/icons8-diamond-48_1_isvrvn.png"/> */}
                <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                <SubTitle>{t("program_advant_subtitle_two")}</SubTitle>
              </SubTitleItem>
              <SubTitleItem>
                {/* <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699864727/icons8-diamond-48_cw7tem.png"/> */}
                <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                <SubTitle>{t("program_advant_subtitle_three")}</SubTitle>
              </SubTitleItem>
            </AdvantBlock>
            <AdvantBlock>
              {/* <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" /> */}
              <br />

              <SubTitle>{t("program_advant_title_two")}</SubTitle>
              <SubTitleItem>
                <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                <SubTitle>{t("program_advant_subtitle_four")}</SubTitle>
              </SubTitleItem>
              <SubTitleItem>
                <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                <SubTitle>{t("program_advant_subtitle_five")}</SubTitle>
              </SubTitleItem>
            </AdvantBlock>

          </TextInfo>
          <TextInfoSub>{t("program_text_info_sub_two")}</TextInfoSub>
          <TextInfo>
            <AdvantBlock>
              <SubTitleItem>
                <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                <SubTitle>{t("program_advant_subtitle_six")}</SubTitle>
              </SubTitleItem>
              <SubTitleItem>
                <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                <SubTitle>{t("program_advant_subtitle_seven")}</SubTitle>
              </SubTitleItem>
            </AdvantBlock>

          </TextInfo>
        </MainText>
      </ContainerColor>
      <FooterBlock>
        <Footer />
      </FooterBlock>
    </Container>
  )
}

export default Program

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

const TextInfoSub = styled.span`
  color: #393a3c;
  font-size: 26px;
  font-weight: 700;
  @media screen and (max-width: 640px) {
    font-size: 18px;
  }
`;

const BeforeBlock = styled.div`
  height: 4px;
  width: 50px;
  background-color: #3256A4;
  /* margin-left: -55px; */
`;

const TextInfo = styled.div`
  max-width: 1000px;
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