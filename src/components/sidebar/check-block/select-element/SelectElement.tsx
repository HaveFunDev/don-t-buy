import styles from "./SelectElement.module.scss";

interface Props {
	name: string;
}

const SelectElement = (props: Props) => {
	return (
		<div className={styles.container}>
			<label>
				<input className={styles.checkbox} type="checkbox" />
				<span className={styles.name}>{props.name}</span>
			</label>
		</div>
	);
};

export default SelectElement;
