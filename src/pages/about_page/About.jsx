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
        subTitle={"Jedna společnost, nekonečné možnosti"}
      />
      <ContainerColor>
        <MainText>

          <BeforeBlock></BeforeBlock>
          <TextInfo>
            <SubTitle>Vítejte na našich webových stránkách! Jsme spolehlivým partnerem pro komplexní dopravní řešení. Od svého založení v roce 2020 jsme se zaměřili na rozvoj našeho širokého portfolia služeb, které zahrnuje pohodlné autobusové přepravy, osobní přepravy s důrazem na vaši pohodlnost a nákladní dopravu, která uspokojí všechny vaše logistické potřeby. S naší firmou získáte spolehlivost, kvalitu a pozornou péči o každý detail. Jsme zde proto, abychom vám poskytli bezpečnou, efektivní a ekonomicky výhodnou dopravu po celé Evropě. Kontaktujte nás a společně najdeme řešení pro vaše transportní výzvy. </SubTitle>
            <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1703023917/%D1%84%D0%BE%D1%82%D0%BE_%D0%BE_%D0%BD%D0%B0%D1%81_2_%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82_gcxfwe.jpg" />
            {/* <Img src ="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699811586/ke6kruoozgh8hafl1lhp.jpg"/> */}
          </TextInfo>
        </MainText>
      </ContainerColor>


      <FooterBlock>
        <Footer />
      </FooterBlock>

    </Container>
  )
}

export default About

// const DiscountBlock = styled.div`
//   display: flex;
//   background-color: #3256A4; 
//   justify-content: center;
//   align-items: center;
//   padding: 40px;
//   gap: 20px;
// `;

const Img = styled.img`
  width: 400px;
  height: 200px;
  @media screen and (max-width: 460px) {
      width: 250px;
      height: 150px;
  }
`;

const FooterBlock = styled.div`
  margin-top: 40px;
`;

const ContainerColor = styled.div`
  width: 100%;
  background-color: #f2f6ff;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 100px; */
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
`;

const BeforeBlock = styled.div`
  height: 4px;
  width: 50px;
  background-color: #3256A4;
  /* margin-left: -55px; */
`;

const TextInfo = styled.div`
  max-width: 1100px;
  display: flex;
  gap: 100px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SubTitle = styled.span`
  color: #747474;
  font-size: 16px;
  line-height: 1.375;
`;