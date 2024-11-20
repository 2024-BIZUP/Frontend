import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import * as S from './MyPage.styled';
import documentIcon from '../../assets/documentIcon.svg';
import logoutIcon from '../../assets/logoutIcon.svg'; 
import showIcon from '../../assets/showBtn.svg';
import bizupIcon from '../../assets/bizupIcon.svg';

const MyPage = () => {
 const navigate = useNavigate(); 
 const handleBack = () => {
   // 뒤로가기 로직
 };


 return (
   <S.Container>
     <Header 
       title="마이페이지"
       type="back"
       showBackButton={true}
       onBack={handleBack}
       fontsize={20}
     />
     <S.BorderLine /> 
     <S.ContentWrapper>
       <S.ProfileSection>
         <img src={bizupIcon} alt="프로필 이미지" />
         <span>사과박사님</span>
       </S.ProfileSection>

       <S.MenuList>
       <S.MenuItem onClick={() => navigate('/mypage/product-management')}>
            <div>
           <img src={documentIcon} alt="" />
           <span>상품 관리</span>
           </div>
           <img src={showIcon}></img>
         </S.MenuItem>
         
         <S.MenuItem>
            <div>
            <img src={logoutIcon} alt="" />
            <span>로그아웃</span>
            </div>
            <img src={showIcon}></img>
         </S.MenuItem>
         
         <S.MenuItem onClick={() => navigate('/mypage/post-management')}>
            <div>
            <img src={documentIcon} alt="" />
            <span>게시물 관리</span>
            </div>
            <img src={showIcon}></img>
         </S.MenuItem>
       </S.MenuList>
     </S.ContentWrapper>
   </S.Container>
 );
};

export default MyPage;