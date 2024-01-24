import * as React from 'react';
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


export default function Btn() {
    return (
        <Stack direction="row" spacing={2}>

            <ColorButton size='large' variant="contained" startIcon={<SearchOutlinedIcon />}>
                Find a driver
            </ColorButton>
        </Stack>

    );
}