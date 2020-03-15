import React from 'react';
import styles from './App.module.css';

import Banner from './sections/banner/banner';
import About from './sections/about/about';
import Backstory from './sections/backstory/backstory';
import Map from './sections/map/map';
import Projects from './sections/projects/projects';

// import aboutTEST from './Test/about/aboutTEST';

function App() {
	return (
		<div className={styles.app}>
			<div className={styles.appFlex}>
				<Banner />
				<About />
				<Backstory />
				<Map />

				{/* {aboutTEST} */}

				{/* <div>1</div> */}
				{/* <div>3</div> */}
				{/* <div>4</div> */}
			</div>
			<Projects />
		</div>
	);
}

export default App;
