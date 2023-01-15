import React from 'react';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

const NavLogo = () => {
  return (
    <div className='nav__logo'>
      <AddBusinessIcon className='nav__logoIcon' fontSize='large'/>
      <h1 className='nav__logoHeading'>eDukan</h1>
    </div>
  );
}

export default NavLogo;