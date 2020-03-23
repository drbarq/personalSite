import React from 'react';
import styles from '../contact.module.css';
import LinkComponent from './linkComponent';

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
					icon={faEnvelope}
				/>
				<LinkComponent
					link="https://www.linkedin.com/in/joetustin"
					title="Linkedin"
					icon={faLinkedin}
				/>
				<LinkComponent
					link="https://www.github.com/drbarq"
					title="Github"
					icon={faGithub}
				/>
				<LinkComponent
					link="https://medium.com/@j.tustin"
					title="Medium"
					icon={faMediumM}
				/>
				<LinkComponent
					link="https://www.instagram.com/drbarq"
					title="Instagram"
					icon={faInstagram}
				/>
				<LinkComponent
					link="https://www.qr646.com"
					title="Travel Blog"
					icon={faMotorcycle}
				/>
				<LinkComponent
					link="https://pdfhost.io/v/K1bT~r0bn_Joe_Tustin_Software_Engineerpdf.pdf"
					title="Resume"
					icon={faFilePdf}
				/>
			</div>
		</div>
	);
}
