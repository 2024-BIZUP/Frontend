import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import deleteIcon from '../../assets/deleteIcon.svg';
import plusIcon from '../../assets/plusIcon.svg';
import * as S from './ProductManagement.styled';

const ProductManagement = () => {
  const navigate = useNavigate();
  

  // 테스트용 초기 데이터
 const [products, setProducts] = useState([
    {
      id: 1,
      productName: '안동 청송 프리미엄 햇 사과, 9kg, 1개 ddkfjwkflqjkjd;kfjq',
      price: 16000000
    },
    {
      id: 2, 
      productName: '안동 청송 프리미엄 햇 사과, 9kg, 2개',
      price: 30000
    },
    {
      id: 3,
      productName: '안동 청송 프리미엄 햇 사과, 9kg, 3개',
      price: 45000
    }
  ]);
 
  useEffect(() => {
    // API 호출하여 상품 리스트 가져오기
    // setProducts(response.data);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const handleProductClick = (product) => {
    navigate('/product-upload', { 
      state: { 
        isEdit: true,
        productData: product 
      }
    });
  };

  const handleDelete = (productId) => {
    // 삭제 API 호출
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <S.Container>
      <Header
        title="상품 등록 리스트"
        type="back"
        showBackButton={true}
        onBack={handleBack}
      />
      
      <S.ProductList>
        {products.map((product, index) => (
            <S.ProductItem 
            key={product.id} 
            isLast={index === products.length - 1}
            >
            <S.ProductInfo onClick={() => handleProductClick(product)}>
                <S.ProductName>{product.productName}</S.ProductName>
                <S.ProductPrice>{product.price.toLocaleString()}원</S.ProductPrice>
            </S.ProductInfo>
            <S.DeleteButton onClick={() => handleDelete(product.id)}>
                <img src={deleteIcon} alt="삭제" />
            </S.DeleteButton>
            </S.ProductItem>
        ))}
        <S.AddButton onClick={() => navigate('/product-upload')}>
            <img src={plusIcon}></img>
        </S.AddButton>
        </S.ProductList>
    </S.Container>
  );
};

export default ProductManagement;