// CommunityDetail.js
import React from 'react';
import * as S from './CommunityDetail.styled';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import bizupIcon from '../../assets/bizupIcon.svg';
import likeIcon from '../../assets/likeIconGrey.svg';
import locationIcon from '../../assets/locationIcon.svg';

const CommunityDetail = () => {
  const navigate = useNavigate();
  
  // 테스트용 더미 데이터
  const testData = {
    id: 1,
    author: "사과박사님",
    location: "경기도",
    timeValue: 1, 
    title: "전통시장 상인분들과의 만남",
    content: "이번에 구리시장 상인분들과의 다과회에서 만나게 되었는데, 모두가 이 앱을 이용하고 계셨어요! 지역 주민 뿐만 아니라 다른 지역의 소상공인분들과의 정보를 공유하고 이야기를 할 수 있는 기회가 있다는 점이 정말 좋은 것 같아요. 앞으로도 애용할 계획입니다^^",
    likes: 5,
    image: "/api/placeholder/400/320" // 테스트용 이미지
  };

  const formatTimeStamp = (timeValue) => {
    return `${timeValue}분전`;
  };

  return (
    <S.Container>
        <Header  type="home"
        title="BIZ Blog"
        onHomeClick={() => navigate('/')}></Header>
      <S.Content>
        <S.ImageContainer>
          <S.PostImage src={testData.image} alt="post" />
          <S.PostTitle>{testData.title}</S.PostTitle>
        </S.ImageContainer>

        <S.PostInfo>
          <S.AuthorSection>
            <S.AuthorInfo>
            <S.AuthorImage>
              <img src={bizupIcon}></img>
            </S.AuthorImage>
              <S.AuthorName>{testData.author}</S.AuthorName>
              </S.AuthorInfo>
              <S.AuthorMetaInfo>
                <S.LocationContainer>
                <img src={locationIcon}></img>
                <S.Location>{testData.location}</S.Location>
                </S.LocationContainer>
                <S.TimeStamp>{formatTimeStamp(testData.timeValue)}</S.TimeStamp>
              </S.AuthorMetaInfo>
          </S.AuthorSection>
        <S.PostContentContainer>
        <S.PostContent>{testData.content}</S.PostContent>
        </S.PostContentContainer>
        </S.PostInfo>
        <S.BorderLine /> 
        <S.Engagement>
          <S.EngagementButton>
            <img src={likeIcon}></img>
          </S.EngagementButton>
          <S.EngagementCount>{testData.likes}</S.EngagementCount>
        </S.Engagement>
      </S.Content>
    </S.Container>
  );
};

export default CommunityDetail;