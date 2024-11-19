import styled,{css, keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;


export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  gap: 10px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

export const UploadContainer = styled.div`
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  border-radius: 12px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
`;
export const UploadIcon = styled.div`
  
`;

export const UploadBox = styled.div`
  width: 290px;
  height: 184px;
  flex-shrink: 0;
  border-radius: 15px;
  background: var(--white-white-transparent, #FFF);
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  span {
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
`;

export const UploadInput = styled.input`
  display: none;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

// CommunityUpload.styled.js에 추가할 내용
export const SelectContainer = styled.div`
  display: flex;
  width: 79px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 33px 0;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #BBBBBC;
  background: var(--white-white-transparent, #FFF);
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

 

  
  &:focus {
    outline: none;
    border-color: #70614C;
  }
`;

export const TextAreaContainer = styled.div`
  width: 100%;
  border: 1px solid #BBBBBC;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 45px;
  padding: 12px 10px;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px;
  border: none;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  &::placeholder {
    color: #BBBBBC;
  }
  
  &:focus {
    outline: none;
  
  }
`;

export const ContentTextArea = styled.textarea`
  width: 100%;
  display: flex;
  min-height: 160px;
  padding: 12px;
  border: none;
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  resize: none;
  
  &::placeholder {
    color: #BBBBBC;
  }
  
  &:focus {
    outline: none;
  
  }
`;

export const TipContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 80px;
`;

export const IconWrapper = styled.div`
  display: flex;
    width: 189px;
    height: 189px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  border:none;
  border-radius: 12px;
`;


export const TipTextContainer = styled.div`
display: flex;
padding: 22px 12px;
justify-content: center;
align-items: center;
gap: 10px;
background: var(--white-white-transparent, #FFF);
box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.15);
  ${props => props.variant === 'primary' && css`
    border-radius: 10px 10px 0px 10px;
    `}
    ${props => props.variant === 'secondary' && css`
      border-radius: 10px 10px 10px 0px;

      `}
`
export const TipText = styled.p`
  color: #000;
  text-align: center;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  span {
  color: #F9AB3E;
  font-weight: 700;
  }
`;



export const DescriptionArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: vertical;
  font-size: 16px;
  line-height: 1.5;
  
  &::placeholder {
    color: #999;
  }
`;


const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// CommunityUpload.styled.js
export const LoadingContainer = styled.div` 
  margin-top: 116px;
  display: flex;
  flex-direction: column;
  gap: 95px;
  justify-content: center;
  text-align: center;
  background-color: white;
`;

export const LoadingCircleWrapper = styled.div`
  position: relative; 
  width: 164px;
  height: 164px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const LoadingCircleOuter = styled.div`
  position: absolute;
  width: 164px;
  height: 164px;
  border-radius: 50%;
  background-color: #FFEED5;
  flex-shrink: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // 중앙 정렬
`;

export const LoadingCircleInner = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #F9AB3E;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; // outer 위에 표시되도록
  z-index: 1; // outer 위에 표시되도록
`;

export const LoadingTitle = styled.h1`
  color: #EFAE1A;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LoadingTextContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:17px;
`
export const LoadingText = styled.p`
  color: #27214D;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  letter-spacing: -0.2px;

  span {
  color: #EFAE1A;
  font-weight: 700;
  }


`;



export const CompleteContainer = styled(LoadingContainer)``;


export const CompleteTitle = styled(LoadingTitle)``;

export const CompleteText = styled(LoadingText)``;

export const CompleteButton = styled.button`
  background: #795548;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  margin-top: 24px;
  width: 100%;
  max-width: 320px;
  font-size: 16px;
`;

export const ButtonGroup = styled.div`
  position: relative;
  width: 100%;
  height: 150px; // 버튼들의 위치를 잡기 위한 공간
  margin-top: auto; // 컨텐츠 영역 맨 아래로 밀기
`;

export const CreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px); // 헤더 높이만큼 빼기
  padding: 16px;
`;
