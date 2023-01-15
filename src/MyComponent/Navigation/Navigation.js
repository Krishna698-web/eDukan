import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Navigation() {
  return (
    <div className='nav__navigation'>
        <div className='nav__navigationSignin'>
            <span className='nav__child-1'>Hello Guest</span>
            <span className='nav__child-2'>Sign In</span>
        </div>
        <div className='nav__navigationShop'>
            <span className='nav__child-1'>Your</span>
            <span className='nav__child-2'>Shop</span>
        </div>
        <div className='nav__navigationCart'>
            <ShoppingBasketIcon className='nav__basketIcon' fontSize='large'/>
            <span className='nav__count'>0</span>
        </div>
    </div>
  )
}

export default Navigation;