import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './CommunityUpload.styled';
//import axios from 'axios'; 
import UploadIcon from '../../assets/blogUploadIcon.svg';
import CheckIcon from '../../assets/checkIcon.svg';
import ImageUploadIcon from '../../assets/photoUploadIcon.svg';
import Header from '../../components/Header/Header';
import NextBtn from '../../components/buttons/NextBtn/NextBtn';

const CommunityUpload = () => {
  const navigate = useNavigate(); 
  const [step, setStep] = useState(1);
  const [uploadedImage, setUploadedImage] = useState(null); // file 객체 저장
  const [imagePreview, setImagePreview] = useState(null); // 미리보기용 URL
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

  /*const regionMapping = {
    "경기도": "GYEONGGI",
    "인천": "INCHEON", 
    "서울": "SEOUL",
    "강원도": "GANGWON",
    "경상도": "GYEONGSANG",
    "전라도": "JEOLLA",
    "제주도": "JEJU",
    "충청도": "CHUNGCHEONG"
  };

  const [inspectedData, setInspectedData] = useState(null); //응답데이터 저장하는 상태*/

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
  const isFormFilled = imagePreview && selectedLocation && isTitleFilled && isContentFilled;

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
      console.log("Selected file:", file); // 파일 로그 출력
      setUploadedImage(file); // 파일 객체 저장
  
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // 미리보기 URL 저장
      };
      reader.readAsDataURL(file);
    }
  };

  const isNextDisabled = () => {
    if (step === 0 && !imagePreview) return true;
    return false;
  };

  const handleInspect = () => {
    // 검사 로직 대신 바로 로딩 화면으로 전환
    setStep(5);
  };

  const handleFinalUpload = () => {
    // 업로드 성공 가정
    alert('게시물이 성공적으로 등록되었습니다!');
    navigate('/community/detail');
  };

  //api 연결 시 필요한 함수
  /*const handleInspect = async () => {
    try {
      if (!uploadedImage) {
        alert('이미지를 선택해주세요.');
        return;
      }
  
      setStep(5);
  
      const formData = new FormData();
      
      const communityRequest = {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        title: title,
        content: content,
        region: regionMapping[selectedLocation]
      };
  
      console.log('전송할 데이터:', {
        communityRequest: communityRequest,
        image: uploadedImage
      });
  
      // communityRequest는 JSON 문자열로, image는 파일 그대로 전송
      formData.append('communityRequest', JSON.stringify(communityRequest));
      formData.append('image', uploadedImage);
  
      // FormData 내용 확인
      console.log('=== FormData 내용 확인 ===');
      for (let [key, value] of formData.entries()) {
        if (key === 'communityRequest') {
          console.log('communityRequest:', JSON.parse(value));
        } else if (key === 'image') {
          console.log('image file:', {
            name: value.name,
            type: value.type,
            size: value.size
          });
        }
      }
  
      const response = await axios.post('/community/check', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
  
      console.log('검사 결과:', response.data);
      setInspectedData(response.data);
      setTimeout(() => { setStep(6); }, 3000);
  
    } catch (error) {
      // axios 에러의 상세 내용 출력
      if (error.response) {
        console.error('서버 응답 에러:', {
          status: error.response.status,
          data: error.response.data,
          headers: error.response.headers
        });
      } else if (error.request) {
        console.error('요청 에러:', error.request);
      } else {
        console.error('에러:', error.message);
      }
      alert('오류가 발생했습니다. 다시 시도해주세요.');
      setStep(4);
    }
  };
  
  const handleFinalUpload = async () => {
    try {
      if (!inspectedData?.id) {
        alert('검사 데이터가 없습니다. 다시 시도해주세요.');
        return;
      }
  
      const formData = new FormData();
      
      const communityRequest = {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        title: title,
        content: content,
        region: regionMapping[selectedLocation]
      };
  
      formData.append('communityRequest', JSON.stringify(communityRequest));
      formData.append('image', uploadedImage);
  
      let response;
      try {
        response = await axios.put(`/community/${inspectedData.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });
        console.log('서버 응답:', response);
      } catch (axiosError) {
        console.log('서버 응답 상태 코드:', axiosError.response?.status);
        console.log('서버 에러 응답:', axiosError.response?.data);
        console.log('전체 에러 객체:', axiosError);
        throw axiosError;
      }
  
      console.log('최종 업로드 성공:', response.data);
      alert('게시물이 성공적으로 등록되었습니다!');
      navigate(`/community-detail/${inspectedData.id}`);
  
    } catch (error) {
      console.error('최종 업로드 실패:', error);
      alert('게시물 등록에 실패했습니다. 다시 시도해주세요.');
    }
  };*/

  //페이지 구성 함수
  const renderTips = () => (
    <S.TipContainer>
      <S.IconWrapper>
        <img src={UploadIcon} alt="upload icon" />
      </S.IconWrapper>
      <S.TipTextDiv>
      {/* 첫 번째 팁은 항상 보임 */}
      <S.TipTextContainer variant="primary" justify="flex-start">
        <S.TipText>
          시장에 담긴 여러분들의 <span>이야기가 담은 사진</span>을 업로드해주세요!
        </S.TipText>
      </S.TipTextContainer>

      {/* 두 번째 팁은 step이 2 이상일 때 보임 */}
      {step >= 2 && (
        <S.TipTextContainer variant="secondary" justify="flex-start">
          <S.TipText>
            <span>챗GPT</span>를 활용해 트렌트한 문장을 만들어주세요!
          </S.TipText>
        </S.TipTextContainer>
      )}

      {/* 세 번째 팁은 step이 3일 때 보임 */}
      {step >= 3 && (
        <S.TipTextContainer variant="primary" justify="flex-end">
          <S.TipText>
            <span>정성을 담은 글</span>로 따뜻한 소통을 시작해주세요!
          </S.TipText>
        </S.TipTextContainer>
      )}
      </S.TipTextDiv>
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
          <S.LoadingText>잠시만 기다려주세요.</S.LoadingText>
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
        <S.LoadingCircleInner><img src={CheckIcon} alt="check" /></S.LoadingCircleInner>
      </S.LoadingCircleWrapper>
      <S.CompleteTitle>수정완료!</S.CompleteTitle>
      <S.CompleteText>
        챗GPT가 변화시킨<br/>
        문장을 확인해주세요!
      </S.CompleteText>
    </S.CompleteContainer>
  );

  const renderUploadBox = () => (
    <S.UploadBox onClick={() => document.getElementById('imageUpload').click()}>
      {imagePreview ? (
        <S.PreviewImage 
          src={imagePreview} 
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
  );

  const renderStepContent = () => {
    switch (step) {
      case 1:
      case 2:
      case 3:
        return renderTips();
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
                onClick={handleInspect}
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
        case 7:
  return (
    <S.CreatePostContainer>
      <S.UploadBox>
        {imagePreview && (
          <S.PreviewImage
            src={imagePreview}
            alt="Preview"
            style={{ cursor: 'pointer' }}
          />
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
          onClick={handleFinalUpload}
          disabled={!isFormFilled}
          variant={isFormFilled ? "primary" : "quaternary"}
          mobileBottom={24}
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
  {step !== 5 && step !== 4 && step !== 7 && (
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