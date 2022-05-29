/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div className='container flex p-5 justify-between items-center mx-auto'>
        <div className='text-2xl font-bold mx-auto sm:mx-0 mt-10 sm:mt-0'>
            <Link to='/'>
                F_Dwi.Han
            </Link>
        </div>
        <div className='space-x-7 hidden sm:block'>
            <a href="#" className='hover:text-purple-700'> About </a>
            <a href="#work" className='hover:text-purple-700'> My Work </a>
            <a href="#career" className='hover:text-purple-700'> Career </a>
            <a href="#contact" className='hover:text-purple-700'>
                <button>
                    Contact
                </button>
            </a>
        </div>
    </div>
  )
}

export default Navbar
