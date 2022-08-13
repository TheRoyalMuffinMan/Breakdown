import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
		<ChakraProvider 
			theme={extendTheme({
				fonts: {
					heading: 'Kumbh Sans',
					subHeading: 'Kumbh Sans',
					body: 'Kumbh Sans',
				}
			})}
		>
			<HashRouter basename={process.env.PUBLIC_URL}>
				<App />
			</HashRouter>
		</ChakraProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

