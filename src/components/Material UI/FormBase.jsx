import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Btn'
import Btn from './Btn';
import FormControl from '@mui/material/FormControl';

const styles = {
    textFieldText: {
        color: 'white',
    },
    textFieldLabel: {
        label: 'white',
    },
    textFieldBorder: {
        border: 'white',
    },
};

export default function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '75ch' }
            }
            }
            noValidate
            autoComplete="off"
        >
            <div>
                <FormControl sx={{ m: 1, width: '75ch' }} variant="standard" >
                    <TextField id="outlined-basic" label="Your Pickup" variant="outlined" color="warning" sx={{ input: styles.textFieldText, label: styles.textFieldLabel, border: styles.textFieldBorder }} />
                </FormControl>

            </div>
            <div>
                <FormControl sx={{ m: 1, width: '75ch' }} variant="standard">
                    <TextField id="outlined-basic" label="Your Destination" variant="outlined" color="warning" sx={{ input: styles.textFieldText, label: styles.textFieldLabel, borderColor: styles.textFieldBorder }} />
                </FormControl>
            </div>

            <div>
                <Btn />
            </div>
        </Box>


    );
}
