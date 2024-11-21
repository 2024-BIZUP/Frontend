import styled from 'styled-components';

export const ProductContainer = styled.div`
  position: relative;
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-top: 65px;
`;

export const ProductInfo = styled.div`
  .shop-tag {
    display: inline-block;
    padding: 4px 8px;
    background-color: #CFECFD;
    color: #006CAA;
    border-radius: 30px;
    margin-top: 20px;
    margin-bottom: 14px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 16px;
    color: #111111;
  }
`;

export const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const DiscountRate = styled.span`
  color: #ff4b4b;
  font-weight: bold;
`;

export const DiscountPrice = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const OriginalPrice = styled.span`
  color: #999;
  text-decoration: line-through;
`;
export const DeliveryInfo = styled.div`
  padding: 16px 0;
  border-top: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
`;

export const DeliveryRow = styled.div`
  display: flex;
  margin-bottom: 8px;
  color: #111111;
  font-size: 14px;
  line-height: 1.4;

  &:last-child {
    margin-bottom: 0;
  }

  .label {
    min-width: 70px;
    color: #757575;
    font-size: 12px;
  }

  .content {
    flex: 1;
    color: #111111;
    font-size: 12px;
  }
`;

export const ShippingNotice = styled.div`
  text-align: center;
  margin: 24px 0;
`;

export const HarvestDate = styled.p`
  color: #EA0000;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 12px;
`;

export const HighlightedText = styled.p`
  color: #FFB710;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
`;

export const ShippingImage = styled.img`
  width: 100%;
  margin-top: 16px;
`;

export const RegularText = styled.p`
  color: #111111;
  font-size: 16px;
  font-weight: 400;
  line-height: 2;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px;
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #EEEEEE;
`;

export const ActionButton = styled.button`
  flex: 1;
  padding: 15px 0;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:first-child { 
    background-color: #BBBBBB;
    color: white;
  }
  
  &:last-child { 
    background-color: #BBBBBB;
    color: white;
  }
`;

export const OptionModal = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-radius: 12px 12px 0 0;
  padding: 20px;
`;

export const OptionTitle = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const SelectBox = styled.div`
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  overflow: hidden;
`;

export const SelectHeader = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-bottom: 1px solid #DDDDDD;
  cursor: pointer;
`;

export const OptionList = styled.div`
  background: #F8F8F8;
`;

export const OptionItem = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #DDDDDD;
  
  &:last-child {
    border-bottom: none;
  }

  input[type="radio"] {
    margin-right: 8px;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;

  button {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #DDDDDD;
    background: white;
    font-size: 18px;
  }

  input {
    width: 40px;
    height: 28px;
    text-align: center;
    border: 1px solid #DDDDDD;
  }
`;