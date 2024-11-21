import styled from 'styled-components';

export const Container = styled.div`
  max-width: 390px;
  margin: 0 auto;
  padding: 16px 24px;
  background-color: white;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #1D0E07;
  margin-bottom: 24px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const LogoSection = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const LogoImage = styled.img`
  width: 100%;
  max-width: 240px;  // 로고 크기 조절
  height: auto;
  margin-bottom: 8px;
`;

export const Source = styled.div`
  font-size: 12px;
  color: #666;
  text-align: right;
`;

export const Section = styled.section`
  margin-bottom: 40px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

export const CharacterIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #1D0E07;
`;

export const HashTag = styled.div`
  color: #0066FF;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 16px;
`;

export const LinkButton = styled.a`
  display: inline-block;
  background-color: #F2F2F2;
  color: #666;
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 12px;
`;

export const ImageSection = styled.div`
  margin: 24px 0;
`;

export const ContentImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 8px;
`;

export const KakaoSection = styled.img`
  padding: 16px;
  margin-bottom: 32px;
`;