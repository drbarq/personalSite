import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import styles from './projectSection.module.css';

import SectionHeader from '../components/sectionHeader/sectionHeader';
import LFCard from './cards/lfCard';
import ScooterCard from './cards/scooterCard';
import ScooterTwoCard from './cards/scooterTwoCard';
import MTSCard from './cards/mtsCard';

// hoc cards
import ProjectCard from './cards/hocCards/projectCard';

function TabPanel(props) {
	const { children, value, index, ...other } = props;
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
		<div className={styles.sectionContainer}>
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
						<LFCard />
					</TabPanel>
					<TabPanel value={value} index={1}>
						{/* <ScooterCard /> */}
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
					</TabPanel>
					<TabPanel value={value} index={2}>
						<ScooterTwoCard />
					</TabPanel>
					<TabPanel value={value} index={3}>
						<MTSCard />
					</TabPanel>
				</div>
			</div>
		</div>
	);
}
