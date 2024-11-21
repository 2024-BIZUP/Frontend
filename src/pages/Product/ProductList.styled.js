import styled from 'styled-components';

export const Header = styled.header`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Logo = styled.img`
  height: 24px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SearchBar = styled.div`
  flex: 1; 
  background: #f5f5f5;
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
`;

export const CategoryNav = styled.nav`
  display: flex;
  gap: 35px;
  padding: 8px 30px;
`;

export const CategoryLink = styled.a`
  color: ${props => props.active ? '#000' : '#999'};
  text-decoration: none;
  padding: 8px 0;
  border-bottom: ${props => props.active ? '2.5px solid #70614C' : 'none'}; // 밑줄 색상 변경
  font-weight: ${props => props.active ? '700' : '400'}; // 활성 탭 굵기 조정
`;

export const BannerCard = styled.div`
  width: 342px;
  height: 114px;
  background: #F6A305;
  border: 1px solid #70614C;
  border-radius: 12px;
  margin: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 15px;
`;

export const BannerContent = styled.div`
  color: black;
  p {
    font-size: 12px;
  }
`;

export const PromotionButton = styled.button`
  background: #70614C;
  color: white;
  border: 1px solid #505050;
  border-radius: 30px;
  padding: 4.5px 16px;
  margin-top: 1px;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
`;

// 당근 이미지
export const BannerImage = styled.img`
  width: 116px;
  height: auto;
  margin-left: 20px;
`;

// 상품 목록
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;
`;

export const ProductCard = styled.div`
  cursor: pointer;
  text-align: center;

  img {
    width: 100%;
    margin-bottom: 8px;
  }

  p {
    font-size: 12px;
    margin-bottom: 4px;
    word-break: keep-all;
    font-weight: 500;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const OriginalPrice = styled.div`
  color: #757575;
  text-decoration: line-through;
  font-size: 14px;
`;

export const PriceTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  
  .discount {
    color: #FD2B2B;
    font-weight: 400;
    font-size: 10px;
  }

  .price {
    color: #111111;
    font-weight: 500;
    font-size: 14px;
  }
`;