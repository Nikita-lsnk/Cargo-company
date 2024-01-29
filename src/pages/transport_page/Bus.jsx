import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'
import Footer from '../../components/footbar/Footer';

const data = {
  data: [
    {

      advant: "Cestovní kanceláře a agentury (vč. incomingových)",
    },
    {

      advant: "Střední a velké firmy (mj. zajišťování zaměstnaneckých svozů)",
    },
    {
      advant: "Školské instituce (MŠ, ZŠ, SŠ i VŠ)",
    },
    {
      advant: "Neziskové instituce",
    },
    {

      advant: "Různá zájmová sdružení a spolky",
    },
    {

      advant: "Soukromé osoby",
    },

    {
      advant: "Sportovní oddíly",
    },
    {

      advant: "Subjekty státní správy a další.",
    },
  ],
};

const Bus = () => {
  return (
    <Container>
      <HeaderSection
        title={"Služby"}
        firstSub={"Úvod"}
        firstLink={"home"}
        secondSub={"Služby"}
        secondLink={"bus"}
        picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1703023916/%D1%84%D0%BE%D0%BD_%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D1%8B_%D0%B0%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81_f01l0z.jpg"}
        subTitle={"Autobusová přeprava"}
      />
      <ContainerColor>
        <MainText style={{ marginTop: '-40px' }}>
          {/* <MainTitle>
          <Title>Autobusová přeprava.</Title>
        </MainTitle> */}
          <BeforeBlock></BeforeBlock>
          <TextInfo>
            <SubTitle>Služby firmy AronTrack jsou zaměřeny především na českou a zahraniční zájezdovou autobusovou dopravu a přepravu osob.</SubTitle>
          </TextInfo>
          <TextInfo>
            <AdvantBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
              <SubTitle><b>pronájem zájezdových autobusů</b> s řidičem</SubTitle>
            </AdvantBlock>
            <AdvantBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
              <SubTitle>mezinárodní a tuzemská <b>zájezdová autobusová doprava</b> pro cestovní kanceláře</SubTitle>
            </AdvantBlock>
            <AdvantBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
              <SubTitle>přepravní služby pro firemní klientelu - <b>autobusová doprava na firemní akce</b>, večírky, teambuilding</SubTitle>
            </AdvantBlock>
            <AdvantBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
              <SubTitle>autobusové <b>transfery na letiště</b> a z letiště</SubTitle>
            </AdvantBlock>
            <AdvantBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
              <SubTitle>okružní jízdy a <b>transfery po Praze</b></SubTitle>
            </AdvantBlock>
            <AdvantBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
              <SubTitle>doprava pro kongresy</SubTitle>
            </AdvantBlock>
            <AdvantBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
              <SubTitle>doprava a přepravní služby pro <b>sportovní kluby</b></SubTitle>
            </AdvantBlock>
            <AdvantBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
              <SubTitle>autobusová doprava dětí na dětské tábory a <b>školy v přírodě</b></SubTitle>
            </AdvantBlock>
            <AdvantBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
              <SubTitle><b>nepravidelná zájezdová doprava</b> po České republice a celé Evropské unii</SubTitle>
            </AdvantBlock>
          </TextInfo>

          <MainTitle>
            <Title>Našimi zákazníky jsou:</Title>
          </MainTitle>
          <BeforeBlock></BeforeBlock>
          <TextInfo>
            {data.data.map((e) => (
              <AdvantBlock>
                {e.advant ?
                  <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
                  :
                  ""
                }

                <SubTitle>{e.advant}</SubTitle>
              </AdvantBlock>
            ))}

          </TextInfo>
          <TextInfo>
            <SubTitle>Cenu za dopravu Vám operativně zpracujeme dle termínu, programu a počtu osob. V případě zájmu nás neváhejte kontaktovat.</SubTitle>
          </TextInfo>
        </MainText>
      </ContainerColor >
      <FooterBlock>
        <Footer />
      </FooterBlock>
    </Container >
  )
}

export default Bus

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
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
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