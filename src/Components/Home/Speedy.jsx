import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
function Speedy() {
  return (
    <div className=' p-4 items-center max-w-full mt-12'>
    <div className='flex flex-col md:flex-row-reverse gap-10 items-center' >
        <div >
            <img src="/Assets/Images/speedy.png" alt="doctor" />
        </div> 
        <div className='mx-2.5'>
            <img  src="/Assets/Images/cart.png" alt="nurse" className='rounded-full' /> <br />
            <h1 className='font-extrabold text-blue-500 text-2xl '>Medsaf Speedy</h1> <br />
            <p className='font-thin'>Medsaf speedy offers quality and affordable medication delivered <br /> to your doorstep the same day you order (if you order before 12pm <br /> WAT) Dont getstranded on your crucial medications anymore.</p> <br />
            <ul>
                <li className='flex items-center gap-5'><FaCheckCircle style={{color: 'blue'}}/>Same day delivery (within Lagos), 24-72 hours outside Lagos</li> <br />
                <li className='flex items-center gap-5'> <FaCheckCircle style={{color: 'blue'}}/>Old pricing advantage</li> <br />
                <li className='flex items-center gap-5' ><FaCheckCircle style={{color: 'blue'}}/>Quality assured medication</li> <br />
                <li className='flex items-center gap-5'><FaCheckCircle style={{color: 'blue'}}/>Medication mix</li> <br />
            </ul>
            <button className='p-3 rounded-md  bg-orange-100 text-orange-400'>Coming Soon</button>
        </div>
    </div>

</div>
  )
}

export default Speedy