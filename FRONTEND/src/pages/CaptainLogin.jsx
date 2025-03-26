import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [captainData, setCaptainData] = useState({});
  
      const submitHandler = (e) => {
          e.preventDefault();
          // Add your login logic here
          setCaptainData({
              email: email,
              password: password
          });
          setEmail('');
          setPassword('');
      }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
    <div>
        <img className='w-14 mb-6' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={submitHandler}>
            <h3 className='text-lg mb-2'>What's your email?</h3>
            <input className='bg-[#eeeeee] rounded px-4 py-2 w-full  text-lg mb-3 placeholder:text-base' type="email" value={email} onChange={(e)=>{
                setEmail(e.target.value);
            }} placeholder='Email' required />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input value={password} onChange={(e)=>{
                setPassword(e.target.value);
            }} className='bg-[#eeeeee] rounded px-4 py-2 w-full  text-lg mb-3 placeholder:text-base' type="password" placeholder='Password' required />
            <button className='bg-[#000] text-white rounded px-4 py-2 w-full  text-lg font-medium mb-3'>Login</button>
            <p className='text-center'>Join a fleet? <Link to={'/captain-signup'} className='text-blue-600'>Register as a Captain</Link></p>
        </form>
    </div>
    <div>
        <Link to={'/login'} className='bg-[#d5622d] flex items-center justify-center text-white rounded px-4 py-2 w-full  text-lg font-medium mb-3'>Sign in as User</Link>
    </div>
</div>
  )
}

export default CaptainLogin