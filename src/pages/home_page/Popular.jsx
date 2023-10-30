import React from 'react'
import styled from 'styled-components'
import PopularItem from './PopularItem'

const Popular = () => {
  return (

    <ContainerColor>
      <Container>
        <MainTitle>
          <Title>Preferovaná Doprava a Přeprava</Title>
        </MainTitle>
        <BeforeBlock></BeforeBlock>
        <MainPopular>
          <PopularItem
            picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698242890/Preferovan%D0%B0_Doprava_Transfer_na_leti%D1%87t_od_750_k%D0%AF_2_sa95mg.jpg"}
            price={"od 750 kč"}
            title={"Transfer na letiště"}
          />
          <PopularItem
            picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698242873/Preferovan%D0%B0_Doprava_Okruhy_po_Praze_od_2300_k%D0%AF_wc8plx.jpg"}
            price={"od 2300 kč"}
            title={"Okruhy po Praze"}
          />
          <PopularItem
            picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698242895/Preferovan%D0%B0_Doprava_Svatebn%D0%B1_autobus_od_3000_k%D0%AF_cstiwi.jpg"}
            price={"od 3000 kč"}
            title={"Svatební autobus"}
          />
          <PopularItem
            picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698242892/Preferovan%D0%B0_Doprava_Z%D0%B0jezdy_pro_CK_od_2500_k%D0%AF_crai02.jpg"}
            price={"od 2500 kč"}
            title={"Zájezdy pro CK "}
          />
          <PopularItem
            picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698242875/Preferovan%D0%B0_Doprava_Kamionov%D0%B0_doprava_do_N_mecka_a_zp_t_od_26_k%D0%AF_za_km_k1mou4.jpg"}
            price={"od 26 kč za km"}
            title={"Kamionová doprava do Německa a zpět"}
          />
          <PopularItem
            picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698242863/Preferovan%D0%B0_Doprava_a_P_eprava_Osobn%D0%B1_idi%D0%AF_za_850_k%D0%AF_na_hod_evrfqc.jpg"}
            price={"za 850 kč na hod"}
            title={"Osobní řidič"}
          />

        </MainPopular>
      </Container>
      
      <SpecialBlock>
        <MainText>
          <TitleSpecial>Pronájem Autobusu s Profesionálním Řidičem</TitleSpecial>    
          <MainButton>Více informací</MainButton>
        </MainText>
      </SpecialBlock>
      <DiscountBlock>
        <DiscountTitle>Staňte se členem partnerského programu a získáte větší výhody.</DiscountTitle>
        <DiscountBtn>Více informací</DiscountBtn>
      </DiscountBlock>
    </ContainerColor>
  )
}

export default Popular

const ContainerColor = styled.div`
    width: 100%;
    background-color: #f2f6ff;
    padding-top: 50px;
    /* padding-bottom: 50px; */
    display: flex;
    flex-direction: column;
    gap: 100px;
`;

const Container = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
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
`;

const DiscountBtn = styled.button`
  padding: 15px 35px;
  background-color: #f0e319;
  border: none;
  height: fit-content;
  color: #292a2d;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`;