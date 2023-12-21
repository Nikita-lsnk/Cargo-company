import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'
import Footer from '../../components/footbar/Footer'

const Truck = () => {
  return (
    <Container>
      <HeaderSection
        title={"Služby"}
        firstSub={"Úvod"}
        firstLink={"home"}
        secondSub={"Služby"}
        secondLink={"truck"}
        picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1703023916/%D1%84%D0%BE%D0%BD_%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D1%8B_%D0%B3%D1%80%D1%83%D0%B7%D0%BE%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B7%D0%BA%D0%B8_udggfc.jpg"}
        subTitle={"Mezinárodní nákladní doprava"}
      />
      <MainText style={{marginTop: '-40px'}}>
        
        <BeforeBlock></BeforeBlock>
        <TextInfo>
          <SubTitle>Hledáte spolehlivého partnera pro přepravu Vašich zásilek? Rychle a bezpečně dopravíme Vaši zásilku v rámci silniční přepravy do celé Evropy. <b>Pro tuzemské dopravy nabízíme návěsy o nosnosti 25 tun.</b></SubTitle>
        </TextInfo>
        <TextInfo>
          <AdvantBlock>
            <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
            <SubTitle>Rychlá přeprava zásilky na místo určení</SubTitle>
          </AdvantBlock>
          <AdvantBlock>
            <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
            <SubTitle>Vlastní vozidla značky DAF se sledováním GPS</SubTitle>
          </AdvantBlock>
          <AdvantBlock>
            <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
            <SubTitle>Možnost dlouhodobé spolupráce. </SubTitle>
          </AdvantBlock>
          <AdvantBlock>
            <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
            <SubTitle>Zajišťujeme vnitrostátní a mezinárodní autodopravu.</SubTitle>
          </AdvantBlock>
          <AdvantBlock>
            <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
            <SubTitle>Autodoprava od 100 kg do 25 tun</SubTitle>
          </AdvantBlock>
          <AdvantBlock>
            <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
            <SubTitle>Využíváme jak vlastní vozy, tak prověřené smluvní partnery</SubTitle>
          </AdvantBlock>
        </TextInfo>
        <TextInfo>
          <SubTitle>Všechny naše služby splňují přísné požadavky Dohody o přepravní smlouvě v mezinárodní silniční přepravě (CMR).</SubTitle>
        </TextInfo>
      </MainText>
      <FooterBlock>
        <Footer />
      </FooterBlock>
    </Container>
  )
}

export default Truck

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