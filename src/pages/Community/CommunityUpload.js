import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './CommunityUpload.styled';
import UploadIcon from '../../assets/blogUploadIcon.svg';
import CheckIcon from '../../assets/checkIcon.svg';
import ImageUploadIcon from '../../assets/photoUploadIcon.svg';
import Header from '../../components/Header/Header';
import NextBtn from '../../components/buttons/NextBtn/NextBtn';

const CommunityUpload = () => {
  const navigate = useNavigate(); 
  const [step, setStep] = useState(1);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [description, setDescription] = useState('');
  // 상단 state 부분에 추가
const [selectedLocation, setSelectedLocation] = useState('');
const [isTitleFilled, setIsTitleFilled] = useState(false);
const [isContentFilled, setIsContentFilled] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const locations = [
    "경기도",
    "인천",
    "서울",
    "강원도",
    "경상도",
    "전라도",
    "제주도",
    "충청도",
  ];

  // 이벤트 핸들러 추가
const handleTitleChange = (e) => {
  const newTitle = e.target.value;
  setTitle(newTitle);
  setIsTitleFilled(newTitle.trim().length > 0);
};

const handleContentChange = (e) => {
  const newContent = e.target.value;
  setContent(newContent);
  setIsContentFilled(newContent.trim().length > 0);
};

// isNextDisabled 수정
const isFormFilled = uploadedImage && selectedLocation && isTitleFilled && isContentFilled;

  const handleNext = () => {
    if (step < 7) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
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

  const isNextDisabled = () => {
    if (step === 0 && !uploadedImage) return true;
    if (step === 4 && !description.trim()) return true;
    return false;
  };

  // 검사하기 버튼 클릭시 로딩화면으로 이동
  const handleInspect = () => {
    setStep(5); // 로딩 화면으로 이동
  };


  
  const handleFinalUpload = async () => {
    try {
      console.log('테스트 업로드 시작...');
      console.log('업로드할 데이터:', {
        이미지: uploadedImage ? '이미지 있음' : '이미지 없음',
        지역: selectedLocation,
        제목: title,
        내용: content
      });
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('테스트 업로드 성공!');
      alert('(테스트) 게시물이 성공적으로 업로드되었습니다!');
      navigate('/community/detail');
      
      setUploadedImage(null);
      setSelectedLocation('');
      setTitle('');
      setContent('');
      setIsTitleFilled(false);
      setIsContentFilled(false);
      setStep(1);
      
    } catch (error) {
      console.error('테스트 업로드 에러:', error);
      alert('(테스트) 업로드 실패! 다시 시도해주세요.');
    }
};
  //페이지 구성 함수
  const renderTips = () => (
    <S.TipContainer>
      <S.IconWrapper>
        <img src={UploadIcon} alt="upload icon" />
      </S.IconWrapper>
      
      {/* 첫 번째 팁은 항상 보임 */}
      <S.TipTextContainer variant="primary">
        <S.TipText>
          시장에 담긴 여러분들의 <span>이야기가 담은 사진</span>을 업로드해주세요!
        </S.TipText>
      </S.TipTextContainer>

      {/* 두 번째 팁은 step이 2 이상일 때 보임 */}
      {step >= 2 && (
        <S.TipTextContainer variant="secondary">
          <S.TipText>
            <span>챗GPT</span>를 활용해 트렌트한 문장을 만들어주세요!
          </S.TipText>
        </S.TipTextContainer>
      )}

      {/* 세 번째 팁은 step이 3일 때 보임 */}
      {step >= 3 && (
        <S.TipTextContainer variant="primary">
          <S.TipText>
            <span>정성을 담은 글</span>로 따뜻한 소통을 시작해주세요!
          </S.TipText>
        </S.TipTextContainer>
      )}
    </S.TipContainer>
  );



  const LoadingScreen = () => {
    React.useEffect(() => {
      // 3초 후에 완료 화면으로 자동 전환
      const timer = setTimeout(() => { //나중에 이 부분 수정해서 api 연결하면 됨
        setStep(6);
      }, 3000);
  
      // 컴포넌트가 언마운트될 때 타이머 정리
      return () => clearTimeout(timer);
    }, []); // 빈 의존성 배열로 마운트 시 한 번만 실행
  
    return (
      <S.LoadingContainer>
        <S.LoadingCircleWrapper>
          <S.LoadingCircleOuter />
          <S.LoadingCircleInner />
        </S.LoadingCircleWrapper>
        <S.LoadingTitle>검수중</S.LoadingTitle>
        <S.LoadingTextContainer>
          <S.LoadingText>잠시만 기다려주세요.
          </S.LoadingText>
          <S.LoadingText>
          챗GPT가 문장을 <span>트렌드</span>하게<br/>
          변화시키는 중이에요.
        </S.LoadingText>
        </S.LoadingTextContainer>
      </S.LoadingContainer>
    );
  };
  const CompleteScreen = () => (
    <S.CompleteContainer>
      <S.LoadingCircleWrapper>
        <S.LoadingCircleOuter />
        <S.LoadingCircleInner><img src={CheckIcon}></img></S.LoadingCircleInner>
      </S.LoadingCircleWrapper>
      <S.CompleteTitle>수정완료!</S.CompleteTitle>
      <S.CompleteText>
        챗GPT가 변화시킨<br/>
        문장을 확인해주세요!
      </S.CompleteText>
    </S.CompleteContainer>
  );

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
  const renderStepContent = () => {
    switch (step) {
      case 1:
      case 2:
      case 3:
        return renderTips();  // 중괄호 없이 직접 호출
        case 4:
          return (
            <S.CreatePostContainer>
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
              <S.SelectContainer>
                <S.Select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  isFilled={selectedLocation !== ''}
                >
                  <option value="" hidden>지역</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </S.Select>
              </S.SelectContainer>

              <S.TextAreaContainer>
                <S.TitleInput
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="제목을 입력해주세요"
                  isFilled={isTitleFilled}
                />
                <S.ContentTextArea
                  value={content}
                  onChange={handleContentChange}
                  placeholder="내용을 입력해주세요"
                  isFilled={isContentFilled}
                />
              </S.TextAreaContainer>

              <S.ButtonGroup>
                <NextBtn
                  onClick={() => handleInspect()}
                  disabled={!isFormFilled}
                  variant={isFormFilled ? "primary" : "quaternary"}
                  mobileBottom={98}
                  tabletBottom={98}
                  pcBottom={98}
                >
                  검사하기
                </NextBtn>
                <NextBtn
                  onClick={handleFinalUpload}
                  disabled={!isFormFilled}
                  variant="tertiary"
                  mobileBottom={24}
                  tabletBottom={24}
                  pcBottom={24}
                >
                  업로드하기
                </NextBtn>
              </S.ButtonGroup>
            </S.CreatePostContainer>
          );
        case 5:
          return <LoadingScreen />;
        case 6:
          return <CompleteScreen />;
        case 7 :
          return (
            <S.CreatePostContainer>
            {renderUploadBox()}
            <S.SelectContainer>
              <S.Select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                isFilled={selectedLocation !== ''}
              >
                <option value="" hidden>지역</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </S.Select>
            </S.SelectContainer>

            <S.TextAreaContainer>
              <S.TitleInput
                value={title}
                onChange={handleTitleChange}
                placeholder="제목을 입력해주세요"
                isFilled={isTitleFilled}
              />
              <S.ContentTextArea
                value={content}
                onChange={handleContentChange}
                placeholder="내용을 입력해주세요"
                isFilled={isContentFilled}
              />
            </S.TextAreaContainer>

            <S.ButtonGroup>
              <NextBtn
                onClick={handleFinalUpload}
                disabled={!isFormFilled}
                variant={isFormFilled ? "primary" : "quaternary"}
                mobileBottom={72}
                tabletBottom={24}
                pcBottom={24}
              >
                업로드하기
              </NextBtn>
            </S.ButtonGroup>
          </S.CreatePostContainer>
        );
          
      default:
        return <div>잘못된 단계입니다. 다시 시도해주세요.</div>;
    }
  };

  return (
    <S.Container>
       {step !== 5 && step !== 6 && (
        <Header 
          title={step >= 4 ? '게시물 생성하기' : 'Blog 업로드 TIP'}
          showBackButton={step > 0}
          onBack={handleBack}
        />
      )}
      <S.ContentWrapper>
        {renderStepContent()}
      </S.ContentWrapper>
      {step !== 5  && step !== 4 && step !== 7 &&  (
        <NextBtn
          onClick={handleNext}
          disabled={isNextDisabled()}
          variant="primary"
          mobileBottom={38}
        >
          다음
        </NextBtn>
      )}
    </S.Container>
  );
};

export default CommunityUpload;