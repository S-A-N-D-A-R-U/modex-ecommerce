import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({id, image, name, price}) => {

    const {currency} = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='text-gray-700 group cursor-pointer'>
        <div className='relative overflow-hidden rounded-xl'>
                <img src={image[0]} alt="" className='transition-transform duration-500 group-hover:scale-110' />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
        </div>
        <p className='pt-3 pb-1 text-sm font-semibold'>{name}</p>
        <p className='text-sm  text-accent font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem