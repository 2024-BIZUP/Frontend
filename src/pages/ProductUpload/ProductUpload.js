import React, { useState } from 'react';
import Button from '../../components/buttons/NextBtn/NextBtn';
import Input from '../../components/inputs/ProductInput/ProductInput';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import {
  ProductNameCaution,
  PageWrapper,
  Form,
  FieldGroup,
  FieldLabel
} from './ProductUpload.styled';

const ProductUpload = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // 상품등록 첫번째 페이지 데이터
    productName: '',
    price: '',
    discountAmount: '',
    discountType: '적용',
    discountPeriod: '',
    // 두 번째 단계 데이터
    uploadCount: '',
    uploadName: '',
    // 세 번째 단계 데이터
    uploadPrice: '',
    priceList: []
  });

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext(); // 다음 스텝으로 이동
  };

  const discountOptions = [
    { value: '적용', label: '적용' },
    { value: '미적용', label: '미적용' }
  ];

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div>
            <h2>안녕하세요 00님<br/>상품등록을 하러 가실까요?</h2>
            <Button onClick={handleNext}>상품등록 하러가기</Button>
            <Button variant="secondary">다음에 할게요</Button>
          </div>
        );

      case 2:
        return (
          <PageWrapper>
            <Form onSubmit={handleSubmit}>
              <div>
                <Input
                  label="상품명"
                  value={formData.productName}
                  onChange={handleChange('productName')}
                  placeholder="ex. 안동 청송 프리미엄 햇 사과 가정용, 9kg, 1개"
                />
                <ProductNameCaution>
                  유명 상품을 유사문구로 무단 도용할 경우 별다른 고지없이<br/>
                  제재될 수 있다는 점 참고부탁드립니다.
                </ProductNameCaution>
              </div>
              <Input
                label="판매가"
                type="number"
                value={formData.price}
                onChange={handleChange('price')}
                placeholder="숫자만 입력"
              />
              <FieldGroup>
                <FieldLabel>할인적용</FieldLabel>
                <RadioGroup
                  options={discountOptions}
                  value={formData.discountType}
                  onChange={(value) => handleChange('discountType')({ target: { value }})}
                  name="discountType"
                />
                <Input
                  type="number"
                  value={formData.discountAmount}
                  onChange={handleChange('discountAmount')}
                  placeholder="숫자만 입력"
                />
              </FieldGroup>
              <Input
                label="할인기간"
                value={formData.discountPeriod}
                onChange={handleChange('discountPeriod')}
                placeholder="할인 기간을 입력하세요"
              />
              <Button 
                type="submit" 
                variant="primary" 
                mobileBottom={72} 
                pcBottom={206} 
                tabletBottom={28}
              >
                다음
              </Button>
            </Form>
          </PageWrapper>
        );

      case 3:
        // 여기에 세 번째 스텝 추가
        return null;

      default:
        return null;
    }
  };

  return renderStep();
};

export default ProductUpload;