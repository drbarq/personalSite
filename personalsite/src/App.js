import React from 'react';
import styles from './App.module.css';

import Banner from './sections/banner/banner';
import About from './sections/about/about';
import Backstory from './sections/backstory/backstory';
import Map from './sections/map/map';
import ProjectsSection from './sections/projects/projectSection';
import Bredkrum from './sections/bredkrum/bredkrum';
import Experience from './sections/experience/experience';
import Education from './sections/education/education';

function App() {
	return (
		<div className={styles.app}>
			<div className={styles.appFlex}>
				<Banner />
				<About />
				<Education />
				<Backstory />
				<Experience />
				<Map />
				<ProjectsSection />
				<Bredkrum />
			</div>
		</div>
	);
}

export default App;
