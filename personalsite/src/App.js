import React from 'react';
import styles from './App.module.css';

import banner from './sections/banner/banner';
import about from './sections/about/about';
import backstory from './sections/backstory/backstory';
import map from './sections/map/map';

// import aboutTEST from './Test/about/aboutTEST';

function App() {
	return (
		<div className={styles.app}>
			<div className={styles.appFlex}>
				{banner}
				{about()}
				{backstory}
				{map()}

				{/* {aboutTEST} */}

				{/* <div>1</div> */}
				{/* <div>3</div> */}
				{/* <div>4</div> */}
			</div>
		</div>
	);
}

export default App;
