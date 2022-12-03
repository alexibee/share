import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

const App = () => {
	return (
		<>
			<Navigation />
			<Routes>
				<Route
					exact
					path='/'
					element={<Home />}
				/>
				{/* <Route
					path='/dashboard'
					element={<Home />}
				/> */}
			</Routes>
		</>
	);
};

export default App;
