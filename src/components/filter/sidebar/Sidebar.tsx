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

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<CheckBlock title="Categories" elements={categories} />
			<CheckBlock title="Platforms" elements={platforms} />
			<button className={styles["apply-btn"]}>Apply Filters</button>
		</div>
	);
};

export default Sidebar;
