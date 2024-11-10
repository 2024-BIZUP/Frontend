import styled from 'styled-components';

export const ProductInputWrapper = styled.div`
 width: 342px;
 box-sizing: border-box;
`;

export const Label = styled.label`
  display: block;
  color: #000;
  font-size: 18px;
  font-family: "Noto Sans KR"
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 116.667% */
  letter-spacing: -0.32px;
  margin-bottom: 8px; //밑에 마진값 주기 
`;

export const StyledProductInput = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #505050;
  padding: 10px 18px;
  margin:0; 
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  
  &:focus {
    outline: none;
    border-color: #796B5B;
  }
  
  &::placeholder {
    color: #9CA3AF;
  }
`;