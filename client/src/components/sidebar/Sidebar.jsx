import React from 'react'
import './sidebar.css'
import { MdRssFeed, MdGroup, MdEvent } from 'react-icons/md'
import { BsChatLeftTextFill, BsQuestionCircle } from 'react-icons/bs'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoBookmarkSharp, IoBagOutline } from 'react-icons/io5'
import { IoIosSchool } from 'react-icons/io'
import CloseFriend from '../closeFriend/CloseFriend'

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar__wrapper'>
				<ul className='sidebar__list'>
					<li className='sidebar__list-item'>
						<MdRssFeed className='sidebar__icon' />
						<span className='sidebar__list-item__text'>Новости</span>
					</li>
					<li className='sidebar__list-item'>
						<BsChatLeftTextFill className='sidebar__icon' />
						<span className='sidebar__list-item__text'>Сообщения</span>
					</li>
					<li className='sidebar__list-item'>
						<AiFillPlayCircle className='sidebar__icon' />
						<span className='sidebar__list-item__text'>Видео</span>
					</li>
					<li className='sidebar__list-item'>
						<MdGroup className='sidebar__icon' />
						<span className='sidebar__list-item__text'>Группы</span>
					</li>
					<li className='sidebar__list-item'>
						<IoBookmarkSharp className='sidebar__icon' />
						<span className='sidebar__list-item__text'>Закладки</span>
					</li>
					<li className='sidebar__list-item'>
						<BsQuestionCircle className='sidebar__icon' />
						<span className='sidebar__list-item__text'>Вопросы</span>
					</li>
					<li className='sidebar__list-item'>
						<IoBagOutline className='sidebar__icon' />
						<span className='sidebar__list-item__text'>Работа</span>
					</li>
					<li className='sidebar__list-item'>
						<MdEvent className='sidebar__icon' />
						<span className='sidebar__list-item__text'>События</span>
					</li>
					<li className='sidebar__list-item'>
						<IoIosSchool className='sidebar__icon' />
						<span className='sidebar__list-item__text'>Курсы</span>
					</li>
				</ul>
				<button className='sidebar__btn'>Ещё</button>
				<hr className='sidebar__hr' />
				<ul className='sidebar__friend-list'>
				</ul>
			</div>
		</div>
	)
}

export default Sidebar