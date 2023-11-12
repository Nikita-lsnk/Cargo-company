import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'

const Program = () => {
  return (
    <Container>
      <HeaderSection
        title={"Věrnostní program"}
        firstSub={"Úvod"}
        firstLink={"home"}
        secondSub={"Věrnostní program"}
        secondLink={"program"}
      />
      <MainText>
        <MainTitle>
          <Title>Věrnost se vyplácí s AronTrack Rewards.</Title>
        </MainTitle>
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
              <Img/>
              <SubTitle>Zlatý status: 3% sleva na každou jízdu (po 1. pronájmu). </SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              <Img/>
              <SubTitle>Platinový status: 5% sleva na každou jízdu (po 5. pronájmu).</SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              <Img/>
              <SubTitle>Diamantový status: 7% sleva na každou jízdu (po 10. pronájmu).</SubTitle>
            </SubTitleItem>
          </AdvantBlock>


        </TextInfo>
      </MainText>

    </Container>
  )
}

export default Program

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
  max-width: 900px;
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
  align-items: center;
`;

const Img = styled.img``;

const SubTitleItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;