import React from 'react'
import dieuhuong from '../../assets/dieuhuong.svg'
import avatar from '../../assets/avatar.svg'
import pen from '../../assets/pen.svg'
import deleted from '../../assets/deleted.svg'
import AddStudentModel from './addStudentModel'
import './styles.scss'


function Students() {
    type dataRow = {
        id: number,
        name: string,
        email: string,
        phone: number,
        enrollPhone: number,
        date: string
    }
    const dataStudent = [
        {
            id: 1,
            avatar: avatar,
            name: 'Karthi',
            email: 'karthi@gmmail.com',
            phone: 7305477760,
            enrollPhone: 1234567305477760,
            date: '14-12-1999'
        },
        {
            id: 2,
            avatar: avatar,
            name: 'Karthi',
            email: 'karthi@gmmail.com',
            phone: 7305477760,
            enrollPhone: 1234567305477760,
            date: '14-12-1999'
        },
        {
            id: 3,
            avatar: avatar,
            name: 'Karthi',
            email: 'karthi@gmmail.com',
            phone: 7305477760,
            enrollPhone: 1234567305477760,
            date: '14-12-1999'
        }
    ]
    const [dataTable, setDataTable] = React.useState(dataStudent)
    const [openModel, setOpenModel] = React.useState(false)
    const [data, setData] = React.useState({})
    function deletedData(id: number) {
        const _dataStudent = [...dataTable]
        setDataTable(_dataStudent.filter(item => item.id != id))
    }
    const addRow = (datas: object) => {
        const _dataStudent = [...dataTable]
        const dataAddTable = _dataStudent.push(datas)
    }
    const editData = (id: number) => {
        const _dataStudent = [...dataTable]
        const rowData = _dataStudent.find(i => i.id == id)
        setData(rowData!)
        setOpenModel(true)
    }
    const openAddModel = () => {
        setOpenModel(true)
    }
    const closeAddModel = () => {
        setOpenModel(false)
    }
    return (
        <div className='students'>
            <div className='students__secsion1'>
                <p className='students__secsion1__text'>Students List</p>
                <div>
                    <img className='students__secsion1__img' src={dieuhuong} alt="" />
                    <button onClick={() => openAddModel()} className='students__secsion1__addbutton'>ADD NEW STUDENT</button>
                </div>
            </div>
            <div className='students__table'>
                <table className='students__table__list' style={{ width: '92%', marginLeft: '70px' }}>
                    <thead className='students__table__list__thead'>
                        <tr className='students__table__list__thead__tr'>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Enroll Number</th>
                            <th>Date of admission</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='students__table__list__tbody'>
                        {dataTable.map(item => (
                            <tr key={item.id} className='students__table__list__tbody__tr'>
                                <td><img style={{width: '65px', height: '55px', borderRadius: '10px'}} src={item.avatar} alt="" /></td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.enrollPhone}</td>
                                <td>{item.date}</td>
                                <td className='students__table__list__tbody__tr__edit'><div onClick={() => editData(item.id)}><img src={pen} alt="" /></div> <div className='students__table__list__tbody__tr__edit__del' onClick={() => deletedData(item.id)}><img src={deleted} alt="" /></div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {openModel && <AddStudentModel data={data} open={() => closeAddModel()} addRowDatas={() => addRow(dataRow)}/>}
        </div>

    )
}
export default Students