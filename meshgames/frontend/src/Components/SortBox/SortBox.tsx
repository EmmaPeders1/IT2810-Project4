import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import './SortBox.css';
import Button from '../Button/Button';

const options = ['ASC', 'DESC'];

interface sortBoxProps {
  handleSort: (sortInput: string) => void;
}

function SortBox(props: sortBoxProps) {

  function handleSort() {
    let sortInput = document.getElementById("choose-sort") as HTMLInputElement;
    props.handleSort(sortInput.value)
  }

    return (
        <div id="sortbox">
            <div id="sortContainer">
                <Autocomplete
                    id="choose-sort"
                    sx={{ width: '250px', padding: '2px', margin: '3px', bgcolor: 'white'}}
                    options={options}
                    renderInput={(params) => <TextField {...params} label="Sort by" />}
                />
                <div id="innerButton">
                    <Button
                        onClick={handleSort}
                        label=" SORT "
                        className="sort-button"
                        onKeyDown={() => console.log("sort!")}
                    />
                </div>
            </div>
        </div>
    );
}

export default SortBox;