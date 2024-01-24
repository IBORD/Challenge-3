import React from "react";
import Booking from '../../assets/BookingImg.svg'
import '../../style/SectionOne.css'
import FormBase from '../Material UI/FormBase'


export default function booking() {
    return (
        <div className="containerPrincipal">
            <div className="imagem">
                <img src={Booking} alt="Logo" className='logo' />
            </div>
            <div className="geralInfo">
                <div className="tituloForm">
                    <div>
                        <p>NEED A RIDE?</p>
                    </div>
                    <div className="textospan">
                        <span>
                            <strong>Book witch <i>myRIDE</i> now!</strong>
                        </span>
                    </div>
                </div>
                <div className="styleForm">
                    <div className="styleP">
                        <p>Find a ride now </p>
                    </div>
                    <div className="form" >
                        <FormBase />
                    </div>
                </div>
            </div>
        </div>
    );



}