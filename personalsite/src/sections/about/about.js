import React from 'react';
import styles from './about.module.css';

import SectionHeader from '../../components/sectionHeader/sectionHeader';

function about() {
	return (
		<div id="about" className={styles.sectionContainer}>
			<SectionHeader
				titleOne={`What a long strange trip it's been`}
				titleTwo={'About Me'}
			/>
			<div className={styles.textContainer}>
				<p>
					Hi! My name is Joe and I am a software developer based in Denver,CO.
				</p>
				<p>
					I am passionate about technology and love the creative opportunites
					software development provides.
				</p>
				<p>
					I believe that by understanding the 'why' before the 'how,' we can
					create genuinely impactful and transformational solutions.
				</p>
				<p>
					Scroll down to explore my story of how I became a software engineer.
				</p>
			</div>
		</div>
	);
}

export default about;
