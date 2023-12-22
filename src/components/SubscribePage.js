import Form from './Form';
import ListIcon from '../images/icon-list.svg';

export default function SubscribePage({ email, onChange, onSubmit }) {
  return(
    <div className='text-content'>
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <div className='bullet'>
          <img src={ListIcon} alt="icon" />
          <li>Product discovery and building what matters</li>
        </div>
        <div className='bullet'>
          <img src={ListIcon} alt="icon" />
          <li>Measuring to ensure updates are a success</li>
        </div>
        <div className='bullet'>
          <img src={ListIcon} alt="icon" />
          <li>And much more!</li>
        </div>
      </ul>
      <Form email={email} onChange={onChange} onSubmit={onSubmit}/>
    </div>
  )
}