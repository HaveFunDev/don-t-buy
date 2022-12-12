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
	showSidebar: boolean;
	applyFilters: () => void;
}

const Sidebar = (props: Props) => {
	return (
		<aside
			className={styles.sidebar}
			style={{ display: props.showSidebar ? "block" : "none" }}>
			<CheckBlock title="Categories" elements={categories} />
			<CheckBlock title="Platforms" elements={platforms} />
			<button onClick={props.applyFilters} className={styles["apply-btn"]}>
				Apply Filters
			</button>
		</aside>
	);
};

export default Sidebar;
