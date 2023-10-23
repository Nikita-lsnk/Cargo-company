import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import './Header.css'
import { Link } from 'react-router-dom';

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
            <ImgPhone src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1697996141/icons8-phone-64_lbzfb5.png" />
            <TitleLink href="tel:+420775586626">+420-775-586-626</TitleLink>
          </LinkBlock>
          <LinkBlock>
            <Img src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1697996141/icons8-circled-envelope-48_t4ppek.png" />
            <TitleLink href="mailto:test@test.ru">test@test.ru</TitleLink>
          </LinkBlock>
        </ProfileInfo>
        <ChangeBlock>
          <LangLink src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1697997643/icons8-czech-republic-48_1_wn8mkh.png" />
          <LangLink src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1697997643/icons8-ukraine-48_lppxfo.png" />
          <LangLink src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1697997644/icons8-english-48_lhwano.png" />
          <LangLink src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1697997643/icons8-russia-48_klntuk.png" />
        </ChangeBlock>
      </TopBlock>
      <NavBlock className={isFixed ? "fixed" : ""}>
        <NavBlockContainer >
          <LogoBlock>
            Logo
          </LogoBlock>
          <NavMenu>
            <NavLink to="/home">Úvod</NavLink>
            <NavLink to="/home">O nás</NavLink>
            <NavLink to="/home">Služby</NavLink>
            <NavLink to="/home">Distance</NavLink>
            <NavLink to="/home">Ceny</NavLink>
            <NavLink to="/home">Spolupráce</NavLink>
            <NavLink to="/home">Kontakt</NavLink>
          </NavMenu>
        </NavBlockContainer>

      </NavBlock>
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
  /* margin-top: 20px; */
  /* margin: 0 auto; */
`;


const TopBlock = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
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
  cursor: pointer;
  border: 1px solid #3256A4;
  border-radius: 50%;
`;

const NavBlock = styled.div`
  width: 100%;
  position: fixed;
  right:0;
  left: 0;
  margin-top: 50px;
  padding: 20px 0;
  transition: .3s all ease;
`;

const NavBlockContainer = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  gap: 100px;
  
  
`;

const LogoBlock = styled.div`
  
`;

const NavMenu = styled.div`
  display: flex;
  gap: 60px;
  
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  transition: .3s all ease;
  padding: 1px 15px;
  
  &:hover{
    cursor: pointer;
    background-color: #f0e319;
    color: #292a2d;
    /* padding: 0 15px; */
  }
`;


