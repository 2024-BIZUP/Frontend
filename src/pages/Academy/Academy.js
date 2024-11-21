import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Academy.styled';
import academyBanner from '../../assets/images/academy-banner.svg'
import nextIcon from '../../assets/images/next-arrow-icon.svg'
import news_1 from '../../assets/images/news-01.svg'
import news_2 from '../../assets/images/news-02.svg'
import news_3 from '../../assets/images/news-03.svg'
import zipCard from '../../assets/images/zip-card.svg'
import hotIcon from '../../assets/images/hot-icon.png'
import topic_1 from '../../assets/images/topic-01.svg'
import topic_2 from '../../assets/images/topic-02.svg'

const Academy = () => {
    const navigate = useNavigate();

    const handleDetailClick = () => {
      navigate('/academy/detail');
    };

    const newsItems = [
      {
        id: 1,
        image: news_1,
        title: "경남 전통시장 시장매니저,\n시장 활성화 효과 '톡톡'"
      },
      {
        id: 2,
        image: news_2,
        title: "'로코노미' 열풍 부는 식품업계,\n지역 특산물로 소비자 마음 사로\n잡는 중!"
      },
      {
        id: 3,
        image: news_3,
        title: "소상공인 필수 채널 \'카카오톡 상인\n정보톡\' 전통시장 소식과 혜택을\n한눈에!!"
      }
    ]

    return (
      <S.Container>
        <S.Header>B 아카데미</S.Header>

        <S.BannerCard>
          <S.BannerTitle>
            <S.FirstLine>매출 성장을 이끌</S.FirstLine>
            <S.SecondLine>핵심 고객은 Where?</S.SecondLine>
          </S.BannerTitle>
          <S.BannerButton>
            글 보러가기 →
          </S.BannerButton>
          <S.BannerImage src={academyBanner} />
        </S.BannerCard>

        <S.ContentSection>
        <S.SectionTitleWrapper>
          <S.SectionTitle>
            사과 박사님을 위한 오늘의 시장 소식!
          </S.SectionTitle>
          <img src={nextIcon} />
        </S.SectionTitleWrapper>

        <S.CardContainer>
          {newsItems.map((item) => (
            <S.Card key={item.id} onClick={() => navigate(item.link)}>
              <S.CardImage src={item.image} />
              <S.CardTitle>
                {item.title}
              </S.CardTitle>
            </S.Card>
          ))}
        </S.CardContainer>
      </S.ContentSection>

        <S.ZipSection>
          <S.ZipTitle>
            소상공인들을 위한 지원제도 ZIP.
          </S.ZipTitle>

          <S.ZipCardContainer onClick={handleDetailClick}>
            <S.ZipCardText>
              사장님 알아두시면 꿀팁이라구요!
            </S.ZipCardText>
            <S.ZipCard src={zipCard} />
          </S.ZipCardContainer>

        </S.ZipSection>

        <S.HotTopicSection>
          <S.TopicSectionTitleWrapper>
            <S.TopicSectionTitle>지금 핫한 소상공인 숏츠</S.TopicSectionTitle>
              <img src={hotIcon} />
              <img src={nextIcon} style={{ marginLeft: 'auto' }} />
          </S.TopicSectionTitleWrapper>

          <S.TopicGrid>
            <S.TopicCard>
              <S.TopicImage src={topic_1} />
              <S.TopicTitle>
                {"망할 줄 알았던 전통시장, 월 매출 \n3천만 찍은 비결"}
              </S.TopicTitle>
            </S.TopicCard>

            <S.TopicCard>
              <S.TopicImage src={topic_2} />
              <S.TopicTitle>
                {"가성비로 핫플 된 전통 시장\n지금 바로 시청!!"}
              </S.TopicTitle>
            </S.TopicCard>
          </S.TopicGrid>

      </S.HotTopicSection>

      </S.Container>
    );
  };

export default Academy; 