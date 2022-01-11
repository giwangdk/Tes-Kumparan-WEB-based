
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#394867',
        light: '#F1F6F9',
        dark: '#14274E',
        contrastText: '#fff',
      },
      secondary: {
        main: '#9BA4B4',
      },
    },
    typography: {
      fontFamily: 'Poppins',
      fontWeightLight: 200,
      fontWeightSemiBold: 400,
      fontWeightBold: 600,
      h1:{
        fontSize: 55,
        color:'#14274E',
      },
      h3 : {
        fontSize: 28,
        color: '#394867',
        fontWeight:600
      },
      h4 : {
        fontSize: 19,
        color: '#14274E',
      },
      h5 : {
        fontSize: 16,
        color: '#394867',
      },
      body2 : {
        fontSize: 13,
        color:'#394867',
      },
      span : {
        fontSize: 12,
        color:'#394867',
      }
    },
  });