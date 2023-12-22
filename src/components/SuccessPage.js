import Icon from '../images/icon-success.svg';
import Button from './Button';

export default function SuccessPage({ email }) {
  return(
    <div className="main-content">
      <div id='dismiss-content' className='text-content'>
        <img id='success-icon' src={Icon} alt="icon" />
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to {email}. Please open it and click the button inside to confirm yiour subscription.</p>
        <Button>Dismiss message</Button>
      </div>
    </div>
  )
}