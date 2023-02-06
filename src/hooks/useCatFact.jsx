import { useEffect, useState } from 'react';
import { getCatFact } from '../services/getCatFact';

export const useCatFact = () => {
	const [fact, setFact] = useState('');

	// ? trae un fact random
	const refreshFact = () => {
		getCatFact().then(setFact);
	};

	useEffect(refreshFact, []);

	return { fact, refreshFact };
};
