import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const history = [

  { game: 'Game1'},
  { game: 'Game2'},
  { game: 'Game3'},
  { game: 'Game4'},
  { game: 'Game5'},
]

function Search() {
  return (
    <Autocomplete
      id="search-game"
      freeSolo
      sx={{ width: 500, height: '56px', bgcolor: 'white' }}
      options={history.map((search) => search.game)}
      renderInput={(params) => <TextField {...params} label="Search for a game!" />}
    />
  )
}

export default Search;