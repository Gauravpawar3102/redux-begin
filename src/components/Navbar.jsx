import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="navbar-container w-screen bg-indigo-600  h-14 p-4  flex items-center justify-around text-white text-2xl">
      <div className="navbar-left w-full  ">Redux-ToolKit-2022</div>
      <div className="navbar-right text-xl flex justify-around w-full">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <span className="cart-count">Cart items:{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
