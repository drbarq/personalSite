import React from 'react';
import styles from './breadcrumb.module.css';

export default function Breadcrumbs() {
	return (
		<div className={styles.breadcrumbContainer}>
			<a href="#about">About Me</a>
			<span className={styles.bullet}>•</span>
			<a href="#projects">Projects</a>
			<span className={styles.bullet}>•</span>
			<a href="#contact">Contact</a>
		</div>
	);
}
