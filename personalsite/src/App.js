import React from 'react';
import './App.css';

import banner from './sections/banner/banner';
import about from './sections/about/about';
import backstory from './sections/backstory/backstory';

import aboutTEST from './Test/about/aboutTEST';

function App() {
	return (
		<div class="container">
			{banner}
			{/* {about} */}
			{aboutTEST}
			{backstory}
			<div>1</div>
			<div>3</div>
			<div>4</div>
		</div>
	);
}
// function App() {
// 	return (
// 		<div className="container">
// 			{/* <section>
// 				<h1>Section One</h1>
// 				<img src={joeBanner} />
// 			</section> */}
// 			{/* <section>{console.log(banner)}</section> */}
// 			{banner}

// 			<section>
// 				<h1>Section Two</h1>
// 			</section>
// 			<section>
// 				<h1>Section Three</h1>
// 			</section>
// 			<section>
// 				<h1>Section Four</h1>
// 			</section>
// 			<section>
// 				<h1>Section Five</h1>
// 			</section>
// 		</div>
// 	);
// }

export default App;
