import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyles';
import ProductUpload from './pages/ProductUpload/ProductUpload';
import Community from './pages/Community/CommunityHome';
import CommunityUpload from './pages/Community/CommunityUpload';
import CommunityDetail from './pages/Community/CommunityDetail';
import MyPage from './pages/MyPage/MyPage';
import ProductManagement from './pages/MyPage/ProductManagement';
import PostManagement from './pages/MyPage/PostManagement';
import SignUp from './pages/SignUp/SignUp';
import Academy from './pages/Academy/Academy';
import AcademyDetail from './pages/Academy/AcademyDetail';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Community />} />
          <Route path="/product-upload" element={<ProductUpload />} />
          <Route path="/community-upload" element={<CommunityUpload />} />
          <Route path="/community/detail" element={<CommunityDetail />} />
          <Route path='/mypage' element={<MyPage/>} />
          <Route path='/mypage/product-management' element={<ProductManagement/>}/>
          <Route path='/mypage/post-management' element={<PostManagement/>}/>
          <Route path='/signup' element={<SignUp/>}/> 
          <Route path='/academy' element={<Academy/>}/> 
          <Route path='/academy/detail' element={<AcademyDetail/>}/> 
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;