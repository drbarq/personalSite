import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './bredkrum.module.css';
import SectionHeader from '../../components/sectionHeader/sectionHeader';

import bredkrumLogo from '../../images/bredkrum.svg';
import bredkrumDieCut from '../../images/bredkrumDieCut.png';

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

export default function Bredkrum() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={styles.sectionContainer}>
			<SectionHeader
				titleOne={'after graduating, I started a business'}
				image={bredkrumDieCut}
				// image={bredkrumLogo}
			/>
			<div className={styles.root}>
				<Tabs
					className={styles.tabs}
					orientation="vertical"
					variant="scrollable"
					value={value}
					onChange={handleChange}
				>
					<Tab label="About" />
					<Tab label="Pitch Video" />
					<Tab label="Links" />
				</Tabs>

				<div className={styles.tabPanels}>
					<TabPanel value={value} index={0}>
						<div>About</div>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<iframe
							src="https://player.vimeo.com/video/369643267"
							width="100%"
							height="100%"
							frameborder="0"
							// allow="autoplay; fullscreen"
							// allowfullscreen
						></iframe>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<div>Link more info</div>
					</TabPanel>
				</div>
			</div>
		</div>
	);
}
