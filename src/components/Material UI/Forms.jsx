import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';



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
                    <TextField id="outlined-basic" placeholder='Full Name' variant="outlined" />
                </FormControl>

            </div>
            <div>
                <FormControl sx={{ m: 1, width: '75ch' }} variant="standard">
                    <TextField id="outlined-basic" placeholder='Email Adress' variant="outlined" />
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m: 1, width: '75ch' }} variant="standard">
                    <TextField id="outlined-basic" select label='Country' variant="outlined" />
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m: 1, width: '75ch' }} variant="standard">
                    <TextField id="outlined-basic" select label='City' variant="outlined" />
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m: 1, width: '75ch' }} variant="standard">
                    <TextField id="outlined-basic" placeholder='Referral Code' variant="outlined" />
                </FormControl>
            </div>
        </Box>


    );
}
