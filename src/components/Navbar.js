import React from 'react'
import './Navbar.css';
import logo from '/home/kainaat/Desktop/kinatpagal/my-app/src/images/logo.png';

export default function Navbar() {
  return (
    <div className='Navbarclass'>
      <ul className="nav nav-underline" >
    <a className="navbar-brand" href="/">
      <img src={logo}  alt="BrandLogo" width="110" height="50" />
    </a>
    
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Stores</a>
  </li>
    <li>
    <div className="search">
    <input type="text" className="search__input" placeholder="Type your text" />
    <button className="search__button">
        <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
        </svg>
    </button>
</div>
    </li>
    <li className="nav-item3">
    <a className="nav-link" href='/'>Logout</a>
  </li>
</ul>
    </div>
  )
}
