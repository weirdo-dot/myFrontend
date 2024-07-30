import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

function Lab() {
  return (
    <div className='p-4 mt-12 max-w-full'>
        <div className='flex flex-col md:flex-row-reverse gap-9'>
    <div>
        <img className='rounded'  src="/Assets/Images/lab.png" alt="heart" /> <br />
        <h1 className='font-extrabold text-2xl text-blue-500'>Medsaf Lab Assure</h1> <br />
        <p>Medsaf is a provider of quality diagnostics products and services. <br />We provide easy access to quality and affordable diagnostics <br /> products, reagents, equipment, and consumables</p> <br />
        <ul>
        <li className='flex items-center gap-5'><FaCheckCircle style={{color: 'blue'}}/>Credit Options</li> <br />
                    <li className='flex items-center gap-5'> <FaCheckCircle style={{color: 'blue'}}/>Discount on purchases</li> <br />
                    <li className='flex items-center gap-5' ><FaCheckCircle style={{color: 'blue'}}/>Ships across Africa</li> <br />
                    <li className='flex items-center gap-5'><FaCheckCircle style={{color: 'blue'}}/>Stock Management</li> <br />
                    <li className='flex items-center gap-5'><FaCheckCircle style={{color: 'blue'}}/>COVID 19 KITS</li> <br />
        </ul>
    </div>
    <div>
        <img className='w-90'  src="/Assets/Images/labAssureImage.1f4ce41aa54001e9097a.png" alt="doctor" />
    </div>
</div>
    </div>
  )
}

export default Lab