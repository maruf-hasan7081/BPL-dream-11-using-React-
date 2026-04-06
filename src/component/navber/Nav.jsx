import React from 'react';

const Nav = () => {
    return (
  <div className="navbar bg-base-100 shadow-sm w-[90%] mx-auto">
  <div className="navbar-start">
    <div>
        
    </div>
    <img src="/src/assets/logo.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    
  </div>
  <div className="navbar-end">
    <ul className="menu menu-horizontal px-1 mr-10 gap-10 ">
      <li><a>Home</a></li>
      <li><a >Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Scedules</a></li>
    </ul>
    <a className="btn"><span className="text-xl font-bold">0 Coin</span><img src="/src/assets/dollar_1.png" alt="Coin" /></a>
  </div>
</div>
    );
};

export default Nav;