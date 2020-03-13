import React from 'react';
import styles from './App.module.css';

import banner from './sections/banner/banner';
import about from './sections/about/about';
import backstory from './sections/backstory/backstory';

// import aboutTEST from './Test/about/aboutTEST';

function App() {
	return (
		<div class={styles.app}>
			{banner}
			{about}
			{/* {aboutTEST} */}
			{backstory}
			{/* <div>1</div> */}
			{/* <div>3</div> */}
			{/* <div>4</div> */}
		</div>
	);
}

export default App;
