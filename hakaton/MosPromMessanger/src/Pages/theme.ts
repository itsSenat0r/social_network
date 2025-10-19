import { createTheme } from '@mui/material/styles';

import RobotoAllVariables from '../assets/fonts/RobotoAllVariables.woff2';
import Robloxian2SquaredBlack from '../assets/fonts/Robloxian2SquaredBlack.woff2';
import Robloxian2Black from '../assets/fonts/Robloxian2Black.woff2';
import RobloxianUltraBold from '../assets/fonts/RobloxianUltraBold.woff2';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#E6E6FA'
    },
    error: {
      main: '#000000'
    },
    success: {
      main: '#9EBD6E'
    }
  },
  typography: { fontFamily: 'Roblox2Squared, Robloxian2, Robloxian, RobotoLocal', },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
          font-family: 'RobotoLocal';
          src: url(${RobotoAllVariables}) format('woff2');
          font-weight: 100 900;
          font-style: normal;
          font-display: swap;
      } 
      @font-face {
          font-family: 'Roblox2Squared';
          src: url(${Robloxian2SquaredBlack}) format('woff2');
          font-weight: 900;
          font-style: normal;
          font-display: swap;
      }    
        @font-face {
        font-family: 'Robloxian2';
        src: url(${Robloxian2Black}) format('woff2');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
      }
        @font-face {
        font-family: 'Robloxian';
        src: url(${RobloxianUltraBold}) format('woff2');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
      } 
      `,
    },
  },
});