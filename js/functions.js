//  Functions
const modalAbout = () => {
	// Declaring variables about the modal
	const target  = document.querySelector('#aboutme');
	const content = document.querySelector('.header__content');
	// Using ternary operator to check if its already oppened
	target.classList.contains('modalPop') ? target.classList.remove('modalPop') : target.classList.add('modalPop');
}

const goHome = e => {
	const home 		= document.querySelector('#homePage');
	const projects  = document.querySelector('#projectsPage');

	if(projects.style.opacity = '1'){
		projects.style.transform = 'translateX(100%)';
		projects.style.visibility = 'hidden';
		projects.style.opacity = '0';

		home.style.transform = 'translateX(0%)'
		home.style.visibility = 'visible';
		home.style.opacity = '1';
	}
}

const projects = e => {
	const home 		= document.querySelector('#homePage');
	const projects  = document.querySelector('#projectsPage');
	const homePage = document.getElementById('homePage');

	// Removing the content from the homePage
	if(homePage.classList.contains('scalePop')){
		homePage.classList.remove('scalePop');
	}

	home.style.transform = 'translateX(-100%)'
	home.style.visibility = 'hidden';
	home.style.opacity = '0';

	projects.style.transform = 'translateX(0)';
	projects.style.visibility = 'visible';
	projects.style.opacity = '1';

}



// Create the animation with css classes
// - Onload add class for home page sliding text
// - Onclick remove class and add class for fade-left/right
// - after that function for adding class from left/right
// - each calss needs to have transform/visibility/opacity
// Modal -
// Do it with toggling classes

let csCalculator = () => {
	let lastmousex = -1;
	let lastmousey = -1;
	let prevCallTime = -1;
	let mousetravel = 0;
	let target = document.querySelector('#cSpeed');
	var lastmousetime;
	var mrefreshinterval = 500;

	let handleMouseMove = e => {
		let calledAt = Date.now();

		const mousex = e.pageX;
		const mousey = e.pageY;

		if (lastmousex !== -1 || lastmousey !== -1) {
			mousetravel += Math.max(
			  Math.abs(mousex - lastmousex),
			  Math.abs(mousey - lastmousey)
			);
		}
		lastmousex = mousex;
		lastmousey = mousey;

		setTimeout(reportSpeed, mrefreshinterval);
	};

	const reportSpeed = function() {
		var now = new Date();
		var timenow = now.getTime();

		if (lastmousetime && lastmousetime !== timenow && mousetravel !== 0) {
			let pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000 );
			mousetravel = 0;

			function circumference(r) {
			  return parseFloat(r) * 0.001 * Math.PI;
			}
		// If you don't want to report the mouse standing still repeatedly
			// pps !== 0 &&
			document.getElementById('parameters').innerHTML = circumference(pps);
			}
		lastmousetime = timenow;
	};

	document.onmousemove = handleMouseMove;

	document.onmousemove = handleMouseMove;
}

window.onload = () => {
	// add class for loading page(homePage )
	const homePage = document.getElementById('homePage');

	homePage.classList.add('scalePop');

	csCalculator();

}

