import { useState } from "react";
import './App.css';
import { Dropdown } from "./components/dropdown/Dropdown";

function App() {

	const [choosedPokemon, setChoosedPokemon] = useState(null);

	return (
		<>

			{choosedPokemon && (
				<>
					Você escolheu: {choosedPokemon}
				</>
			)}
			<br />
			<Dropdown
				title="Selecione o pokemon"
				monsters={['rock', 'butterfly', 'roselie']}
				onSelectPokemon={setChoosedPokemon}
			/>
		</>
	);
}

export default App;