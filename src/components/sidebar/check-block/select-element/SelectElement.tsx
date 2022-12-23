import { useRef, useState } from "react";
import styles from "./SelectElement.module.scss";
import { addFilter, removeFilter, store } from "../../../../store/index";

interface Props {
	name: string;
}

const SelectElement = (props: Props) => {
	const [isChecked, setIsChecked] = useState(false);
	const checkbox = useRef<HTMLInputElement | null>(null);
	const changeCategory = () => {
		if (isChecked) {
			store.dispatch(removeFilter(props.name));
		} else {
			store.dispatch(addFilter(props.name));
		}
		setIsChecked((prev) => !prev);
	};

	return (
		<div className={styles.container}>
			<label>
				<input
					className={styles.checkbox}
					ref={checkbox}
					onChange={changeCategory}
					type="checkbox"
				/>
				<span className={styles.name}>{props.name}</span>
			</label>
		</div>
	);
};

export default SelectElement;
