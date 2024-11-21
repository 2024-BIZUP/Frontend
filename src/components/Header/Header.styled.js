import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width:390px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  margin : 42px auto 20px auto;
  position: relative;

  @media  ${props => props.theme.device.mobile} {
      width:390px;
   }
   // 태블릿
  @media ${props => props.theme.device.tablet} {
   width:390px;
  }

  // 랩탑
  @media ${props => props.theme.device.pc} {
    width:390px;
  }
`;

export const Logo = styled.h1`
color: #1D0E07;
text-align: center;
font-size: ${props => props.fontsize|| 16}px;
font-style: normal;
font-weight: 900;
line-height: normal;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
export const HomeButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: absolute;
  left: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 14px;
height: 16px;
  }
`;