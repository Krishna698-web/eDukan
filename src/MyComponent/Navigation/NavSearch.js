import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const NavSearch = () =>{
  return (
    <div className='nav__search'>
      <input type="text" className='nav__searchInput' placeholder='Search'/>
      <SearchIcon className='nav__searchIcon' fontSize='large'/>
    </div>
  )
}

export default NavSearch;
