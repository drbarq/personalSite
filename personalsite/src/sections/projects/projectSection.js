import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import styles from './projectSection.module.css';

import SectionHeader from '../components/sectionHeader/sectionHeader';
import LFCard from '../components/cards/lfCard';
import ScooterCard from '../components/cards/scooterCard';
import ScooterTwoCard from '../components/cards/scooterTwoCard';
import MTSCard from '../components/cards/mtsCard';

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
						<ScooterCard />
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
