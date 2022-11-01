import { Input } from '@mui/material';

function Search() {
  return (
    <Input
      id="search-game"
      sx={{ width: 500, height: '56px', bgcolor: 'background.paper', padding: '10px' }}
      placeholder={"Search for a game"}
    />
  )
}

export default Search;