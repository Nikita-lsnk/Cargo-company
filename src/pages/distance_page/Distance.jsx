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
      description: "Nabízíme transfery na letiště včetně Mnichova, Lipska, Vídně a mnoha dalších destinací. Nechte postarat se o vaši pohodlnou dopravu, ať už letíte kamkoliv. S naším transferem na letiště si můžete být jisti, že dorazíte včas a bezpečně.",
    },
    {
      price: "od 2300 kč",
      title: "Okruhy po Praze",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810840/Preferovan%D0%B0_Doprava_Okruhy_po_Praze_od_2300_k%D0%AF_rsr20s.jpg",
      description: "Naše individuální transfery a okružní jízdy Prahou jsou ideálním způsobem, jak objevit pohodlně a stylově krásy tohoto fascinujícího města. Naši zkušení řidiči vám zajistí bezstarostný převoz, ať už potřebujete přesun z jednoho místa na druhé, nebo toužíte prozkoumat Pražské památky. S našimi individuálními transfery budete mít možnost efektivně prozkoumávat město bez starostí o dopravu. Prohlédněte si Prahu z pohodlí našich vozidel a užijte si jedinečné zážitky naplno.",
    },
    {
      price: "od 3000 kč",
      title: "Svatební autobus",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810833/Preferovan%D0%B0_Doprava_Svatebn%D0%B1_autobus_od_3000_k%D0%AF_zanebv.jpg",
      description: "Chápeme, jak náročné a stresující může plánování svatby být.Potřebujete-li ulehčit organizaci přepravy, jsme tu jenon pro vás. Pronájem soukromého svatebního autobusu s profesionálním řidičem je skvělý způsob, jak zajistit pohodlný a spolehlivý převoz pro nevěstu, ženicha a jejich hosty. Překvapte je pohodlnou cestou na obřad, do kostela, obřadní síně nebo na místo konání hostiny. S naším svatebním autobusem si můžete být jisti, že přeprava na vaší svatbě půjde jako po másle: Jednoduše, elegantně a bez zbytečných starostí.",
    },
    {
      price: "od 2500 kč",
      title: "Zájezdy pro CK",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699779960/Preferovan%D0%B0_Doprava_Z%D0%B0jezdy_pro_CK_od_2500_k%D0%AF_syvgro.jpg",
      description: "Jste cestovní nebo eventová agentura a hledáte důvěryhodného dopravce, který by vám zajistil bezproblémovou přepravu? Jsme tu, abychom vám poskytli spolehlivé a kvalitní dopravní služby, které přispějí k úspěchu vašich cestovních. S našimi službami si můžete být jisti, že klienti budou mít pohodlnou a bezstarostnou dopravu, což přispěje k celkové spokojenosti a úspěchu vašich akcí.",
    },
    {
      price: "od 26 kč za km",
      title: "Kamionová doprava do Německa a zpět od 26 kč za km",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810832/Preferovan%D0%B0_Doprava_Kamionov%D0%B0_doprava_do_N_mecka_a_zp_t_od_26_k%D0%AF_za_km_hjhk8v.jpg",
      description: "Naše kamionová doprava do Německa a zpět je profesionálním řešením pro přepravu zboží mezi těmito destinacemi. S našimi spolehlivými kamiony a zkušenými řidiči vám zajistíme bezpečný a efektivní transport nákladu. Naše služby jsou navrženy tak, aby uspokojily vaše logistické potřeby, ať už jde o krátkodobé nebo dlouhodobé přepravy. S námi můžete mít jistotu, že váš náklad dorazí včas a bezpečně na místo určení.",
    },
    {
      price: "za 850 kč na hod",
      title: "Osobní řidič za 850 kč na hod",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810833/Preferovan%D0%B0_Doprava_a_P_eprava_Osobn%D0%B1_idi%D0%AF_za_850_k%D0%AF_na_hod_iwinvc.jpg",
      description: "S naším osobním řidičem můžete pohodlně cestovat, nechat se vozit na schůzky, do obchodů, restaurací a kamkoli budete chtít. Zaručujeme vám spolehlivou, bezpečnou a diskrétní přepravu, ať už potřebujete osobního řidiče na krátkou jízdu nebo celý den.",
    },
    {
      price: "od 9000 Kč",
      title: "Zájezdy do Karlových Varů",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810834/Z%D0%B0jezdy_do_Karlov%D1%8Cch_Var%D0%95_nt6y1d.jpg",
      description: "Naše zájezdy do Karlových Varů a zpět jsou skvělým způsobem, jak prozkoumat toto nádherné lázeňské mesto i jeho okolí. S našimi pečlivě plánovanými zájezdy si budete moct užít výlet naplno a bez starostí o dopravu.",
    },
    {
      price: "od 3000 Kč za 3 hod",
      title: "Pronájem autobusu",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701033971/pronajem_autobusu_ko8xqj.jpg",
      description: "Zajistíme pohodlný a bezpečný převoz kamkoli budete potřebovat. Stačí nám říci odkud a kam chcete jet. Naše modern, čisté autobusy jsou připraveny na jakoukoli skupinovou exkurzi či výlet. S námi můžete mít jistotu, že dostanete kvalitní a spolehlivou dopravu, ať už jste turistická skupina, školní výlet nebo firemní akce.",
    },
    {
      price: "od 27 kč za km",
      title: "Kamionová doprava do Holandska a zpět",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810832/9_Kamionov%D0%B0_doprava_do_Holandsk%D0%B0_a_zp_t_ol9lod.jpg",
      description: "AronTrack vám nabízí přepravy z Holandska do všech evropských zemí a zase zpátky! Získejte nyní informace a zajistěte si nákladní capacitu!",
    },
    {
      price: "od 7300 Kč",
      title: "Zájezdy na Karlštejn a Konopiště",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810839/Z%D0%B0jezdy_do_Karl%D1%87tejnu_a_Konopi%D1%87t_vzmofm.jpg",
      description: "Naše dopravní služby na Karlštejn a Konopiště jsou výborným způsobem, jak se snadno a pohodlně dostat se k těmto dvěma významným, českým hradům. Bez ohledu na to, zda máte rádi historii, architekturu nebo přírodu, s naší dopravou budete mít zajištěný spolehlivý převoz a možnost prozkoumat tyto zajímavé lokality.",
    },
    {
      price: "od 3000 Kč",
      title: "Autobus pro kluby",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810835/Autobus_pro_kluby_s52owj.jpg",
      description: "Potřebujete přepravu na tréninky, výjezdy na zápasy a mistrovství? Máme bohaté zkušenosti s dopravou sportovců. Bez ohledu na to, jestli jste amatérský tým, juniorský výběr nebo profesionální klub, AronTrack vás odveze. Neexistuje skupina, kterou bychom nezvládli spolehlivě a pohodlně dopravit na požadované stanoviště.",
    },
    {
      price: "od 12 Kč za km",
      title: "Business transport do zahraničí",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810841/12_Business_transport_do_zahrani%D0%AF%D0%B1_1_caz6qv.jpg",
      description: "Naše služby business transportu do zahraničí jsou určeny pro firemní klienty, kteří potřebují spolehlivý a profesionální převoz pro své obchodní cesty a mezinárodní schůzky. S naším business transportem získáte rychlou, bezpečnou a pohodlnou dopravu, která vám umožní plně se věnovat vašim obchodním záležitostem. Naši řidiči jsou zkušení, diskrétní, a naše vozidla jsou vybavena pohodlným interiérem pro produktivní pracovní prostředí během cesty.",
    },
    {
      price: "od 6200 Kč",
      title: "Zájezdy na Křivoklát",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810835/13_Z%D0%B0jezdy_do_K_ivokl%D0%B0tu_n6ct2w.jpg",
      description: "Naše půldenní výlety autem nebo autobusem na Křivoklát jsou dokonalým způsobem, jak prozkoumat tuto gotickou památku v srdci České republiky. S naším pohodlným převozem z Prahy se dostanete snadno k tomuto historickému hradu i jeho okolní přírodě.",
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
      description: "Naše autobusové služby do Českého Krumlova jsou ideální, chcete-li se tímto malebným městem pokochat. Je možné taky na vaše přání, navštívit krásný zámek Hluboká nad Vltavou, který máme po cestě. S pohodlným převozem a možností zažít historickou a kulturní krásu této oblasti, budete mít zajištěný nezapomenutelný výlet.",
    },
    {
      price: "od 9600 Kč",
      title: "Zájezdy do Drážďan",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1701033970/Dra%D0%B7dany_jyflra.jpg",
      description: "Naše autobusové služby do Drážďan jsou navrženy tak, aby byla cesta pro naše klienty co nejpohodlnější a bezstarostná. Všechny poplatky spojené s dopravou a parkováním hradíme my, aby se o to naši kienti nemuseli starat.",
    },
    {
      price: "od 5000 Kč",
      title: "Zájezdy do Dětenic",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1699810839/18_Z%D0%B0jezdy_do_D_tenic_qebuji.jpg",
      description: "Naše autobusové služby do Dětenic jsou vynikajícím způsobem, jak se dostat na středověké představení a zároveň se o vás postarat. Po příjezdu do cíle, počkáme na vás a následně vás bezpečně odvezeme zpět. S námi se můžete plně soustředit na zážitek a užít si středověkou atmosféru, aniž byste se museli starat o dopravu.",
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
        picture={"https://res.cloudinary.com/dmxoqnqsu/image/upload/v1703023918/%D1%84%D0%BE%D0%BD_%D0%B4%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%B8_cvdvty.jpg"}
        subTitle={"Každá z našich dopravních variant má svůj vlastní cenový rámec, který vám umožní plánovat přepravu. Rádi bychom vám nabídli tuto orientační představu, abyste měli lepší povědomí o možnostech, které máme k dispozici."}
      />
      <ContainerColor>
        <MainText style={{marginTop: '-40px'}}>
          
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