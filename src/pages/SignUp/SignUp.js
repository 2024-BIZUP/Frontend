import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './SignUp.styled';
import bizupCharacter from '../../assets/images/bizup-character.svg';
import bizupLogo from '../../assets/images/bizup-logo.svg';
import backButtonCircle from '../../assets/images/back-arrow-circle-icon.png';
import NextBtn from '../../components/buttons/NextBtn/NextBtn';

// 사업자등록번호 포맷팅 함수
const formatBusinessNumber = (value) => {
  const clean = value.replace(/[^0-9]/g, '');
  if (clean.length <= 3) {
    return clean;
  } else if (clean.length <= 5) {
    return `${clean.slice(0, 3)}-${clean.slice(3)}`;
  } else {
    return `${clean.slice(0, 3)}-${clean.slice(3, 5)}-${clean.slice(5, 10)}`;
  }
};

const validateUser = async (email, businessNumber) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/users/validate',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        email: email,
        bno: businessNumber
      }
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data?.message || '서버 에러가 발생했습니다.');
    }
    throw error;
  }
};

const validateCode = async (code) => {
  console.log('인증 코드 전송:', code); 
  
  try {
    const response = await axios({
      method: 'GET',
      url: `/api/users/validate?code=${code}`,
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    console.log('인증 성공 응답:', response.data);
    return response.data;
  } catch (error) {
    console.error('인증 에러:', error.response?.data);
    
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }

    // 상태 코드별 에러 처리
    if (error.response) {
      switch (error.response.status) {
        case 403:
          throw new Error('인증번호가 일치하지 않습니다. 다시 확인해주세요.');
        case 404:
          throw new Error('유효하지 않은 인증번호입니다.');
        default:
          throw new Error('인증에 실패했습니다. 다시 시도해주세요.');
      }
    }

    throw new Error('네트워크 오류가 발생했습니다.');
  }
};

// 모달 컴포넌트
const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalTitle>회원가입을</S.ModalTitle>
        <S.ModalTitle>처음 진행하시나요?</S.ModalTitle>
        
        <S.ModalText>
          아직 사업자 등록 번호를 입력하지 않았다면{' '}
          <S.ModalTextBold>네</S.ModalTextBold>
          <br />
          검수 완료 메일을 받았다면{' '}
          <S.ModalTextBold>아니오</S.ModalTextBold>를 눌러주세요:)
        </S.ModalText>

        <S.ModalButtonGroup>
          <S.ModalButton onClick={onClose} isNo>
            아니오
          </S.ModalButton>
          <S.ModalButton onClick={onConfirm}>
            네
          </S.ModalButton>
        </S.ModalButtonGroup>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

// 이메일 입력 단계
const EmailStep = ({ onNext, onBack }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email.trim()) {
      setError('이메일을 입력해주세요.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('올바른 이메일 형식이 아닙니다.');
      return;
    }

    onNext(email);
  };

  return (
    <S.StepContainer>
      <S.BackButton onClick={onBack}>
        <S.BackIcon src={backButtonCircle} alt="뒤로가기" />
      </S.BackButton>

      <S.ProgressBarContainer>
        <S.ProgressBar step="email" />
      </S.ProgressBarContainer>

      <S.StepTitle>이메일 주소 입력하기</S.StepTitle>
      
      <S.EmailInput 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일 주소를 입력해주세요"
      />
      
      <S.InfoText>
        사업자 등록증에 나와있는 이메일 주소로 입력 부탁드립니다.
      </S.InfoText>

      {error && (
        <S.ErrorText>
          {error}
        </S.ErrorText>
      )}

      <NextBtn
        variant="primary"
        mobileBottom={72}
        pcBottom={30}
        tabletBottom={25}
        onClick={handleSubmit}
      >
        다음
      </NextBtn>
    </S.StepContainer>
  );
};

// 사업자 등록증 번호 입력 단계
const BusinessStep = ({ onNext, onBack, email }) => {
  const [businessNumber, setBusinessNumber] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleBusinessNumberChange = (e) => {
    const value = e.target.value;
    if (/^[\d-]*$/.test(value)) {
      const formattedValue = formatBusinessNumber(value);
      setBusinessNumber(formattedValue);
    }
  };

  const handleSubmit = async () => {
    const bnoRegex = /^\d{3}-\d{2}-\d{5}$/;
    if (!bnoRegex.test(businessNumber)) {
      setError('사업자등록번호 형식이 올바르지 않습니다. (예: 123-45-67890)');
      return;
    }

    setIsLoading(true);
    try {
      await validateUser(email, businessNumber);
      onNext();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.StepContainer>
      <S.BackButton onClick={onBack}>
        <S.BackIcon src={backButtonCircle} alt="뒤로가기" />
      </S.BackButton>

      <S.ProgressBarContainer>
        <S.ProgressBar step="business" />
      </S.ProgressBarContainer>

      <S.StepTitle>사업자 등록증 번호 입력하기</S.StepTitle>
      
      <S.Input 
        type="text"
        value={businessNumber}
        onChange={handleBusinessNumberChange}
        placeholder="사업자 등록번호를 입력해주세요"
        maxLength={12}
      />

      {error && (
        <S.ErrorText>
          {error}
        </S.ErrorText>
      )}

      <NextBtn
        variant="primary"
        mobileBottom={72}
        pcBottom={30}
        tabletBottom={25}
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? '확인중...' : '다음'}
      </NextBtn>
    </S.StepContainer>
  );
};

// 승인 완료 컴포넌트 추가
const ApprovalCompletedStep = ({ onNext }) => {
  return (
    <S.StepContainer>
      <S.StepTitle>승인이 완료되었습니다.</S.StepTitle>
      <S.SubText>회원가입을 진행해주세요!</S.SubText>

      <NextBtn
        variant="primary"
        mobileBottom={72}
        pcBottom={30}
        tabletBottom={25}
        onClick={onNext}
      >
        다음
      </NextBtn>
    </S.StepContainer>
  );
};

// 확인 대기 단계
const VerificationStep = ({ onBack }) => {
  return (
    <S.StepContainer>
      <S.BackButton onClick={onBack}>
        <S.BackIcon src={backButtonCircle} alt="뒤로가기" />
      </S.BackButton>

      <S.ProgressBarContainer>
        <S.ProgressBar step="verification" />
      </S.ProgressBarContainer>

      <S.StepTitle>사업자 등록증 확인중...</S.StepTitle>
      
      <S.VerificationText>
        사업자 등록증 확인 검수가 끝나면 기재하신
        <br />
        이메일로 인증코드를 보내 예정이니
        <br />
        확인 부탁드립니다.
      </S.VerificationText>
    </S.StepContainer>
  );
};

// 코드 확인 단계 (모달에서 '아니오' 선택시)
const CodeVerificationStep = ({ onBack, onSuccess }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCodeChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');  // 숫자만 입력 가능
    setCode(value);
  };

  const handleSubmit = async () => {
    if (!code || code.length !== 6) {
      setError('6자리 인증코드를 입력해주세요.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await validateCode(code);
      console.log('인증 시도 결과:', response);
      
      if (response.code === 200) {
        if (onSuccess) {
          onSuccess(response.data);  // userId 전달
        }
      } else {
        setError('인증에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('인증 실패:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.StepContainer>
      <S.BackButton onClick={onBack}>
        <S.BackIcon src={backButtonCircle} alt="뒤로가기" />
      </S.BackButton>

      <S.StepTitle>발송 코드를 입력해주세요</S.StepTitle>
      
      <S.Input 
        type="text"
        value={code}
        onChange={handleCodeChange}
        placeholder="6자리 숫자를 입력해주세요"
        maxLength={6}
        disabled={isLoading}
      />

      {error && (
        <S.ErrorText>
          {error}
        </S.ErrorText>
      )}

      <NextBtn
        variant="primary"
        mobileBottom={72}
        pcBottom={30}
        tabletBottom={25}
        onClick={handleSubmit}
        disabled={isLoading || code.length !== 6}
      >
        {isLoading ? '확인중...' : '확인'}
      </NextBtn>
    </S.StepContainer>
  );
};

const StoreInfoStep = ({ onBack, validateId }) => {
  const [formData, setFormData] = useState({
    userid: '',
    password: '',
    businessName: '',
    description: '',
    businessNum: '',
    phone: '',
    businessAddress: '',
    itemSendLocation: '',
    accountNum: '',
    nickname: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 주소 검색 API 연결
    const script = document.createElement('script');
    script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleAddressSearch = (type) => {
    new window.daum.Postcode({
      oncomplete: function(data) {
        setFormData(prev => ({
          ...prev,
          [type]: data.address
        }));
      }
    }).open();
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: 'POST',
        url: '/api/users/register',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          validateId,  // 인증 완료 후 받은 ID
          ...formData
        }
      });

      if (response.data.code === 200) {
        // 회원가입 성공 처리
        console.log('회원가입 성공');
      }
    } catch (error) {
      setError(error.response?.data?.message || '회원가입에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <S.StepContainer>
      <S.BackButton onClick={onBack}>
        <S.BackIcon src={backButtonCircle} alt="뒤로가기" />
      </S.BackButton>

      <S.StepTitle>가게 정보 입력하기</S.StepTitle>

      <S.FormGroup>
        <S.Label>아이디</S.Label>
        <S.Input
          name="userid"
          value={formData.userid}
          onChange={handleInputChange}
          placeholder="아이디를 입력해주세요"
        />
      </S.FormGroup>

      <S.FormGroup>
        <S.Label>비밀번호</S.Label>
        <S.Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="비밀번호를 입력해주세요"
        />
      </S.FormGroup>

      <S.FormGroup>
        <S.Label>가게명</S.Label>
        <S.Input
          name="businessName"
          value={formData.businessName}
          onChange={handleInputChange}
          placeholder="가게명을 입력해주세요"
        />
      </S.FormGroup>

      <S.FormGroup>
        <S.Label>가게 설명</S.Label>
        <S.Input
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="가게 설명을 입력해주세요"
        />
      </S.FormGroup>

      <S.FormGroup>
        <S.Label>사업자등록번호</S.Label>
        <S.Input
          name="businessNum"
          value={formData.businessNum}
          onChange={handleInputChange}
          placeholder="사업자등록번호를 입력해주세요"
        />
      </S.FormGroup>

      <S.FormGroup>
        <S.Label>전화번호</S.Label>
        <S.Input
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="전화번호를 입력해주세요"
        />
      </S.FormGroup>

      <S.FormGroup>
        <S.Label>사업장 주소</S.Label>
        <S.AddressWrapper>
          <S.AddressInput
            readOnly
            value={formData.businessAddress}
            placeholder="주소를 검색해주세요"
            onClick={() => handleAddressSearch('businessAddress')}
          />
          <S.SearchButton onClick={() => handleAddressSearch('businessAddress')}>
            <S.SearchIcon />
          </S.SearchButton>
        </S.AddressWrapper>
      </S.FormGroup>

      <S.FormGroup>
        <S.Label>상품 발송지</S.Label>
        <S.AddressWrapper>
          <S.AddressInput
            readOnly
            value={formData.itemSendLocation}
            placeholder="주소를 검색해주세요"
            onClick={() => handleAddressSearch('itemSendLocation')}
          />
          <S.SearchButton onClick={() => handleAddressSearch('itemSendLocation')}>
            <S.SearchIcon />
          </S.SearchButton>
        </S.AddressWrapper>
      </S.FormGroup>

      <S.FormGroup>
        <S.Label>계좌번호</S.Label>
        <S.Input
          name="accountNum"
          value={formData.accountNum}
          onChange={handleInputChange}
          placeholder="계좌번호를 입력해주세요"
        />
      </S.FormGroup>

      <S.FormGroup>
        <S.Label>닉네임</S.Label>
        <S.Input
          name="nickname"
          value={formData.nickname}
          onChange={handleInputChange}
          placeholder="닉네임을 입력해주세요"
        />
      </S.FormGroup>

      {error && <S.ErrorText>{error}</S.ErrorText>}

      <NextBtn
        variant="primary"
        mobileBottom={72}
        pcBottom={30}
        tabletBottom={25}
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? '가입 중...' : '가입하기'}
      </NextBtn>
    </S.StepContainer>
  );
};

// 메인 컴포넌트
const SignUp = () => {
  const [step, setStep] = useState('initial');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [validateId, setValidateId] = useState(null);

  const handleCodeVerificationSuccess = (userId) => {
    setValidateId(userId);
    setStep('approvalCompleted');
  };

  const handleJoin = () => {
    setIsModalOpen(true);
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    setStep('email');
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setStep('codeVerification');
  };

  const handleNext = (currentStep, data) => {
    switch (currentStep) {
      case 'email':
        setEmail(data);
        setStep('business');
        break;
      case 'business':
        setStep('verification');
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    switch (step) {
      case 'business':
        setStep('email');
        break;
      case 'verification':
        setStep('business');
        break;
      case 'email':
      case 'codeVerification':
        setStep('initial');
        break;
      default:
        break;
    }
  };

  if (step === 'initial') {
    return (
      <S.Container>
        <S.Logo src={bizupLogo} alt="BIZUP" />
        <S.SubTitle>전통시장 특산품 사장님 전용</S.SubTitle>
        
        <S.CharacterImage src={bizupCharacter} alt="BIZUP 캐릭터" />
        
        <NextBtn 
          variant="primary"
          mobileBottom={106}
          pcBottom={100}
          tabletBottom={90}
          onClick={handleJoin}
        >
          가입하기
        </NextBtn>
        
        <S.LoginText>
          이미 계정이 있나요? <S.LoginLink>로그인</S.LoginLink>
        </S.LoginText>

        <ConfirmModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onConfirm={handleModalConfirm}
        />
      </S.Container>
    );
  }

  return (
    <S.Container>
      {step === 'email' && (
        <EmailStep 
          onNext={(email) => handleNext('email', email)}
          onBack={handleBack}
        />
      )}
      
      {step === 'business' && (
        <BusinessStep 
          onNext={() => handleNext('business')}
          onBack={handleBack}
          email={email}
        />
      )}
      
      {step === 'verification' && (
        <VerificationStep 
          onBack={handleBack}
        />
      )}

      {step === 'codeVerification' && (
        <CodeVerificationStep 
          onBack={handleBack}
          onSuccess={handleCodeVerificationSuccess}
        />
      )}

      {step === 'approvalCompleted' && (
        <ApprovalCompletedStep 
          onNext={() => setStep('storeInfo')}
        />
      )}

      {step === 'storeInfo' && (
        <StoreInfoStep 
          onBack={handleBack}
          validateId={validateId}
        />
      )}

    </S.Container>
  );
};

export default SignUp;