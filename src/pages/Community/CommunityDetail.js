import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import * as S from './CommunityDetail.styled';
import Header from '../../components/Header/Header';
import { useNavigate, useParams } from 'react-router-dom'; // useParams 추가
import bizupIcon from '../../assets/bizupIcon.svg';
import likeIcon from '../../assets/likeIconGrey.svg';
import locationIcon from '../../assets/locationIcon.svg';
import CommunitySampleImg from '../../assets/communitySampleImg.png';


const CommunityDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // URL에서 id 파라미터 가져오기
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 게시글 데이터 가져오기
  /*useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(`http://43.202.32.80:8080/community/${id}`);
        setPostData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('게시글 조회 실패:', error);
        alert('게시글을 불러오는데 실패했습니다.');
        setLoading(false);
      }
    };

    if (id) {
      fetchPostData();
    }
  }, [id]);*/

  /*const formatTimeStamp = (timeValue) => {
    return `${timeValue}분전`;
  };

  if (loading) {
    return <div>로딩중...</div>;
  }

  if (!postData) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }*/

  return (
    <S.Container>
      <Header 
        type="home"
        title="BIZ Blog"
        onHomeClick={() => navigate('/')}
      />
      <S.Content>
        <S.ImageContainer>
          <S.PostImage src={CommunitySampleImg} alt="post" />
          <S.PostTitle>전통시장 상인분들과의 만남</S.PostTitle>
        </S.ImageContainer>

        <S.PostInfo>
          <S.AuthorSection>
            <S.AuthorInfo>
              <S.AuthorImage>
                <img src={bizupIcon} alt="author" />
              </S.AuthorImage>
              <S.AuthorName>사과박사님</S.AuthorName>
            </S.AuthorInfo>
            <S.AuthorMetaInfo>
              <S.LocationContainer>
                <img src={locationIcon} alt="location" />
                <S.Location>경기도</S.Location>
              </S.LocationContainer>
              <S.TimeStamp>1분전</S.TimeStamp>
            </S.AuthorMetaInfo>
          </S.AuthorSection>
          <S.PostContentContainer>
            <S.PostContent>이번에 구리시장 상인분들과의 다과회에서 만나게 되었는데, 모두가 이 앱을 이용하고 계셨어요! 지역 주민뿐만 아니라 다른 지역의 소상공인분들과의 정보를 공유하고 이야기를 할 수 있는 기회가 있다는 점이 정말 좋은 것 같아요. 앞으로도 애용할 계획입니다^^</S.PostContent>
          </S.PostContentContainer>
        </S.PostInfo>
        <S.BorderLine />
        <S.Engagement>
          <S.EngagementButton>
            <img src={likeIcon} alt="like" />
          </S.EngagementButton>
          <S.EngagementCount>5</S.EngagementCount>
        </S.Engagement>
      </S.Content>
    </S.Container>
  );
};

export default CommunityDetail;