import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductCard from '../Components/Home/ProductCard'


function Product() {
const [products, setProducts] = useState(null);
const [search, setSearch] = useState([]);

const fetchProducts = async ()=>{

try{const {data} = await axios.get('/products')
console.log(data)
setProducts(data)

}catch(err){
  console.log(err)
}
}
useEffect(()=>{
  fetchProducts()
}, [])
function searchPro(e){
  const item = e.target.value.toLowerCase()
 const  filteredPro = products.filter(pro=> pro.name.toLowerCase().includes(item))
 setSearch(filteredPro)
}
  return (
    <div>
      <h1>Products</h1>
      <div className='border rounded-full p-5'>
        <input type="text" onKeyDown={searchPro}/>
      </div>{
        search.length < 1? <div className='flex flex-wrap gap-4'>
{products && products.map((med, index) =>
<ProductCard {...med} key={index}/>)}
      </div>
      :<div className='flex flex-wrap gap-4'>
      {search && search.map((med, index) =>
      <ProductCard {...med} key={index}/>)}
            </div>
}
    </div>
  );
}

export default Product