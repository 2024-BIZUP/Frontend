import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './AcademyDetail.styled';
import backIcon from '../../assets/images/back-arrow-icon.png';
import bizupCharacter from '../../assets/images/bizup-character.svg';
import detailLogo from '../../assets/images/detail-01.svg'
import kioskImg from '../../assets/images/detail-02.svg';
import kakaoImg from '../../assets/images/detail-03.svg';

const AcademyDetail = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onClick={() => navigate(-1)}>
          <img src={backIcon} alt="back" />
        </S.BackButton>
        소상공인 지원제도 ZIP.
      </S.Header>

      <S.Content>
        <S.LogoSection>
          <S.LogoImage src={detailLogo} />
          <S.Source>출처: 구글 이미지</S.Source>
        </S.LogoSection>

        <S.Section>
          <S.SectionHeader>
            <S.CharacterIcon src={bizupCharacter} />
            <S.SectionTitle>로컬 찐맛집, 인증하고 싶다면?</S.SectionTitle>
          </S.SectionHeader>
          <S.HashTag>#백년가게&백년소공인</S.HashTag>
          <S.Description>
            백년가게는 30년 이상 된 가게를 대상으로, 백년소공인은 15년 이상 된 사업체를 대상으로 혁신의지, 차별성, 우수성, 성장역량 등을 평가해 선정합니다! 국민추천으로 접수 시 업력 20년으로 조건이 완화된다는 점도 참고부탁드리며, 주의할 점은 백년가게는 3년마다, 백년소공인은 5년마다 성과를 평가한 후 재지정한다는 점 입니다. 
          </S.Description>
          <S.LinkButton>
            백년가게&백년소공인 지원하기
          </S.LinkButton>
        </S.Section>

        <S.ImageSection>
          <S.ContentImage src={kioskImg} />
          <S.Source>출처: 구글 이미지</S.Source>
        </S.ImageSection>

        <S.Section>
          <S.SectionHeader>
            <S.CharacterIcon src={bizupCharacter} />
            <S.SectionTitle>사장님 가게에도 키오스크 한 대 놓아야죠!</S.SectionTitle>
          </S.SectionHeader>
          <S.HashTag>#스마트상점·공방 기술보급사업</S.HashTag>
          <S.Description>
          스마트상점 기술보급사업은 온라인, 비대면 소비 확산 등 시장환경 변화에 소상공인이 잘 대응할 수 있도록 스마트기술 도입을 도와줍니다. 내 가게에 필요한 기계나 기술이 무엇인지 전문가가 꼼꼼히 살펴본 후, 키오스크나 로봇 튀김기, 서빙로봇, 혹은 매출분석AI 등을 들여올 수 있도록 해줍니다.
          </S.Description>
          <S.LinkButton>
            백년가게&백년소공인 지원하기
          </S.LinkButton>
        </S.Section>

        <S.KakaoSection src={kakaoImg} />

        <S.Section>
          <S.SectionHeader>
            <S.CharacterIcon src={bizupCharacter} />
            <S.SectionTitle>소상공인 필수 채널 '카카오톡 상인정보통'</S.SectionTitle>
          </S.SectionHeader>
          <S.Description>
          시장에서는 성공적으로 비즈니스를 운영하고, 더 나은 서비스를 제공하기 위해서는 빠르게 변하는 시장 환경과 정부 정책, 다양한 지원책에 대한 최신 정보를 빠르게 접하는 것이 중요하며 이런 정보를 효과적으로 제공하기 위해 소상공인진흥공단에서는 전통시장 상인들을 위한 카카오톡 상인정보통 채널을 운영하고 있습니다.
          </S.Description>
        </S.Section>
      </S.Content>
    </S.Container>
  );
};

export default AcademyDetail;