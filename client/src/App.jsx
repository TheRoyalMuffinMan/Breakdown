import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { chakra } from '@chakra-ui/system';
import Nav from './component/Header/Nav';
import Footer from './component/Footer/Footer';
import HomePage from './component/Home/HomePage';
import AboutPage from './component/About/AboutPage';
import RatePage from './component/Rate/RatePage';
import { normalGrey } from './globals/themes';

function App() {
	return (
		<chakra.div bg={normalGrey} minHeight={"100vh"}>
			<Nav />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/rate" element={<RatePage />} />
				</Routes>
			<Footer />
		</chakra.div>
	);
}

export default App;

