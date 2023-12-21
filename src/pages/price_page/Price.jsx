import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'
import Footer from '../../components/footbar/Footer'
import { useNavigate } from 'react-router-dom'

const Price = () => {

  const navigate = useNavigate();

  const handleGoToContact = () => {
    navigate("/contact")
  }


  return (
    <Container>
      <HeaderSection
        title={"Ceny"}
        firstSub={"Úvod"}
        firstLink={"home"}
        secondSub={"Ceny"}
        picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1703023917/%D1%84%D0%BE%D0%BD_%D1%86%D0%B5%D0%BD%D1%8B_bk7itq.jpg"}
        secondLink={"price"}
      />
      <MainText style={{marginTop: '-40px'}}>
        {/* <MainTitle>
          <Title>Jedna společnost, nekonečné možnosti.</Title>
        </MainTitle> */}
        <BeforeBlock></BeforeBlock>
        <TextInfo>
          <SubTitle>Celková cena naší dopravy závisí na několika faktorech, jako je počet ujetých kilometrů, typů vozů, doba čekání a místo určení, ať už se jedná o vnitrostátní či mezinárodní trasu. V případě vnitrostátních cest může cena záviset na počtu najetých kilometrů, doby čekání nebo být stanovena paušálně. Mezinárodní cesty v rámci Evropy zahrnují cenu za přepravu v jednotlivých zemích a každá země může mít svá vlastní pravidla pro zdanění přepravy osob. Cena se tedy vždy odvíjí od délky trasy a států, kterými projíždíme. </SubTitle>
          <SubTitle>Naše <b>paušální cena</b> za autobusovou dopravu je flexibilní a závisí na typu vozu a počtu najetých kilometrů. Začíná od 6 000 Kč + DPH a platí pro výjezdy, které nepřekračují 100 km. Tato cena zahrnuje 2 hodiny čekání autobusu, náklady spojené s provozem na kratší vzdálenosti, denní mzdu řidiče včetně odvodů, náklady na přípravu zakázky a také úklid vozu. S touto transparentní cenovou strukturou vám můžeme poskytnout kvalitní dopravu za férovou cenu.</SubTitle>
          <SubTitle><b>Kvůli těmto faktorům není možné stanovit pevný ceník, a proto je nezbytné vytvořit předpokládanou cenovou kalkulaci, která bere v úvahu výše zmíněná kritéria.</b></SubTitle>
          <SubTitle>Konkrétní cenu přepravy sjednáme individuálně, dlouhodobým zákazníkům poskytujeme zajímavé ceny. Cenovou kalkulaci Vám vypracujeme po vyplnění <b onClick={handleGoToContact} style={{cursor: 'pointer'}}>poptávkového formuláře</b> nebo zaslání e-mailu s požadavkem na adresu. </SubTitle>
        </TextInfo>
        <TextInfoSub>Pro co nejpřesnější výpočet nám prosím zašlete následující informace e-mailem:</TextInfoSub>
        <TextInfo>
          <AdvantBlock>
            <SubTitleItem>
              {/* <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/> */}
              <SubTitle> 1. Datum a orientační časy odjezdu a příjezdu</SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              {/* <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/> */}
              <SubTitle>2. Výchozí a cílové místo, kde budete čekat na přistavení vozidla</SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              <SubTitle>3. Orientační počet osob</SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              <SubTitle>4. Zvláštní požadavky, jako je potřeba přívěsu na velké zavazadlo, cyklovleku apod.</SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              <SubTitle>5. Kontaktní osoba, telefonní číslo a fakturační údaje (pokud jsou relevantní).</SubTitle>
            </SubTitleItem>
          </AdvantBlock>

        </TextInfo>
        <TextInfoSub>Naše cenová kalkulace zohledňuje to, že:</TextInfoSub>
        <TextInfo>
          <AdvantBlock>
            <SubTitleItem>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/>
              <SubTitle>Máme platné oprávnění k provozování osobní a nákladní silniční dopravy v (po) celé Evropě.</SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/>
              <SubTitle>Všechna naše vozidla jsou řádně pojištěna. </SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/>
              <SubTitle>Všichni vozy prošly řádnou technickou kontrolou, procházejí pečlivou údržbou a mají předepsanou výbavu</SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/>
              <SubTitle>Všechny naše autobusy mají bezpečnostní pásy pro cestující.</SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/>
              <SubTitle>Řidiči jsou pravidelně školení zaměstnanci firmy s platným řidičským i profesním průkazem a dostatkem zkušeností</SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/>
              <SubTitle>Řidiči mají k dispozici plán cesty a dodržují stanovené přestávky</SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/>
              <SubTitle>Řidiči zohledňují fyziologické potřeby cestujících</SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/>
              <SubTitle>Jsme schopni poskytnout náhradní vozidlo v případě neočekávané poruchy </SubTitle>
            </SubTitleItem>
            <SubTitleItem>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1687096233/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_esuy0n.svg"/>
              <SubTitle>Dispečink je Vám k dispozici 24 hod. denně a můžete s námi komunikovat i prostřednictvím internetu.</SubTitle>
            </SubTitleItem>

          </AdvantBlock>

        </TextInfo>
        <TextInfoSub>Storno podmínky</TextInfoSub>
        <TextInfo>
          <SubTitle>Storno podmínky účtujeme individuálně, dle velikosti zakázky a vzájemné dohody.</SubTitle>
        </TextInfo>
      </MainText>
      <FooterBlock>
        <Footer />
      </FooterBlock>
    </Container>
  )
}

export default Price

const FooterBlock = styled.div`
  margin-top: -60px;
`;

const TextInfoSub = styled.span`
  color: #393a3c;
  font-size: 26px;
  font-weight: 700;
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
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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