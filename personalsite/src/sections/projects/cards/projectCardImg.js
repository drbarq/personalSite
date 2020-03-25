import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import LinkComponentGenerator from '../../../components/linkComponent/linkComponentGenerator';
import BulletPoints from '../../../components/bulletPoints/bulletPoints';
import styles from './projectCard.module.css';

export default function ProjectCard(props) {
	return (
		<Card className={styles.root}>
			<div className={styles.cardContent}>
				<div className={styles.titleContainer}>
					<img src={props.logo} alt="project logo" />
				</div>
				<Typography className={styles.title} color="textSecondary" gutterBottom>
					about:
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					{props.aboutText}
				</Typography>
				<Typography className={styles.title} color="textSecondary" gutterBottom>
					skills:
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					<BulletPoints skills={props.skills} />
				</Typography>
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
