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
                    <h1>NEED A RIDE?

                    </h1>
                    <p>
                        <strong>Book witch <i>myRIDE</i> now!</strong>
                    </p>


                </div>
                <div className="form" >
                    <FormBase />





                </div>


            </div>

        </div>

    );



}