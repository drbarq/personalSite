import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import styles from './projectSection.module.css';
import lfLogo from '../../images/lflogo.svg';

import SectionHeader from '../../components/sectionHeader/sectionHeader';

// hoc cards
import ProjectCard from './cards/projectCard';
import ProjectCardImg from './cards/projectCardImg';

import {
	faLinkedin,
	faGithub,
	faInstagram,
	faMediumM
} from '@fortawesome/fontawesome-free-brands';

function TabPanel(props) {
	const { children, value, index } = props;
	return (
		<div
			className={styles.tabPanel}
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
		>
			{value === index && <div className={styles.tabPanel}> {children} </div>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

export default function ProjectSection() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div id="projects" className={styles.sectionContainer}>
			<SectionHeader
				titleOne={'then I went to Flatiron School'}
				titleTwo={'Software Projects'}
			/>
			<div className={styles.root}>
				<Tabs
					className={styles.tabs}
					orientation="vertical"
					variant="scrollable"
					value={value}
					onChange={handleChange}
				>
					<Tab label="Lost-Found" />
					<Tab label="Scooter Sleuth" />
					<Tab label="Scooter Sleuth v2" />
					<Tab label="Millennial Translation Service" />
				</Tabs>

				<div className={styles.tabPanels}>
					<TabPanel value={value} index={0}>
						<ProjectCardImg
							logo={lfLogo}
							aboutText="Lost and Found is an application that connects people through their lost items. Users of Lost and Found are able to register their items and generate custom QR Codes which they can then place on their items, similar to a name tag."
							skills={[
								'React',
								'JavaScript',
								'Ruby on Rails',
								'firebase',
								'SQL',
								'FLEX',
								'QR Codes',
								'Twilio',
								'SMS',
								'Heroku'
							]}
							links={{
								vimeo: {
									link: 'https://vimeo.com/351468041',
									title: 'Video Demo'
								},
								gitHubF: {
									link: 'https://github.com/drbarq/lost-and-found-backEnd-api',
									title: 'BackEnd Repo'
								},
								gitHubB: {
									link: 'https://github.com/drbarq/lost-and-found-frontEnd',
									title: 'FrontEnd Repo'
								}
							}}
						/>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<ProjectCard
							mainTitle="🛴🕵🏻‍♂️ Scooter Sleuth 🕵🏻‍♀️ 🛴"
							aboutText="We put a man on the moon but still need to switch between apps to find the closest electric scooter. Not anymore!! Scooter Sleuth aggregates scooter share apps into one map rendered based on the users location and available scooters."
							skills={['Ruby on Rails', 'JavaScript', 'Bootstrap', 'Heroku']}
							links={{
								youTube: {
									link: 'https://www.youtube.com/watch?v=PwzsgzlYaZY',
									title: 'Video Demo'
								},
								gitHub: {
									link: 'https://github.com/drbarq/scootersleuth-mod-2',
									title: 'Repo'
								}
							}}
						/>
						{/* <ProjectCard
							mainTitle="🛴🕵🏻‍♂️ Scooter Sleuth 🕵🏻‍♀️ 🛴"
							aboutText="We put a man on the moon but still need to switch between apps to find the closest electric scooter. Not anymore!! Scooter Sleuth aggregates scooter share apps into one map rendered based on the users location and available scooters."
							skills={['Ruby on Rails', 'JavaScript', 'Bootstrap', 'Heroku']}
							links={{
								youTube: {
									link: 'https://www.youtube.com/watch?v=PwzsgzlYaZY',
									title: 'Video Demo'
								},
								gitHub: {
									link: 'https://github.com/drbarq/scootersleuth-mod-2',
									title: 'Repo'
								}
							}}
						/> */}
					</TabPanel>
					<TabPanel value={value} index={2}>
						<ProjectCard
							mainTitle="🛴🕵🏻‍♂️ Scooter Sleuth v2 🕵🏻‍♀️ 🛴"
							aboutText="Scooter Sleuth v2 builds upon the initial version adding additional data sources and public accessibility."
							skills={[
								'JavaScript',
								'Heroku',
								'firebase',
								'SQL',
								'CSS',
								'Flex',
								'REST API'
							]}
							links={{
								web: {
									link: 'https://scootersleuth.firebaseapp.com/',
									title: 'Firebase Demo'
								},
								gitHub: {
									link: 'https://github.com/drbarq/Scooter-Sleuth-v2',
									title: 'Repo'
								}
							}}
						/>
					</TabPanel>
					<TabPanel value={value} index={3}>
						<ProjectCard
							mainTitle="MILLENNIAL TRANSLATION SERVICE"
							aboutText="The Millennial Translation Service is a Command Line Interface (CLI) application that translates and defines millennial slang so that you can keep up with the young’uns."
							skills={[
								'Ruby on Rails',
								'Paired Programing',
								'Heroku',
								'SQL',
								'REST API'
							]}
							links={{
								youTube: {
									link: 'https://www.youtube.com/watch?v=xtSkpgMU4Ww',
									title: 'Video Demo'
								},
								gitHub: {
									link:
										'https://github.com/drbarq/MILLENNIAL-TRANSLATION-SERVICE',
									title: 'Repo'
								}
							}}
						/>
					</TabPanel>
				</div>
			</div>
		</div>
	);
}
