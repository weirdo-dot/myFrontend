import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
function Patient() {
  return (
    <div className=' max-w-full items-center mt-10'>
    
    <div className='flex flex-col md:flex-row-reverse gap-10 items-center' >
        <div >
            <img src="/Assets/Images/patientsDirectImage.9f800721ca0100ebb3ec.png" alt="doctor" />
        </div> 
        <div className='mx-2.5'>
            <img  src="/Assets/Images/pill.png" alt="nurse" className='rounded-full' /> <br />
            <h1 className='font-extrabold text-blue-500 text-2xl '>Medsaf Patients Direct</h1> <br />
            <p className='font-thin'>Medsaf works with our network of doctors to source the highest  <br />quality chronic illness medications for patients. We offer at <br /> wholesale prices so that you and your loved ones can afford to <br /> have the best care possible.</p> <br />
            <ul>
                <li className='flex items-center gap-5'><FaCheckCircle style={{color: 'blue'}}/>Never run out of critical medication</li> <br />
                <li className='flex items-center gap-5'> <FaCheckCircle style={{color: 'blue'}}/>Prompt home delivery</li> <br />
                <li className='flex items-center gap-5' ><FaCheckCircle style={{color: 'blue'}}/>Vetted pharmacist to attend to your needs</li> <br />
                <li className='flex items-center gap-5'><FaCheckCircle style={{color: 'blue'}}/>Medication mix</li> <br />
            </ul>
            <button className='p-3 rounded-md  bg-orange-100 text-orange-400'>Coming Soon</button>
        </div>
    </div>

</div>
  )
}

export default Patient