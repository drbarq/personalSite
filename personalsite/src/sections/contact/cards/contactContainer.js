import React from 'react';
import styles from '../contact.module.css';
import LinkComponentGenerator from '../../../components/linkComponent/linkComponentGenerator';

export default function ContactContainer({ links }) {
	return (
		<div className={styles.contactContainer}>
			<div className={styles.contactTitleContainer}>
				<div className={styles.title}>
					<span role="img" aria-label="email">
						📨
					</span>{' '}
					Contact Me{' '}
					<span role="img" aria-label="phone">
						📞
					</span>{' '}
				</div>
			</div>
			<div className={styles.contactLinksContainer}>
				<LinkComponentGenerator links={links} />
			</div>
		</div>
	);
}
