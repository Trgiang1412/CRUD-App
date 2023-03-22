import React from 'react'
import play from '../../assets/play.svg'
import chuong from '../../assets/chuong.svg'
import './styles.scss'
function Header() {
    return (
        <div className='header'>
            <img className='header__play' src={play} alt="" />
            <div className="header__search">
                <input type="text" placeholder='Search...' />
                <img src={chuong} alt="" />
            </div>
        </div>
    )
}

export default Header