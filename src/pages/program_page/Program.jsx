import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'
import Footer from '../../components/footbar/Footer'

const Program = () => {
  return (
    <Container>
      <HeaderSection
        title={"Věrnostní program"}
        firstSub={"Úvod"}
        firstLink={"home"}
        secondSub={"Věrnostní program"}
        secondLink={"program"}
        picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1703023916/%D1%84%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0_%D0%BB%D0%BE%D1%8F%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_d8asqc.jpg"}
        subTitle={'Věrnost se vyplácí s "AronTrack Rewards".'}
      />
      <MainText style={{marginTop: '-40px'}}>
        <BeforeBlock></BeforeBlock>
        <TextInfo>
          <SubTitle>Vítejte v našem věrnostním programu "AronTrack Rewards"! Jsme si vědomi, že naši stálí zákazníci jsou pro nás tím nejcennějším, a proto jsme pro vás připravili tento program, který vám nabídne jedinečný a individuální přístup. Jsme si jisti, že si zasloužíte odměnu za vaši loajalitu, a proto vám poskytneme exkluzivní výhody, které oceníte. Staňte se členem našeho věrnostního programu a vyzkoušejte tyto výhody na vlastní zkušenost!</SubTitle>
        </TextInfo>
        <TextInfoSub>Systém odměn:</TextInfoSub>
        <TextInfo>

          <AdvantBlock>
            {/* <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" /> */}
            <SubTitle>1. Sleva pro stálé zákazníky: Všichni účastníci programu automaticky získají status stálého zákazníka po prvním úspěšném pronájmu. Sleva se uděluje na každou následující jízdu a závisí na celkovém objemu rezervací:</SubTitle>
            <SubTitleItem>
              {/* <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699864726/icons8-diamond-48_2_ew58bt.png"/> */}
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/>
              <SubTitle>Zlatý status: 3% sleva na každou jízdu (po 1. pronájmu). </SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              {/* <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699864726/icons8-diamond-48_1_isvrvn.png"/> */}
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/>
              <SubTitle>Platinový status: 5% sleva na každou jízdu (po 5. pronájmu).</SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              {/* <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699864727/icons8-diamond-48_cw7tem.png"/> */}
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/>
              <SubTitle>Diamantový status: 7% sleva na každou jízdu (po 10. pronájmu).</SubTitle>
            </SubTitleItem>
          </AdvantBlock>
          <AdvantBlock>
            {/* <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" /> */}
            <br/>
            
            <SubTitle>2.	Bonusy za loajalitu: Po každém 5. úspěšném pronájmu získají zákazníci bonus ve formě další slevy:</SubTitle>
            <SubTitleItem>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/>
              <SubTitle>Po 5. pronájmu: dodatečná sleva 5% na následující jízdu.</SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/>
              <SubTitle>Po 10. pronájmu: dodatečná sleva 10% na následující jízdu.</SubTitle>
            </SubTitleItem>
          </AdvantBlock>

        </TextInfo>
        <TextInfoSub>Dodatečné bonusy:</TextInfoSub>
        <TextInfo>
          <AdvantBlock>
            <SubTitleItem>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/>
              <SubTitle>Speciální nabídky a exkluzivní akce pro účastníky programu.</SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/>
              <SubTitle>Rychlá rezervace a prioritní obsluha pro stálé zákazníky.</SubTitle>
            </SubTitleItem>
          </AdvantBlock>

        </TextInfo>
      </MainText>
      <FooterBlock>
        <Footer />
      </FooterBlock>
    </Container>
  )
}

export default Program

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

const TextInfoSub = styled.span`
  color: #393a3c;
  font-size: 26px;
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