import React from 'react';
import styles from '../contact.module.css';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
