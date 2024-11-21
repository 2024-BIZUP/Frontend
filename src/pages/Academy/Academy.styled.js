import styled from 'styled-components';

export const Container = styled.div`
  max-width: 390px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: white;
`;

export const Header = styled.div`
  text-align: left;
  margin-top: 33px;
  margin-bottom: 36px;
  font-size: 16px;
  font-weight: 900;
  color: #1D0E07;
`;

// 배너
export const BannerCard = styled.div`
  width: 319px;
  height: 204px;
  background-color: #EFAE1A1A;
  border-radius: 10px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;  // 이미지가 카드 밖으로 안 넘어가게
`;
// 매출성장을 이끌 ~
export const BannerTitle = styled.h2`
  font-size: 20px;
  margin-top: 47px;
  margin-left: 24px;
  margin-bottom: 10px;
  color: #522714;
  font-family: 'Noto Sans KR';
  font-weight: 400;
`;
export const FirstLine = styled.span`
  font-size: 20px;
  display: block;
  margin-bottom: 4px;
`;
export const SecondLine = styled.span`
  font-size: 15px;
  display: block;
`;
// 글 보러가기 버튼
export const BannerButton = styled.button`
  background-color: #522714;
  color: white;
  margin-top: 30px;
  margin-left: 24px;
  padding: 8px;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
// 배너 오토바이 이미지
export const BannerImage = styled.img`
  width: 108px;
  height: auto;
  position: absolute;
  right: 31px;
  bottom: 56px;
  transform: translateY(0);
`;

// 시장 소식 섹션
export const ContentSection = styled.section`
  width: 100%;
  margin: 20px 0;
`;

export const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 14px;
  font-weight: bold;
  color: #1D0E07;
`;

export const CardContainer = styled.div`
  display: flex;
  margin-left: 6px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Card = styled.div`
  flex: 0 0 160px;
  min-width: 140px;
  scroll-snap-align: start;
  overflow: hidden;
  cursor: pointer;
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 76px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;
export const CardTitle = styled.h3`
  margin-left: 11px;
  font-weight: bold;
  font-size: 10px;
  color: #1D0E07;
`;

// 지원제도 ZIP. 섹션
export const ZipSection = styled.div`
  display: flex;
  flex-direction: column;
`;
// 소상공인들을 위한 지원제도 ZIP. 말풍선
// ::after 가상요소로 말풍선 꼬리 부분 구현
export const ZipTitle = styled.div`
  position: relative;
  background-color: #896C60;
  border-radius: 50px;
  width: 214px;
  height: 31px;
  padding: 17px;
  color: white;
  font-size: 13px;
  font-weight: bold;
  display: flex;          
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;  /* 텍스트 줄바꿈 방지 */

  &::after {
    content: '';
    position: absolute;
    right: 30px;
    bottom: -10.5px;
    border-width: 20px 0 0 11px;
    border-style: solid;
    border-color: #896C60 transparent transparent;
    }
`;
export const ZipCardContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;
export const ZipCard = styled.img`
  width: 283px;
  height: auto;
  margin: 12.5px;
  cursor: pointer;
`;
// 사장님 알아두시면 꿀팁이라구요!
export const ZipCardText = styled.div`
  position: absolute;  /* ZipCard 위에 겹치게 */
  top: 45px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  font-size: 10px;
  font-weight: bold;
`;

// 지금 핫한 소상공인 숏츠 섹션
export const HotTopicSection = styled.section`
  margin: 20px 0;
`;

export const TopicSectionTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

export const TopicSectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const TopicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const TopicCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TopicImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const TopicTitle = styled.div`
  font-weight: bold;
  font-size: 10px;
  color: black;
  white-space: pre-line;
`;