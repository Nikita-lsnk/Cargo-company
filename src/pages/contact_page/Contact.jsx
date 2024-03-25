import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'
import Survey from './Survey'
import Footer from '../../components/footbar/Footer'
import { useTranslation } from 'react-i18next'

const Contact = () => {


  const { t, i18n } = useTranslation();

  return (
    <Container>
      <HeaderSection
        title={t("contact_header_section_title")}
        picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1710936432/__2_b4vm3r.jpg"}
        subTitle={t("contact_header_section_subtitle")}
      />
      <ContainerColor>
        <MainText style={{ marginTop: '-40px' }}>
          <MainContainerInfo>

            <BeforeBlock></BeforeBlock>
            <TextInfo>
              <SubTitle>{t("contact_text_info_subtitle_one")}</SubTitle>
            </TextInfo>
            <Survey />
          </MainContainerInfo>
          <SocialBlock>
            <MainInfo>
              <TextBlock>
                <TextTitle>{t("contact_text_title_social_one")}</TextTitle>
              </TextBlock>
              <BlockContact>
                <LinkBlock>
                  <SocialLink href='https://www.facebook.com/profile.php?id=61557774836368' target="_blank"><SocialImgMini src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1700994320/icons8-facebook-67_eo9s19.png" /></SocialLink>
                  <SocialLink><SocialImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1700994320/icons8-twitter-circled-96_i607zo.png" /></SocialLink>
                  <SocialLink><SocialImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1700994320/icons8-google-plus-60_jeued2.png" /></SocialLink>
                  <SocialLink href='https://www.instagram.com/arontrack?igsh=MW5yZzBnZjdxZ2gyeA%3D%3D&utm_source=qr' target='_blank'><SocialImgMini src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1700994320/icons8-instagram-96_bmn4xt.png" /></SocialLink>

                </LinkBlock>
              </BlockContact>
            </MainInfo>

            <MainInfo>
              <TextBlock>
                <TextTitle>{t("contact_text_title_social_two")}</TextTitle>
              </TextBlock>
              <BlockContact>
                <LinkBlock>
                  <ImgPhone src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1697996141/icons8-phone-64_lbzfb5.png" />
                  <TitleLink href="tel:+420775586626">+420-775-586-626</TitleLink>
                </LinkBlock>
              </BlockContact>
            </MainInfo>

            <MainInfo>
              <TextBlock>
                <TextTitle>{t("contact_text_title_social_three")}</TextTitle>
              </TextBlock>
              <BlockContact>
                <LinkBlock>
                  <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1697996141/icons8-circled-envelope-48_t4ppek.png" />
                  <TitleLink href="mailto:test@test.ru">test@test.ru</TitleLink>
                </LinkBlock>
              </BlockContact>
            </MainInfo>

            <MainInfo>
              <TextBlock>
                <TextTitle>{t("contact_text_title_social_four")}</TextTitle>
              </TextBlock>
              <BlockContact>
                <LinkBlock>
                  <ImgPhone src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698077437/jbmvpw2qd7bewrla0aor.png" />
                  <TitleLink>{t("contact_text_title_social_four_1")}</TitleLink>
                </LinkBlock>
              </BlockContact>
            </MainInfo>

            <MainInfo>
              <TextBlock>
                <TextTitle>{t("contact_text_title_social_five")}</TextTitle>
              </TextBlock>
              <BlockContact>
                <LinkBlockBills>
                  <ImgPhone src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1700943762/icons8-info-50_srhiog.png" />
                  <TitleLink>{t("contact_text_title_social_five_1")}<br />
                  {t("contact_text_title_social_five_2")}<br />
                  {t("contact_text_title_social_fiv_3")}<br />
                  {t("contact_text_title_social_fiv_4")}<br />
                  {t("contact_text_title_social_five_5")} <b>{t("contact_text_title_social_five_6")}</b>
                  </TitleLink>
                </LinkBlockBills>
              </BlockContact>
            </MainInfo>

          </SocialBlock>


        </MainText>
      </ContainerColor>
      <FooterBlock>
        <Footer
          contactTitle={"contactTitle"}
        />
      </FooterBlock>


    </Container>
  )
}

export default Contact

const SocialLink =styled.a`
  text-decoration: none;
  margin: 0;
  padding: 0;
`;

const ContainerColor = styled.div`
  width: 100%;
  background-color: #f2f6ff;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const FooterBlock = styled.div`
  padding-top: 40px;
`;

const SocialImg = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const SocialImgMini = styled.img`
  width: 33px;
  height: 33px;
  cursor: pointer;
`;

const SocialBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  
`;

const MainInfo = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TextBlock = styled.div`
  /* padding-bottom: 10px; */
  border-bottom: 1px solid #d4cfcf;
`;

const TextTitle = styled.span`
  color: #393a3c;
  font-size: 20px;
  font-weight: 700;
  &::after{
    content: '';
    display: flex;
    width: 60px;
    padding-bottom: 10px;
    border-bottom: 1px solid  #3256A4;
  }
  /* border-bottom: 1px solid  #3256A4;
  padding-bottom: 20px; */
`;

const BlockContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const LinkBlock = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 10px;
`;

const LinkBlockBills = styled(LinkBlock)`
  align-items: start;
`;

const ImgPhone = styled.img`
  width: 32px;
  height:32px;
  cursor: pointer;
`;

const Img = styled.img`
  margin-left: -3px;
  width: 38px;
  height:38px;
  cursor: pointer;
`;

const TitleLink = styled.a`
  text-decoration: none;
  color: #3256A4;
`;


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 100px; */
  margin-bottom: 40px;
  /* margin-bottom: 50px; */
`;

const MainContainerInfo = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  width: 70%;
`;

const MainText = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  /* flex-direction: column;  */
  gap: 40px;
  /* justify-content: center; */
  align-items: flex-start;
  @media screen and (max-width: 1240px) {
    margin: 0 auto;
    width: calc(100% - 80px);
  }
  @media screen and (max-width: 840px) {
    flex-direction: column;
    /* align-items: center; */
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
`;

const SubTitle = styled.span`
  color: #747474;
  font-size: 16px;
  line-height: 1.375;
`;