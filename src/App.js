import './App.css'
import RootLayout from './Layouts/RootLayout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Product from './pages/Product';
import Signup from './pages/Signup';
import Login from './pages/Login'

function App() {
  return (
    <div className='bg-slate-100 h-dvh'>
    <Routes>
<Route path='/' element={<RootLayout/>}> 
<Route index element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/service' element={<Service/>}/>
<Route path='/product' element={<Product/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/login' element={<Login/>}/>
</Route>
    </Routes>
    </div>
  );
}

export default App;
