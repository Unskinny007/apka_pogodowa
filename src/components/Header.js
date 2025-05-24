import React from 'react'
import YourLocation from './YourLocation'
import '../App.css';
import SearchLocation from './SearchLocation';

const Header = () => {
  return (
    <div className="header">
        <YourLocation/>
        <SearchLocation/>
        <div className="btn-space">
          {" "}
          <button className="btn1">Pogoda</button>
          <button className="btn2">Geomapa</button>
        </div>
      </div>
  )
}

export default Header