import React, { useState } from 'react';
import Button from '../../components/buttons/NextBtn/NextBtn';
import BackButton from '../../components/buttons/BackBtn/BackBtn'
import Input from '../../components/inputs/ProductInput/ProductInput';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import ProgressBarHeader from '../../components/Header/ProgressBarHeader';
import backIcon from '../../assets/backBtn.svg';
import plusIcon from '../../assets/plusIcon.svg';

import * as S from './ProductUpload.styled';

const ProductUpload = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // 상품등록 첫번째 페이지 데이터
    productName: '',
    price: '',
    discountAmount: '',
    discountType: '적용',
    discountPeriod: '',
    optionNames: [''], // 옵션명 입력 필드 배열
    optionPrices: [''], // 옵션 가격 입력 필드 배열
    
  });
  const discountOptions = [
    { value: '적용', label: '적용' },
    { value: '미적용', label: '미적용' }
  ];


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

  const handleOptionNameChange = (index, value) => {
    const newOptionNames = [...formData.optionNames];
    newOptionNames[index] = value;
    setFormData(prev => ({
      ...prev,
      optionNames: newOptionNames
    }));
  };

  const handleOptionPriceChange = (index, value) => {
    const newOptionPrices = [...formData.optionPrices];
    newOptionPrices[index] = value;
    setFormData(prev => ({
      ...prev,
      optionPrices: newOptionPrices
    }));
  };

  const addOptionNameField = () => {
    setFormData(prev => ({
      ...prev,
      optionNames: [...prev.optionNames, '']
    }));
  };

  const addOptionPriceField = () => {
    setFormData(prev => ({
      ...prev,
      optionPrices: [...prev.optionPrices, '']
    }));
  };
  
  const renderHeader = () => {
    // 첫 페이지에서는 헤더를 보여주지 않음
    if (currentStep === 1) return null;

    return (
      <ProgressBarHeader 
      currentStep={currentStep}
      onBack={handleBack}/>
    );
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div>
            <S.Form>
            <S.UploadMessage
            mobileTop={312} 
            pcTop={300} 
            tabletTop={28}>안녕하세요 00님<br/>상품등록을 하러 가실까요?</S.UploadMessage>
            <Button onClick={handleNext}
            variant="primary"
            type="submit" 
            mobileBottom={168} 
            pcBottom={339} 
            tabletBottom={28}>상품등록 하러가기</Button>
            <Button variant="secondary"
                type="submit" 
                mobileBottom={85} 
                pcBottom={256} 
                tabletBottom={28}>다음에 할게요</Button>
            </S.Form>
          
          </div>
        );

      case 2:
        return (
         
            <S.Form onSubmit={handleSubmit}>
              <div>
                <Input
                  label="상품명"
                  value={formData.productName}
                  onChange={handleChange('productName')}
                  placeholder="ex. 안동 청송 프리미엄 햇 사과 가정용, 9kg, 1개"
                />
                <S.ProductNameCaution>
                  유명 상품을 유사문구로 무단 도용할 경우 별다른 고지없이<br/>
                  제재될 수 있다는 점 참고부탁드립니다.
                </S.ProductNameCaution>
              </div>
              <Input
                label="판매가"
                type="number"
                value={formData.price}
                onChange={handleChange('price')}
                placeholder="숫자만 입력"
              />
              <S.FieldGroup>
                <S.FieldLabel>할인적용</S.FieldLabel>
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
              </S.FieldGroup>
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
            </S.Form>
          
        );

      case 3:
        return (
          
          <S.Form onSubmit={handleSubmit}>
        <S.FieldGroup>
          <S.FieldLabel>옵션</S.FieldLabel>
          <RadioGroup
            options={discountOptions}
            value={formData.discountType}
            onChange={(value) => handleChange('discountType')({ target: { value }})}
            name="discountType"
          />
        </S.FieldGroup>
        
        {formData.discountType === '적용' && (
          <>
         
            <Input
              label="옵션명 개수"
              type="number"
              value={formData.uploadCount}
              onChange={handleChange('uploadCount')}
              placeholder="숫자만 입력"
            />
             <div>
            <S.OptionGroup>
              <Input
                label="옵션명"
                value={formData.optionNames[0]}
                onChange={(e) => handleOptionNameChange(0, e.target.value)}
                placeholder="ex) 안동 청송 프리미엄 햇 사과 가정용, 9kg, 2개"
              />
              {formData.optionNames.slice(1).map((value, index) => (
                <Input
                  key={`option-name-${index + 1}`}
                  value={value}
                  onChange={(e) => handleOptionNameChange(index + 1, e.target.value)}
                  placeholder="옵션명을 입력하세요"
                />
              ))}
              <S.AddButton type="button" onClick={addOptionNameField}>
                <img src={plusIcon}></img>
              </S.AddButton>
            </S.OptionGroup>
            
            <S.OptionGroup>
              <Input
                label="옵션가격"
                type="number"
                value={formData.optionPrices[0]}
                onChange={(e) => handleOptionPriceChange(0, e.target.value)}
                placeholder="ex) 35000"
              />
              {formData.optionPrices.slice(1).map((value, index) => (
                <Input
                  key={`option-price-${index + 1}`}
                  type="number"
                  value={value}
                  onChange={(e) => handleOptionPriceChange(index + 1, e.target.value)}
                  placeholder="가격을 입력하세요"
                />
              ))}
              <S.AddButton type="button" onClick={addOptionPriceField}>
              <img src={plusIcon}></img>
              </S.AddButton>
            </S.OptionGroup>
            </div>
          </>
        )}
        
        <Button 
          type="submit" 
          variant="primary" 
          mobileBottom={72} 
          pcBottom={206} 
          tabletBottom={28}
        >
          다음
        </Button>
      </S.Form>

        );
        
        

      default:
        return null;
    }
  };

  return (
    <S.PageWrapper>
      {renderHeader()}
      <S.ContentWrapper>
        {renderStep()}
      </S.ContentWrapper>
    </S.PageWrapper>
  );
};

export default ProductUpload;