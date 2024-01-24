import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    '&:hover': {
        backgroundColor: orange[700],
    },
}));

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
                <Stack direction="row" spacing={2}>

                    <ColorButton size='large' variant="contained" startIcon={<SearchOutlinedIcon />}>
                        Find a driver
                    </ColorButton>
                </Stack>
            </div>
        </Box>



    );
}
