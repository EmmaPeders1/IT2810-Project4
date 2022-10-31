import React, { ReactElement, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { createTheme, CssBaseline, GlobalStyles, ScopedCssBaseline, ThemeProvider } from '@mui/material';
import { appThemeMode } from '../Atom/AppThemeMode';

interface Props {
  children: ReactElement;
}

function AppThemeProvider({ children }: Props): ReactElement {
  const mode = useRecoilValue(appThemeMode);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#61dafb',
          },
          secondary: {
            main: '#EB9612CC',
          },
        },
      }),
    [mode]
  );
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ScopedCssBaseline enableColorScheme> </ScopedCssBaseline>
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;