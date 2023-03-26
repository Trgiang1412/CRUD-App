import React from 'react'
import home from '../../assets/home.svg'
import couser from '../../assets/couser.svg'
import payment from '../../assets/payment.svg'
import report from '../../assets/report.svg'
import setting from '../../assets/setting.svg'
import student from '../../assets/student.svg'
import avatar from '../../assets/avatar.svg'
import logout from '../../assets/logout.svg'
import './styles.scss'
function Menu() {
    
    return (
        <div className='menu'>
            <div className='menu__text-header'>
                <div className='menu__text-header__box'></div>
                <div className='menu__text-header__text'>CRUD OPERATIONS</div>
            </div>
            <div className='menu__image-content'>
                <img className='menu__image-content__image' src={avatar} />
                <div className='menu__image-content__text'>Karthi Madesh</div>
                <div className='menu__image-content__text-admin'>Admin</div>
            </div>

            <ul>
                <li><a href="/home"><img src={home} /> <p>Home</p></a></li>
                <li><a href="/couser"><img src={couser} /> <p>Course</p> </a></li>
                <li><a href="/students"><img src={student} /> <p>Students</p> </a></li>
                <li><a href="/payment"><img src={payment} /> <p>Payment</p> </a></li>
                <li><a href="/report"><img src={report} /> <p>Report</p> </a></li>
                <li><a href="/setting"><img src={setting} /> <p>Settings</p> </a></li>
            </ul>
            <div className='menu__content-logout'>
                <p>Logout</p>
                <img className='menu__content-logout__icon' src={logout} />
            </div>
        </div>
    )
}

export default Menu