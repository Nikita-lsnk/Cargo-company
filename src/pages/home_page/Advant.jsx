import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Advant = () => {
  return (
    <Container>
      <MainTitle>
        <Title>Zvolte kategorii, kterou hledáte</Title>
      </MainTitle>
      <BeforeBlock></BeforeBlock>
      <MainAdvant>
        <AdvantItem>

          <StyledLink to="/bus">
            <BorderImg>
              <MainImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698067870/k2aoxj9vxgppykx5est3.png" />
            </BorderImg>
          </StyledLink>



          <StyledLink to="/bus"><TitleAdvant>Autobusová přeprava</TitleAdvant></StyledLink>
        </AdvantItem>
        <AdvantItem>
          <StyledLink to="/car">
            <BorderImg>
              <MainImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698067871/o3tf16zu70oy1w6r4gmd.png" />
            </BorderImg>
          </StyledLink>


          <StyledLink to="/car"><TitleAdvant>Osobní přeprava</TitleAdvant></StyledLink>
        </AdvantItem>
        <AdvantItem>
          <StyledLink to="/truck">
            <BorderImg>
              <MainImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698067871/y3orrwmk4fooravucjv1.png" />
            </BorderImg>
          </StyledLink>


          <StyledLink to="/truck"><TitleAdvant>Mezinárodní nákladní doprava</TitleAdvant></StyledLink>
        </AdvantItem>
      </MainAdvant>
    </Container>
  )
}

export default Advant

const StyledLink = styled(Link)`
  text-decoration: none;
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

const MainAdvant = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* gap: 50px; */

`;

const AdvantItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 270px;
  height: 170px;
  text-align: center;
`;

const MainImg = styled.img`
  width: 110px;
  height: 110px;
  cursor: pointer;
`;

const TitleAdvant = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #393a3c;
`;

const BorderImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #3256A4;
  border-radius: 50%;
  padding: 10px;
  transition: .3s all ease;
  &:hover{
    padding: 5px;
  }
`;
