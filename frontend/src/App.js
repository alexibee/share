import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

const App = () => {
	return (
		<>
			{false && <Navigation />}
			<Routes>
				<Route
					exact
					path='/'
					element={<Home />}
				/>
			</Routes>
		</>
	);
};

export default App;
