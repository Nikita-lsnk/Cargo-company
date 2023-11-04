import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../../components/navbar/HeaderSection'
import PopularItem from '../home_page/PopularItem'

const data = {
  data: [
    {
      price: "od 750 kč",
      title: "Transfer na letiště",
      picture: "https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698242890/Preferovan%D0%B0_Doprava_Transfer_na_leti%D1%87t_od_750_k%D0%AF_2_sa95mg.jpg",
      description: "Nabízíme transfery na letiště včetně Mnichova, Lipska, Vídně a mnoha dalších destinací. Nechte naší společnost postarat se o vaši pohodlnou dopravu, ať už letíte kamkoliv. S naším transferem na letiště můžete být jisti, že dorazíte včas a bezpečně.",
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
      <MainText>
        <MainTitle>
          <Title>Distance.</Title>
        </MainTitle>
        <BeforeBlock></BeforeBlock>
        <TextInfo>

          
          {data.data.map((e) => (
            <PopularItem
            picture={e.picture}
            price={e.price}
            title={e.title}
            description={e.description}
          />
          ))}
        </TextInfo>
      </MainText>
    </Container>
  )
}

export default Distance

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
`;

const SubTitle = styled.span`
  color: #747474;
  font-size: 16px;
  line-height: 1.375;
`;