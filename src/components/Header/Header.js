import React from 'react'
import YourLocation from '../YourLocation/YourLocation'
import SearchLocation from '../SearchLocation'
import ButtonSpace from '../ButtonSpace/ButtonSpace'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <YourLocation/>
        <SearchLocation/>
        <ButtonSpace/>
    </div>
  )
}

export default Header