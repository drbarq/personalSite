import React from 'react';

import styles from './contact.module.css';
import SectionHeader from '../../components/sectionHeader/sectionHeader';
import StatusCard from './cards/statusCard';
import ContactContainer from './cards/contactContainer';

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

export default function Contact() {
	return (
		<div id="contact" className={styles.sectionContainer}>
			<SectionHeader titleOne="1-800-Joe-Tustin" titleTwo="Contact" />
			<div className={styles.contentContainer}>
				<StatusCard
					status="Current Status: Open to Opportunities!"
					postDate="3.20.2020"
					statement="Thank you for checking out my site! I am currently seeking
					opportunities in Denver, CO for Front-End / FullStack roles. Please
					reach out if you think I might be a fit for your team!"
				/>
				<ContactContainer
					links={[
						{
							link: 'mailto:J.Tustin@gmail.com?subject=Job Offer: $500K Salary',
							title: 'Email Me',
							icon: faEnvelope
						},
						{
							link: 'https://www.linkedin.com/in/joetustin',
							title: 'Linkedin',
							icon: faLinkedin
						},
						{
							link: 'https://www.github.com/drbarq',
							title: 'Github',
							icon: faGithub
						},
						{
							link: 'https://medium.com/@j.tustin',
							title: 'Medium',
							icon: faMediumM
						},
						{
							link: 'https://www.instagram.com/drbarq',
							title: 'Instagram',
							icon: faInstagram
						},
						{
							link: 'https://www.qr646.com',
							title: 'Travel Blog',
							icon: faMotorcycle
						},
						{
							link:
								'https://pdfhost.io/v/K1bT~r0bn_Joe_Tustin_Software_Engineerpdf.pdf',
							title: 'Resume',
							icon: faFilePdf
						}
					]}
				/>
			</div>
		</div>
	);
}
