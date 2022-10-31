import { atom, AtomEffect} from 'recoil';

export type ThemeMode = 'light' | 'dark';

const localStorageEffect = 

  (key: string): AtomEffect<ThemeMode> =>
  ({ setSelf, onSet }) => {
    // Retrieve the value stored at the specified key
    const stored = localStorage.getItem(key);
    // Check if the value exists and is light or dark
    if (stored === 'dark' || stored === 'light') {
      // If the value is valid, the call the provided function setSelf which initializes the atom value
      setSelf(stored);
    }
    // Creates the callback triggered when the atom is changed
    onSet((value, _, isReset) => {
      if (isReset) {
        // If atom has been reset then remove it from local storage
        localStorage.removeItem(key);
      } else {
        // If value has changed then store the value in local storage
        localStorage.setItem(key, value || _); // the || is a fail-safe if for any reason value is null the value will revert to default
      }
    });
  };

export const appThemeMode = atom<ThemeMode>({
  key: 'AppThemeMode',
  default: 'light',
  effects: [localStorageEffect('example-theme-mode')],
});

export default appThemeMode