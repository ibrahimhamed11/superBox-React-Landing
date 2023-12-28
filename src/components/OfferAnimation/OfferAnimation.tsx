import React from 'react';
import styled, { keyframes } from 'styled-components';

interface ProductProps {
  name: string;
  weight: string;
  currentPrice: number;
  originalPrice: number;
}

const OfferAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const ProductContainerAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const ProductContainer = styled.div`
  margin: 20px;
  padding: 20px;
  position: relative;
  text-align: center; /* Center text */
  animation: ${ProductContainerAnimation} 1s infinite; /* Add animation to ProductContainer */
`;

const OfferText = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: red;
  animation: ${OfferAnimation} 1s infinite;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center content horizontally */
  margin-top: 10px;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #fff;
  margin-right: 10px;
`;

const CurrentPrice = styled.span`
  color: white; /* Change text color to green */
  font-size: 24px;
  font-weight: bold; /* Increase font weight */
`;

const ProductDescription = styled.p`
  font-size: 14px; /* Decrease title font size */
  margin-top: 10px;
`;

const ProductComponent: React.FC<ProductProps> = ({
  name,
  weight,
  currentPrice,
  originalPrice,
}) => {
  return (
    <ProductContainer>
      <OfferText>عرض خاص!</OfferText>
      <PriceContainer>
        <OldPrice>{`${originalPrice} ريال`}</OldPrice>
        <CurrentPrice>{`${currentPrice} ريال`}</CurrentPrice>
      </PriceContainer>

      <PriceContainer>
      <CurrentPrice style={{ marginTop: '20px', backgroundColor: 'white', color: 'red', fontSize: '14px', borderRadius: '20px', padding: '10px' }}>
  الضريبه علينا
</CurrentPrice>
      </PriceContainer>


      <ProductDescription>
        {/* Add your product description here */}
      </ProductDescription>
    </ProductContainer>
  );
};

export default ProductComponent;
