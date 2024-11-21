import styled from 'styled-components';

export const Container = styled.div`
  max-width: 390px;
  margin: 0 auto;
  padding: 0;
  background-color: #ffffff;
  display:flex;
  flex-direction: column;
  align-items: center; /* 가로 중앙 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
`;





export const TopNavigation = styled.nav`
  width: 100%;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 16px 20px;
  margin-left:10px;
  margin-bottom: 20px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NavItem = styled.div`
  flex-shrink: 0; /* 자식 요소가 작아지지 않도록 설정 */
  width: 60px;
  height: 60px;
  background-color: rgba(112, 77, 28, 0.10);
  border: none;
  border-radius: 50%;
  display: flex; /* Flexbox 활성화 */
  align-items: center; /* 수직 정렬 */
  justify-content: center; /* 수평 정렬 */
  white-space: nowrap;
  text-align:center;
  line-height: 24px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;


export const BannerCard = styled.div`
width: 319px;
height: 204px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(112, 97, 76, 0.20);
  padding: 20px;
  margin: 0 auto 37px auto;
  position: relative;
`;

export const BannerText = styled.div`
  position: absolute;
  left:23px;
  top:32px;
  h2 {
    color: #522714;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 110% */
    margin: 5px 0;
  }
  h2 span {
    font-weight: 700;
  }
`;
export const BannerImage = styled.img`
  width: 209px;
height: 209px;
flex-shrink: 0;
position: absolute;
right:-9px;
  bottom: 6px;
`;

export const BannerButton = styled.button`
  display: inline-flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  border: 1px solid var(--white-white-transparent, #FFF);
  background: #522714;
  color: white;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  border: none;
  cursor: pointer;
  position: absolute;
  left:24px;
  bottom: 48px;
`;

export const PhotoSection = styled.section`
  width:100%;
  padding-left: 34px;
  margin-bottom: 40px;
  
`;

export const SectionTitle = styled.h2`
color: #1D0E07;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
position: relative;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  img {
  margin-left: 11px;
  }

`;

export const InfoButton = styled.button`
  border: none;
  background: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position:absolute;
  right: 35px;
  
  img {
    width: 15.591px;
    height: 16px;
  }
`;

export const PhotoGrid = styled.div`
  width:100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PhotoCard = styled.div`
  position: relative;
  border-radius: 10px;
  display: flex;
  width: 122px;
  height: 165px;
  padding: 11px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 115px;
  overflow: hidden;
  aspect-ratio: 1;
  background:#000;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;


export const CardTitle = styled.div`
  color: white;
  z-index: 1;
  
  h3 {
    font-size: 8px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  }
  
  p {
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
`;

export const CardActions = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content:space-between;
  z-index: 1;
`;

export const ActionContainer =styled.div`
  display: flex;
  gap: 8px;
  z-index: 1;
`
export const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  
  img {
  width: 10px;
  height: 8px;
  flex-shrink: 0;
  }
`;

export const BlogSection = styled.section`
  width:100%;
  padding-left:34px;
  margin-bottom: 30px;
  
`;

export const BlogGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7px;
   overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
`;

export const BlogCard = styled.div`
  display:flex;
  flex-direction: column;
  gap: 7px;
  padding: 170px 24px 14px 24px;
  width: 263px;
  height: 244px;
  border-radius: 12px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.image});
  background-color:rgba(112, 77, 28, 0.10);



`;


export const BlogContent = styled.div`
  display:flex;
  flex-direction: column;

  h3 {
    color: #EFAE1A;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  }

  p {
    color: #BBBBBC;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

`;

export const BlogContentTag = styled.div`
  display: flex;
  border-radius: 28px;
  background:white;
  width: 44px;
  height: 15px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #F9AB3E;
  text-align: center;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 250% */
 
`

export const TodayBlogSection = styled.section`
  width: 100%;
  padding-left: 34px;
  margin-bottom: 30px;
`;

export const TodayBlogItem = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;  
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-bottom: 13px;
`;

export const TodayBlogIconBox = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 7px;
  gap: 3px;
  border-radius: 20px;
  background: ${props => {
    switch(props.index) {
      case 0:
        return 'rgba(239, 174, 26, 0.50)';
      case 1:
        return 'rgba(239, 174, 26, 0.40)';
      case 2:
        return 'rgba(239, 174, 26, 0.30)';
      case 3:
        return 'rgba(239, 174, 26, 0.20)';
      
    }
  }};
  width: fit-content;  // width를 콘텐츠에 맞게 조정
  max-width: 100%;    // 부모 grid column을 넘지 않도록 제한

  img {
    width: 32px;
    height: 36px;
  }
`;

export const TodayBlogIcon = styled.span`
  color: #000;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`;

export const TodayBlogText = styled.span`
  color: #000;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  max-width: 160px;
`;

export const PostButton = styled.button`
  position: fixed;
  right: 15px;
  bottom: 31px;
  display: flex;
  width: 39px;
  height: 39px;
  padding: 3px 14px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 20px;
  background: #F9AB3E;
  z-index: 1000;
`;

