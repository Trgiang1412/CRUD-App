import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ErrorMessage } from '../../assets/Mess/ErrorMessage'
import './styles.scss'
function Login() {
    const navigate = useNavigate()
    const schema = yup.object().shape({
        email: yup.string().required('Nhập tài khoản').matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Không đúng định dạng"
          ),
        password: yup.string().required('Nhập mật khẩu'),
    })
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    })
    const handleLogin = () => {
        debugger
        if (errors?.email || errors?.password) {
            return
          }
        const { email, password } = getValues()
        if(email && password){
            navigate('/menu')
        }
    }
    return (
        <div className='form_login'>
            <div className="form_login__input">
                <div className='form_login__input__text-header1'>
                    <div className='form_login__input__text-header1__box'></div>
                    <div>CRUD OPERATIONS</div>
                </div>
                <div className='form_login__input__group'>
                    <div className='form_login__input__text-header2'>Sign In</div>
                    <div className='form_login__input__text-header3'>Enter your credentials to access your account</div>
                </div>
                <form>
                    <label htmlFor="email" className='form_login__input__text-label'>Email </label><br />
                    <input
                        {...register('email')}
                        placeholder='Enter your email'
                        type="text"
                        id="email"
                        name='email' 
                    />
                    {/* <ErrorMessage message={errors?.username?.message} /> */}
                    <br />
                    <label htmlFor="password" className='form_login__input__text-label'>Password </label><br />
                    <input
                        {...register('password')}
                        type="password"
                        id="password"
                        placeholder='Enter your password'
                    /><br />
                    <button onClick={handleSubmit(handleLogin)}>SIGN IN</button>
                </form>
                <div className='form_login__input__text-header3'>Forgot your password?<a href="">Reset Password</a></div>
            </div>
        </div>
    )
}

export default Login