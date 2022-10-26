import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import { gql, useQuery } from '@apollo/client';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
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

  const publishers = [
    { name: 'Organise'},
    { name: 'Joha'},
    { name: 'Terminator'},
    { name: 'Dull'},
    { name: 'Nzaza'},
  ];
  
  const platforms = [
    { name: 'Platform1'},
    { name: 'Platform2'},
    { name: 'Platform3'},
    { name: 'Platform4'},
    { name: 'Platform5'},
  ];

function handleFilter(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault();
}

function FilterBox() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
        <Button
                onClick={handleOpen}
                label=" FILTER "
                className="filter-button"
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
                <Stack direction="row" spacing={3} justifyContent="center">
                  <Autocomplete
                    id="choose-publisher"
                    freeSolo
                    sx={{ width: 300 }}
                    options={publishers.map((publisher) => publisher.name)}
                    renderInput={(params) => <TextField {...params} label="Publisher" />}
                  />
                  <Autocomplete
                    id="choose-platform"
                    freeSolo
                    sx={{ width: 300 }}
                    options={platforms.map((publisher) => publisher.name)}
                    renderInput={(params) => <TextField {...params} label="Platform" />}
                  />
                  </Stack>
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
    );
}

export default FilterBox;