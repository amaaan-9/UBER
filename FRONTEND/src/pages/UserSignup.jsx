import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        // Add your signup logic here
        const userData = {
            fullName: {
                firstname,
                lastname,
            },
            email,
            password,
        };
        console.log(userData);
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img className='w-14 mb-6' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
                <form onSubmit={submitHandler}>
                    <h3 className='text-lg mb-2'>What's your name?</h3>
                    <input
                        className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg mb-3 placeholder:text-base'
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        placeholder='First Name'
                        required
                    />
                    <input
                        className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg mb-3 placeholder:text-base'
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        placeholder='Last Name'
                        required
                    />
                    <h3 className='text-lg mb-2'>What's your email?</h3>
                    <input
                        className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg mb-3 placeholder:text-base'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        required
                    />
                    <h3 className='text-lg font-medium mb-2'>Create a Password</h3>
                    <input
                        className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg mb-3 placeholder:text-base'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        required
                    />
                    <button className='bg-[#000] text-white rounded px-4 py-2 w-full text-lg font-medium mb-3'>Sign Up</button>
                    <p className='text-center'>Already have an account? <Link to={'/login'} className='text-blue-600'>Log in</Link></p>
                </form>
            </div>
            <div>
                <Link to={'/captain-signup'} className='bg-[#10b461] flex items-center justify-center text-white rounded px-4 py-2 w-full text-lg font-medium mb-3'>Sign up as Captain</Link>
            </div>
        </div>
    );
};

export default UserSignup;