import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#152e4e'
		},
		secondary: {
			main: '#27aee8'
		}
	},
	typography: {
		fontFamily: 'Avenir Next'
	}
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById('root')
);

serviceWorker.unregister();
