import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import styles from './card.module.css';

export default function attCard() {
	return (
		<Card className={styles.root}>
			<div className={styles.cardContent}>
				<Typography className={styles.title} color="textSecondary" gutterBottom>
					Leadership Development
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					5 month competitive leadership development program created by AT&T to
					learn selling strategies, the telecommunications industry, and B2B
					commerce.
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					Learned consultative selling coupled with in-depth technology
					training.
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					Ranked top of the class each month based on results and other
					extracurricular activities.
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					Executive Leadership Circle: June 2011.
				</Typography>
			</div>
		</Card>
	);
}
