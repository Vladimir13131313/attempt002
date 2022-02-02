import React, {useState, useEffect} from 'react';

import {Button} from '../../Button/Button';
import {FormInput} from '../../Input/FormInput';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import './MoveCargoForm.scss';


export const MoveCargoForm = ({currentWarehouse, comboboxValue, setComboboxValue, inputValue, setInputValue, func}) => {
    const [warehousesList, setWarehousesList] = useState([]);
    const warehouses = "warehouses"

    useEffect(() => {
        getWarehouses()
    }, []);

    function getWarehouses() {
        let listOfAll = JSON.parse(localStorage.getItem(warehouses));
        let list = [];
        listOfAll.forEach(item => {
            list.push({
                label: item.name,
                id: listOfAll.indexOf(item)
            });
        });
        setWarehousesList(list);
    }

    return (
            <form onSubmit={func}>
                <FormInput labelTxt="From" inputType="text" inputValue={currentWarehouse} readOnly={true}
                           inputName="from" plcHolder="gg" error="no"
                />
                <div className="strokes">
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.25L19 3.25M1 3.25L3.57812 1M1 3.25L3.57812 5.5" stroke="#3E4C59"
                              strokeWidth="1.2" strokeLinecap="round"/>
                        <path d="M19 10.75L1 10.75M19 10.75L16.4219 8.5M19 10.75L16.4219 13" stroke="#3E4C59"
                              strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                </div>
                <div>
                    <label htmlFor="input_form_email_su" className="label_form">In</label>
                    <Autocomplete
                        value={comboboxValue}
                        onChange={(event, newValue) => {
                            setComboboxValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        disablePortal
                        id="combo-box-demo"
                        options={warehousesList}
                        sx={{ width: 300, marginTop: 1 }}
                        renderInput={(params) => <TextField {...params}/>}
                    />
                </div>


                <Button style="common_button log_in_btn" name="Next step" btnType={"submit"}/>
            </form>
    );
};