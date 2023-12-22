import Form from './Form';

export default function SubscribePage({ email, onChange, onSubmit }) {
  return(
    <div>
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
      <Form email={email} onChange={onChange} onSubmit={onSubmit}/>
    </div>
  )
}