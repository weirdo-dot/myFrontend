
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-black'>
<div className='mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8'>
<div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
<div>
<img src="/Assets/Images/Red_Simple_Medical_Health_Logo-removebg-preview (1).png " alt="logo" 
className='w-10 h-15 ' />
<h3>Get Well is the premiere pharmaceutical technology provider of genuine and authentic medications.
We provide easy access to affordable medications through our technology platform.</h3>
<h1 className='mt-4 font-extrabold'>Socials</h1>
<div className='flex space-x-3 mt-4'>
<FaInstagram />
<FaTwitter />
<FaFacebook />
<FaYoutube />
</div>
</div>
<div className='space-y-2'>
    <h1 className='font-extrabold'>Quick Links</h1>
    <h1>
    <Link to='/'>Home</Link>
    </h1>
    <h1>Products</h1>
    <h1>About us</h1>
</div>
<div className='space-y-2 mr-6'>
    <h1 className='font-extrabold mb-3'>Products</h1>
    <h1>Marketplace</h1>
    <h1>Patients direct</h1>
    <h1>Assure</h1>
    <h1>Speedy</h1>
</div>
<div>
    <h1 className='font-extrabold mb-3'>Contact</h1>
    <p>Feel free to get in touch with us via phone or send us a message.</p>
    <p>08152525725</p>
</div>
</div>
</div>
    </footer>
  )
}

export default Footer