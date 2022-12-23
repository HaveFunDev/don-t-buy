import SelectElement from "./select-element/SelectElement";
import styles from "./CheckBlock.module.scss";

interface Props {
	title: string;
	elements: string[];
}

const CheckBlock = (props: Props) => {
	return (
		<div className={styles.container}>
			<p className={styles.title}>{props.title}</p>
			{props.elements.map((element) => (
				<SelectElement key={element} name={element} />
			))}
		</div>
	);
};

export default CheckBlock;
