import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        // Add your signup logic here
        const captainData = {
            fullName: {
                firstname,
                lastname,
            },
            email,
            password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType,
            },
        };
        console.log(captainData);
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');
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
                    <h3 className='text-lg font-medium mb-2'>Vehicle Details</h3>
                    <input
                        className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg mb-3 placeholder:text-base'
                        type="text"
                        value={vehicleColor}
                        onChange={(e) => setVehicleColor(e.target.value)}
                        placeholder='Vehicle Color'
                        required
                    />
                    <input
                        className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg mb-3 placeholder:text-base'
                        type="text"
                        value={vehiclePlate}
                        onChange={(e) => setVehiclePlate(e.target.value)}
                        placeholder='Vehicle Plate'
                        required
                    />
                    <input
                        className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg mb-3 placeholder:text-base'
                        type="number"
                        value={vehicleCapacity}
                        onChange={(e) => setVehicleCapacity(e.target.value)}
                        placeholder='Vehicle Capacity'
                        required
                    />
                    <select
                        className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg mb-3 placeholder:text-base'
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select Vehicle Type</option>
                        <option value="car">Car</option>
                        <option value="motorcycle">Motorcycle</option>
                        <option value="auto">Auto</option>
                    </select>
                    <button className='bg-[#000] text-white rounded px-4 py-2 w-full text-lg font-medium mb-3'>Sign Up</button>
                    <p className='text-center'>Already have an account? <Link to={'/captain-login'} className='text-blue-600'>Log in</Link></p>
                </form>
            </div>
            <div>
                <Link to={'/signup'} className='bg-[#10b461] flex items-center justify-center text-white rounded px-4 py-2 w-full text-lg font-medium mb-3'>Sign up as User</Link>
            </div>
        </div>
    );
};

export default CaptainSignup;