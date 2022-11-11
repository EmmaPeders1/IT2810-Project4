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
    return <LightModeIcon sx={{height: 50, width: 50}} aria-label="light-mode" />;
  }
  return <DarkModeIcon sx={{height: 50, width: 50}} aria-label="dark-mode" />;
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
    <Stack aria-label="toggle theme" className="modeButton" direction="row" justifyContent="flex-end">
      <IconButton aria-label="toggle theme button" onClick={toggleMode} sx={{ width: 90, height: 90, color: 'white'}}>
        <DynamicIcon mode={mode} />
      </IconButton>
    </Stack>
  );
}

export default ModeToggleButton