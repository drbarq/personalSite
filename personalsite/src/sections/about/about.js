import React from 'react';
import styles from './about.module.css';

import SectionHeader from '../../components/sectionHeader/sectionHeader';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
					My path to software developer is unique and invite you to explore my
					story
				</p>
				{/* <div>{{ faChevronDown }}</div> */}
			</div>
		</div>
	);
}

export default about;

{
	/* <p>
Below you will find the timeline of events leading me to this point.
</p>
{/* <p style={{ paddingBottom: '1rem' }}> */
}
{
	/* <p>
Highlights include My Sales Career, 1.5 year motorcycle trip around
the world, and starting a business
</p>  */
}
