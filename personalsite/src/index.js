import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { red, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#152e4e'
		},

		secondary: {
			main: '#27aee8'
			// light: amber[200],
			// dark: amber[700]
		}
		// type: 'dark'
	},
	typography: {
		fontSize: 'calc(14px + 0.5vw)',
		fontFamily: 'Avenir Next'
	}
});

// console.log(theme.palette.divider);
ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
