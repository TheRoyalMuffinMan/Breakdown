import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { chakra } from '@chakra-ui/system';
import Nav from './component/Header/Nav';
import Footer from './component/Footer/Footer';
import HomePage from './component/Home/HomePage';
import { normalGrey } from './globals/themes';

function App() {
	return (
		<chakra.div bg={normalGrey} minHeight={"100vh"}>
			<Nav />
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			<Footer />
		</chakra.div>
	);
}

export default App;

