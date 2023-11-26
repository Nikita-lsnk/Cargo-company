import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'
import Survey from './Survey'

const Contact = () => {
  return (
    <Container>
      <HeaderSection
        title={"Kontakt"}
        firstSub={"Úvod"}
        firstLink={"home"}
        secondSub={"Kontakt"}
        secondLink={"contact"}
      />

      <MainText>
        <MainContainerInfo>
          <MainTitle>
            <Title>Máte otázky nebo potřebujete objednat naše služby?</Title>
          </MainTitle>
          <BeforeBlock></BeforeBlock>
          <TextInfo>
            <SubTitle>Nabízíme různé způsoby spojení, které jsou k dispozici 24/7. Můžete nám napsat e-mail, vyplnit rychlý kontaktní formulář nebo jednoduše zavolat. Vaše pohodlí je naší prioritou. Jsme tady pro vás. </SubTitle>
          </TextInfo>
          <Survey/>
        </MainContainerInfo>
        <SocialBlock>
          <MainInfo>
            <TextBlock>
              <TextTitle>Social</TextTitle>
            </TextBlock>
            <BlockContact>
              <LinkBlock>
                <SocialImgMini src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1700994320/icons8-facebook-67_eo9s19.png" />
                <SocialImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1700994320/icons8-twitter-circled-96_i607zo.png" />
                <SocialImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1700994320/icons8-google-plus-60_jeued2.png" />
                <SocialImgMini src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1700994320/icons8-instagram-96_bmn4xt.png" />
                
              </LinkBlock>
            </BlockContact>
          </MainInfo>

          <MainInfo>
            <TextBlock>
              <TextTitle>Phone</TextTitle>
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
              <TextTitle>E-mail</TextTitle>
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
              <TextTitle>Fakturační adresa</TextTitle>
            </TextBlock>
            <BlockContact>
              <LinkBlock>
                <ImgPhone src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698077437/jbmvpw2qd7bewrla0aor.png" />
                <TitleLink>Hartigová 2453/235, Praha 3 – Žižkov, 130 00, Praha, Česká Republika</TitleLink>
              </LinkBlock>
            </BlockContact>
          </MainInfo>

          <MainInfo>
            <TextBlock>
              <TextTitle>Fakturační údaje </TextTitle>
            </TextBlock>
            <BlockContact>
              <LinkBlockBills>
                <ImgPhone src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1700943762/icons8-info-50_srhiog.png" />
                <TitleLink>AronTrack<br />
                  Alex Savčuk<br />
                  IČO 29057256<br />
                  DIČ CZ8408023943<br />
                  Datová schránka <b>5672i83</b>
                </TitleLink>
              </LinkBlockBills>
            </BlockContact>
          </MainInfo>

        </SocialBlock>

      </MainText>



    </Container>
  )
}

export default Contact

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
  gap: 100px;
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