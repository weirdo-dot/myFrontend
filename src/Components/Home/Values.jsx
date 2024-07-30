import React from 'react'

function Values() {
  return (
    <section className='bg-blue-200 max-w-full px-20 py-20 mt-12'>
      <div>
        <div className='flex flex-col md:flex-row-reverse lg:gap-8'>
        <div>
            <h1 className='font-extrabold text-2xl'>Our Company Values</h1> <br />
            <p className='font-extralight'>There’s a fragmented supply chain and distribution network as well <br /> as lack of finances and pharmaceutical information structure, and <br /> all of these leads to medication changing hand many times <br />between the manufacturers and patients.</p>
            <p className='font-extralight'>Consequences of these over complicated supply chain, leads to  <br />raise in costs, decrease in quality and reduction in efficiency. <br />
            At <span className='font-semibold'> Medsaf</span> we belive, <span className='font-semibold'>Quality medication is a fundamental human right.</span> We are fighting to bridge that problem across Africa</p>
        </div>
        <div>
            <img src="/Assets/Images/val1.png" alt="val" />
        </div>
        
        </div>
        <div className='mt-16 '>
        <h1 className='text-2xl text-center text-blue-500 font-extrabold'>
        Hear what our customers have to say
        </h1>
        <video src=""></video>
        </div> 
        <div className=''> 
          <h1 className='font-extrabold text-2xl text-blue-500 text-center'>We are on the News</h1>
          <div className='grid md:grid-cols-6 sm:grid-cols-3 grid-cols-1 gap-8 md:gap-12 items-start'>
            <div className='max-w-sm rounded overflow-hidden shadow-lg px-3 py-3  bg-white'>
              <img src="/Assets/Images/news1Image.51dd649688f60ecc47a5.png" alt="drug"  className='w-full h-30   object-cover'/>
              <h1 className='font-bold text-xl'>Medsaf building future pharmac-eutical procurement for africa</h1> <br />
              <p>What is the value of a pill? Life. Medsaf, a medication marketplace for hospitals and pharmacies, makes sure...</p>
            </div>
            <div className='max-w-sm rounded overflow-hidden shadow-lg px-3 py-3  bg-white'>
              <img src="/Assets/Images/news2Image.1c7eab8bad927b67922e.png" alt="drug"  className='w-full h-30   object-cover'/>
              <h1 className='font-bold text-xl'>Medsaf building future pharmac- <br />eutical procurement for africa</h1> <br />
              <p>Nigerian startup Medsaf, which connects pharmaceutical suppliers with hospitals and pharmacies, is raising a seed...</p>
            </div>
            <div className='max-w-sm rounded overflow-hidden shadow-lg px-3 py-3  bg-white'>
              <img src="/Assets/Images/news3Image.ae1f6804c220c55e60d7.png" alt="drug"  className='w-full h-30   object-cover'/>
              <h1 className='font-bold text-xl'>Push out fake meds for Africa's sake - Medsaf launches in Nigeria</h1> <br />
              <p>Med-tech entrepreneur and Medsaf founder Vivian Nwakah spoke with AllAfrica's Sethi Ncube about how she's building...</p>
            </div>
            <div className='max-w-sm rounded overflow-hidden shadow-lg px-3 py-3  bg-white'>
              <img src="/Assets/Images/news2Image.1c7eab8bad927b67922e.png" alt="drug"  className='w-full h-30   object-cover'/>
              <h1 className='font-bold text-xl'>Medsaf CEO on malaria death and building million-dollar...</h1> <br />
              <p>When Vivian Nwakah told her family and friends that she was relocating to Nigeria from the United States they tried...</p>
            </div>
            <div className='max-w-sm rounded overflow-hidden shadow-lg px-3 py-3 bg-white'>
              <img src="/Assets/Images/news5Image.3f908ae6979c3b60b673.png" alt="drug"  className='w-full h-30   object-cover'/>
              <h1 className='font-bold text-xl'>Vivian Nwakah, CEO of Medsaf</h1> <br />
              <p>Vivian Nwakah is the CEO of Medsaf. Medsaf is a one-stop shop for healthcare stake-holders to purchase, manage...</p>
            </div>
            <div className='max-w-sm rounded overflow-hidden shadow-lg px-3 py-3  bg-white'>
              <img src="/Assets/Images/news2Image.1c7eab8bad927b67922e.png" alt="drug"  className='w-full h-30   object-cover'/>
              <h1 className='font-bold text-xl'>Medsaf is the Healthtech Startup Tackling Counterfeit Drugs in Ni..</h1> <br />
              <p>Fake drugs is a grave global problem and in many developing countries like Nigeria, it is life threatening...</p>
            </div>
          </div>
        </div>
        <div>
<h1 className='font-bold text-2xl text-blue-500 text-center mt-10'>Clients testimonials</h1>
<div>
  <div>

  </div>
</div>
        </div>
        </div>
    </section>
  )
}

export default Values