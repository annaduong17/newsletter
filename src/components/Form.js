import { useState } from 'react';
import Button from './Button';

export default function Form({ email, onChange, onSubmit }) {

  return(
    <form onSubmit={onSubmit}>
      <div className='flex-col'>
        <label htmlFor="">Email address</label>
        <input onChange={onChange} placeholder='ash@loremcompany.com' type="email" value={email} required/>
      </div>
      <div>
        <Button>Subscribe to monthly newsletter</Button>
      </div>
    </form>
  )
}