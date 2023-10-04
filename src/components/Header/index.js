// rafce -> React Arrow Function Component Export
// delete 'import React from 'react'
// Same Header and Footer components are used across ALL pages -> Goes in layout.js

import Link from 'next/link';
import Logo from './Logo';
import { DribbleIcon, GithubIcon, LinkedinIcon, TwitterIcon, SunIcon, MoonIcon } from '../Icons';

const Header = () => {
  return (
    <header className='w-full p-4 px-10 flex items-center justify-between'>
      <Logo />
      <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center 
                      fixed top-6 right-1/2 translate-x-1/2 
                      bg-light/80 backdrop-blur-sm z-50'>
        <Link href="/" className='mr-2'>Home</Link>
        <Link href="/about" className='mx-2'>About</Link>
        <Link href="/contact" className='mr-2'>Contact</Link>
        <button>
          <SunIcon />
        </button>
      </nav>
      {/* External social media links */}
      <div>
        <a href="http://example.com" target="_blank" rel="noopener noreferrer" 
           className='inline-block w-6 h-6 mr-4'>
            <LinkedinIcon className='hover:scale-125 transition-all ease duration-175' /></a>
        <a href="http://example.com" target="_blank" rel="noopener noreferrer" 
           className='inline-block w-6 h-6 mr-4'>
            <TwitterIcon className='hover:scale-125 transition-all ease duration-175' /></a>
        <a href="http://example.com" target="_blank" rel="noopener noreferrer" 
           className='inline-block w-6 h-6 mr-4'>
            <GithubIcon className='hover:scale-125 transition-all ease duration-175' /></a>
        <a href="http://example.com" target="_blank" rel="noopener noreferrer" 
           className='inline-block w-6 h-6 mr-4'>
            <DribbleIcon className='hover:scale-125 transition-all ease duration-175' /></a>
      </div>
    </header>
  )
}

export default Header;

/**
 * For the social media icons (and other SVGs), we want to store and pull them in from a single source.
 * In `components/`, create an Icons.js file.
 * Go to file for more info on what's done with SVGs.
 */