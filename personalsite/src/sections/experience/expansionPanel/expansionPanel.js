import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import styles from './expansionPanel.module.css';

const ExpansionPanel = withStyles({
	root: {
		border: '1px solid rgba(0, 0, 0, .125)',
		boxShadow: 'none',
		'&:not(:last-child)': {
			borderBottom: 0
		},
		'&:before': {
			display: 'none'
		},
		'&$expanded': {
			margin: 'auto'
		}
	},
	expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
	root: {
		backgroundColor: 'rgba(0, 0, 0, .03)',
		borderBottom: '1px solid rgba(0, 0, 0, .125)',
		marginBottom: -1,
		minHeight: 56,
		'&$expanded': {
			minHeight: 56
		}
	},
	content: {
		justifyContent: 'space-between',
		alignItems: 'baseline',
		'&$expanded': {
			margin: '12px 0'
		}
	},
	expanded: {}
})(MuiExpansionPanelSummary);

export default function CustomExpansionPanel(props) {
	const [expanded, setExpanded] = React.useState('');

	const handleChange = panel => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div className={styles.expansionPanelContainer}>
			<ExpansionPanel
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
			>
				<ExpansionPanelSummary
					aria-controls="panel1d-content"
					id="panel1d-header"
				>
					<div className={styles.jobTitle}>{props.jobTitle}</div>
					<div className={styles.dateRange}>{props.dateRange}</div>
				</ExpansionPanelSummary>
				{props.jobCard}
			</ExpansionPanel>
		</div>
	);
}
