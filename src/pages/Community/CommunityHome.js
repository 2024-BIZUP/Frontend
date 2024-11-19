import React from 'react';
import * as S from './CommunityHome.styled';
import Header from '../../components/Header/Header';
import fireIcon from '../../assets/fireIcon.svg';
import bannerIcon from '../../assets/bolgBannerIcon.svg';
import showIcon from '../../assets/showBtn.svg';
import shareIcon from '../../assets/shareIcon.svg';
import likeIcon from '../../assets/likeIcon.svg';
import bookmarkIcon from '../../assets/bookmarkIcon.svg';
import commentIcon from '../../assets/commentIcon.svg';
import postIcon from '../../assets/postIcon.svg';
import bizIcon from '../../assets/bizupIcon.svg';
import { useNavigate } from 'react-router-dom';

const CommunityHome = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
      navigate('/'); // 홈 경로로 이동
    };

    const handlePostButtonClick = () => {
        navigate('/community-upload'); // CommunityUpload.js로 연결
      };
  const navItems = ['서울', '인천', '경기도', '강원도', '충청도', '전라도', '경상도', '제주도'];
  
  const photos = [
    { 
      id: 1, 
      src: "market1.jpg", 
      title: "구리시장공인",
      time: "9분전" 
    },
    { 
      id: 2, 
      src: "market2.jpg", 
      title: "추천감자",
      time: "15분전" 
    },
    { 
      id: 3, 
      src: "market3.jpg", 
      title: "포도포도",
      time: "25분전" 
    },
]

  const blogPosts = [
    { 
      id: 1, 
      image: "green-fruits.jpg",
      tag: "경상도",
      title: "싱싱하고 맛있는 청포도",
      description: "제철 과일"
    },
    { 
      id: 2, 
      image: "food.jpg",
      tag: "전라도",
      title: "전통시장 맛집 탐방",
      description: "맛있는 먹거리"
    },
  ];

  const todayBlogItems = [
    { 
      id: 1, 
      icon: bizIcon,  
      nickname: "사과박사님", 
      description: "전통시장 상인분들과의 만남" 
    },
    { 
      id: 2, 
      icon: bizIcon,
      nickname: "순창마을",
      description: "전라도 스타일로 먹는 게장 레시피!" 
    },
    { 
      id: 3, 
      icon: bizIcon,
      nickname: "포도포동",
      description: "저희의 포도떡, 포도 주떡떡에 숨겨진 이야기를 읽어주세요!" 
    },
    { 
      id: 4, 
      icon: bizIcon,
      nickname: "시장상인일팡",
      description: "사임머스켓 판매 꿀팁!!" 
    },
  ];

  return (
    <S.Container>
      <Header  type="home"
    title="BIZ Blog"
    onHomeClick={() => navigate('/home')}>
      
    </Header>
      <S.TopNavigation>
        {navItems.map((item) => (
          <S.NavItem key={item}>{item}</S.NavItem>
        ))}
      </S.TopNavigation>

      <S.BannerCard>
        <S.BannerText>
          <h2>고객을 이끌<br/><span>트렌드한 블로그</span>를<br/>쓰기 위해선?</h2>
        </S.BannerText>
        <S.BannerImage src={bannerIcon} alt="" />
        <S.BannerButton>글 보러가기 →</S.BannerButton>
      </S.BannerCard>

      <S.PhotoSection>
  <S.SectionTitle>
    소상공인들의 이야기를 들어보시겠어요?
    <S.InfoButton>
      <img src={showIcon} alt="" />
    </S.InfoButton>
  </S.SectionTitle>
  <S.PhotoGrid>
    {photos.map((photo) => (
      <S.PhotoCard key={photo.id} image={photo.src}>
        
        <S.CardTitle>
          <h3>{photo.title}</h3>
          <p>{photo.time}</p>
        </S.CardTitle>
        
        <S.CardActions>
            <S.ActionContainer>
                <S.ActionButton>
                <img src={commentIcon} alt="댓글" />
                </S.ActionButton>
                <S.ActionButton>
                    <img src={bookmarkIcon} alt="북마크" />
                </S.ActionButton>
                <S.ActionButton>
                    <img src={likeIcon} alt="좋아요" />
                </S.ActionButton>
            </S.ActionContainer>
          <S.ActionButton>
            <img src={shareIcon} alt="공유" />
          </S.ActionButton>
        </S.CardActions>
      </S.PhotoCard>
    ))}
  </S.PhotoGrid>
</S.PhotoSection>

      <S.BlogSection>
        <S.SectionTitle>지금 핫한 BIZ Blog 
            <img src={fireIcon}></img>
        </S.SectionTitle>
        <S.BlogGrid>
          {blogPosts.map((post) => (
            <S.BlogCard key={post.id} image={post.image}>
              <S.BlogContentTag>{post.tag}</S.BlogContentTag>
              <S.BlogContent>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </S.BlogContent>
            </S.BlogCard>
          ))}
        </S.BlogGrid>
      </S.BlogSection>

      <S.TodayBlogSection>
        <S.SectionTitle>
            오늘의 BIZ 블로거
            <S.InfoButton>
            <img src={showIcon} alt="" />
            </S.InfoButton>
        </S.SectionTitle>
        {todayBlogItems.slice(0, 4).map((item, index) => (
        <S.TodayBlogItem key={item.id}>
            <S.TodayBlogIconBox index={index}>
            <img src={item.icon} alt="" />
            <S.TodayBlogIcon>{item.nickname}</S.TodayBlogIcon>
            </S.TodayBlogIconBox>
            <S.TodayBlogText>{item.description}</S.TodayBlogText>
        </S.TodayBlogItem>
        ))}
      </S.TodayBlogSection>
      <S.PostButton  onClick={handlePostButtonClick}>
        <img src={postIcon}></img>
      </S.PostButton>
    </S.Container>
  );
};

export default CommunityHome;