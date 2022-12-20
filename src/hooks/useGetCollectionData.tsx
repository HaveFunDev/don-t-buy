import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export const useGetCollectionData = (collectionName: string) => {
	const [data, setData] = useState<any>(null);
	const [isCanceled, setIsCanceled] = useState(false);
	const [error, setError] = useState<null | string>();

	useEffect(() => {
		const getGames = async () => {
			try {
				setError(null);
				const data = await getDocs(collection(db, collectionName));
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
