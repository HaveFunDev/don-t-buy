import { useEffect, useRef} from "react";
import CheckBlock from "./check-block/CheckBlock";
import styles from "./Sidebar.module.scss";

const categories = [
	"Indy",
	"Adventure",
	"MMO",
	"Casual game",
	"Strategy",
	"Simulator",
	"Sports Game",
	"Action Game",
];

const platforms = [
	"PC",
	"PlayStation 5",
	"PlayStation 4",
	"Xbox Series",
	"Nintendo Switch",
];

interface Props {
	toggleSidebar: boolean;
}

const Sidebar = (props: Props) => {
	const sidebar = useRef<HTMLElement | null>(null);

	const applyFilters = () => {
		sidebar.current?.classList.add(styles.hide);
	};

	useEffect(() => {
		sidebar.current?.classList.toggle(styles.hide);
	}, [props.toggleSidebar]);

	return (
		<aside className={styles.sidebar} ref={sidebar}>
			<CheckBlock title="Categories" elements={categories} />
			<CheckBlock title="Platforms" elements={platforms} />
			<button className={styles["apply-btn"]} onClick={applyFilters}>
				Apply Filters
			</button>
		</aside>
	);
};

export default Sidebar;
