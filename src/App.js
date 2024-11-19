import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyles';
import ProductUpload from './pages/ProductUpload/ProductUpload';
import Community from './pages/Community/CommunityHome';
import CommunityUpload from './pages/Community/CommunityUpload';
import CommunityDetail from './pages/Community/CommunityDetail';

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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;