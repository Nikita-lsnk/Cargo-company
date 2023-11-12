import React, {useState} from 'react'
import styled from 'styled-components'
import ProductModal from './ProductModal';

const PopularItem = ({ picture, price, title, description }) => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <PopularItemBlock onClick={() => setOpenModal(!openModal)}>
      <PhotoBlock>
        <MainImg src={picture} />

        <BlockPrice>
          <PhotoTitle>{price}</PhotoTitle>
          <SvgImg viewBox="0 0 140 36"><path d="m 0.01190457,18.011904 0,-17.99999966 70.00000343,0 69.999992,0 0,5.50000006 c 0,4.157048 -0.35675,5.4999996 -1.46104,5.4999996 -2.34992,0 -5.53896,4.138795 -5.53896,7.188561 0,3.025049 3.05738,6.811439 5.5,6.811439 1.15152,0 1.5,1.277778 1.5,5.5 l 0,5.5 -69.999992,0 -70.00000343,0 0,-18 z"></path></SvgImg>
        </BlockPrice>
      </PhotoBlock>
      <TextBlock>
        <TextTitle>{title}</TextTitle>
      </TextBlock>
      {openModal && (
        <ProductModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          price={price}
          title={title}
          description={description}
          picture={picture}
        />
      )}
    </PopularItemBlock>
  )
}

export default PopularItem


const PopularItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  gap: 20px;
  background-color: #fff;
  /* border: 1px solid #c2c2c2; */
  max-width: 370px;
  transition: box-shadow 0.3s ease-in-out; /* Плавное изменение тени при наведении */
  
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Тень при наведении */
  }
  /* max-width: 270px; */
  /* text-align: center; */
`;

const MainImg = styled.img`
  width: 370px;
  height: 280px;
`;


const PhotoBlock = styled.div`
  display: flex;
  flex-direction: column;
  position:relative;

`;

const PhotoTitle = styled.span`
  position: absolute;
  /* top: 0; */
  left: 20px;
  bottom: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #292a2d;
  /* background-color: yellow; */
`;

const TextBlock = styled.div`
  padding: 20px;
`;

const TextTitle = styled.span`
  font-size: 20px;
  color: #3256a4;
  font-weight: 700;
`;

const BlockPrice = styled.div`
  position: absolute;
  bottom: 20px;
  width: 200px;
`;

const SvgImg = styled.svg`
  fill: #f0e319;
`;