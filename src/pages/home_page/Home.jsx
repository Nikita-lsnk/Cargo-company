import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
import SliderBlock from '../../components/slider/SliderBlock'
import Advant from './Advant'
import Footer from '../../components/footbar/Footer'

import { Link, useNavigate } from 'react-router-dom'

const PopularItem = lazy(() => import('./PopularItem'));

const Home = () => {

  const navigate = useNavigate();

  const handleGoToProgram = () => {
    navigate("/program")
  }

  const handleGoToContact = () => {
    navigate("/contact")
  }

  return (
    <Container>
      <SliderBlock />
      <Advant />
      <ContainerColor>
        <ContainerPopular>
          <MainTitle>
            <Title>Preferovaná doprava a přeprava</Title>
          </MainTitle>
          <BeforeBlock></BeforeBlock>
          <MainPopular>
            <Suspense fallback={<div>Loading...</div>}>
              <PopularItem
                picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699779958/Preferovan%D0%B0_Doprava_Transfer_na_leti%D1%87t_od_750_k%D0%AF_2_1_mqn7n5.jpg"}
                price={"od 750 kč"}
                description={"Nabízíme transfery na letiště včetně Mnichova, Lipska, Vídně a mnoha dalších destinací. Nechte postarat se o vaši pohodlnou dopravu, ať už letíte kamkoliv. S naším transferem na letiště si můžete být jisti, že dorazíte včas a bezpečně."}
                title={"Transfer na letiště"}
              />
              <PopularItem
                picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699779959/Preferovan%D0%B0_Doprava_Okruhy_po_Praze_od_2300_k%D0%AF_h1lplf.jpg"}
                price={"od 2300 kč"}
                description={"Naše individuální transfery a okružní jízdy Prahou jsou ideálním způsobem, jak objevit pohodlně a stylově krásy tohoto fascinujícího města. Naši zkušení řidiči vám zajistí bezstarostný převoz, ať už potřebujete přesun z jednoho místa na druhé, nebo toužíte prozkoumat Pražské památky. S našimi individuálními transfery budete mít možnost efektivně prozkoumávat město bez starostí o dopravu. Prohlédněte si Prahu z pohodlí našich vozidel a užijte si jedinečné zážitky naplno."}
                title={"Okruhy po Praze"}
              />
              <PopularItem
                picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699779958/Preferovan%D0%B0_Doprava_Svatebn%D0%B1_autobus_od_3000_k%D0%AF_qomnvw.jpg"}
                description={"Chápeme, jak náročné a stresující může plánování svatby být.Potřebujete-li ulehčit organizaci přepravy, jsme tu jenon pro vás. Pronájem soukromého svatebního autobusu s profesionálním řidičem je skvělý způsob, jak zajistit pohodlný a spolehlivý převoz pro nevěstu, ženicha a jejich hosty. Překvapte je pohodlnou cestou na obřad, do kostela, obřadní síně nebo na místo konání hostiny. S naším svatebním autobusem si můžete být jisti, že přeprava na vaší svatbě půjde jako po másle: Jednoduše, elegantně a bez zbytečných starostí."}
                price={"od 3000 kč"}
                title={"Svatební autobus"}
              />
              <PopularItem
                picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699779960/Preferovan%D0%B0_Doprava_Z%D0%B0jezdy_pro_CK_od_2500_k%D0%AF_syvgro.jpg"}
                description={"Jste cestovní nebo eventová agentura a hledáte důvěryhodného dopravce, který by vám zajistil bezproblémovou přepravu? Jsme tu, abychom vám poskytli spolehlivé a kvalitní dopravní služby, které přispějí k úspěchu vašich cestovních. S našimi službami si můžete být jisti, že klienti budou mít pohodlnou a bezstarostnou dopravu, což přispěje k celkové spokojenosti a úspěchu vašich akcí."}
                price={"od 2500 kč"}
                title={"Zájezdy pro CK "}
              />
              <PopularItem
                picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699779958/Preferovan%D0%B0_Doprava_Kamionov%D0%B0_doprava_do_N_mecka_a_zp_t_od_26_k%D0%AF_za_km_1_huyx4p.jpg"}
                price={"od 26 kč za km"}
                description={"Naše kamionová doprava do Německa a zpět je profesionálním řešením pro přepravu zboží mezi těmito destinacemi. S našimi spolehlivými kamiony a zkušenými řidiči vám zajistíme bezpečný a efektivní transport nákladu. Naše služby jsou navrženy tak, aby uspokojily vaše logistické potřeby, ať už jde o krátkodobé nebo dlouhodobé přepravy. S námi můžete mít jistotu, že váš náklad dorazí včas a bezpečně na místo určení."}
                title={"Kamionová doprava do Německa a zpět od 26 kč za km"}
              />
              <PopularItem
                picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698242863/Preferovan%D0%B0_Doprava_a_P_eprava_Osobn%D0%B1_idi%D0%AF_za_850_k%D0%AF_na_hod_evrfqc.jpg"}
                price={"za 850 kč na hod"}
                description={"S naším osobním řidičem můžete pohodlně cestovat, nechat se vozit na schůzky, do obchodů, restaurací a kamkoli budete chtít. Zaručujeme vám spolehlivou, bezpečnou a diskrétní přepravu, ať už potřebujete osobního řidiče na krátkou jízdu nebo celý den."}
                title={"Osobní řidič"}
              />
            </Suspense>


          </MainPopular>
          <StyledLink to="/distance"><DiscountBtn>Více informací</DiscountBtn></StyledLink>
        </ContainerPopular>

        <SpecialBlock>

          <MainText>
            <TitleSpecial>Pronájem Autobusu s Profesionálním Řidičem</TitleSpecial>
            {/* <MainButton onClick={handleGoToContact}>Více informací</MainButton> */}
          </MainText>
        </SpecialBlock>
        <DiscountBlock>
          <DiscountTitle>Staňte se členem partnerského programu a získejte větší výhody</DiscountTitle>
          {/* <StyledLink to="/program"> */}
          <DiscountBtn onClick={handleGoToProgram}>Více informací</DiscountBtn>
          {/* </StyledLink> */}
        </DiscountBlock>
      </ContainerColor>
      <Footer />
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  /* margin-bottom: 50px; */
`;

const ContainerColor = styled.div`
    width: 100%;
    background-color: #f2f6ff;
    padding-top: 50px;
    /* padding-bottom: 50px; */
    display: flex;
    flex-direction: column;
    gap: 100px;
`;

const ContainerPopular = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: calc(100% - 80px);
    margin: 0 auto;
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
  margin-left: -55px;
`;

const MainPopular = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 30px;
  width: 100%;
  justify-content: space-between;
  /* gap: 50px; */

`;

const SpecialBlock = styled.div`
  width: 100%;
  height: 560px;
  background: url("https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698071320/ig035rc4kngvk4vqtnqt.jpg") center;
  display: flex;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, transparent 100%);
  }
  @media screen and (max-width: 1200px) {
    height: 350px;
    
  }
`;




const MainText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  gap: 40px;
`;

const TitleSpecial = styled.span`
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  /* max-width: 900px; */
  line-height: 1.13333;
  width: 1170px;
  margin: 0 auto;
  /* text-align: center; */
  @media screen and (max-width: 1200px) {
    font-size: 36px;
    text-align: center;
    max-width: 500px;
  }

`;

const MainButton = styled.button`
  background: #3256A4;
  color: #fff;
  width: fit-content;
  border: 1px solid white;
  padding: 15px 35px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`;


const DiscountBlock = styled.div`
  display: flex;
  background-color: #3256A4; 
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 20px;
`;

const DiscountTitle = styled.span`
  font-size: 46px;
  max-width: 970px;
  text-align: center;
  font-weight: 700;
  color: #fff;
  @media screen and (max-width: 1200px) {
    font-size: 36px;
    text-align: center;
  }
`;

const DiscountBtn = styled.button`
  padding: 15px 35px;
  background-color: #f0e319;
  border: none;
  height: fit-content;
  color: #292a2d;
  font-size: 18px;
  font-weight: 700;
  /* z-index: 1; */
  
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }

  &:active {
    transform: scale(0.99);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;