import React from 'react';
import * as S from './ProductList.styled';
import { useNavigate } from 'react-router-dom';
import product_1 from '../../assets/images/product-01.svg';
import product_2 from '../../assets/images/product-02.svg';
import product_3 from '../../assets/images/product-03.svg';
import product_4 from '../../assets/images/product-04.svg';
import bizupLogo from '../../assets/images/bizup-logo.svg';
import searchIcon from '../../assets/images/search-icon.svg';
import carrotImg from '../../assets/images/carrot-icon.svg'

const ProductList = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: '안동 청송 프리미엄 햇 사과 가정용, 9kg, 1개 외',
      image: product_1,
      price: 16000,
      originalPrice: 20000,
      discount: 20
    },
    {
      id: 2,
      name: '자연에서 바로 주스용 못난이 당근 제주 흙당근, 5kg, 1개',
      image: product_2,
      price: 21900,
      originalPrice: 28000,
      discount: 21
    },
    {
      id: 3,
      name: '오늘 출발 통통하게 살이 오른 고당도 제주 특산품 귤, 2.5kg, 1개',
      image: product_3,
      price: 20000,
      originalPrice: 20000,
      discount: 0
    },
    {
      id: 4,
      name: '영광 굴비 1.4kg x 2(가정용 4호), 40마리',
      image: product_4,
      price: 89000,
      originalPrice: 89000,
      discount: 0
    }
  ];

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <S.Header>
        <S.Logo src={bizupLogo} />
        <S.SearchBar>
          <img src={searchIcon} />
          <span>비즈업에서 특산물 검색하기</span>
        </S.SearchBar>
      </S.Header>

      <S.CategoryNav>
        <S.CategoryLink active>추천</S.CategoryLink>
        <S.CategoryLink>커뮤니티</S.CategoryLink>
        <S.CategoryLink>B 아카데미</S.CategoryLink>
        <S.CategoryLink>마이페이지</S.CategoryLink>
      </S.CategoryNav>

      <S.Container>
        <S.BannerCard>
          <S.BannerContent>
            <p>사장님!</p>
            <p>가게 특산품에 대한 홍보글을 작성하셨나요?</p>
            <p>아직이라구요?</p>
            <S.PromotionButton>홍보글 작성하러 가기</S.PromotionButton>
          </S.BannerContent>
          <S.BannerImage src={carrotImg} />
        </S.BannerCard>
      </S.Container>

      <S.ProductGrid>
        {products.map(product => (
          <S.ProductCard key={product.id} onClick={() => handleProductClick(product.id)}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <S.PriceContainer>
              <S.OriginalPrice>{product.originalPrice.toLocaleString()}원</S.OriginalPrice>
              <S.PriceTag>
                <span className="discount">{product.discount}%</span>
                <span className="price">{product.price.toLocaleString()}원</span>
              </S.PriceTag>
            </S.PriceContainer>
          </S.ProductCard>
        ))}
      </S.ProductGrid>
    </div>
  );
};

export default ProductList;