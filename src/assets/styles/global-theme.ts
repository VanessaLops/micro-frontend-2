import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  
  export const themes = createTheme({
    ...theme,
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            [theme.breakpoints.down('sm')]: {
              fontSize: '12px', 
            },
            [theme.breakpoints.up('md')]: {
              fontSize: '18px', 
            },
          },
        },
      },
    },
  });
  