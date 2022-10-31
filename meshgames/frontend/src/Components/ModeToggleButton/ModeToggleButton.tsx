import React, { ReactElement } from 'react';
import { useRecoilState } from 'recoil';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeMode, appThemeMode } from '../../Recoil/Atom/AppThemeMode';

interface DynamicIconProps {
  mode: ThemeMode;
}

function DynamicIcon({ mode }: DynamicIconProps): ReactElement {
  if (mode === 'dark') {
    return <DarkModeIcon />;
  }
  return <LightModeIcon />;
}

function ModeToggleButton(): ReactElement {
  const [mode, setMode] = useRecoilState(appThemeMode);

  const toggleMode = () => {
    setMode((previuosState) => (previuosState === 'light' ? 'dark' : 'light'));
  };

  return (
    <IconButton onClick={toggleMode} sx={{ width: 40, height: 40 }}>
      <DynamicIcon mode={mode} />
    </IconButton>
  );
}

export default ModeToggleButton