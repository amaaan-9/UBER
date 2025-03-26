import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-[url(https://plus.unsplash.com/premium_photo-1677234282671-ed835a226405?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dWJlciUyMHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] bg-cover bg-right h-screen flex justify-between  flex-col bg-red-400 w-full'>
            <img className='w-14 mt-7 ml-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='py-4 px-4 bg-white pb-6'>
                <h2 className='text-3xl font-bold tracking-tighter'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home