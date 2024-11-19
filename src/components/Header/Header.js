import BackBtn from '../buttons/BackBtn/BackBtn';
import BackButton from '../../assets/backBtn.svg';
import homeIcon from '../../assets/homeBtn.svg';
import * as S from './Header.styled';

const Header = ({ 
  title, 
  type = 'back',  // 'back' 또는 'home'
  showBackButton = true, 
  onBack,
  onHomeClick
}) => {
  if (type === 'home') {
      return (
          <S.HeaderWrapper>
              <S.Logo>{title}</S.Logo>
              <S.HomeButton
                  onClick={onHomeClick}
                  aria-label="홈으로 가기"
              >
                  <img src={homeIcon} alt="" />
              </S.HomeButton>
          </S.HeaderWrapper>
      );
  }

  return (
      <S.HeaderWrapper>
          {showBackButton && (
              <BackBtn onClick={onBack}>
                  <img src={BackButton} alt="back" />
              </BackBtn>
          )}
          <S.Logo hasBackButton={showBackButton}>{title}</S.Logo>
      </S.HeaderWrapper>
  );
};

export default Header;