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
export const OptionsBox = styled.div`
  width: 342px;
  border-radius: 8px;
  border: 1px solid #505050;
  overflow: hidden;
  margin-bottom: 24px;
`;


export const OptionRow = styled.div`
  width: 100%;
  height:48px;
  padding: 10px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${props => props.isLast ? 'none' : '1px solid #505050'};
`;

export const OptionName = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  margin-right: 16px;
`;

export const OptionPrice = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.32px;
  white-space: nowrap;
`;

export const UploadBox = styled.div`
  width: 342px;
  height: 212px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #505050;
  background: var(--white-white-transparent, #FFF);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const UploadIcon = styled.div`
  
`;
export const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  span {
  color: #000;
  font-size: 24px;
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

export const Label = styled.p`
  width: 342px;
  display: block;
  color: #000;
  font-size: 18px;
  font-family: "Noto Sans KR"
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 116.667% */
  letter-spacing: -0.32px;
  margin-bottom: 8px; //밑에 마진값 주기 
`
export const TextEditorContainer = styled.div`
  width: 342px;
  border-radius: 8px;
  border: 1px solid #505050;
  overflow: hidden;
`;

export const ColorPaletteWrapper = styled.div`
  height:56px;
  display: flex;
  gap: 8px;
  padding: 12px;
  align-items: center;
border-bottom: 1px solid #505050;
`;

export const ColorButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.color};
  cursor: pointer;
`;

export const TextArea = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 16px;
  
   &:focus {
    outline: none;
    text-decoration: none;
  }
`;