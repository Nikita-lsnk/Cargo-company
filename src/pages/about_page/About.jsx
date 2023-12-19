import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'
import Footer from '../../components/footbar/Footer'

const About = () => {
  return (
    <Container>
      <HeaderSection
        title={"O nás"}
        firstSub={"Úvod"}
        firstLink={"home"}
        secondSub={"O nás"}
        picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1703023917/%D1%84%D0%BE%D0%BD_%D0%BE_%D0%BD%D0%B0%D1%81_nxjzqk.jpg"}
        secondLink={"about"}
        subTitle={"Jedna společnost, nekonečné možnosti."}
      />
      <MainText>
        {/* <MainTitle>
          <Title>Jedna společnost, nekonečné možnosti.</Title>
        </MainTitle> */}
        <BeforeBlock></BeforeBlock>
        <TextInfo>
          <SubTitle>Vítejte na našich webových stránkách! Jsme spolehlivým partnerem pro komplexní dopravní řešení. Od svého založení v roce 2020 jsme se zaměřili na rozvoj našeho širokého portfolia služeb, které zahrnuje pohodlné autobusové přepravy, osobní privátní přepravy s důrazem na vaši pohodlnost a nákladní dopravu, která uspokojí všechny vaše logistické potřeby. S naší firmou získáte spolehlivost, kvalitu a pozornou péči o každý detail. Jsme zde proto, abychom vám poskytli bezpečnou, efektivní a ekonomicky výhodnou dopravu po celé Evropě. Kontaktujte nás a společně najdeme řešení pro vaše transportní výzvy. </SubTitle>
        </TextInfo>
      </MainText>
      <FooterBlock>
        <Footer />
      </FooterBlock>

    </Container>
  )
}

export default About

const FooterBlock = styled.div`
  margin-top: -60px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  /* margin-bottom: 40px; */
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
  margin-top: -40px;
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