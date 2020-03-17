import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import TabPanel from '@material-ui/core/TabPanel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import SimpleCard from './card';

import SectionHeader from '../../../sections/components/sectionHeader/sectionHeader';
import styles from './mUITabs.module.css';

import LFCard from '../cards/lfCard';
import ScooterCard from '../cards/scooterCard';
import ScooterTwoCard from '../cards/scooterTwoCard';
import MTSCard from '../cards/mtsCard';

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	console.log('value', value, index);
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

export default function VerticalTabs() {
	const [value, setValue] = React.useState(0);

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
