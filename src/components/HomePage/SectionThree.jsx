import Forms from '../Material UI/Forms'
import '../../style/SectionThree.css'
import pop from '../../assets/popup.svg'
import PostDetails from '../Material UI/postDetails'
export default function Form() {
    return (
        <div className="containerForm">

            <div className="Header">
                <div className='formtitulo'>
                    <div className='imgpop'><img src={pop} alt="Logo" className='logo' /></div>

                    <div>
                        <div className='Head'><p>Drive with MyRide</p></div>
                        <div className='sub1'><p>Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</p></div>
                    </div>

                </div>



                <div className="forms">


                </div>

                <Forms />




            </div>
        </div>


    )


}