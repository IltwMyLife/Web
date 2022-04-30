import { useContext, useRef, useState } from 'react'
import './share.css'
import { MdPermMedia, MdTag } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'
import { FaSmile } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

const Share = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useContext(AuthContext)
    const desc = useRef()
    const [file, setFile] = useState(null)

    const submitHandler = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }

        if (file) {
            const data = new FormData()
            const fileName = Date.now() + file.name
            data.append('name', fileName)
            data.append('file', file)
            newPost.img = fileName
            try {
                await axios.post('/upload', data)
            } catch (err) {
                console.log(err);
            }
        }

        try {
            await axios.post('/posts', newPost)
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='share'>
            <div className='share__wrapper'>
                <div htmlFor='file' className='share__top'>
                    <img className='share__profile-img' src={user.profileImg ? PF + 'person/' + user.profileImg : PF + 'person/noAvatar.png'} alt='' />
                    <input placeholder={user.username + ', что ты думаешь?'} ref={desc} className='share__input' />
                </div>
                <hr className='share__hr' />
                {file && (
                    <div className="share__img-container">
                        <img className='share__img' src={URL.createObjectURL(file)} alt="" />
                        <ImCancelCircle className='share__cancel-img' onClick={() => setFile(null)} />
                    </div>
                )}
                <form className='share__bottom' onSubmit={submitHandler}>
                    <div className='share__options'>
                        <label className='share__option'>
                            <MdPermMedia style={{ color: 'tomato' }} className='share__icon' />
                            <span className='share__option-text'>Фото или Видео</span>
                            <input style={{ display: "none" }} type='file' id='file' accept='.png, .jpg, .jpeg' onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                        <div className='share__option'>
                            <MdTag style={{ color: 'blue' }} className='share__icon' />
                            <span className='share__option-text'>Хештег</span>
                        </div>
                        <div className='share__option'>
                            <IoLocationSharp style={{ color: 'green' }} className='share__icon' />
                            <span className='share__option-text'>Геолокация</span>
                        </div>
                        <div className='share__option'>
                            <FaSmile style={{ color: 'goldenrod' }} className='share__icon' />
                            <span className='share__option-text'>Эмоции</span>
                        </div>
                    </div>
                    <button className='share_btn' type='submit'>Поделиться</button>
                </form>
            </div>
        </div>
    )
}

export default Share