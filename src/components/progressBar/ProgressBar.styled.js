import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background: #EEEEEE;
  
`;

export const Progress = styled.div`
  height: 100%;
  border-radius: 8px;
  width: ${props => ((props.step - 1) / 4) * 100}%;
  background: #70614C;
  transition: width 0.3s ease;
`;

