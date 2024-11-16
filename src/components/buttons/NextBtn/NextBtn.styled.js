import styled, { css } from 'styled-components';

export const StyledNextBtn = styled.button`
  width: 256px;
  height: 62px;
  flex-shrink: 0;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 116.667% */
  letter-spacing: -0.32px;

  ${props => props.variant === 'primary' && css`
    background-color: #70614C;
    color:white;
    position: absolute;  
    left: 50%;
    transform: translateX(-50%);
    bottom: ${props => props.mobileBottom}px;

    @media screen and (min-width: 768px) {
      bottom: ${props => props.tabletBottom}px;
    }

    @media screen and (min-width: 1300px) {
      bottom: ${props => props.pcBottom}px;
    }


  `}
  
  ${props => props.variant === 'secondary' && css`
    background-color: #BBB;
    color: white;
    position: absolute;  
    left: 50%;
    transform: translateX(-50%);
    bottom: ${props => props.mobileBottom}px;
    @media screen and (min-width: 768px) {
      bottom: ${props => props.tabletBottom}px;
    }
     @media screen and (min-width: 1300px) {
      bottom: ${props => props.pcBottom}px;
    }
  `}
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
