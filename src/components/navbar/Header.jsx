import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import './Header.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {

  const [isFixed, setIsFixed] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);

  const menuRef = useRef();
  const buttonRef = useRef();

  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/home")
  }


  useEffect(() => {
    const handleClick = (e) => {
      if (e.target !== menuRef.current && e.target !== buttonRef.current) {
        setOpenDrop(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const location = useLocation();

  // console.log(isFixed);

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

  const handleShareBtnClick = (e) => {
    e.stopPropagation();
    setOpenDrop(!openDrop);
  };

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
          <BurgerBtn onClick={() => setNav(!nav)}>
            {nav ? (
              <AiOutlineClose
                size={25}
                color={"#ffffff"}
              />
            ) : (
              <AiOutlineMenu
                color={"#ffffff"}
                size={25}
              />
            )}
          </BurgerBtn>
          <LogoBlock onClick={handleGoToHome}>
            {isFixed ?
              <LogoImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1703025744/AronTrack_CI_nkv6zj.svg" />
              :
              <LogoImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1703025744/AronTrack_CI_nkv6zj.svg" />
            }

          </LogoBlock>
          <NavMenuContent
            onClick={() => setNav(false)}
            className={nav ? "active" : ""}
          >
            <NavMenu
            >
              <NavLink
                className={
                  location.pathname
                    .toLowerCase()
                    .includes("home".toLowerCase())
                    ? "Activate"
                    : ""
                }
                to="/home"
              >
                Úvod
              </NavLink>
              <NavLink
                className={
                  location.pathname
                    .toLowerCase()
                    .includes("about".toLowerCase())
                    ? "Activate"
                    : ""
                }
                to="/about"
              >
                O nás
              </NavLink>
              <DropMenu>
                <ShareBtn
                  className={
                    location.pathname
                      .toLowerCase()
                      .includes("bus".toLowerCase())
                      ||
                      location.pathname.toLowerCase().includes("car".toLowerCase())
                      ||
                      location.pathname.toLowerCase().includes("truck".toLowerCase())
                      ? "bus"
                      : ""
                  }
                  ref={buttonRef}
                  onClick={handleShareBtnClick}
                >
                  Služby

                  {openDrop === true ?

                    (location.pathname
                      .toLowerCase()
                      .includes("bus".toLowerCase())
                      ||
                      location.pathname.toLowerCase().includes("car".toLowerCase())
                      ||
                      location.pathname.toLowerCase().includes("truck".toLowerCase())
                      ?
                      <ImgArrow src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698657334/icons8-chevron-down-26_1_kp4hcq.png" />
                      :
                      <ImgArrow src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698662804/icons8-chevron-down-26_6_qkm4l3.png" />
                    )
                    :
                    (location.pathname
                      .toLowerCase()
                      .includes("bus".toLowerCase())
                      ||
                      location.pathname.toLowerCase().includes("car".toLowerCase())
                      ||
                      location.pathname.toLowerCase().includes("truck".toLowerCase())
                      ?
                      <ImgArrow src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698657334/icons8-chevron-down-26_c1s9qr.png" />

                      :

                      <ImgArrow src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698662838/icons8-chevron-down-26_4_zxupr0.png" />
                    )
                    // 


                  }
                  {/* {openDrop === true ?

                  <ImgArrow src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698662804/icons8-chevron-down-26_6_qkm4l3.png" />
                  :
                  <ImgArrow src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698662838/icons8-chevron-down-26_4_zxupr0.png" />
                } */}

                </ShareBtn>
                {openDrop && (
                  <DropDown
                    ref={menuRef}
                  >
                    <List>
                      <NavLinkDrop
                        className={
                          location.pathname
                            .toLowerCase()
                            .includes("bus".toLowerCase())
                            ? "Activate"
                            : ""
                        }
                        to="/bus"
                      >
                        Autobusová přeprava
                      </NavLinkDrop>
                      <NavLinkDrop
                        className={
                          location.pathname
                            .toLowerCase()
                            .includes("car".toLowerCase())
                            ? "Activate"
                            : ""
                        }
                        to="/car"
                      >
                        Osobní přeprava
                      </NavLinkDrop>
                      <NavLinkDrop
                        className={
                          location.pathname
                            .toLowerCase()
                            .includes("truck".toLowerCase())
                            ? "Activate"
                            : ""
                        }
                        to="/truck"
                      >
                        Mezinárodní nákladní doprava
                      </NavLinkDrop>
                    </List>
                  </DropDown>
                )}
              </DropMenu>
              {/* <NavLink
              className={
                location.pathname
                  .toLowerCase()
                  .includes("bus".toLowerCase())
                  ? "Activate"
                  : ""
              }
              to="/bus"
            >
              
              <ImgArrow src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698662838/icons8-chevron-down-26_4_zxupr0.png" />
            </NavLink> */}
              <NavLink
                className={
                  location.pathname
                    .toLowerCase()
                    .includes("distance".toLowerCase())
                    ? "Activate"
                    : ""
                }
                to="/distance"
              >
                Distance
              </NavLink>
              <NavLink
                className={
                  location.pathname
                    .toLowerCase()
                    .includes("price".toLowerCase())
                    ? "Activate"
                    : ""
                }
                to="/price"
              >
                Ceny
              </NavLink>
              <NavLink
                className={
                  location.pathname
                    .toLowerCase()
                    .includes("program".toLowerCase())
                    ? "Activate"
                    : ""
                }
                to="/program"
              >
                Věrnostní program
              </NavLink>
              <NavLink
                className={
                  location.pathname
                    .toLowerCase()
                    .includes("contact".toLowerCase())
                    ? "Activate"
                    : ""
                }
                to="/contact"
              >
                Kontakt
              </NavLink>
            </NavMenu>
          </NavMenuContent>

        </NavBlockContainer>

      </NavBlock>
      {/* <header className={isFixed ? "fixed" : ""}>
        <h1>Мой фиксированный заголовок</h1>
      </header> */}

    </Container>
  )
}

export default Header

const NavMenuContent = styled.div`
  @media screen and (max-width: 1120px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 220px;
    margin: 0;
    top:50px;
    left: -120%;
    padding-left: 38px;
    background-color: ${(props) => (props.$isDarkTheme ? "#22272B" : "white")};
    width: 100%;
    height: 100vh;
    z-index: 11;
  }
`;

const BurgerBtn = styled.div`
  display: none;
  
  @media screen and (max-width: 1120px) {
    display: flex;
    cursor: pointer;
    align-self: center;
    z-index: 100;
  }
`;

const LogoImg = styled.img`
  width: 120px;
`;

const List = styled.div`
  width: 228px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DropMenu = styled.div`
  position: relative;
`;

const DropDown = styled.div`
  position: absolute;
  right: -80px;
  top: 44px;
  background-color: #fff;
  border: none;
  /* border-radius: 20px; */
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 1000;
  @media screen and (max-width:320px) {
    right: -35px;
  }
  @media screen and (max-width: 1120px) {
    right: 0;
    top: -40px;
    left: 120px;
    max-width: 232px;
  }
  @media screen and (max-width: 430px) {
    left: 0px;
    top: 50px;
  }
`;

const ShareBtn = styled.button`
  text-decoration: none;
  font-size: 16px;
  background: transparent;
  border: none;
  color: #fff;
  font-weight: 700;
  transition: .3s all ease;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  /* justify-content: center; */
  
  &:hover, &:active, &:focus{
    cursor: pointer;
    background-color: #f0e319;
    color: #292a2d;
    
    /* padding: 0 15px; */
  }
  /* &:hover > img, &.bus:hover > img {
    filter: invert(1);// Изменяем цвет ImgArrow на черный
  }
  &:focus > img, &.bus:hover > img {
    filter: invert(1);// Изменяем цвет ImgArrow на черный
  } */
  
  /* &:active > img, &.bus:hover > img {
    filter: invert(1);// Изменяем цвет ImgArrow на черный
  } */
  
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 100;
  /* margin-top: 20px; */
  /* margin: 0 auto; */
`;


const TopBlock = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: calc(100% - 80px);
    margin: 0 auto;
    /* margin-top: 50px; */
  }
  
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

const ImgArrow = styled.img`
  width: 13px;
  height: 13px;
  cursor: pointer;
  
  
`;

const TitleLink = styled.a`
  text-decoration: none;
  color: #3256A4;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
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
  @media screen and (max-width: 540px) {
    height: 24px;
    width: 24px;
  }
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
  @media screen and (max-width: 1200px) {
    width: calc(100% - 80px);
    margin: 0 auto;
  }
  @media screen and (max-width: 1120px) {
    gap: 20px;
  }
  
`;

const LogoBlock = styled.div`
  cursor: pointer;
  z-index: 100;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 40px;
  @media screen and (max-width: 1200px) {
    gap: 20px;
  }
  @media screen and (max-width: 1120px) {
    flex-direction: column;
    margin-top: 10px;
    width: calc(100% - 80px);
  }
  
  
  
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  transition: .3s all ease;
  padding: 1px 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  /* justify-content: center; */
  
  &:hover{
    cursor: pointer;
    background-color: #f0e319;
    color: #292a2d;
    /* padding: 0 15px; */
  }
`;

const NavLinkDrop = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: #3256A4;
  /* font-weight: 700; */
  transition: .3s all ease;
  padding: 1px 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  /* justify-content: center; */
  
  &:hover{
    cursor: pointer;
    background-color: #f0e319;
    color: #292a2d;
    /* padding: 0 15px; */
  }
`;


