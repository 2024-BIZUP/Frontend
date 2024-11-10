import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  height:100vh;
  max-width: 390px;  // 모바일 기준
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  display:flex;
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
const ProductNameCaution = styled.p`
  font-size: 12px;
  font-style: normal;
  color: #757575;
  margin-top: 4px;

` 
const Form = styled.form`
  width:342px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
 
`;

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
  PageWrapper
}