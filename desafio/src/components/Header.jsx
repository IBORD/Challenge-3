import React from 'react';
import Logo from '../assets/Logo.svg'
import IconBell from '../assets/Bell.svg'
import separator from '../assets/Separator.svg'
import UserIcon from '../assets/UserIcon.svg'
import '../style/Header.css'


export default function Header() {
    return (
        <header>
            <div class="headerStyle">
                <div>
                    <img src={Logo} alt="Logo" className='logo' />
                </div>
                <div>
                    <ul class="lista-header">
                        <li><a href="">Home</a></li>
                        <li><a href="">Getting a Taxi</a></li>
                        <li><a href="">Mobile App</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className='IconsHeader'>
                    <img src={IconBell} alt="bell-icon" />
                    <img src={separator} alt="separator" />
                    <img src={UserIcon} alt="usericon" />
                </div>
            </div>
        </header>
    );
}