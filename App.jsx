import { useCatFact } from './src/hooks/useCatFact';
import { useCatImage } from './src/hooks/useCatImage';

export const App = () => {
	const { fact, refreshFact } = useCatFact();
	const { imageUrl } = useCatImage({ fact });

	// ? resetea el fact y la imagen
	const handleClickReset = () => {
		refreshFact();
	};

	return (
		<main style={{ textAlign: 'center' }}>
			<h1>Randoms Cats</h1>
			<section>
				{fact && <p>{fact}</p>}
				{imageUrl && <img src={imageUrl} alt="cat image"></img>}
			</section>
			<button onClick={handleClickReset}>reset</button>
		</main>
	);
};
