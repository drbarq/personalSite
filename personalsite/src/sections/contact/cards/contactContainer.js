import React from 'react';
import styles from '../contact.module.css';
import LinkComponent from './linkComponent';

import { faEnvelopeSquare, faFilePdf } from '@fortawesome/free-solid-svg-icons';

import {
	faLinkedin,
	faGithubSquare
} from '@fortawesome/fontawesome-free-brands';

export default function ContactContainer() {
	return (
		<div className={styles.contactContainer}>
			<div className={styles.contactTitleContainer}>
				<div className={styles.title}>📨 Contact Me 📞</div>
			</div>
			<div className={styles.contactLinksContainer}>
				<LinkComponent
					link="mailto:J.Tustin@gmail.com?subject=Job Offer: $500K Salary"
					title="Email Me"
					icon={faEnvelopeSquare}
				/>
				<LinkComponent
					link="https://www.linkedin.com/in/joetustin/"
					title="Linkedin"
					icon={faLinkedin}
				/>
				<LinkComponent
					link="https://www.github.com/drbarq"
					title="Github"
					icon={faGithubSquare}
				/>
				<LinkComponent
					link="https://pdfhost.io/v/2GzYb7scD_Joe_TustinSoftware_Engineerpdf.pdf"
					title="Resume"
					icon={faFilePdf}
				/>
			</div>
		</div>
	);
}
