import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
 min-height: 100vh;
 background-color: #FFFFFF;
`;
export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectButton = styled.button`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: none;
 color: #F6A305;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;  // 밑줄 추가
 text-underline-position: under;  // 밑줄 위치 조정
 text-underline-offset: 2px;  
`;
export const SortWrapper = styled.div`
 padding: 0 24px;
 margin-bottom: 20px;
 display: flex;
 justify-content: flex-end;  // 오른쪽 정렬
`;

export const PostList = styled.div`
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);  // 비율로 변경
  gap: 20px;
  justify-content: center;
  margin: 0 auto;

   @media  ${props => props.theme.device.mobile} {
      width: 342px;
   }
   // 태블릿
  @media ${props => props.theme.device.tablet} {
    width: 342px;
  }

  // 랩탑
  @media ${props => props.theme.device.pc} {
    width: 1000px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PostItem = styled.div`
    display: flex;
    width: 161px;
    height: 126px;
    padding: 16px 14px;
    align-items: flex-end;
    flex-shrink: 0;
    border-radius: 20px;
    background: black;
    position: relative;
 img {
   width: 100%;
   height: 100%;
   object-fit: cover;
 }

 @media  ${props => props.theme.device.mobile} {
      width: 161px;
   }
   // 태블릿
  @media ${props => props.theme.device.tablet} {
    width: 161px;
  }

  // 랩탑
  @media ${props => props.theme.device.pc} {
    width: 267px;
    height: 205px;
  }
`;

export const PostTitle = styled.p`
 position: absolute;
 bottom: 15px;
 padding: 0 10px 0 0;
 width: 100%;
 color: #FFF;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
z-index: 2;
 white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media  ${props => props.theme.device.mobile} {
      font-size: 12px;
   }
   // 태블릿
  @media ${props => props.theme.device.tablet} {
   font-size: 12px;
  }

  // 랩탑
  @media ${props => props.theme.device.pc} {
   font-size: 20px;
  }
`;

export const CheckCircle = styled.button`
 position: absolute;
 top: 12px;
 right: 12px;
 width: 15px;
 height: 15px;
 padding: 2px;
 border-radius: 50%;
 border: ${props => props.isSelected ? 'none' : '0.5px solid #FFF'};
 background-color: ${props => props.isSelected ? '#F6A305;' : 'transparent'};
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 z-index: 2;

 img {
   width: 100%;
   height: 100%;
 }

  @media  ${props => props.theme.device.mobile} {
      width: 15px;
    height: 15px;
   }
   // 태블릿
  @media ${props => props.theme.device.tablet} {
    width: 15px;
    height: 15px;
  }

  // 랩탑
  @media ${props => props.theme.device.pc} {
    width: 23px;
    height: 23px;
  }
`;

