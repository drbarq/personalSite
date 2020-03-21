import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import styles from './card.module.css';

export default function sgCard() {
	return (
		<Card className={styles.root}>
			<div className={styles.cardContent}>
				<Typography className={styles.title} color="textSecondary" gutterBottom>
					Top performing sales executive
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					136% attainment in 2016 for net-new revenue, including the largest
					net-new sale to date. 124% attainment 2017 YTD across quota buckets.
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					Drove conversations at every level of organizations including C-Level.
					Adjusting messaging to create compelling discussions.
				</Typography>
				<Typography className={styles.title} color="textSecondary" gutterBottom>
					Developed New Sales Tool
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					The tool helped transform conversations around the value our solution
					could provide. Using algorithms, showing the ROI of our solution over
					competitors while providing resources and documentation for prospects.
					The tool inspiring a customer facing resource on the website.{' '}
					<a href="https://sendgrid.com/resource/roi-calculator/">
						SendGrid ROI Calculator
					</a>
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					Worked with marketing and executive leadership to develop financial
					modeling for potential high-value verticals. Data which helped drive
					financial planning towards our eventual IPO.
				</Typography>
				<Typography className={styles.title} color="textSecondary" gutterBottom>
					Worked Cross Functionally
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					Worked cross functionally to develop territory strategy plans
					correlating internal, external, and market data to identify sales
					prospects. Leveraged action plans to organize and pursue new revenue
					streams within the $13 million annual revenue install base.
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					Created, implemented, and executed new sales strategies to grow
					existing customers with new product offerings and partner solutions.
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					Launched the first incubator program within the sales organization.
					Worked cross-organizationally to help show potential future revenue
					streams from upfront customer support and investment.
				</Typography>
			</div>
		</Card>
	);
}
