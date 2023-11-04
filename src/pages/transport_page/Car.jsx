import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'

const Car = () => {
  return (
    <Container>
      <HeaderSection
        title={"Služby"}
        firstSub={"Úvod"}
        firstLink={"home"}
        secondSub={"Služby"}
        secondLink={"car"}
      />
      <MainText>
        <MainTitle>
          <Title>Privátní osobní přeprava.</Title>
        </MainTitle>
        <BeforeBlock></BeforeBlock>
        <TextInfo>
          <SubTitle>Osobní privátní přeprava – naše specializace spočívá v flexibilní přepravě jednotlivců a skupin přesně tam, kam to potřebujete. Naše specializací a hlavním zaměřením v portfoliu služeb je doprava na letiště v Praze a okolí, včetně Letiště Václava Havla a Karlových Varů.</SubTitle>
        </TextInfo>
        <TextInfo>
          <SubTitle>Pro zajištění komplexních potřeb našich klientů máme k dispozici moderní vozidla vyšší střední třídy. Všechny naše vozy jsou vybaveny klimatizací, udržujeme je v dokonalém technickém stavu a dbáme na jejich čistotu. V případě dohody předem přijede náš řidič na místo, které si stanovíte. Pokud přilétáte z ciziny, rádi na vás počkáme přímo v příletové hale letiště s cedulkou s Vaším jménem nebo jménem vaší firmy. Pro naše mladé cestující je možné dohodnout dětskou autosedačku. <br/>Neváhejte nás kontaktovat kdykoliv potřebujete.</SubTitle>
        </TextInfo>
      </MainText>
    </Container>
  )
}

export default Car

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