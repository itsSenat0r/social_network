import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Pages/theme';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouter } from './Pages/AppRouter/AppRouter';
import { PagesBoxLayout } from './Components/PagesBoxLayout/PagesBoxLayout';
import { NavigationBar } from './Components/NavigationBar/NavigationBar';
import { PageContextProvider } from './Contexts/PageContextProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <PagesBoxLayout>
          <PageContextProvider>
            <AppRouter />
            <NavigationBar />
          </PageContextProvider>
        </PagesBoxLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
