import React from 'react'
import pic from './images/img.png';

export default function Header() {
  return (
    <div  className='header'>
        <div className='header__text'>
            <h1 className='header__heading'>
                apni Electronic <span>Dukan</span>
            </h1>
            <p>The place where you find all you <span>Gadgets</span></p>
        </div>
        <img src={pic} alt="anything" className="header__image"/>
    </div>
  )
}
