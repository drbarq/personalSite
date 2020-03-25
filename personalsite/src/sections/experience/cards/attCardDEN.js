import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import styles from './card.module.css';

export default function attCard() {
	return (
		<Card className={styles.root}>
			<div className={styles.cardContent}>
				<Typography className={styles.title} color="textSecondary" gutterBottom>
					Premier Client Group: Enterprise
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					Responsible for growing and managing 13 customers headquartered in
					Orange County, CA totaling $15 million in annual revenue.
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					Utilized consultative selling skills to learn each customer’s business
					in order to gain understanding on how to positively impact their
					operations.
				</Typography>
				<Typography className={styles.title} color="textSecondary" gutterBottom>
					Educated in Solution Architecture
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					Educated and proficient in service offerings related to network and
					communication infrastructure; Managed Services, MPLS, MIS, Security,
					Hosting, Unified Communications, Wireless, Mobile Applications, and
					more.
				</Typography>
				<Typography className={styles.title} color="textSecondary" gutterBottom>
					Recognized as Top Performer
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					Chow’s Champion: VP Award earned for large strategic sale and
					implementation of a 250+ site network upgrade.
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					Recognized for strategic sales and exceeding customers’ expectations:
					Team MVP, Miller Team All-Star x4, Langley Team All-Star x3, Top A/R
					awards, and assorted monthly sales awards.
				</Typography>
			</div>
		</Card>
	);
}
