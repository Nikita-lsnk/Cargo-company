import React from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components'

const Footer = ({contactTitle}) => {

  const { t, i18n } = useTranslation();

  return (
    <Container>
      <MainInfo>
        <LogoBlock>
          <Logo><LogoImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1703025550/AronTrack_C_dcyxlx.svg"/></Logo>
        </LogoBlock>
        <MainTitle>
          <Title>{contactTitle === "contactTitle" ? <b>{t("footer_title_true")}</b> : t("footer_title_false")}
          </Title>
        </MainTitle>
      </MainInfo>
      <MainInfo>
        <TextBlock>
          <TextTitle>{t("footer_contact_title")}</TextTitle>
        </TextBlock>
        <BlockContact>
          <LinkBlock>
            <ImgPhone src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1697996141/icons8-phone-64_lbzfb5.png" />
            <TitleLink href="tel:+420775659784">+420-775-659-784 <TitleLink href="tel:+420775586626">+420-775-586-626</TitleLink></TitleLink>
          </LinkBlock>
          <LinkBlock>
            <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1697996141/icons8-circled-envelope-48_t4ppek.png" />
            <TitleLink href="mailto:info@arontrack.cz">info@arontrack.cz</TitleLink>
          </LinkBlock>
          {/* <LinkBlock>
            <ImgPhone src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698077437/jbmvpw2qd7bewrla0aor.png" />
            <TitleLink href="mailto:test@test.ru">Location</TitleLink>
          </LinkBlock> */}
        </BlockContact>

      </MainInfo>
    </Container>
  )
}

export default Footer

const LogoImg = styled.img`
  width: 120px;
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

const ImgPhone = styled.img`
  width: 24px;
  height:24px;
  cursor: pointer;
`;

const Img = styled.img`
  margin-left: -3px;
  width: 30px;
  height:30px;
  cursor: pointer;
`;

const TitleLink = styled.a`
  text-decoration: none;
  color: #3256A4;
  font-size: 14px;
`;

const Container = styled.div`
  width: 1170px;
  margin: 0 auto;
  padding-bottom: 60px;
  display: flex;
  gap: 60px;
  @media screen and (max-width: 1200px) {
    width: calc(100% - 80px);
    margin: 0 auto;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  /* margin-top: 20px; */
  
`;

const MainInfo = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LogoBlock = styled.div`

`;

const Logo = styled.span`

`;

const MainTitle = styled.div`

`;

const Title = styled.span`
  color: #8f8f8f;
  font-size: 12px;
  line-height: 1.375;
  font-style: italic;
  
`;

const TextBlock = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #d4cfcf;
`;

const TextTitle = styled.span`
  color: #393a3c;
  font-size: 14px;
  font-weight: 700;
  border-bottom: 1px solid  #3256A4;
  padding-bottom: 20px;
`;