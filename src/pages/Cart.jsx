import React from 'react';
import { useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div className="cart-container">
      <div className="cart">cart</div>
      {products.map((product) => (
        <div className="card w-1/4 h-56 flex flex-col  items-center  justify-center gap-2  p-2  bg-white   rounded-lg">
          <img
            className="w-30 h-20  object-cover"
            src={product.image}
            alt="img"
          />
          <div className="title font-medium ">{product.title}</div>
          <div className="price text-xl font-medium ">$ {product.price}</div>

          <button
            className="add-to-cart flex justify-items-start  w-fit px-2 bg-purple-500 rounded-md  text-white "
            onClick={() => handleRemove(product.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
