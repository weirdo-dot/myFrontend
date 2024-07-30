import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navigation() {
  return (
    <header className='md:m-10 md:flex md:justify-between items-center rounded-full bg-white px-5 py-3'>
<Link to='/'>
<img src="/Assets/Images/Red_Simple_Medical_Health_Logo-removebg-preview (1).png " alt="logo" 
className='w-10 h-15 ' />
{/*desktop nav*/}
</Link>
<div className='hidden md:flex w-2/3 justify-between items-center'>
<nav>
    <ul className='flex justify-start space-x-10 '>
        <li>
            <NavLink to='/' className='font-bold hover:underline  transition-all' > Home</NavLink>
        </li>
        <li>
            <NavLink to='/about'className='font-bold hover:underline transition-all' >About</NavLink>
        </li>
        <li>
            <NavLink to='/service'className='font-bold hover:underline transition-all' >Service</NavLink>
        </li>
        <li>
            <NavLink to='/product'className='font-bold hover:underline transition-all' >Product</NavLink>
        </li>
    </ul>
</nav>

<div>
    <img src="https://picsum.photos/id/1/200" alt="user" className='w-10 rounded-full'/>
</div>
</div>
    </header>
  )
}

export default Navigation