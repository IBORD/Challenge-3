import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';
import axios from 'axios';
import { MenuItem } from '@mui/material';
import City from '../../Data/Country-City1.json';


export default function EndForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [code, setCode] = useState('');
    const [codeError, setCodeError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [checked, setChecked] = React.useState(false);
    const [carType, setCarType] = useState('');
    const [carTypeButtons, setCarTypeButtons] = useState([
        { label: 'Radio 1', value: 'radio1' },
        { label: 'Radio 2', value: 'radio2' },
        { label: 'Radio 3', value: 'radio3' },

    ]);

    const styles = {
        textFieldText: {
            color: 'white',
        },

    };

    const [selectedCountry, setSelectedCountry] = useState('');
    const [city, setCity] = useState('');
    const [countryError, setCountryError] = useState('');

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setCity('');
        const selectedCountry = event.target.value;

    };


    const handleSubmit = async (data) => {
        data.preventDefault();


        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isCodeValid = validateCode();
        const isCountryValid = validateForm();


        if (isNameValid && isEmailValid && isCodeValid && isCountryValid) {
            setName('');
            setEmail('');
            setCode('');
            setCarType('');
            setSelectedCountry('');
            setCity('');

            const formData = {
                name,
                email,
                code,
                carType,
                selectedCountry,
                city,
            };


            try {

                const response = await axios.post('http://localhost:3001/formData', formData);


                console.log('Dados do formulário enviados com sucesso', response.data);
                alert('Form submitted successfully!');
            } catch (error) {
                console.error('Erro ao enviar ou receber dados do formulário', error);
            }
        }
    };
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const validateForm = () => {
        if (!selectedCountry) {
            setCountryError('Please select a country');
            return false;
        }
        return true;
    };

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

    const validateCode = () => {
        if (!code.match(/^[A-Za-z]{3}-[0-9]{3}$/)) {
            setCodeError(true);
            return false;
        }
        setCodeError(false);
        return true;
    };

    useEffect(() => {
        if (checked) {
            setCarTypeButtons([
                { label: <img src="https://i.ibb.co/YNWH8hm/Card-Image-1.png" alt="car1" />, value: 'Sedan', name: 'Sedan' },
                { label: <img src="https://i.ibb.co/2YPcMqh/Card-Image-2.png" alt="car2" />, value: 'SUV/Van', name: 'SUV/Van' },
                { label: <img src="https://i.ibb.co/dPYVKWW/Card-Image-3.png" alt="car3" />, value: 'Semi Luxury', name: 'Semi Luxury' },
                { label: <img src="https://i.ibb.co/KNSjXQK/Card-Image-4.png" alt="car4" />, value: 'Luxury Car', name: 'Luxury Car' },
            ]);
        } else {
            setCarTypeButtons([]);
        }
    }, [checked]);
    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                '& > :not(style)': { m: 1, width: '150ch' }
            }
            }
            noValidate
            autoComplete="off"
        >
            <div>
                <FormControl sx={{ m: 1, width: '150ch' }} variant="standard">
                    <TextField
                        sx={{ input: styles.textFieldText }}
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required placeholder='Full Name'
                        variant="outlined"
                        pattern="[A-Za-z]+(\s[A-Za-z]+)+"
                        title="Somente letras são permitidas"
                        onSubmit={validateName}
                        error={nameError}
                        helperText={nameError ? "Somente letras são permitidas e é necessario um nome e sobrenome (exemplo: José Alves)" : ""} />
                </FormControl>

            </div>
            <div>
                <FormControl sx={{ m: 1, width: '150ch' }} variant="standard">
                    <TextField
                        sx={{ input: styles.textFieldText }}
                        id="email"
                        value={email}
                        placeholder='Email Adress'
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        type="email" onSubmit={validateEmail}
                        error={emailError}
                        helperText={emailError ? "Por favor, insira um endereço de email válido" : ""} />
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m: 1, width: '150ch', color: 'white' }} variant="standard">
                    <TextField
                        id="outlined-basic-country"
                        select
                        label="Country"
                        variant="outlined"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        InputProps={{
                            style: {
                                color: 'white',
                            },
                        }}
                        sx={{
                            label: {
                                color: 'grey', // Altere a cor aqui
                            },
                        }}
                    >
                        {Object.keys(City).map((country) => (
                            <MenuItem key={country} value={country}>
                                {country}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m: 1, width: '150ch' }} variant="standard">
                    <TextField
                        id="outlined-basic-city"
                        select
                        label="City"
                        variant="outlined"
                        value={city}
                        onChange={handleCityChange}
                        disabled={!selectedCountry}
                        InputProps={{
                            style: {
                                color: 'white',
                            },
                        }}
                        sx={{
                            label: {
                                color: 'grey',
                            },
                        }}
                    >
                        {selectedCountry &&
                            City[selectedCountry] &&
                            City[selectedCountry].map((cityName, index) => (
                                <MenuItem key={index} value={cityName}>
                                    {cityName}
                                </MenuItem>
                            ))}
                    </TextField>
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m: 1, width: '150ch' }} variant="standard">
                    <TextField
                        sx={{ input: styles.textFieldText }}
                        id="code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                        placeholder="Código"
                        variant="outlined"
                        pattern="[A-Za-z]{3}-[0-9]{3}"
                        title="O código deve seguir o formato de 3 letras, seguidas por um hífen e 3 números (exemplo: AAA-001)"
                        onSubmit={validateCode}
                        error={codeError}
                        helperText={codeError ? "O código deve seguir o formato de 3 letras, seguidas por um hífen e 3 números (exemplo: AAA-001)" : ""}
                    />
                </FormControl>
            </div>
            <div >
                <Switch
                    checked={checked}
                    onChange={(event) => {
                        setChecked(event.target.checked);
                        if (!event.target.checked) {
                            setCarType('');
                        }
                    }}
                    color='warning'
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
            <div>
                {checked && (
                    <div style={{ display: 'flex', gap: '20px' }}>
                        {carTypeButtons.map((button) => (
                            <div key={button.value}>
                                <input
                                    type="radio"
                                    value={button.value}
                                    checked={carType === button.value}
                                    onChange={() => setCarType(button.value)}
                                />
                                <label htmlFor={button.value}>
                                    {button.label}
                                    <span style={{ display: 'block', marginTop: '5px', color: 'white' }}>{button.name}</span>
                                </label>
                            </div>
                        ))}
                        {!carType && (
                            <FormHelperText error>
                                Please select a car type
                            </FormHelperText>
                        )}
                    </div>
                )}
            </div>
            <div style={{ display: 'flex' }}>
                <Button variant="contained" color="warning" type="submit">
                    Submit
                </Button>
            </div>
        </Box>
    );
}