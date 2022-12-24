import { getDocs, collection, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { store } from "../store/index";

export const useGetCollectionData = (
	collectionName: string,
	filter?: string[]
) => {
	const [data, setData] = useState<any>(null);
	const [isCanceled, setIsCanceled] = useState(false);
	const [error, setError] = useState<null | string>();

	useEffect(() => {
		const filterQuery = filter
			? query(
					collection(db, collectionName),
					where("platform", "in", [...filter])
			  )
			: collection(db, collectionName);
		const getGames = async () => {
			try {
				setError(null);
				const data = await getDocs(filterQuery);
				if (!isCanceled) {
					setData(data.docs.map((doc) => doc.data()));
				}
			} catch (error) {
				setError("Couldn't fetch data!");
			}
		};

		getGames();

		return () => setIsCanceled(true);
	}, [collectionName, isCanceled]);
	return { data, error };
};
