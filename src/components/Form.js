import Button from './Button';

export default function Form({ email, onChange, onSubmit }) {
  return(
    <form onSubmit={onSubmit}>
      <label htmlFor=""></label>
      <input placeholder='ash@loremcompany.com' type="text" value={email}/>
      <Button>Subscribe to monthly newsletter</Button>
    </form>
  )
}