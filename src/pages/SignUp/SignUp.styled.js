import styled from 'styled-components';

export const Container = styled.div`
  max-width: 390px;
  margin: 0 auto;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: white;
`;

// 회원가입 공통 스타일
export const StepContainer = styled.div`
  width: 100%;
  padding-top: 80px;
`;

// BIZUP 로고
export const Logo = styled.img`
  width: 137px;
  height: auto;
  margin-top: 120px;
`;

// 전통시장 특산품 사장님 전용
export const SubTitle = styled.p`
  font-size: 20px;
  text-align: center;
  color: #505050;
  margin-top: 40px;
`;

// BIZUP 캐릭터 이미지
export const CharacterImage = styled.img`
  width: 390px;
  height: 379px;
  margin-top: 12px;
`;

// 이미 계정이 있나요?
export const LoginText = styled.p`
  font-family: 'Noto Sans KR';
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  color: #505050;
  position: absolute;
  bottom: 66px;
`;

// 로그인 링크
export const LoginLink = styled.span`
  color: #E68808;
  cursor: pointer;
`;

// 뒤로가기 버튼
export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

// 뒤로가기 아이콘
export const BackIcon = styled.img`
  width: 40px;
  height: 40px;
`;

// 프로그레스 바 컨테이너
export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: #E5E5E5;
  position: absolute;
  top: 60px;
`;

// 프로그레스 바
export const ProgressBar = styled.div`
  height: 100%;
  background-color: #70614C;
  width: ${props => {
    switch(props.step) {
      case 'initial':
        return '0%';
      case 'email':
        return '33%';
      case 'business':
        return '66%';
      case 'verification':
        return '100%';
      default:
        return '0%';
    }
  }};
  transition: width 0.3s ease;
`;

// 단계별 제목
export const StepTitle = styled.h2`
  font-size: 24px;
  margin: 40px 0 20px;
`;

// 입력 필드 공통
export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #E6E6E6;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 10px;
  
  &::placeholder {
    color: #999999;
  }
  
  &:focus {
    outline: none;
    border-color: #70614C;
  }
`;

// 이메일 입력창
export const EmailInput = styled(Input)``;

// 안내 텍스트
export const InfoText = styled.p`
  color: #757575;
  font-size: 12px;
  margin-top: 8px;
`;

// 모달 스타일
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 335px;
  text-align: center;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
  color: #1A1A1A;
`;

export const ModalText = styled.p`
  margin: 16px 0 24px;
  font-size: 14px;
  line-height: 1.5;
  color: #666666;
`;

export const ModalTextBold = styled.span`
  font-weight: 600;
  color: #1A1A1A;
`;

export const ModalButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const ModalButton = styled.button`
  flex: 1;
  padding: 14px 0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  
  ${({ isNo }) => isNo ? `
    background-color: #F5F5F5;
    color: #1A1A1A;
  ` : `
    background-color: #70614C;
    color: white;
  `}
`;

// 가게 정보 입력 폼 스타일
export const FormGroup = styled.div`
  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 8px;
`;

export const AddressWrapper = styled.div`
  position: relative;
  margin-bottom: 8px;
`;

export const AddressInput = styled(Input)`
  background-color: #FAFAFA;
  cursor: pointer;
  padding-right: 48px;
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchIcon = styled.span`
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17.5 17.5L13.875 13.875' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
`;

export const VerificationText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #505050;
  text-align: center;
  margin-top: 40px;
`;

export const ErrorText = styled.p`
  color: #FF4D4D;
  font-size: 14px;
  margin-top: 8px;
  text-align: center;
`;

export const SuccessText = styled.p`
  color: #2E8B57;
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
`;

export const SubText = styled.p`
  font-size: 16px;
  color: #666666;
  text-align: center;
  margin-top: 16px;
`;