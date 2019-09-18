import React from 'react';
import TextField from '@material-ui/core/TextField';
//import clsx from 'clsx';


const SearchBox =({searchfield, searchChange}) => {
    return(
        <div>
            <TextField
                id="standard-dense"
                label="Search friends"
               // className={clsx(classes.textField, classes.dense)}
                margin="dense"
                onChange = {searchChange}
            />   
        </div>
    );
}

export default SearchBox;