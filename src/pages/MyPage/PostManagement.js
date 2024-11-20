// PostManagement.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import Button from '../../components/buttons/NextBtn/NextBtn';
import checkIcon from '../../assets/checkIcon.svg';
import * as S from './PostManagement.styled';

const PostManagement = () => {
 const navigate = useNavigate();
 const [sortType, setSortType] = useState('최신순');
 const [isSelecting, setIsSelecting] = useState(false);
 const [selectedPosts, setSelectedPosts] = useState([]);

 const sortOptions = [
   { value: '최신순', label: '최신순' },
   { value: '오래된순', label: '오래된순' }
 ];

 const [posts, setPosts] = useState([
    {
      id: 1,
      title: '전통차와 원더모먼트의 만남dlqslekjdkfjlqjfo',
      image: '/path-to-image.jpg'
    },
    {
        id: 2,
        title: '전통차와 원더모먼트의 만남',
        image: '/path-to-image.jpg'
      },
      {
        id: 3,
        title: '전통차와 원더모먼트의 만남',
        image: '/path-to-image.jpg'
      },
      {
        id: 4,
        title: '전통차와 원더모먼트의 만남',
        image: '/path-to-image.jpg'
      }
  ]);

 const toggleSelect = () => {
   setIsSelecting(!isSelecting);
   setSelectedPosts([]); // 선택 모드 해제시 선택된 항목 초기화
 };

 const handlePostSelect = (postId) => {
   setSelectedPosts(prev => {
     if (prev.includes(postId)) {
       return prev.filter(id => id !== postId);
     }
     return [...prev, postId];
   });
 };

 const handleDelete = () => {
    if (selectedPosts.length === 0) return; // 선택된 게시물이 없으면 리턴
    
    setPosts(prevPosts => 
      prevPosts.filter(post => !selectedPosts.includes(post.id))
    );
    setIsSelecting(false);
    setSelectedPosts([]);
  };

 const handleBack = () => {
   navigate('/mypage');
 };

 return (
   <S.Container>
     <S.HeaderWrapper>
       <Header
         title="나의 게시물"
         type="back"
         showBackButton={true}
         onBack={handleBack}
         fontsize={20}
       />
       <S.SelectButton onClick={toggleSelect}>
         {isSelecting ? '취소' : '선택'}
       </S.SelectButton>
     </S.HeaderWrapper>
     <S.SortWrapper>
       <RadioGroup
         width={79}
         height={37}
         fontsize={12}
         radius={20}
         options={sortOptions}
         value={sortType}
         onChange={setSortType}
         name="sort"
       />
     </S.SortWrapper>
     <S.PostList>
       {posts.map((post) => (
         <S.PostItem key={post.id}>
           {isSelecting && (
             <S.CheckCircle
               onClick={() => handlePostSelect(post.id)}
               isSelected={selectedPosts.includes(post.id)}
             >
               {selectedPosts.includes(post.id) && <img src={checkIcon} alt="selected" />}
             </S.CheckCircle>
           )}
           <img src={checkIcon} alt="게시물 이미지" />
           <S.PostTitle>{post.title}</S.PostTitle>
         </S.PostItem>
       ))}
     </S.PostList>
     {isSelecting && (
        <Button
          variant={selectedPosts.length > 0 ? 'primary' : 'secondary'}
          mobileBottom={72}
          pcBottom={206}
          tabletBottom={28}
          disabled={selectedPosts.length === 0}  // 선택된 게시물이 없으면 버튼 비활성화
          onClick={handleDelete}
        >
          삭제{selectedPosts.length > 0 ? `(${selectedPosts.length}개)` : ''}
        </Button>
      )}
   </S.Container>
 );
};

export default PostManagement;