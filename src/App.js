import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyles';
import ProductUpload from './pages/ProductUpload/ProductUpload';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductUpload />
    </ThemeProvider>
  );
}
export default App;
