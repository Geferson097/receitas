import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';

function AutoComplete(props) {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={props.options}
            sx={{width: 300}}
            renderInput={props.renderInput}
        />
    );
}
export default AutoComplete

