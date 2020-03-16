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

	return (
		<Typography
			className={styles.tabPanel}
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box className={styles.tabPanels} p={3}>
					{children}
				</Box>
			)}
			{/* {value === index && { children }} */}
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`
	};
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		// alignSelf: 'flex-start',
		padding: '1.5rem 1.5rem 1.5rem 1.5rem',
		width: '100%',
		overflow: 'auto'
		// [theme.breakpoints.up('md')]: {
		// 	backgroundColor: 'red'
		// }
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`
		// height: '100%',
		// justifyContent: 'space-evenly'
	}
}));

export default function VerticalTabs() {
	const classes = useStyles();
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
			{/* <div className={classes.root}> */}
			<div className={styles.root}>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={value}
					onChange={handleChange}
					// aria-label="Vertical tabs example"
					className={classes.tabs}
				>
					<Tab label="Lost-Found" {...a11yProps(0)} />
					<Tab label="Scooter Sleuth" {...a11yProps(1)} />
					<Tab label="Scooter Sleuth v2" {...a11yProps(2)} />
					<Tab label="Millennial Translation Service" {...a11yProps(3)} />
				</Tabs>
				<div className={styles.tabPanels}>
					{/* <div className={styles.tabPanel}> */}

					{/* </div> */}
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
