import React from 'react';
import Logo from '../assets/Logo.svg'


export default function Header() {
    return (
        <header>
            <nav>
                <img src={Logo} alt="Logo" className='logo' />
                <div>
                   
                </div>
            </nav>
        </header>
    );
}