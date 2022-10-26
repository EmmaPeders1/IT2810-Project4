import React, { useState } from 'react';
import './FilterBox.css';
import Button from '../../Components/Button/Button';
import { gql, useQuery } from '@apollo/client';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Modal,
  Typography,
} from '@mui/material';

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
        <div id="filterbox">
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
                <div id="filterboxInner">
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{ textAlign: 'center', m: 1, fontWeight: 'bold' }}
                        >
                        Filter games
                    </Typography>
                    <Box
                        sx={{
                        textAlign: 'center',
                        m: 1,
                        width: '100%',
                        display: 'flex',
                        flexFlow: 'column wrap',
                        }}
                        >
                        <div id="searchBarContainer">
                            <Autocomplete
                                id="choose-publisher"
                                freeSolo
                                sx={{ width: '250px', padding: '2px' }}
                                options={publishers.map((publisher) => publisher.name)}
                                renderInput={(params) => <TextField {...params} label="Publisher" />}
                            />
                            <Autocomplete
                                id="choose-platform"
                                freeSolo
                                sx={{ width: '250px', padding: '2px' }}
                                options={platforms.map((publisher) => publisher.name)}
                                renderInput={(params) => <TextField {...params} label="Platform" />}
                            />
                        </div>
                        <Grid item xs={12}>
                            <Typography sx={{ textAlign: 'center', m: 1, fontWeight: 'bold' }}>
                                Genre
                            </Typography>
                        </Grid>
                            <div id="checkboxContainer">
                                <FormControlLabel sx={{ width: '150px'}}
                                    control={
                                    <Checkbox color="success"/>
                                    }
                                    label="Misc"
                                    value="Misc"
                                />
                                <FormControlLabel sx={{ width: '150px'}}
                                    control={
                                    <Checkbox color="success"/>
                                    }
                                    label="Shooter"
                                    value="Shooter"
                                />
                                <FormControlLabel sx={{ width: '150px'}}
                                    control={
                                    <Checkbox color="success"/>
                                    }
                                    label="Simulation"
                                    value="Simulation"
                                />
                                <FormControlLabel sx={{ width: '150px'}}
                                    control={
                                    <Checkbox color="success"/>
                                    }
                                    label="Action"
                                    value="Action"
                                />
                                <FormControlLabel sx={{ width: '150px'}}
                                control={
                                <Checkbox color="success"/>
                                }
                                label="Adventure"
                                value="Adventure"
                                />
                                <FormControlLabel sx={{ width: '150px'}}
                                    control={
                                    <Checkbox color="success" />
                                    }
                                    label="Sports"
                                    value="Sports"
                                />
                                <FormControlLabel sx={{ width: '150px'}}
                                    control={
                                    <Checkbox color="success" />
                                    }
                                    label="Platform"
                                    value="Platform"
                                />
                                <FormControlLabel sx={{ width: '150px'}}
                                    control={
                                    <Checkbox color="success"/>
                                    }
                                    label="Strategy"
                                    value="Strategy"
                                />
                                <FormControlLabel sx={{ width: '150px'}}
                                    control={
                                    <Checkbox color="success"/>
                                    }
                                    label="Puzzle"
                                    value="Puzzle"
                                />
                                <FormControlLabel sx={{ width: '150px'}}
                                    control={
                                    <Checkbox color="success"/>
                                    }
                                    label="Role-Playing"
                                    value="Role-Playing"
                                />
                                <FormControlLabel sx={{ width: '150px'}}
                                    control={
                                    <Checkbox color="success"/>
                                    }
                                    label="Racing"
                                    value="Racing"
                                />
                                <FormControlLabel sx={{ width: '150px'}}
                                    control={
                                    <Checkbox color="success"/>
                                    }
                                    label="Fighting"
                                    value="Fighting"
                                />
                            </div>
                        <Grid justifyContent="center" display="flex">
                        <div id="innerButtonContainer">
                            <Button
                                onClick={handleFilter}
                                label=" FILTER "
                                className="filter-button"
                                onKeyDown={() => console.log("filter!")}
                            />
                        </div>
                        </Grid>
                    </Box>
                </div>
            </Modal>
        </div>
    );
}

export default FilterBox;