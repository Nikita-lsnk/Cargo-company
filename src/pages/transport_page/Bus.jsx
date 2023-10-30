import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'

const data = {
  data: [
    {
      text: "pronájem zájezdových autobusů s řidičem",
      advant: "Cestovní kanceláře a agentury (vč. incomingových)",
    },
    {
      text: "mezinárodní a tuzemská zájezdová autobusová doprava pro cestovní kanceláře",
      advant: "Střední a velké firmy (mj. zajišťování zaměstnaneckých svozů)",
    },
    {
      text: "přepravní služby pro firemní klientelu - autobusová doprava na firemní akce, večírky, teambuilding",
      advant: "Školské instituce (MŠ, ZŠ, SŠ i VŠ)",
    },
    {
      text: "autobusové transfery na letiště a z letiště",
      advant: "Neziskové instituce",
    },
    {
      text: "okružní jízdy a transfery po Praze",
      advant: "Různá zájmová sdružení a spolky",
    },
    {
      text: "doprava pro kongresy ",
      advant: "Soukromé osoby",
    },

    {
      text: "doprava a přepravní služby pro sportovní kluby",
      advant: "Sportovní oddíly",
    },
    {
      text: "autobusová doprava dětí na dětské tábory a školy v přírodě",
      advant: "Subjekty státní správy a další.",
    },

    {
      text: "nepravidelná zájezdová doprava po České republice a celé Evropské unii",
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
      />
      <MainText>
        <MainTitle>
          <Title>Autobusová přeprava.</Title>
        </MainTitle>
        <BeforeBlock></BeforeBlock>
        <TextInfo>
          <SubTitle>Služby firmy AronTrack jsou zaměřeny především na českou a zahraniční zájezdovou autobusovou dopravu a přepravu osob.</SubTitle>
        </TextInfo>
        <TextInfo>
          {data.data.map((e) => (
            <AdvantBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg" />
              <SubTitle>{e.text}</SubTitle>
            </AdvantBlock>
          ))}

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
          <SubTitle>Cenu za dopravu Vám operativně zpracujeme dle termínu, programu, počtu osob. V případě zájmu neváhejte nás kontaktovat na lince: +420-775-586-626</SubTitle>
        </TextInfo>
      </MainText>
    </Container>
  )
}

export default Bus

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