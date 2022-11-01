import { useRecoilState } from 'recoil';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { PaletteMode } from '@mui/material';
import { Stack } from '@mui/material';
import { appThemeMode } from '../../Recoil/Atom/AppThemeMode';
import './ModeToggleButton.css';

interface DynamicIconProps {
  mode: PaletteMode;
}

/**
* A functional component representing the icon inside the theme toggleing button
* @returns An sun/moon MUI icon depending on the previus theme
*/
function DynamicIcon({ mode }: DynamicIconProps) {
  if (mode === 'dark') {
    return <DarkModeIcon />;
  }
  return <LightModeIcon />;
}

/**
* A functional component representing the button responsible for switching theme.
* @returns A button for toggling light/dark theme
*/
function ModeToggleButton(){
  const [mode, setMode] = useRecoilState(appThemeMode); //Recoil!

  //Set mode to the opposite of previous mode (toggling functionality)
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