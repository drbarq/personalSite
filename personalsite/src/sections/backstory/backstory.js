import React, { useState } from 'react';

import { Collapse, Button, CardBody, Card } from 'reactstrap';
import styles from './backstory.module.css';
import SectionHeader from '../components/sectionHeader./sectionHeader';

// const backstory = (
// 	<div className={styles.backstoryContainer}>
// 		<div className={styles.titleLine}>
// 			Once upon a time: Previous Experience
// 		</div>
// 		<div className={styles.educationContainer}>
// 			<div className={styles.educationTitle}>Education</div>
// 			<div className={styles.lineOne}>
// 				<div className={styles.educationSubline}>
// 					University of Pennsylvania
// 				</div>
// 				<div className={styles.educationDate}>Sept 2006 - Dec 2010</div>
// 			</div>
// 			<div className={styles.lineTwo}>
// 				<div className={styles.degree}>B.S. Finance</div>
// 				{/* <button>Click here for more info</button> */}
// 			</div>
// 		</div>

// 		<div className={styles.experienceContainer}>
// 			<div className={styles.experienceTitle}>Experience</div>
// 			<div className={styles.lineOne}>
// 				<div className={styles.experienceSubline}>AT&T</div>
// 				<div className={styles.educationDate}>April 2011 - Feb 2016</div>
// 			</div>
// 			<div className={styles.lineTwo}>
// 				<div className={styles.degree}>
// 					Premier Client Group - Enterprise: Account Manager II
// 				</div>
// 				{/* <button>Click here for more info</button> */}
// 			</div>

// 			<div className={styles.lineOne}>
// 				<div className={styles.experienceSubline}>SendGrid</div>
// 				<div className={styles.educationDate}>Feb 2016 - Oct 2017</div>
// 			</div>
// 			<div className={styles.lineTwo}>
// 				<div className={styles.degree}>Senior Account Executive</div>
// 				{/* <button>Click here for more info</button> */}
// 			</div>
// 		</div>
// 	</div>
// );

const Example = props => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
				Toggle
			</Button>
			<Collapse isOpen={isOpen}>
				<Card>
					<CardBody>
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
						terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
						labore wes anderson cred nesciunt sapiente ea proident.
					</CardBody>
				</Card>
			</Collapse>
		</div>
	);
};

const experienceContainer = (
	<div className={styles.experienceContainer}>
		<div className={styles.experienceTitle}>Experience</div>
		<div className={styles.lineOne}>
			<div className={styles.experienceSubline}>AT&T</div>
			<div className={styles.educationDate}>April 2011 - Feb 2016</div>
		</div>
		<div className={styles.lineTwo}>
			<div className={styles.degree}>
				Premier Client Group - Enterprise: Account Manager II
			</div>
			{/* <button>Click here for more info</button> */}
		</div>

		<div className={styles.lineOne}>
			<div className={styles.experienceSubline}>SendGrid</div>
			<div className={styles.educationDate}>Feb 2016 - Oct 2017</div>
		</div>
		<div className={styles.lineTwo}>
			<div className={styles.degree}>Senior Account Executive</div>
			{/* <button>Click here for more info</button> */}
		</div>
	</div>
);

const experienceContainerComp = (
	<div className={styles.experienceContainer}>
		<div className={styles.experienceTitle}>Experience</div>
		<div className={styles.lineOne}>
			<div className={styles.experienceSubline}>AT&T</div>
			<div className={styles.educationDate}>April 2011 - Feb 2016</div>
		</div>
		<div className={styles.lineTwo}>
			<div className={styles.degree}>
				Premier Client Group - Enterprise: Account Manager II
			</div>
			{/* <button>Click here for more info</button> */}
		</div>

		<div className={styles.lineOne}>
			<div className={styles.experienceSubline}>SendGrid</div>
			<div className={styles.educationDate}>Feb 2016 - Oct 2017</div>
		</div>
		<div className={styles.lineTwo}>
			<div className={styles.degree}>Senior Account Executive</div>
			{/* <button>Click here for more info</button> */}
		</div>
	</div>
);

const eductionContainer = (
	<div className={styles.educationContainer}>
		<div className={styles.educationTitle}>Education</div>
		<div className={styles.lineOne}>
			<div className={styles.educationSubline}>University of Pennsylvania</div>
			<div className={styles.educationDate}>Sept 2006 - Dec 2010</div>
		</div>
		<div className={styles.lineTwo}>
			<div className={styles.degree}>B.S. Finance</div>
			{/* <button>Click here for more info</button> */}
		</div>
	</div>
);

const backstory = () => {
	return (
		<div className={styles.backstoryContainer}>
			<SectionHeader titleOne={`Once upon a time:`} />
			{eductionContainer}
			{experienceContainer}
		</div>
	);
};

export default backstory;
