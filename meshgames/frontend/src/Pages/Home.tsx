import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import './Home.css';

import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  Typography,
} from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  length: 100,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Home(){

  const [input, setInput] = useState<string>("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }
  function handleFilter(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

return(
  <div className="home">
      <div className="search-container" >
            <Input
              className='URL-input'
              onChange={handleInput}
              placeholder={"Search for a game"}
            />
            <Button
              onClick={handleSubmit}
              label=" SEARCH "
              className="search-button"
              icon={faSearch}
              onKeyDown={() => console.log("search!")}
            />
            <Button
              onClick={handleOpen}
              label=" FILTER "
              className="filter-button"
              icon={faSearch}
              onKeyDown={() => console.log("Filter!")}
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ textAlign: 'center', m: 1, fontWeight: 'bold' }}
            >
              Filter games
            </Typography>
            <Box 
              sx={{
                textAlign: 'left',
                m: 1,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Stack component="form" noValidate spacing={3} justifyContent="center"/>
              <Grid display="flex" justifyContent="center">
                <div>
                  <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel id="label-location">Publisher</InputLabel>
                    <Select
                      labelId="label-publisher"
                      id="label-publisher"
                      fullWidth
                      label="Publisher"
                    >
                      <MenuItem value="Publisher1">Publisher1</MenuItem>
                      <MenuItem value="Publisher2">Publisher2</MenuItem>
                      <MenuItem value="Publisher3">Publisher3</MenuItem>
                      <MenuItem value="Publisher4">Publisher4</MenuItem>
                      <MenuItem value="Publisher5">Publisher5</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div>
                  <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel id="label-age">Platform</InputLabel>
                    <Select
                      labelId="label-age"
                      id="label-age"
                      fullWidth
                      label="Platform"
                    >
                     <MenuItem value="Platform1">Platform1</MenuItem>
                      <MenuItem value="Platform2">Platform2</MenuItem>
                      <MenuItem value="Platform3">Platform3</MenuItem>
                      <MenuItem value="Platform4">Platform4</MenuItem>
                      <MenuItem value="Platform5">Platform5</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ textAlign: 'center', m: 1, fontWeight: 'bold' }}>
                  Genre
                  </Typography>
              </Grid>
              <Grid display="flex" justifyContent="center">
                <Grid sx={{ marginRight: 5, marginLeft: 2 }}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox color="success"/>
                      }
                      label="Misc"
                      value="Misc"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox color="success"/>
                      }
                      label="Shooter"
                      value="Shooter"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox color="success"/>
                      }
                      label="Simulation"
                      value="Simulation"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox color="success"/>
                      }
                      label="Action"
                      value="Action"
                    />
                  </FormGroup>
                </Grid>
                <Grid sx={{ marginRight: 12, marginLeft: 5 }}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox color="success"/>
                      }
                      label="Adventure"
                      value="Adventure"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox color="success" />
                      }
                      label="Sports"
                      value="Sports"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox color="success" />
                      }
                      label="Platform"
                      value="Platform"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox color="success"/>
                      }
                      label="Strategy"
                      value="Strategy"
                    />
                    </FormGroup>
                </Grid>
                <Grid sx={{ marginRight: 12, marginLeft: 5 }}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox color="success"/>
                      }
                      label="Puzzle"
                      value="Puzzle"
                    />
                     <FormControlLabel
                      control={
                        <Checkbox color="success"/>
                      }
                      label="Role-Playing"
                      value="Role-Playing"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox color="success"/>
                      }
                      label="Racing"
                      value="Racing"
                    />
                     <FormControlLabel
                      control={
                        <Checkbox color="success"/>
                      }
                      label="Fighting"
                      value="Fighting"
                    />
                    </FormGroup>
                  </Grid>
                </Grid>
              <Grid justifyContent="center" display="flex">
                <Button
                  onClick={handleFilter}
                  label=" FILTER "
                  className="filter-button"
                  onKeyDown={() => console.log("filter!")}
               />
              </Grid>
            </Box>
          </Box>
          </Modal>
        </div>
  </div>
  );
}