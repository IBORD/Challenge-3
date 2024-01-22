import Logo from '../assets/LogoFooter.svg'
import Social from '../assets/Face.svg'
import Social2 from '../assets/Insta.svg'
import Social3 from '../assets/Twitter.svg'
import '../style/footer.css'


export default function Footer() {
    return (
        <footer>
            <div className='containerFooter'>

                <div className="LogoSocial">
                    <ul className='infoFooter'>
                        <li><img src={Logo} alt="Logo" className='logo' /></li>
                        <li><span>MyRide Inc., 2nd Floor, New York, NY 10016</span> </li>
                        <li><img src={Social} alt="Social" className='face' />
                            <img src={Social2} alt="Social" className='insta' />
                            <img src={Social3} alt="Social" className='twitter' /></li>
                    </ul>

                </div>

                <div className='geral'>
                    <div className="container-infos">
                        <div className="contatos">
                            <h3>Company</h3>
                            <ul className='listaFooter'>
                                <li><a href="">About Us</a></li>
                                <li><a href="">News</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">How We Work</a></li>
                            </ul>
                        </div>
                        <div className="infos">
                            <h3>Support</h3>
                            <ul className='listaFooter'>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">US Office</a></li>
                                <li><a href="">Asia Office</a></li>
                                <li><a href="">Help Center</a></li>
                            </ul>
                        </div>
                        <div className="infos">
                            <h3>More</h3>
                            <ul className='listaFooter'>
                                <li><a href="">Become a partener</a></li>
                                <li><a href="">Partner Support</a></li>
                                <li><a href="">Mobile app links</a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </footer>
    );
}
