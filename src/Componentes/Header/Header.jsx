import React from 'react'
import './index.scss'
const Header = () => {
  return <>
    <div className='header'>
        <header>
            <ul className='header__menu'>
                <li>Organização</li>
                <li className='header__white'>Tarefas</li>
            </ul>
        </header>
    </div>    
  </>;
}

export default Header