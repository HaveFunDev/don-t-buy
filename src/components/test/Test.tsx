import { useState, useEffect } from 'react'
import { db } from './../../firebase'
import { collection, getDocs } from 'firebase/firestore'

const Test = () => {
	const [games, setGames] = useState([])

	const gamesCollectionRef = collection(db, 'games')

	useEffect(() => {
		const getGames = async () => {
			const data = await getDocs(gamesCollectionRef)
			setGames(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
		}

		getGames()
	}, [])

	return (
		<div>
			<p>test</p>
			<p>test</p>
			<p>test</p>
			<p>test</p>
			<p>test</p>
			{games.map(game => {
				return (
					<div>
						<h1>title:{game.name}</h1>
                        <p>platform:{game.platform}</p>
                        <p>price:{game.price}</p>
                        {game.gallery && <img src={game.gallery[0]} alt="" />}
					</div>
				)
			})}
		</div>
	)
}

export default Test
