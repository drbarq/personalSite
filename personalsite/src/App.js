import React from 'react';
import styles from './App.module.css';

import Banner from './sections/banner/banner';
import About from './sections/about/about';
import Backstory from './sections/backstory/backstory';
import Map from './sections/map/map';
import ProjectsContainer from './sections/projects/projectsContainer';

import TabsRSWC from './sections/test/tabsRSWC';
import VerticalTabs from './sections/components/material/mUITabs';

// import aboutTEST from './Test/about/aboutTEST';

function App() {
	return (
		// <div className={styles.app}>
		// 	<div className={styles.appFlex}>
		// 		<Banner />
		// 		<About />
		// 		<Backstory />
		// 		<Map />
		// 		<ProjectsContainer />
		// 	</div>
		// </div>
		<VerticalTabs />

		// <Projects />
		// <TabsRSWC />
	);
}

export default App;
