import Logo from '../img/logo-green-2x.png';
import LogoSmall from '../img/logo-green-1x.png';
import Logo_S1 from '../img/logo-green-small-1x.png';
import Logo_S2 from '../img/logo-green-small-2x.png';


function Footer() {
    return (
            <footer className="footer">
                <div className="footer__logo-box">

                <picture className='footer__logo'>
                    <source srcSet={`${Logo_S1} 1x, ${Logo_S2} 2x`} media='(max-width: 37.5rem)'/>
                    <img srcSet={`${LogoSmall} 1x, ${Logo} 2x`} alt="logo" className='footer__logo'/>
                </picture>
                </div>
                <div className="footer__container" id='footer'>
                <div className="footer__navigation">
                    <ul className="footer__list">
                    <li className="footer__item"><a href='#footer' className='footer__link'>Company</a></li>
                    <li className="footer__item"><a href='#footer' className='footer__link'>Contact Us</a></li>
                    <li className="footer__item"><a href='#footer' className='footer__link'>Carrers</a></li>
                    <li className="footer__item"><a href='#footer' className='footer__link'>Privacy policy</a></li>
                    <li className="footer__item"><a href='#footer' className='footer__link'>Terms</a></li>
                    </ul>
                </div>
                <p className='footer__copyright'>Coded by <a href='https://github.com/MayconCabral' className='footer__link'>Maycon Cabral</a> and desined by <a href='https://github.com/jonasschmedtmann' className='footer__link'>Jonas Schmedtmann</a>.</p>
                </div>
            </footer>
            )
    
}

export default Footer;
