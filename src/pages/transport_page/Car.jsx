import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'
import Footer from '../../components/footbar/Footer'

const Car = () => {
  return (
    <Container>
      <HeaderSection
        title={"Služby"}
        firstSub={"Úvod"}
        firstLink={"home"}
        secondSub={"Služby"}
        secondLink={"car"}
        picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1703023916/%D1%84%D0%BE%D0%BD_%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D1%8B_%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B9_%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BF%D0%BE%D1%80%D1%82_jwkahi.jpg"}
        subTitle={"Osobní přeprava"}
      />
      <MainText style={{ marginTop: '-40px' }}>

        <BeforeBlock></BeforeBlock>
        <TextInfo>
          <SubTitle>Osobní přeprava – naše specializace spočívá v flexibilní přepravě jednotlivců a skupin přesně tam, kam to potřebujete. Naší specializací a hlavním zaměřením v portfoliu služeb je doprava na letiště v Praze a okolí, včetně Letiště Václava Havla a letiště v Karlových Varech.</SubTitle>
        </TextInfo>
        <TextInfo>
          <SubTitle>Pro zajištění komplexních potřeb našich klientů máme k dispozici moderní vozidla vyšší střední třídy. Všechny naše vozy jsou vybavené klimatizací, udržujeme je v dokonalém technickém stavu a dbáme na jejich čistotu. V případě dohody předem přijede náš řidič na místo, které si stanovíte. Pokud přilétáte z ciziny, rádi na vás počkáme přímo v příletové hale letiště s cedulkou s Vaším jménem nebo jménem vaší firmy. Pro naše mladé cestující je možné dohodnout dětskou autosedačku.
            </SubTitle>
        </TextInfo>
        <TextInfo>
          <SubTitle>
            Neváhejte nás kontaktovat kdykoliv potřebujete.</SubTitle>
        </TextInfo>
      </MainText>
      <FooterBlock>
        <Footer />
      </FooterBlock>
    </Container>
  )
}

export default Car

const FooterBlock = styled.div`
  margin-top: -60px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
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