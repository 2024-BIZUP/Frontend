import React, { useState } from 'react';
import Button from '../../components/buttons/NextBtn/NextBtn';
import Input from '../../components/inputs/ProductInput/ProductInput';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import ProgressBarHeader from '../../components/Header/ProgressBarHeader';
import plusIcon from '../../assets/plusIcon.svg';
import ImageUploadIcon from '../../assets/photoUploadIcon.svg';


import * as S from './ProductUpload.styled';
const colorPalette = ['#000000', '#FF0000', '#FF8A00', '#FFE600', '#00FF29', '#0047FF', '#7723FF'];

const ProductUpload = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [contentText, setContentText] = useState('');
const [textStyles, setTextStyles] = useState([]);
  const [formData, setFormData] = useState({
    // 상품등록 첫번째 페이지 데이터
    productName: '',
    price: '',
    discountAmount: '',
    discountType: '적용',
    discountPeriod: '',
    optionNames: [''], // 옵션명 입력 필드 배열
    optionPrices: [''], // 옵션 가격 입력 필드 배열
    deliveryFee: '',
    productCategory: '', // 상품종류
    origin: '', // 원산지
    harvestDate: '', // 수확일자
    shelfLife: '', // 권장 유통기한
    
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTextSelect = () => {
    const selection = window.getSelection();
    const text = selection.toString();
    
    if (text) {
      const container = document.querySelector('[contenteditable]');
      const range = selection.getRangeAt(0);
      
      // 전체 텍스트에서의 선택 위치 계산
      const preSelectionRange = range.cloneRange();
      preSelectionRange.selectNodeContents(container);
      preSelectionRange.setEnd(range.startContainer, range.startOffset);
      const start = preSelectionRange.toString().length;
      
      return {
        start,
        end: start + text.length,
        text
      };
    }
    return null;
  };
  
  const handleColorApply = (color) => {
    const selection = handleTextSelect();
    if (selection) {
      // 새로운 스타일 추가
      setTextStyles(prev => {
        const newStyles = [...prev, {
          start: selection.start,
          end: selection.end,
          color: color
        }];
        console.log('Current Text Styles:', newStyles); // 콘솔에 현재 스타일 출력
        return newStyles;
      });
      
      const span = document.createElement('span');
      span.style.color = color;
      const range = window.getSelection().getRangeAt(0);
      range.surroundContents(span);
    }
   };
   
  
  const formatDataForServer = () => {
    return {
      text: contentText,
      styles: textStyles.map(style => ({
        start: style.start,
        end: style.end,
        type: 'color',
        value: style.color
      }))
    };
  };
  const renderHeader = () => {
    // 첫 페이지에서는 헤더를 보여주지 않음
    if (currentStep === 1 || currentStep === 7) return null;

    return (
      <ProgressBarHeader 
      currentStep={currentStep}
      onBack={handleBack}/>
    );
  };
  const renderUploadBox = () => (
    <>
      {/* input을 UploadBox 밖으로 이동하고 항상 렌더링되도록 함 */}
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
      <S.UploadBox onClick={() => document.getElementById('imageUpload').click()}>
        {uploadedImage ? (
          <S.PreviewImage 
            src={uploadedImage} 
            alt="Preview" 
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <S.UploadLabel>
            <S.UploadIcon />
            <span>Upload Image</span>
            <img src={ImageUploadIcon} alt="upload" />
          </S.UploadLabel>
        )}
      </S.UploadBox>
    </>
  );
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
        
      case 4:
          return (
            <S.Form onSubmit={handleSubmit}>
              <div>
              <S.Label>옵션 리스트</S.Label>
              <S.OptionsBox>
                {formData.optionNames.map((name, index) => (
                  <S.OptionRow key={index} isLast={index === formData.optionNames.length - 1}>
                    <S.OptionName>{name}</S.OptionName>
                    <S.OptionPrice>{Number(formData.optionPrices[index]).toLocaleString()}원</S.OptionPrice>
                  </S.OptionRow>
                ))}
              </S.OptionsBox>
              </div>
            <Input
              label="배송비"
              type="number"
              value={formData.deliveryFee}
              onChange={handleChange('deliveryFee')}
              placeholder="ex.3000"
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
      case 5:
          return (
            <S.Form onSubmit={handleSubmit}>
              <div>
                <Input
                  label="상품종류"
                  value={formData.productCategory}
                  onChange={handleChange('productCategory')}
                  placeholder="ex. 안동 청송 프리미엄 햇 사과 가정용, 9kg, 1개"
                />
                <S.ProductNameCaution>
                  유명 상품을 유사문구로 무단 도용할 경우 별다른 고지없이<br/>
                  제재될 수 있다는 점 참고부탁드립니다.
                </S.ProductNameCaution>
              </div>
              <Input
                label="원산지"
                value={formData.origin}
                onChange={handleChange('origin')}
                placeholder="ex. 안동"
              />
             
              <Input
                label="수확일자"
                value={formData.harvestDate}
                onChange={handleChange('harvestDate')}
                placeholder="숫자만 입력"
              />
              <Input
                label="권장 유통기한"
                value={formData.shelfLife}
                onChange={handleChange('shelfLife')}
                placeholder="숫자만 입력"
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

          case 6 :
            return (
                  <S.Form onSubmit={(e) => {
                    e.preventDefault();
                    const formattedData = formatDataForServer();
                    handleNext()
                  }}>
                    <Input
                      label="제목"
                      value={formData.title}
                      onChange={handleChange('title')}
                      placeholder="ex. 안동 청송 프리미엄 햇 사과 가정용, 9kg, 1개"
                    />
                    <div>
                      <S.Label>사진</S.Label>
                      {renderUploadBox()}
                    </div>
                    <div>
                      <S.Label>내용</S.Label>
                      <S.TextEditorContainer>
                    <S.ColorPaletteWrapper>
                      {colorPalette.map((color) => (
                        <S.ColorButton
                          key={color}
                          color={color}
                          onClick={() => handleColorApply(color)}
                        />
                      ))}
                    </S.ColorPaletteWrapper>
                    <S.TextArea
                      onSelect={handleTextSelect}
                      contentEditable
                      suppressContentEditableWarning
                      placeholder="ex.의성 청송 프리미엄 햇 사과, 9kg, 1개"
                    />
                  </S.TextEditorContainer>
                    </div>
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
                
            )

            case 7 :
              return (
                <S.Form>
                <S.UploadMessage
                mobileTop={312} 
                pcTop={300} 
                tabletTop={28}>00님,<br/>상품등록이 완료되었습니다!</S.UploadMessage>
                <Button onClick={handleNext}
                variant="primary"
                type="submit" 
                mobileBottom={168} 
                pcBottom={339} 
                tabletBottom={28}>비즈업 시작하기</Button>
                </S.Form>
              )


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