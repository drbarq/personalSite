import React from 'react';
import joeBanner from './images/joeBanner.jpg';
import './App.css';

import banner from './sections/banner/banner';

function App() {
	return (
		<div class="container">
			<div>1</div>

			{/* <div>{banner}</div>   */}
			{banner}
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
