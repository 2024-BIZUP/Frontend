import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 추가
import * as S from './Product.styled';
import mainProduct from '../../assets/images/product-main-01.svg';
import BackBtn from '../../components/buttons/BackBtn/BackBtn';
import backIcon from '../../assets/backBtn.svg'
import appleImg from '../../assets/images/apple-01.svg'

const Product = () => {
    const navigate = useNavigate(); 
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionSelect = (option) => {
        if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
        setSelectedOptions([...selectedOptions, option]);
        }
    };

    // 뒤로가기 핸들러
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <S.ProductContainer>
          <BackBtn onClick={handleBack} mobileBottom="20px">
            <img src={backIcon} />
          </BackBtn>
          
          <S.ProductImage src={mainProduct} />
          <S.ProductInfo>
            <span className="shop-tag">사과박사님</span>
            <h2>안동 청송 프리미엄 햇 사과 가정용, 9kg, 1개</h2>
            <S.PriceInfo>
              <S.DiscountPrice>16,000원</S.DiscountPrice>
            </S.PriceInfo>
            
            <S.DeliveryInfo>
                <S.DeliveryRow>
                    <span className="label">배송안내</span>
                    <span className="content">배송비 3,000원</span>
                </S.DeliveryRow>
                <S.DeliveryRow>
                    <span className="label">배송지역</span>
                    <span className="content">도서산간 및 제주도는 추가 도송료 4,000원 있습니다.</span>
                </S.DeliveryRow>
            </S.DeliveryInfo>
    
            <S.ShippingNotice>
                <S.HarvestDate>오늘 10/14일에 수확한 사과입니다!</S.HarvestDate>
                <S.HighlightedText>풍부한 일조량과 높은 일교차로</S.HighlightedText>
                <S.RegularText>
                    명품사과 생산지로 꼽히는<br/>
                    사과의 지역 경북 햇사과!
                </S.RegularText>
                <S.ShippingImage src={appleImg} />
            </S.ShippingNotice>
    
            <S.ButtonContainer>
                <S.ActionButton onClick={() => setShowOptions(true)}>
                    장바구니
                </S.ActionButton>
                <S.ActionButton onClick={() => setShowOptions(true)}>
                    바로 구매
                </S.ActionButton>
                </S.ButtonContainer>
          </S.ProductInfo>
    
          {showOptions && (
            <S.OptionModal>
            <S.OptionTitle>옵션선택(필수)</S.OptionTitle>
            <S.SelectBox>
              <S.SelectHeader>
                <span>선택</span>
                <span>▼</span>
              </S.SelectHeader>
              <S.OptionList>
                <S.OptionItem>
                  <label>
                    <input type="radio" name="option" />
                    안동 청송 프리미엄 햇 사과 가정용, 9kg, 1개
                  </label>
                  <span>16,000원</span>
                </S.OptionItem>
                <S.OptionItem>
                  <label>
                    <input type="radio" name="option" />
                    안동 청송 프리미엄 햇 사과 가정용, 9kg, 2개
                  </label>
                  <span>32,000원</span>
                </S.OptionItem>
              </S.OptionList>
            </S.SelectBox>
            
            <S.QuantityControl>
              <button>-</button>
              <input type="number" value="1" readOnly />
              <button>+</button>
              <span>16,000원</span>
            </S.QuantityControl>
          
            <S.ButtonContainer>
              <S.ActionButton>장바구니</S.ActionButton>
              <S.ActionButton>바로 구매</S.ActionButton>
            </S.ButtonContainer>
          </S.OptionModal>
          )}
        </S.ProductContainer>
      );
};

export default Product;