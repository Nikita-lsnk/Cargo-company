import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'
import Footer from '../../components/footbar/Footer';
import { useTranslation } from 'react-i18next';


const PopularItem = lazy(() => import('../home_page/PopularItem'));



const Distance = () => {

  const { t, i18n } = useTranslation();

  const data = {
    data: [
      {
        price: t("main_distance_card_one_price"),
        title: t("main_distance_card_one_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699779958/Preferovan%D0%B0_Doprava_Transfer_na_leti%D1%87t_od_750_k%D0%AF_2_1_mqn7n5.jpg",
        description: t("main_distance_card_one_description"),
      },
      {
        price: t("main_distance_card_two_price"),
        title: t("main_distance_card_two_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810840/Preferovan%D0%B0_Doprava_Okruhy_po_Praze_od_2300_k%D0%AF_rsr20s.jpg",
        description: t("main_distance_card_two_description"),
      },
      {
        price: t("main_distance_card_three_price"),
        title: t("main_distance_card_three_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810833/Preferovan%D0%B0_Doprava_Svatebn%D0%B1_autobus_od_3000_k%D0%AF_zanebv.jpg",
        description: t("main_distance_card_three_description"),
      },
      {
        price: t("main_distance_card_four_price"),
        title: t("main_distance_card_four_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699779960/Preferovan%D0%B0_Doprava_Z%D0%B0jezdy_pro_CK_od_2500_k%D0%AF_syvgro.jpg",
        description: t("main_distance_card_four_description"),
      },
      {
        price: t("main_distance_card_five_price"),
        title: t("main_distance_card_five_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810832/Preferovan%D0%B0_Doprava_Kamionov%D0%B0_doprava_do_N_mecka_a_zp_t_od_26_k%D0%AF_za_km_hjhk8v.jpg",
        description: t("main_distance_card_five_description"),
      },
      {
        price: t("main_distance_card_six_price"),
        title: t("main_distance_card_six_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810833/Preferovan%D0%B0_Doprava_a_P_eprava_Osobn%D0%B1_idi%D0%AF_za_850_k%D0%AF_na_hod_iwinvc.jpg",
        description: t("main_distance_card_six_description"),
      },
      {
        price: t("main_distance_card_seven_price"),
        title: t("main_distance_card_seven_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810834/Z%D0%B0jezdy_do_Karlov%D1%8Cch_Var%D0%95_nt6y1d.jpg",
        description: t("main_distance_card_seven_description"),
      },
      {
        price: t("main_distance_card_eight_price"),
        title: t("main_distance_card_eight_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701033971/pronajem_autobusu_ko8xqj.jpg",
        description: t("main_distance_card_eight_description"),
      },
      {
        price: t("main_distance_card_nine_price"),
        title: t("main_distance_card_nine_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810832/9_Kamionov%D0%B0_doprava_do_Holandsk%D0%B0_a_zp_t_ol9lod.jpg",
        description: t("main_distance_card_nine_description"),
      },
      {
        price: t("main_distance_card_ten_price"),
        title: t("main_distance_card_ten_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810839/Z%D0%B0jezdy_do_Karl%D1%87tejnu_a_Konopi%D1%87t_vzmofm.jpg",
        description: t("main_distance_card_ten_description"),
      },
      {
        price: t("main_distance_card_11_price"),
        title: t("main_distance_card_11_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810835/Autobus_pro_kluby_s52owj.jpg",
        description: t("main_distance_card_11_description"),
      },
      {
        price: t("main_distance_card_12_price"),
        title: t("main_distance_card_12_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810841/12_Business_transport_do_zahrani%D0%AF%D0%B1_1_caz6qv.jpg",
        description: t("main_distance_card_12_description"),
      },
      {
        price: t("main_distance_card_13_price"),
        title: t("main_distance_card_13_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810835/13_Z%D0%B0jezdy_do_K_ivokl%D0%B0tu_n6ct2w.jpg",
        description: t("main_distance_card_13_description"),
      },
      {
        price: t("main_distance_card_14_price"),
        title: t("main_distance_card_14_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810835/14_Z%D0%B0jezdy_do_V%D0%B1dn_rwzyp4.jpg",
        description: t("main_distance_card_14_description"),
      },
      {
        price: t("main_distance_card_15_price"),
        title: t("main_distance_card_15_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810839/15_Z%D0%B0jezdy_do_Terez%D0%B1na_gfaszy.jpg",
        description: t("main_distance_card_15_description"),
      },
      {
        price: t("main_distance_card_16_price"),
        title: t("main_distance_card_16_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701033970/Z%D0%B0jezdy_do_%D0%BCesk%D0%92ho_Krumlov%D0%B0_jfxfqw.webp",
        description: t("main_distance_card_16_description"),
      },
      {
        price: t("main_distance_card_17_price"),
        title: t("main_distance_card_17_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701033970/Dra%D0%B7dany_jyflra.jpg",
        description: t("main_distance_card_17_description"),
      },
      {
        price: t("main_distance_card_18_price"),
        title: t("main_distance_card_18_title"),
        picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810839/18_Z%D0%B0jezdy_do_D_tenic_qebuji.jpg",
        description: t("main_distance_card_18_description"),
      },

    ],
  };

  return (
    <Container>
      <HeaderSection
        title={t("distance_header_section_title")}
        picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1703023918/%D1%84%D0%BE%D0%BD_%D0%B4%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%B8_cvdvty.jpg"}
        subTitle={t("distance_header_section_subtitle")}
      />
      <ContainerColor>
        <MainText style={{ marginTop: '-40px' }}>

          <BeforeBlock></BeforeBlock>
          <TextInfo>


            <Suspense fallback={<div>Loading...</div>}>
              {data.data.map((e) => (
                <PopularItem

                  picture={e.picture}
                  price={e.price}
                  title={e.title}
                  description={e.description}
                />
              ))}
            </Suspense>
          </TextInfo>
        </MainText>
      </ContainerColor>
      <FooterBlock>
        <Footer />
      </FooterBlock>

    </Container>
  )
}

export default Distance

const FooterBlock = styled.div`
  padding-top: 40px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 100px; */
  /* margin-bottom: 40px; */
  /* background-color: #f2f6ff; */
  /* margin-bottom: 50px; */
`;

const ContainerColor = styled.div`
  width: 100%;
  background-color: #f2f6ff;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const MainText = styled.div`
  width: 1170px;
  /* background-color: #f2f6ff; */
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
`;

const BeforeBlock = styled.div`
  height: 4px;
  width: 50px;
  background-color: #3256A4;
  /* margin-left: -55px; */
`;

const TextInfo = styled.div`
  max-width: 1200px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  @media screen and (max-width: 640px) {
    align-items: center;
    justify-content: center;
  }
`;

const SubTitle = styled.span`
  color: #747474;
  font-size: 16px;
  line-height: 1.375;
`;