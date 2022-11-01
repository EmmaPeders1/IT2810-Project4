import { ReactElement, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { appThemeMode } from '../Atom/AppThemeMode';

interface Props {
  children: ReactElement;
}

/**
 * A Funtional component that wraps MUI's Themeprovider after providing it with a palette foreither dark or light theme
 * @returns a Themeprovider with the correct color pallette
 */
function AppThemeProvider({ children }: Props) {
  const mode = useRecoilValue(appThemeMode);

  //Determine which color palette to use depending on the PalleteMode retrieved by recoil
  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          // palette values for light mode
          primary: {
            main: '#6a1b9a',
          },
          background: {
            default: '#f5f5f5',
          },
          text: {
            primary: '#212121',
          },
        }:
        {
          // palette values for dark mode
          background: {
            default: '#1f1f1f',
            paper: '#2b2b2b'
          },
          primary: {
            main: '#514ab0',
          },
          secondary: {
            main: '#EB9612CC',
          },
          text: {
            primary: 'white',
          },
        }),
      },
  });

  //update theme used when mode toggles
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;