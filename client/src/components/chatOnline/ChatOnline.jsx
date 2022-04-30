import axios from 'axios'
import { useEffect, useState } from 'react'
import './chatOnline.css'

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	const [friends, setFriends] = useState([])
	const [onlineFriends, setOnlineFriends] = useState([])

	useEffect(() => {
		const getFriends = async () => {
			try {
				const res = await axios.get('/users/friends/' + currentId)
				setFriends(res.data)
			} catch (err) {
				console.log(err);
			}
		}
		getFriends()
	}, [currentId])

	useEffect(() => {
		setOnlineFriends(friends.filter(f => onlineUsers.includes(f._id)))
	}, [friends, onlineUsers])

	const handleClick = async (user) => {
		try {
			const res = await axios.get(`/conversations/find/${currentId}/${user._id}`)
			setCurrentChat(res.data)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className='chat__online'>
			{onlineFriends.map((o) => (
				<div key={o._id} className='chat__online-friend' onClick={()=>handleClick(o)}>
					<div className='chat__online-img__container'>
						<img className='chat__online-img' src={o?.profilePicture ? PF + o.profilePicture : PF + 'person/noAvatar.png'} alt='' />
						<div className='chat__online-badge'></div>
					</div>
					<span className='chat__online-name'>{o?.username}</span>
				</div>
			))}

		</div>
	)
}

export default ChatOnline