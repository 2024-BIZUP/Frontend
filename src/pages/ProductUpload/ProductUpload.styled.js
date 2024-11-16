import styled from 'styled-components';


const PageWrapper = styled.div`
  width: 100vw;
  height:100vh;
  max-width: 390px; 
  min-height: 840px;// 모바일 기준
 
  padding: 0;
  box-sizing: border-box;
  
  justify-content: center;
  position: relative;
 


  @media ${props => props.theme.device.tablet} {
    max-width: 700px;
    padding: 2rem;
  }

  @media ${props => props.theme.device.laptop} {
    max-width: 1024px;
    padding: 2.5rem;
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 390px;
  
  
  box-sizing: border-box;

  @media ${props => props.theme.device.tablet} {
    max-width: 700px;
    padding: 0 2rem;
  }

  @media ${props => props.theme.device.laptop} {
    max-width: 1024px;
    padding: 0 2.5rem;
  }
`;
const Header = styled.div`
  position: relative;
  width: 100%;
  padding: 16px 0;
  display: flex;
  align-items: center;
  flex-direction: column;  // flex 방향 수정
  gap: 16px;   
 
`;

const ProductNameCaution = styled.p`
  font-size: 12px;
  font-style: normal;
  color: #757575;
  margin-top: 4px;

` 
const Form = styled.form`
  width: 342px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
 
`;




const CloseButton = styled.button`
  position: absolute;
  top: 34px;
  right: 32px;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

const UploadMessage = styled.h2`
  color: #111;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 31.2px */
  letter-spacing: -0.32px;
  margin-top: ${props => props.mobileTop}px;
    @media screen and (min-width: 768px) {
      margin-top: ${props => props.tabletTop}px;
    }
     @media screen and (min-width: 1300px) {
      margin-top: ${props => props.pcTop}px;
    }
`
const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FieldLabel = styled.p`
 color: #000;
font-family: "Noto Sans KR";
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 21px; /* 116.667% */
letter-spacing: -0.32px;
  
`;



export {
  ProductNameCaution,
  FieldLabel,
  FieldGroup,
  Form,
  PageWrapper,
  UploadMessage,
  Header,
  ContentWrapper
}