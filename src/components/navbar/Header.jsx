import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import './Header.css'

const Header = () => {

  const [isFixed, setIsFixed] = useState(false);

  console.log(isFixed);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <TopBlock>
          <ProfileInfo>
            <LinkBlock>
              <ImgPhone src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1697996141/icons8-phone-64_lbzfb5.png"/>
              <TitleLink href="tel:+420775586626">+420-775-586-626</TitleLink>
            </LinkBlock>
            <LinkBlock>
              <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1697996141/icons8-circled-envelope-48_t4ppek.png"/>
              <TitleLink href="mailto:test@test.ru">test@test.ru</TitleLink>
            </LinkBlock>
          </ProfileInfo>
          <ChangeBlock>
            <LangLink src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1697997643/icons8-czech-republic-48_1_wn8mkh.png"/>
            <LangLink src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1697997643/icons8-ukraine-48_lppxfo.png"/>
            <LangLink src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1697997644/icons8-english-48_lhwano.png"/>
            <LangLink src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1697997643/icons8-russia-48_klntuk.png"/>
          </ChangeBlock>
      </TopBlock>
      {/* <header className={isFixed ? "fixed" : ""}>
        <h1>Мой фиксированный заголовок</h1>
      </header> */}

    </Container>
  )
}

export default Header

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* margin: 0 auto; */
`;


const TopBlock = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const ProfileInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const LinkBlock = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 10px;
`;

const ImgPhone = styled.img`
  width: 29px;
  height:29px;
`;

const Img = styled.img`
  width: 32px;
  height:32px;
`;

const TitleLink = styled.a`
  text-decoration: none;
  color: #3256A4;
`;

const ChangeBlock = styled.div`
  display: flex;
  gap: 10px;
`;

const LangLink = styled.img`
  width: 32px;
  height:32px;
`;


