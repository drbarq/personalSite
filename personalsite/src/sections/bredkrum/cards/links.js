import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import LinkComponentGenerator from '../../../components/linkComponent/linkComponentGenerator';
import styles from './about.module.css';

export default function Links(props) {
	return (
		<Card className={styles.root}>
			<div className={styles.cardContent}>
				<Typography className={styles.title} color="textSecondary">
					links:
				</Typography>
				<div className={styles.linksContainer}>
					<LinkComponentGenerator links={props.links} />
				</div>
			</div>
		</Card>
	);
}
