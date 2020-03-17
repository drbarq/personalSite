import React from 'react';
import styles from './about.module.css';

import SectionHeader from '../../components/sectionHeader/sectionHeader';

function about() {
	return (
		<div className={styles.aboutContainer}>
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
				<p>My path to SWE is unique and invite you to explore my story</p>
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
