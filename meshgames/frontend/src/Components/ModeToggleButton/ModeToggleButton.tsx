import React, { ReactElement } from 'react';
import { useRecoilState } from 'recoil';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { appThemeMode } from '../../Recoil/Atom/AppThemeMode';
import { PaletteMode } from '@mui/material';
import { Stack } from '@mui/material';
import './ModeToggleButton.css';

interface DynamicIconProps {
  mode: PaletteMode;
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
    <Stack className="modeButton" direction="row" justifyContent="flex-end">
      <IconButton onClick={toggleMode} sx={{ width: 40, height: 40 }}>
        <DynamicIcon mode={mode} />
      </IconButton>
    </Stack>
  );
}

export default ModeToggleButton