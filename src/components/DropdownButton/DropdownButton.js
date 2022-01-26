import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const DropdownButton = () => {
    const [someText, setSomeText] = useState('');

    const handleChange = (event) => {
        setSomeText(event.target.value);
    };
    
    return (
        <div>
            <FormControl sx={{ width: 190, margin: 0 }}>
                <InputLabel id="demo-simple-select-helper-label">Filter by</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={someText}
                    label="Filter by"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>empty</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};