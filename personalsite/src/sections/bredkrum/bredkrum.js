import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './bredkrum.module.css';
import SectionHeader from '../../components/sectionHeader/sectionHeader';

import bredkrumTrace from '../../images/bredkrumTrace.png';

import About from './cards/about';
import Links from './cards/links';

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
				image={bredkrumTrace}
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
						<About />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<iframe
							src="https://player.vimeo.com/video/369643267"
							width="100%"
							height="100%"
							frameborder="0"
							allowfullscreen
						></iframe>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<Links
							links={{
								vimeo: {
									link: 'https://vimeo.com/369643267',
									title: 'Pitch Video'
								},
								gitHub: {
									link: 'https://github.com/drbarq/bredkrum',
									title: 'GitHub Repo'
								},
								medium: {
									link:
										'https://medium.com/@j.tustin/https-medium-com-j-tustin-lost-found-the-next-adventure-81b2e1df55c2',
									title: 'Blog Posts'
								}
							}}
						/>
					</TabPanel>
				</div>
			</div>
		</div>
	);
}
