const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact';

export const getCatFact = () => {
	return fetch(CAT_ENDPOINT_FACT)
		.then((data) => data.json())
		.then(({ fact }) => fact)
		.catch((error) => console.log(error));
};
