import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'
import Footer from '../../components/footbar/Footer';


const PopularItem = lazy(() => import('../home_page/PopularItem'));

const data = {
  data: [
    {
      price: "od 750 kč",
      title: "Transfer na letiště",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699779958/Preferovan%D0%B0_Doprava_Transfer_na_leti%D1%87t_od_750_k%D0%AF_2_1_mqn7n5.jpg",
      description: "Nabízíme transfery na letiště včetně Mnichova, Lipska, Vídně a mnoha dalších destinací. Nechte naší společnost postarat se o vaši pohodlnou dopravu, ať už letíte kamkoliv. S naším transferem na letiště můžete být jisti, že dorazíte včas a bezpečně.",
    },
    {
      price: "od 2300 kč",
      title: "Okruhy po Praze",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810840/Preferovan%D0%B0_Doprava_Okruhy_po_Praze_od_2300_k%D0%AF_rsr20s.jpg",
      description: "Naše individuální transfery po městě a okružní jízdy Prahou jsou způsobem, jak objevit krásy tohoto fascinujícího města v pohodlí a stylu. Naši zkušení řidiči vám zajistí bezstarostný převoz, ať už potřebujete přesun od místa k místu nebo toužíte prozkoumat pamětihodnosti Prahy. S našimi individuálními transfery budete mít možnost pohodlně a efektivně prozkoumávat město bez starostí o dopravu. Ukažte si Prahu z pohodlí našich vozidel a užijte si jedinečné zážitky v tomto nádherném městě.",
    },
    {
      price: "od 3000 kč",
      title: "Svatební autobus",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810833/Preferovan%D0%B0_Doprava_Svatebn%D0%B1_autobus_od_3000_k%D0%AF_zanebv.jpg",
      description: "Při plánování svatby chápeme, jak náročný a stresující proces to může být. Proto jsme tu, abychom vám a vašim hostům ulehčili organizaci přepravy. Pronájem soukromého svatebního autobusu s profesionálním řidičem je skvělým způsobem, jak zajistit pohodlný a spolehlivý převoz pro nevěstu, ženicha a jejich hosty. Překvapte své hosty tím, že je pohodlně dostanete na obřad do kostela, obřadní síně nebo na místo konání hostiny. S naším svatebním autobusem můžete být jisti, že přeprava na vaší svatbě bude jednoduchá, elegantní a bez starostí.",
    },
    {
      price: "od 2500 kč",
      title: "Zájezdy pro CK",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699779960/Preferovan%D0%B0_Doprava_Z%D0%B0jezdy_pro_CK_od_2500_k%D0%AF_syvgro.jpg",
      description: "Jste cestovní nebo incomingová kancelář či eventová agentura a hledáte důvěryhodného dopravce, který by vám zajistil bezproblémovou přepravu? Jsme tu, abychom vám poskytli spolehlivé a kvalitní dopravní služby, které přispějí k úspěchu vašich cestovních aranžmá a událostí. S našimi službami můžete být jisti, že vaši klienti budou mít pohodlnou a bezstarostnou dopravu, což přispěje k celkové spokojenosti a úspěchu vašich akcí.",
    },
    {
      price: "od 26 kč za km",
      title: "Kamionová doprava do Německa a zpět od 26 kč za km",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810832/Preferovan%D0%B0_Doprava_Kamionov%D0%B0_doprava_do_N_mecka_a_zp_t_od_26_k%D0%AF_za_km_hjhk8v.jpg",
      description: "Naše kamionová doprava do Německa a zpět je profesionálním řešením pro přepravu zboží mezi těmito destinacemi. S našimi spolehlivými kamiony a zkušenými řidiči vám zajistíme bezpečný a efektivní transport vašeho nákladu. Naše služby jsou navrženy tak, aby uspokojily vaše logistické potřeby, ať už jde o krátkodobé nebo dlouhodobé přepravy. S námi můžete mít jistotu, že váš náklad dorazí včas a bezpečně na místo určení.",
    },
    {
      price: "za 850 kč na hod",
      title: "Osobní řidič za 850 kč na hod",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810833/Preferovan%D0%B0_Doprava_a_P_eprava_Osobn%D0%B1_idi%D0%AF_za_850_k%D0%AF_na_hod_iwinvc.jpg",
      description: "Naše osobní řidičská služba vám poskytuje možnost mít profesionálního řidiče k dispozici za 850 Kč na hodinu. S naším osobním řidičem můžete pohodlně cestovat, nechat se vozit na schůzky, do obchodů, restaurací a kamkoli budete potřebovat. Zaručujeme vám spolehlivou, bezpečnou a diskrétní přepravu, ať už potřebujete osobního řidiče na krátkou jízdu nebo celý den.",
    },
    {
      price: "od 9000 Kč",
      title: "Zájezdy do Karlových Varů",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810834/Z%D0%B0jezdy_do_Karlov%D1%8Cch_Var%D0%95_nt6y1d.jpg",
      description: "Naše zájezdy do Karlových Varů a zpět jsou skvělým způsobem, jak prozkoumat toto nádherné lázeňské město a okolí. S našimi pečlivě plánovanými zájezdy zajistíme, abyste si mohli plně užít výlet bez starostí o dopravu.",
    },
    {
      price: "od 3000 Kč za 3 hod",
      title: "Pronájem autobusu",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701033971/pronajem_autobusu_ko8xqj.jpg",
      description: "Zajišťujeme bezpečný a pohodlný převoz tam, kam potřebujete. Stačí nám říci, odkud a kam chcete jet. Naše moderní a čisté autobusy jsou připraveny na jakoukoli skupinovou exkurzi nebo výlet. S námi můžete mít jistotu, že dostanete kvalitní a spolehlivou dopravu pro vaši skupinu, ať už jste turistická skupina, školní výlet nebo firemní akce.",
    },
    {
      price: "od 27 kč za km",
      title: "Kamionová doprava do Holandská a zpět",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810832/9_Kamionov%D0%B0_doprava_do_Holandsk%D0%B0_a_zp_t_ol9lod.jpg",
      description: "AronTrack vám nabízí přepravy z Holandska do všech evropských zemí a zpět! Získejte nyní informace a zajistěte si nákladní kapacity!",
    },
    {
      price: "od 7300 Kč",
      title: "Zájezdy do Karlštejnu a Konopiště",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810839/Z%D0%B0jezdy_do_Karl%D1%87tejnu_a_Konopi%D1%87t_vzmofm.jpg",
      description: "Naše dopravní služby do Karlštejna a Konopiště jsou výborným způsobem, jak snadno a pohodlně dostat se k těmto dvěma významným českým hradům. Bez ohledu na to, jestli máte rádi historii, architekturu nebo přírodu, s naší dopravou budete mít zajištěný spolehlivý převoz a možnost prozkoumat tyto zajímavé lokality.",
    },
    {
      price: "od 3000 Kč",
      title: "Autobus pro kluby",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810835/Autobus_pro_kluby_s52owj.jpg",
      description: "Potřebujete přepravu na tréninky, výjezdy na zápasy a mistrovství? Máme bohaté zkušenosti s dopravou sportovců. Bez ohledu na to, jestli jste amatérský tým, juniorský výběr nebo profesionální klub, AronTrack vás odveze. Neexistuje skupina, kterou bychom nezvládli dopravit spolehlivě a pohodlně.",
    },
    {
      price: "od 12 Kč za km",
      title: "Business transport do zahraničí",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810841/12_Business_transport_do_zahrani%D0%AF%D0%B1_1_caz6qv.jpg",
      description: "Naše služby business transportu do zahraničí jsou určeny pro firemní klienty, kteří potřebují spolehlivý a profesionální převoz pro své obchodní cesty a mezinárodní schůzky. S naším business transportem získáte rychlou, bezpečnou a pohodlnou dopravu, která vám umožní plně se soustředit na vaše obchodní záležitosti. Naši řidiči jsou zkušení a diskrétní, a naše vozidla jsou vybavena pohodlným interiérem pro produktivní pracovní prostředí během cesty.",
    },
    {
      price: "od 6200 Kč",
      title: "Zájezdy do Křivoklátu",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810835/13_Z%D0%B0jezdy_do_K_ivokl%D0%B0tu_n6ct2w.jpg",
      description: "Naše půldenní výlety autem nebo autobusem do Křivoklátu jsou dokonalým způsobem, jak prozkoumat tuto gotickou památku uprostřed českého srdce. S naším pohodlným převozem z Prahy se dostanete snadno k tomuto historickému hradu a jeho okolní přírodě.",
    },
    {
      price: "od 17000 Kč",
      title: "Zájezdy do Vídně",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810835/14_Z%D0%B0jezdy_do_V%D0%B1dn_rwzyp4.jpg",
      description: "Naše autobusové služby do Vídně jsou ideálním způsobem, jak se dostat do této úžasné rakouské metropole. S pohodlným a spolehlivým převozem nabízíme cestujícím možnost objevit krásy Vídně bez starostí o řízení nebo parkování.",
    },
    {
      price: "od 6000 Kč",
      title: "Zájezdy do Terezína",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810839/15_Z%D0%B0jezdy_do_Terez%D0%B1na_gfaszy.jpg",
      description: "Podnikněte cestu do města, které za druhé světové války sloužilo jako koncentrační tábor, a naslouchejte příběhům a událostem, které se zde odehrály. S naším komfortním autobusem vás bezpečně a pohodlně dopravíme na tuto historicky významnou lokalitu a zpět.",
    },
    {
      price: "od 9500 Kč",
      title: "Zájezdy do Českého Krumlová",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701033970/Z%D0%B0jezdy_do_%D0%BCesk%D0%92ho_Krumlov%D0%B0_jfxfqw.webp",
      description: "Naše autobusové služby do Českého Krumlova jsou skvělým způsobem, jak se dostat do tohoto malebného českého města. Navíc, na vaše přání, máte možnost navštívit krásný zámek Hluboká nad Vltavou po cestě. S pohodlným převozem a možností zažít historickou a kulturní krásu této oblasti, budete mít zajištěný nezapomenutelný výlet.",
    },
    {
      price: "od 9600 Kč",
      title: "Zájezdy do Drážďan",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701033970/Dra%D0%B7dany_jyflra.jpg",
      description: "Naše autobusové služby do Drážďan jsou navrženy tak, aby byla cesta pro naše klienty co nejpohodlnější a bezstarostná. Všechny poplatky spojené s dopravou a parkováním hradíme my, abychom zajistili, že naši klienti nemusí.",
    },
    {
      price: "od 5000 Kč",
      title: "Zájezdy do Dětenic",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810839/18_Z%D0%B0jezdy_do_D_tenic_qebuji.jpg",
      description: "Naše autobusové služby do Dětenic jsou vynikajícím způsobem, jak se dostat na středověké představení a zároveň se o vás postarat. Na místo příjezdu dorazíme, počkáme na vás a následně vás bezpečně odvezeme zpět. S námi se můžete plně soustředit na zážitek a užít si středověkou atmosféru, aniž byste museli řešit dopravu.",
    },

  ],
};

const Distance = () => {
  return (
    <Container>
      <HeaderSection
        title={"Distance"}
        firstSub={"Úvod"}
        firstLink={"home"}
        secondSub={"Distance"}
        secondLink={"distance"}
      />
      <ContainerColor>
        <MainText>
          <MainTitle>
            <Title>Distance.</Title>
          </MainTitle>
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
      <Footer/>
    </Container>
  )
}

export default Distance

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
`;

const SubTitle = styled.span`
  color: #747474;
  font-size: 16px;
  line-height: 1.375;
`;