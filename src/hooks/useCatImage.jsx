import { useEffect, useState } from 'react';
import { getCatImage } from '../services/getCatImage';

const PREFIX_CAT_URL = 'https://cataas.com';

export const useCatImage = ({ fact }) => {
	const [imageUrl, setImageUrl] = useState('');

	// ? trae la imagen random de gatos con las tres pirmeras palabras del fact
	useEffect(() => {
		if (!fact) return;
		const threeFirstWords = fact.split(' ', 3).join(' ');
		getCatImage(threeFirstWords).then(setImageUrl);
	}, [fact]);

	const catImageUrl = imageUrl && PREFIX_CAT_URL + imageUrl;

	return { imageUrl: catImageUrl };
};
