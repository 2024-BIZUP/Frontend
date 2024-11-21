import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
`;


export const Content = styled.main`
  width: 390px;
  flex: 1;
  margin: 10px auto 0 auto;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 254px;
  position: relative;
  background: black;
  position: relative;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostTitle = styled.h2`
 color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
position: absolute;
left: 14px;
bottom: 16px;
z-index: 100;
`;

export const PostInfo = styled.div`
  width: 332px;
  margin: 32px auto ;
  padding-left: 
  display: flex;
  flex-direction: column;
  align-items: center;
  jutify-content: center;

`;

export const AuthorSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const AuthorImage = styled.div`
  width: 32px;
  height: 36px;

  img {
    width:100%;
    height:100%;
    object-fit:cover;
  }
`;


export const AuthorInfo = styled.div`
  width: 100%;
  margin-left: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const AuthorName = styled.p`
  color: #000;
    text-align: center;
   
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    `;

export const AuthorMetaInfo = styled.div`
  padding-left: 50px;
  padding-right: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  margin-top: 0;
`;
export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

`
export const Location = styled.span`
  color: #C4C4C4;
  
    font-size: 8px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
`;
export const TimeStamp = styled(Location)``;


export const PostContentContainer = styled.div`
    display: flex;
    margin: 0 auto;
    width: 332px;
    height: 156px;
    padding: 30px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    background: rgba(233, 233, 233, 0.70);
`
export const PostContent = styled.p`
  color: #000;
  
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
export const BorderLine= styled.div`
  width: 100%;
  height: 1px;
  background-color: #EAEAEA;
  margin-bottom: 16px;
`;

export const Engagement = styled.div`
  width: 332px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 12px 16px;

`;

export const EngagementButton = styled.button`
  width: 16px;
  height: 14px;
  border: none;
  cursor: pointer;
  background: none;
  img {
    width:100%;
    height:100%;
    object-fit: cover;
  }
`;



export const EngagementCount = styled.span`
  color: #C4C4C4;
    font-family: "Noto Sans KR";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
`;