import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import styles from './about.module.css';

export default function About() {
	function skillsBulletPoints(skills) {
		let skillsLength = skills.length - 1;
		let bulletList = [];

		skills.forEach((skill, index) => {
			const bullet = (
				<span key={index} className={styles.bullet}>
					•
				</span>
			);

			bulletList.push(' ', skill, ' ');
			if (index < skillsLength) {
				return bulletList.push(bullet);
			}
		});

		return bulletList;
	}
	return (
		<Card className={styles.root}>
			<div className={styles.cardContent}>
				<Typography className={styles.title} color="textSecondary" gutterBottom>
					skills:
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					{skillsBulletPoints([
						'React',
						'PWA',
						'Serverless',
						'firebase',
						'NoSQL',
						'Google Cloud Functions',
						'CSS',
						'QR Code',
						'Variable Data Printing',
						'Mobile Responsive Design',
						'Flex',
						'Twilio',
						'SMS'
					])}
				</Typography>
				<Typography className={styles.title} color="textSecondary" gutterBottom>
					about:
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					bredkrum solves lost and found by leveraging tools and resources which
					are available to everyone. The resulting solution ensuring the item is
					returned through an intuitive, barrier-free, and secure communication
					platform. Because the problem isn't that you lost it, but someone
					found it, and can't communicate with you. <br /> <br />
					As a solo founder, I focused on validating ideas through creative lean
					social experiments and building a stable and scalable foundation for
					the business to grow. I gained a new understanding of the "why" behind
					business decisions while continually improving my process. <br />
					<br /> Falling in a unique space as a software company with a
					necessary physical product, I enjoyed manifesting my ideas physically
					in my hands. These experiences taught me first hand how to make a
					vision real. Tackling business challenges unique to manufacturing,
					intellectual property, financial strategy, software development, and
					go to market strategy. bredkrum currently supports ~50 users tracking
					~150 individual items.
					<br /> <br />
					bredkrum uses dynamically generated unique QR codes as in-person
					authentication and triggers SMS messages from the finder to the owner.
					Leveraging Progressive Web App design and serverless architecture,
					bredkrum provides an app-less user experience with everything living
					within the devices' default browser. bredkrum is built using React to
					ensure predictable and reliable user experience for all devices
					anywhere in the world.
				</Typography>
			</div>
		</Card>
	);
}
