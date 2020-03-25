import React from 'react';
import styles from './linkComponent.module.css';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faEnvelope,
	faFilePdf,
	faMotorcycle
} from '@fortawesome/free-solid-svg-icons';

import {
	faLinkedin,
	faGithub,
	faInstagram,
	faMediumM
} from '@fortawesome/fontawesome-free-brands';

export default function LinkComponent({ link, title, icon }) {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<div className={styles.linkLabel}>
				<FontAwesomeIcon icon={icon} className={styles.icons} />
				<Typography className={styles.link} variant="body2" component="p">
					{title}
				</Typography>
			</div>
		</a>
	);
}
