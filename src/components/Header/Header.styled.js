import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  margin-top: 42px;
  margin-bottom: 20px;
  position: relative;
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