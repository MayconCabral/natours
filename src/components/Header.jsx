import Logo from '../img/logo-white.png';
import Button from './Button';

function Header() {
  return (
  <header className='header'>
    <div className='header__logo-box'>
      <img src={Logo} alt='Logo' className='header__logo' />
    </div>
    <div className='header__text-box'>
      <h1 className='heading-primary'>
        <span className='heading-primary--main'>Outdoors</span>
        <span className='heading-primary--sub'>is where life happens</span>
      </h1>      
      <Button href='#header' className= 'btn btn--white btn--animated' text='Discouver our tours'/>
    </div>    
  </header>
  )
}

export default Header;
