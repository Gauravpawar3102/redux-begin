import React from 'react';
import { useState, useEffect } from 'react';
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

function Products() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
    console.log(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="wrapper flex flex-wrap gap-4 justify-center bg-stone-50">
      {products.map((product) => (
        <div
          className="card w-1/4 h-56 flex flex-col  items-center  justify-center gap-2  p-2  bg-white   rounded-lg"
          key={product.id}
        >
          <img
            className="w-30 h-20  object-cover"
            src={product.image}
            alt="img"
          />
          <div className="title font-medium ">{product.title}</div>
          <div className="price text-xl font-medium ">$ {product.price}</div>
          <button
            className="add-to-cart flex justify-items-start  w-fit px-2 bg-purple-500 rounded-md  text-white "
            onClick={() => handleAdd(product)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
