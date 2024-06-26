import { Global } from './Global';
import { Habilidades } from './pages/habilidades/Habilidades';
import { Header } from './pages/header/Header';
import { Home } from './pages/home/Home';
import { Portfolio } from './pages/portfolio/Portfolio';
import { Sobre } from './pages/sobre/Sobre';

export const App = () => {
	return (
		<>
			<Global />
			<Header />
			<Home />
			<Sobre />
			<Habilidades />
			<Portfolio />
		</>
	);
};

export default App;
