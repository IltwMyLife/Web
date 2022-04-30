import './message.css'
import {format} from 'timeago.js'

const Message = ({message, own}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className={own ? 'message own' : 'message'}>
        <div className='message__top'>
            <img className='message__img' src={`${PF}/person/1.jpeg`} alt='' />
            <p className='message__text'>{message.text}</p>
        </div>
        <div className='message__bottom'>{format(message.createdAt)}</div>
    </div>
  )
}

export default Message