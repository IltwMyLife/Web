import './register.css'
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Register = () => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity('Пароли не совпадают!')
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                await axios.post('/auth/register', user)
                navigate('/login')
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className='login'>
            <div className='login__wrapper'>
                <div className='login__left'>
                    <h3 className='login__logo'>ВТеме</h3>
                    <span className='login__desc'>
                        Общайтесь с друзьями и окружающим миром ВТеме
                    </span>
                </div>
                <div className='login__right'>
                    <form className='login__box' onSubmit={handleClick}>
                        <input type='username' placeholder='Имя' ref={username} className='login__input' />
                        <input autoComplete='email' type='email' placeholder='Email' ref={email} className='login__input' />
                        <input autoComplete='password' type='password' minLength='6' placeholder='Пароль' ref={password} className='login__input' />
                        <input autoComplete='password' type='password' minLength='6' placeholder='Пароль ещё раз' ref={passwordAgain} className='login__input' />
                        <button className='login__btn' type='submit'>Зарегестрироваться</button>
                        <button className='login__register-btn'>Войти</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register