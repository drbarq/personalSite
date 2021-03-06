import React, { useState } from 'react';
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Card,
	Button,
	CardTitle,
	CardText,
	Row,
	Col
} from 'reactstrap';
import classnames from 'classnames';
import styles from './projects.module.css';

const Projects = props => {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<div className={styles.mediaDisplayContainer}>
			<div className={styles.navBarTabs}>
				{/* <Nav tabs className={styles.navBarTabs}> */}
				<Nav>
					<NavItem>
						<NavLink
							// hidden={false}
							className={classnames({ active: activeTab === '1' })}
							onClick={() => {
								toggle('1');
							}}
						>
							Lost-Found
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: activeTab === '2' })}
							onClick={() => {
								toggle('2');
							}}
						>
							Scooter Sleuth
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: activeTab === '3' })}
							onClick={() => {
								toggle('3');
							}}
						>
							Scooter Sleuth v2
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: activeTab === '4' })}
							onClick={() => {
								toggle('4');
							}}
						>
							Millennial Translation Service
						</NavLink>
					</NavItem>
				</Nav>
			</div>

			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">
					<h1>YOYOYOY</h1>
					<Row>
						<Col sm="12">
							<h4>Tab 1 Contents</h4>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="2">
					<Row>
						<Col sm="6">
							<Card body>
								<CardTitle>Special Title Treatment</CardTitle>
								<CardText>
									With supporting text below as a natural lead-in to additional
									content.
								</CardText>
								<Button>Go somewhere</Button>
							</Card>
						</Col>
						<Col sm="6">
							<Card body>
								<CardTitle>Special Title Treatment</CardTitle>
								<CardText>
									With supporting text below as a natural lead-in to additional
									content.
								</CardText>
								<Button>Go somewhere</Button>
							</Card>
						</Col>
					</Row>
				</TabPane>
			</TabContent>
		</div>
	);
};

export default Projects;
