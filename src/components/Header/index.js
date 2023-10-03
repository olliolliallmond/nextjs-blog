// rafce -> React Arrow Function Component Export
// delete 'import React from 'react'
// Same Header and Footer components are used across ALL pages -> Goes in layout.js

import Logo from './Logo';

const Header = () => {
  return (
    <header className='w-full p-4 px-10 flex items-center justify-between'>
      <Logo />
    </header>
  )
}

export default Header;