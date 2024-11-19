import styled from 'styled-components';


export const PageWrapper = styled.div`
  width: 100%;
  max-width: 390px; 
  min-height: 100vh;
  padding: 0;
  display:flex;
  flex-direction: column;
  overflow-x: hidden;

  position: relative;
  margin: 0 auto;


  @media ${props => props.theme.device.tablet} {
    max-width: 700px;

  }

  @media ${props => props.theme.device.laptop} {
    max-width: 1024px;

  }
`;
export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 28px auto 0 auto;
  
  

  @media ${props => props.theme.device.tablet} {
    max-width: 700px;

  }

  @media ${props => props.theme.device.laptop} {
    max-width: 1024px;

  }
`;


export const ProductNameCaution = styled.p`
  font-size: 12px;
  font-style: normal;
  color: #757575;
  margin-top: 4px;

` 
export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  max-width:100%;
  margin-bottom: 250px;
 
`;




export const CloseButton = styled.button`
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

export const UploadMessage = styled.h2`
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
export const FieldGroup = styled.div`
  width: 342px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;  // 왼쪽 정렬


`;

export const FieldLabel = styled.p`
 color: #000;
font-family: "Noto Sans KR";
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 21px; /* 116.667% */
letter-spacing: -0.32px;
  
`;

export const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;
export const AddButton = styled.button`

width: 342px;
height: 48px;
flex-shrink: 0;
border-radius: 8px;
border: 1px solid #505050;
margin: 8px 0 16px 0;
display: flex;
align-items: center;
justify-content: center;
background: transparent;
cursor: pointer;
img {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
`
