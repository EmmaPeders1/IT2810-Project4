import { Input } from '@mui/material';

/**
 * A Funtional component that contains the searchbar
 */
function Search() {
  return (
    <Input
      id="search-game"
      sx={{ width: 500, height: '56px', bgcolor: 'background.paper', padding: '10px' }}
      placeholder={"Search for a game (NB! Not case sensitive)"}
      aria-label="search input field"
    />
  )
}

export default Search;