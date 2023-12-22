import { useState, useEffect, useRef } from 'react';
import SubscribePage from './SubscribePage';
import SuccessPage from './SuccessPage';
import IllustrationDesktop from '../images/illustration-sign-up-desktop.svg';
import IllustrationMobile from '../images/illustration-sign-up-mobile.svg'

function App() {
  const [ email, setEmail ] = useState('');
  const [ formSubmitted, setFormSubmitted ] = useState(false);
  const illustration = useRef();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const updateIllustration = () => {
    if (window.innerWidth < 800) {
      illustration.current.src = IllustrationMobile;
    } else {
      illustration.current.src = IllustrationDesktop;
    }
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
        <img ref={illustration} id='illustration' src={IllustrationDesktop} alt="illustration" />
      </div>}
    </div>
  )
}

export default App;