import styled from 'styled-components';

// 프로그래스바 컨테이너 스타일
export const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 8px;
  background: transparent;
`;

// 개별 바 스타일
export const StepBar = styled.div`
  flex: 1;
  height: 100%;
  background: ${props => (props.active ? '#70614C;' : 'none')};
  margin: 0 ; /* 바 간격 설정 */
  border-radius: 8px;

  &:first-child {
    margin-left: 0; /* 첫 번째 바는 왼쪽 여백 없음 */
  }

  &:last-child {
    margin-right: 0; /* 마지막 바는 오른쪽 여백 없음 */
  }
`;