import { useState, useEffect } from 'react';
import SubscribePage from './SubscribePage';
import SuccessPage from './SuccessPage';
import IllustrationDesktop from '../images/illustration-sign-up-desktop.svg';
import IllustrationMobile from '../images/illustration-sign-up-mobile.svg'

function App() {
  const [ email, setEmail ] = useState('');
  const [ formSubmitted, setFormSubmitted ] = useState(false);
  const [ isDesktop, setIsDesktop ] = useState(window.innerWidth > 800);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const updateIllustration = () => {
    setIsDesktop(window.innerWidth > 800);
  }

  useEffect(() => {
    window.addEventListener('resize', updateIllustration);

    return () => {
      window.removeEventListener('resize', updateIllustration);
    };
  });
  

  return(
    <div className='container flex-center'>
      {formSubmitted ? <SuccessPage email={email} /> : <div className='main-content'>
        <SubscribePage email={email} onChange={handleEmailChange} onSubmit={handleOnSubmit}/>
        {isDesktop ? <img className='illustration' src={IllustrationDesktop} alt="illustration" /> : <img className='illustration' src={IllustrationMobile} alt="illustration" />}
      </div>}
    </div>
  )
}

export default App;