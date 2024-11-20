import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #FFFFFF;
`;
export const ContentWrapper = styled.div`
  padding: 24px;
`;

export const BorderLine= styled.div`
    height: 1px;
  background-color: #EAEAEA;
  margin:0 auto 16px auto;
   width: 342px;
   //모바일
   @media  ${props => props.theme.device.mobile} {
      width: 342px;
}
   // 태블릿
  @media ${props => props.theme.device.tablet} {
    width: 342px;
  }

  // 랩탑
  @media ${props => props.theme.device.pc} {
    width: 432px;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  margin-bottom: 36px;

  img {
    width: 202px;
height: 200px;
  }

  span {
    color: #111;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 50px auto 0 auto;
   width: 342px;  // 기본값
  height: 60px;
  flex-shrink: 0;
  //모바일
   @media  ${props => props.theme.device.mobile} {
      width: 342px;
      height: 60px;
   }
   // 태블릿
  @media ${props => props.theme.device.tablet} {
    width: 342px;
    height: 60px;
  }

  // 랩탑
  @media ${props => props.theme.device.pc} {
    width: 432px;
    height: 67px;
  }

 
`;
export const MenuItem = styled.button`
width:100%;
 display: flex;
 align-items: center;
 padding: 16px;
 background: #FFF;
 border-radius: 8px;
 border: 1px solid #BBB;
 justify-content: space-between;
 cursor: pointer;

 div {
    display: flex;
    align-items: center;
    gap: 34px;
 }
 img:nth-child(1) {
   width: 24px;
height: 24px;
flex-shrink: 0;
 }

 span {
   color: #000;
    font-family: "Noto Sans KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
 }

  img:nth-child(2) {
   width: 16px;
height: 16px;
flex-shrink: 0;
 }

}
`;