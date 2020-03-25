import React from 'react';
import LinkComponent from './linkComponent';

export default function linkComponentGenerator({ links }) {
	let linksList = [];
	links.forEach((link, index) => {
		linksList.push(
			<LinkComponent
				key={index}
				link={link.link}
				title={link.title}
				icon={link.icon}
			/>
		);
	});

	return linksList;
}
