import React from 'react';
import styles from './App.module.css';

import Banner from './sections/banner/banner';
import About from './sections/about/about';
import Backstory from './sections/backstory/backstory';
import Map from './sections/map/map';
import ProjectsSection from './sections/projects/projectSection';

function App() {
	return (
		<div className={styles.app}>
			<div className={styles.appFlex}>
				<Banner />
				<About />
				<Backstory />
				<Map />
				<ProjectsSection />
			</div>
		</div>
	);
}

export default App;
