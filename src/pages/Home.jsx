import React from 'react';
import Prod from '../Components/Home/Prod'
import Assure from '../Components/Home/Assure'
import Hero from '../Components/Home/Hero'
import Patient from '../Components/Home/Patient';
import Speedy from '../Components/Home/Speedy'
import Lab from '../Components/Lab'
import Values from '../Components/Home/Values';
function Home() {
  return ( 
    <div  className='  grid place-items-center w-full  '>
      
        <Hero/>
      <br />
    <div>
    <Prod/>
    </div> <br />
    <div>
    <Assure/>
    </div> <br />
    <div>
      <Patient/>
    </div> <br />
    <div>
      <Speedy/>
    </div>
    <Lab/>
    
      <Values/>
    
    </div>
    
  );
}

export default Home;
