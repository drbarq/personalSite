import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import SectionHeader from '../../../sections/components/sectionHeader/sectionHeader';
import styles from './mUITabs.module.css';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
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
		// backgroundColor: theme.palette.background.paper,
		display: 'flex',
		// height: 224,
		alignSelf: 'flex-start',
		padding: '1.5rem 1.5rem 3rem 1.5rem',
		width: '100%'

		// flexDirection: 'column'
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`
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
				titleOne={'then I went to school'}
				titleTwo={'Flatiron School Projects'}
			/>
			<div className={classes.root}>
				<Tabs
					orientation="vertical"
					// variant="scrollable"
					value={value}
					onChange={handleChange}
					aria-label="Vertical tabs example"
					className={classes.tabs}
				>
					<Tab label="Lost-Found" {...a11yProps(0)} />
					<Tab label="Scooter Sleuth" {...a11yProps(1)} />
					<Tab label="Scooter Sleuth v2" {...a11yProps(2)} />
					<Tab label="Millennial Translation Service" {...a11yProps(3)} />
				</Tabs>
				<TabPanel value={value} index={0}>
					Item One
				</TabPanel>
				<TabPanel value={value} index={1}>
					Item Two
				</TabPanel>
				<TabPanel value={value} index={2}>
					Item Three
				</TabPanel>
				<TabPanel value={value} index={3}>
					Item Four
				</TabPanel>
			</div>
		</div>
	);
}
