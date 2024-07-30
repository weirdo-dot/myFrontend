import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

function Assure() {
  return (
    <div className='p-4 max-w-full'>
<div className='flex flex-col   md:flex-row gap-20 items-center p-4 md:p-8'>
    <div>
        <img className='rounded'  src="/Assets/Images/medsaf.png" alt="heart" /> <br />
        <h1 className='font-extrabold text-2xl text-blue-500'>Medsaf Assure</h1> <br />
        <p>Medication prices are always flunctuating in the Nigeiran market  <br />due to unstable FX and supply chain issues. Medsaf Assure <br /> program allows you to lock in prices of crucial medications and  <br />get in front of your medication needs.</p> <br />
        <ul>
        <li className='flex items-center gap-5'><FaCheckCircle style={{color: 'blue'}}/>Locked Medication Prices</li> <br />
                    <li className='flex items-center gap-5'> <FaCheckCircle style={{color: 'blue'}}/>Credit Option</li> <br />
                    <li className='flex items-center gap-5' ><FaCheckCircle style={{color: 'blue'}}/>Quality Assurance</li> <br />
                    <li className='flex items-center gap-5'><FaCheckCircle style={{color: 'blue'}}/>Stock Management</li> <br />
                    <li className='flex items-center gap-5'><FaCheckCircle style={{color: 'blue'}}/>Doorstep Delivery</li> <br />
        </ul>
    </div>
    <div>
        <img className='w-90'  src="/Assets/Images/medsaf2.png" alt="doctor" />
    </div>
</div>
    </div>
  )
}

export default Assure