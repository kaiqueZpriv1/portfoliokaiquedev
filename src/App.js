import { Global } from './Global';
import { Header } from './pages/header/Header';
import { Home } from './pages/home/Home';

export const App = () => {
	return (
		<>
			<Global />
			<Header/>
			<Home/>
		</>
	);
};

export default App;
