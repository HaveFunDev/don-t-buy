import styles from './Wrapper.module.scss'

interface Props {
	children: React.ReactNode
}

const Wrapper = (props:Props) =>{
return <div className={styles.wrapper}>{props.children}</div>
}

export default Wrapper