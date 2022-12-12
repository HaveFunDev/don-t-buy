import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faCartShopping,faHeart,faGamepad,faFaceSmile} from '@fortawesome/free-solid-svg-icons'

import Wrapper from '../../wrapper/Wrapper'

import styles from './Navbar.module.scss'

const homeIcon = <FontAwesomeIcon icon={faHouse} className={styles['nav__btn-icon']} />
const haveFunIcon = <FontAwesomeIcon icon={faGamepad} className={styles['nav__btn-icon']} />
const cartIcon = <FontAwesomeIcon icon={faCartShopping} className={styles['nav__btn-icon']} />
const favouriteIcon = <FontAwesomeIcon icon={faHeart} className={styles['nav__btn-icon']} />
const profileIcon = <FontAwesomeIcon icon={faFaceSmile} className={styles['nav__btn-icon']} />
// have to change icons style to light

const categories = [
     'Streams','Game Store','News','Other'
]


const Navbar = () => {
return  <Wrapper>
<nav className={styles.nav}>
    <div className={styles['nav__categories']}>
    <button className={styles['nav__btn']}>{homeIcon}</button>
   <ul className={styles['nav__categories-list']}>
    { /* This categories have to be dynamic  */ }
    {categories.map(item=><li className={styles['nav__categories-item']}>{item}</li>)}
   </ul>
   </div>
   <div className={styles['nav__box']}>
    <button className={styles['nav__btn']}>{haveFunIcon}</button>
    <button className={styles['nav__btn']}>{cartIcon}</button>
    <button className={styles['nav__btn']}>{favouriteIcon}</button>
    <button className={styles['nav__btn']}>{profileIcon}</button>
   </div>

</nav>
   </Wrapper>
}


export default Navbar