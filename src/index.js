import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import './assets/scss/main.scss';
/* import './assets/scss/_reset.scss';
import './assets/scss/_theme.scss';
import './assets/scss/_utility.scss';
import './assets/scss/_variables.scss'; */

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);