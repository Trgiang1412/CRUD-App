import React from 'react'
import Menu from '../Menu'
import Dasboard from '../Dasboard'
import Header from '../Header'
import './styles.scss'

function Main() {
    return (
        <div className='main'>
            <div className='main__menu'>
                <Menu />
            </div>
            <div className='main__dasboard'>
                <div>
                    <Header />
                </div>
                <div>
                    <Dasboard />
                </div>
            </div>
        </div>
    )
}

export default Main