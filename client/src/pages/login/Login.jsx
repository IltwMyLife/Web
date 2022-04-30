import './login.css'
import { useContext, useRef } from 'react'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import { BiLoaderAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Login = () => {
    const email = useRef()
    const password = useRef()
    const { isFetching, dispatch } = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault()
        loginCall({ email: email.current.value, password: password.current.value }, dispatch)
    }

    return (
        <div className='login'>
            <div className='login__wrapper'>
                <div className='login__left'>
                    <h3 className='login__logo'>ВТеме</h3>
                    <span className='login__desc'>
                        Общайтесь с друзьями и окружающим миром
                    </span>
                </div>
                <div className='login__right'>
                    <form className='login__box' onSubmit={handleClick}>
                        <input autoComplete='email' placeholder='Email' type='email' required className='login__input' ref={email} />
                        <input autoComplete='current-password' placeholder='Пароль' type='password' required minLength='6' className='login__input' ref={password} />
                        <button type='submit' disabled={isFetching} className='login__btn'>{isFetching ? (<BiLoaderAlt color='white' size='20px' />) : ('Войти')}</button>
                        <span className='login__forgot'>Забыли Пароль?</span>
                        <Link to='/register' style={{ textDecoration: 'none' }}> <button className='login__register-btn'>{isFetching ? (<BiLoaderAlt color='white' size='20px' />) : ('Зарегестрироваться')}</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login