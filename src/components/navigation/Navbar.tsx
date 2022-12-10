import styles from './Navbar.module.scss'

import CartIcon from './CartIcon/CartIcon'
import FavouriteIcon from './FavouriteIcon/FavouriteIcon'
import ProfileIcon from './ProfileIcon/ProfileIcon'

const categories = [
    'Home', 'Streams','Game Store','News'
]

const Navbar = () => {
return <nav>
    <div>
   <ul>
    {categories.map(item=><li>{item}</li>)}
   </ul>
   </div>
   <div>
    <CartIcon/>
    <FavouriteIcon/>
    <ProfileIcon/>
   </div>

</nav>
}


export default Navbar