import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';




export default function EndForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const [nameError, setNameError] = useState(false);

    const validateName = () => {
        if (!name.match(/[A-Za-z]+(\s[A-Za-z]+)+$/)) {
            setNameError(true);
            return false;
        }
        setNameError(false);
        return true;

    };

    const validateEmail = () => {
        if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            setEmailError(true);
            return false;
        }
        setEmailError(false);
        return true;
    };


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
                    <TextField id="name" value={name} onChange={(e) => setName(e.target.value)}
                        required placeholder='Full Name' variant="outlined" pattern="[A-Za-z]+(\s[A-Za-z]+)+"
                        title="Somente letras são permitidas" onBlur={validateName}
                        error={nameError}
                        helperText={nameError ? "Somente letras são permitidas" : ""} />
                </FormControl>

            </div>
            <div>
                <FormControl sx={{ m: 1, width: '75ch' }} variant="standard">
                    <TextField id="email" value={email} placeholder='Email Adress' variant="outlined" onChange={(e) => setEmail(e.target.value)}
                        required
                        type="email" onBlur={validateEmail}
                        error={emailError}
                        helperText={emailError ? "Por favor, insira um endereço de email válido" : ""} />
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
