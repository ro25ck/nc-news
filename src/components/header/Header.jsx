import React from 'react'
import "./header.css"

function Header () {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className="header__logo">
          <a href='/'>NC News</a>
        </div>
    </div>
    </header>
  )
}

export default Header