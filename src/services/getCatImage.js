export const getCatImage = (words) => {
	return fetch(`https://cataas.com/cat/says/${words}?json=true`)
		.then((res) => res.json())
		.then(({ url }) => url)
		.catch((error) => console.log(error));
};
