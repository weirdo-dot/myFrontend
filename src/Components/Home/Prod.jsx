import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
function Prod() {
  return (
    <div className=' p-4 items-center  max-w-full'>
        <div className='text-center'>
            <h1 className='font-bold text-3xl'>Our Products</h1> <br />
            <p className='font-thin'>We curated a plethora of products to solve ease of movement <br /> and access to quality medications across Nigeria</p> <br /> <br />
        </div>
        <div className='flex flex-col md:flex-row-reverse gap-14 items-center' >
            <div className='"md:w-1/2 flex  justify-center'>
                <img src="https://www.medsaf.com/static/media/marketplaceImage.c7ac2e2289c88cef6afa.png" alt="doctor" className=''/>
            </div> 
            <div className='mx-2.5'>
                <img  src="/Assets/Images/download.png" alt="nurse" className='rounded-full' /> <br />
                <h1 className='font-extrabold text-blue-500 text-2xl '>Medsaf Marketplace</h1> <br />
                <p className='font-thin'>Medsaf has built a strategic partnerships with the most trusted  <br />manufacturer, to provide your facility with quality and affordable  <br />medication.</p> <br /> <br />
                <ul>
                    <li className='flex items-center gap-5'><FaCheckCircle style={{color: 'blue'}}/>Medication mix</li> <br />
                    <li className='flex items-center gap-5'> <FaCheckCircle style={{color: 'blue'}}/> Transparency</li> <br />
                    <li className='flex items-center gap-5' ><FaCheckCircle style={{color: 'blue'}}/>Effective delivery timeline</li> <br />
                    <li className='flex items-center gap-5'><FaCheckCircle style={{color: 'blue'}}/>Quality assurance / Control as a Service</li> <br />
                    <li className='flex items-center gap-5'><FaCheckCircle style={{color: 'blue'}}/>Competitive price</li> <br />
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Prod