import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Btn'
import Btn from './Btn';


export default function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }
            }
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField id="outlined-basic" label="Your Pickup" variant="outlined" />

            </div>
            <div>

                <TextField id="outlined-basic" label="Your Destination" variant="outlined" />
            </div>

            <div>
                <Btn />
            </div>
        </Box>



    );
}
