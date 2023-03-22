import React from 'react'
import imgdb1 from '../../assets/imgdb1.svg'
import imgdb2 from '../../assets/imgdb2.svg'
import imgdb3 from '../../assets/imgdb3.svg'
import imgdb4 from '../../assets/imgdb4.svg'
import './styles.scss'
function Dasboard() {
  const dataDasboard = [
    {
        icon: imgdb1,
        content: 'Students',
        cost: 243,
        color: '#F0F9FF'
    },
    {
        icon: imgdb2,
        content: 'Course',
        cost: 13,
        color: '#FEF6FB'
    },
    {
        icon: imgdb3,
        content: 'Payments',
        cost: 556000,
        color: '#FEFBEC'
    },
    {
        icon: imgdb4,
        content: 'Users',
        cost: 3,
        color: '#FEAF00'
    },
  ]
  return (
    <div className='dasboard'>
        <div className="dasboard__list">
            {dataDasboard.map((item, index) => (
                <div className={`dasboard__list__box-${index}`} key={index}>
                    <img src={item.icon} alt="" />
                    <p className='dasboard__list__text-content'>{item.content}</p>
                    <p className='dasboard__list__text-cost'>{item.cost}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Dasboard