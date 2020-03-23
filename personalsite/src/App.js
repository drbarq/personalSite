import React from 'react';
import styles from './App.module.css';

import Banner from './sections/banner/banner';
import About from './sections/about/about';
import Backstory from './sections/backstory/backstory';
import Map from './sections/map/map';
import Projects from './sections/projects/projectSection';
import Bredkrum from './sections/bredkrum/bredkrum';
import Experience from './sections/experience/experience';
import Education from './sections/education/education';
import Contact from './sections/contact/contact';

function App() {
	return (
		<div className={styles.app}>
			<div className={styles.appFlex}>
				<Banner />
				<About />
				<Map />
				<Projects />
				<Bredkrum />
				<Education />
				<Experience />
				<Contact />
			</div>
		</div>
	);
}

export default App;
