import React from 'react'
import { useForm } from "react-hook-form";
type dataAdd = {
    open: () => void,
    data: object,
    // addRowData: () => void,
}
function addStudentModel(props: dataAdd) {
    const { register, handleSubmit } = useForm();
    const onSubmit = () => {
        console.log('abc');
    }
    return (

        <div className="modal">
            <div className="modal__content">
                <div onClick={() => props.open()} className="modal__content__icon">
                    <span className="close">&times;</span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name">Tên </label>
                        <input
                            {...register('name')}
                            placeholder='Nhập tên'
                            type="text"
                            id="name"
                            name='name'
                        />
                        <label htmlFor="email">Email </label>
                        <input
                            {...register('email')}
                            placeholder='Nhập email'
                            type="email"
                            id="email"
                            name='email'
                        />
                    </div>
                    <div style={{marginTop: '2rem'}}>
                        <label htmlFor="phone">Phone </label>
                        <input
                        {...register('phone')}
                            placeholder='Nhập sđt'
                            type="number"
                            id="phone"
                            name='phone'
                        />
                        <label htmlFor="enrollPhone">Enroll Phone </label>
                        <input
                       {...register('enrollPhone')}
                            placeholder='Nhập enroll phone'
                            type="number"
                            id="enrollPhone"
                            name='enrollPhone'
                        />
                        <label htmlFor="date">Date </label>
                        <input
                       {...register('date')}
                            placeholder='Nhập date'
                            type="number"
                            id="date"
                            name='date'
                        />
                    </div>
                    <button type='submit'>Lưu</button>
                </form>
            </div>
        </div>
    )
}

export default addStudentModel