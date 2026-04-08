import React from 'react';


const Nav = ({ coins }) => {
    return (
  <div className="navbar bg-base-100 shadow-sm w-[90%] mx-auto">

  <div className="navbar-start">
    <img src="/logo.png" className="w-16" />
  </div>

  <div className="navbar-center">
<ul className="menu menu-horizontal gap-10 text-lg hidden sm:flex">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
</ul>
  </div>

  <div className="navbar-end">
    <a className="btn flex items-center gap-2">
      <span className="text-xl font-bold">${coins} Coin</span>
      <img src="/dolar.png" className="w-5" />
    </a>
  </div>

</div>
    );
};

export default Nav;