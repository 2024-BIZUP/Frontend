import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyles';
import ProductUpload from './pages/ProductUpload/ProductUpload';
import Community from './pages/Community/CommunityHome';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Community />} />
          <Route path="/upload" element={<ProductUpload />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;