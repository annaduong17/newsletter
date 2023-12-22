import { useState } from 'react';
import SubscribePage from './SubscribePage';
import SuccessPage from './SuccessPage';
import Illustration from '../images/illustration-sign-up-desktop.svg';

function App() {
  const [ email, setEmail ] = useState('');
  const [ formSubmitted, setFormSubmitted ] = useState(false);
  const [ showSubscribe, setShowSubscribe ] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setShowSubscribe(false);
  };
  

  return(
    <div>
      {showSubscribe && <div>
        <SubscribePage email={email} onChange={handleEmailChange} onSubmit={handleOnSubmit}/>
        <img src={Illustration} alt="illustration" />
      </div>}
      {formSubmitted && <SuccessPage email={email} />}
    </div>
  )
}

export default App;