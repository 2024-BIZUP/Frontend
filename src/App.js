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
import Product from './pages/Product/Product';
import ProductList from './pages/Product/ProductList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/community" element={<Community />} />
          <Route path="/product-upload" element={<ProductUpload />} />
          <Route path="/community-upload" element={<CommunityUpload />} />
          <Route path="/community/detail" element={<CommunityDetail />} />
          <Route path='/mypage' element={<MyPage/>} />
          <Route path='/mypage/product-management' element={<ProductManagement/>}/>
          <Route path='/mypage/post-management' element={<PostManagement/>}/>
          <Route path='/' element={<SignUp/>}/> 
          <Route path='/academy' element={<Academy/>}/> 
          <Route path='/academy/detail' element={<AcademyDetail/>}/> 
          <Route path='/product' element={<ProductList/>}/>
          <Route path='/product/:id' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;