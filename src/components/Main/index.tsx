import React from 'react'
import Menu from '../Menu'
import Dasboard from '../Dasboard'
import Header from '../Header'
import Students from '../Students'
import './styles.scss'
interface page {
    tab: number
}
function Main(props: page) {
    let pages
    switch (props.tab) {
        case 1:
            pages = <Dasboard />
            break;
        case 2:
            pages = <Students />
            break;
        default:
            break;
    }
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
                    {pages}
                </div>
            </div>
        </div>
    )
}

export default Main