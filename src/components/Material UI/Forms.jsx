import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const styles = {
    textField: {
        color: 'white',
    },
};

export default function EndForm() {
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
                <FormControl sx={{ m: 1, width: '75ch' }} variant="standard">
                    <TextField id="outlined-basic" label="Your Pickup" variant="outlined" color="warning" sx={styles.textField} />
                </FormControl>

            </div>
            <div>
                <FormControl sx={{ m: 1, width: '75ch' }} variant="standard">
                    <TextField id="outlined-basic" label="Your Destination" variant="outlined" color="warning" sx={styles.textField} />
                </FormControl>
            </div>
        </Box>


    );
}
