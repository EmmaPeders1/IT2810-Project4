import { Input } from '@mui/material';


// props which the Searchbar uses
interface searchbarProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A Funtional component that contains the searchbar
 */
function Search(props: searchbarProps) {
  return (
    <Input
      id="search-game"
      sx={{ width: 500, height: '56px', bgcolor: 'background.paper', padding: '10px' }}
      placeholder={"Search for a game (NB! Case sensitive)"}
      aria-label="search input field"
      onChange={props.onChange}
    />
  )
}

export default Search;