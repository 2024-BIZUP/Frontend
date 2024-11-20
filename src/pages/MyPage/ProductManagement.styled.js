import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 min-height: 100vh;
 background-color: #FFFFFF;
`;

export const ProductList = styled.div`
 width: 342px;
 border-radius: 8px;
 border: 1px solid #505050;
 overflow: hidden;
 margin: 70px auto;
`;

export const ProductItem = styled.div`
 width: 100%;
 height: 48px;
 padding: 10px 18px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 border-bottom: ${props => props.isLast ? 'none' : '1px solid #505050'};
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: calc(100% - 28px); // DeleteButton 너비만큼 빼기
`;

export const ProductName = styled.span`
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

   flex: 1; // 남은 공간 모두 차지
  margin-right: 16px; // 가격과의 간격
`;

export const ProductPrice = styled.span`
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.32px;
  white-space: nowrap;
    flex-shrink: 0; 
`;

export const DeleteButton = styled.button`
 background: none;
 border: none;
 padding: 0 0 0 12px;
 cursor: pointer;
 display: flex;
 align-items:center;
 justify-content:center;

 
 img {
   width: 16px;
   height: 16px;
 }
`;

export const AddButton = styled.div`
 width: 100%;
 height: 48px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 24px;
 cursor: pointer;
 border-top: 1px solid #505050;
`;