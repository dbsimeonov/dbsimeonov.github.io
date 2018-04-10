//  Functions
const modalAbout = () => {
	// Declaring variables about the modal
	const target  = document.querySelector('#aboutme');
	const content = document.querySelector('.header__content');
	// Using ternary operator to check if its already oppened
	target.classList.contains('modalPop') ? target.classList.remove('modalPop') : target.classList.add('modalPop');
}
const flipVideo = () => {
	// const button = document.querySelector('#flipVideo');
	const target = document.querySelector('#video');

	target.classList.toggle('flipVideo');
}

const goHome = e => {
	const home 		  = document.querySelector('#homePage');
	const projects    = document.querySelector('#projectsPage');
	const experiments = document.querySelector('#experimentsPage');
	// checking if projects is active
	if(projects.style.opacity = '1'){
		// checking what animation class it has
		if(projects.classList.contains('fromLeft')){
			projects.classList.remove('fromLeft');
			home.classList.add('fromLeft');
		}else if(projects.classList.contains('fromRight')){
			projects.classList.remove('fromRight');
			home.classList.add('fromLeft');	
		} 
	}

	// check if experiments is active
	if(experiments.style.opacity = '1'){
		if(experiments.classList.contains('fromLeft')){
			experiments.classList.remove('fromLeft');
			home.classList.add('fromLeft');
		}else if(experiments.classList.contains('fromRight')){
			experiments.classList.remove('fromRight');
			home.classList.add('fromLeft');
		}
	}

}

const projects = e => {
	const home 		  = document.querySelector('#homePage');
	const projects    = document.querySelector('#projectsPage');
	const experiments = document.querySelector('#experimentsPage');
	// checking if home is active
	if(home.style.opacity = '1'){
		// checking what animation class contains
		if(home.classList.contains('scalePop')){
			home.classList.remove('scalePop');
			projects.classList.add('fromRight');
		}else if(home.classList.contains('fromRight')){
			home.classList.remove('fromRight');
			projects.classList.add('fromRight');
		}else if(home.classList.contains('fromLeft')){
			home.classList.remove('fromLeft');
			projects.classList.add('fromRight');
		}
	}
	// check if experiments is active
	if(experiments.style.opacity = '1'){
		if(experiments.classList.contains('fromLeft')){
			experiments.classList.remove('fromLeft');
			projects.classList.add('fromLeft');
		}else if(experiments.classList.contains('fromRight')){
			experiments.classList.remove('fromRight');
			projects.classList.add('fromLeft');
		}
	}

}

const experiments = e => {
	const home 		  = document.querySelector('#homePage');
	const projects    = document.querySelector('#projectsPage');
	const experiments = document.querySelector('#experimentsPage');

	// checking if home is active 
	if(home.style.opacity = '1'){
		// checking what animation class contains
		if(home.classList.contains('scalePop')){
			home.classList.remove('scalePop');
			experiments.classList.add('fromRight');
		}else if(home.classList.contains('fromRight')){
			home.classList.remove('fromRight');
			experiments.classList.add('fromRight');
		}else if(home.classList.contains('fromLeft')){
			home.classList.remove('fromLeft');
			experiments.classList.add('fromRight');
		}
	}
	// checking if projects is active
	if(projects.style.opacity = '1'){
		// checking what animation class it has
		if(projects.classList.contains('fromLeft')){
		
			projects.classList.remove('fromLeft');
			experiments.classList.add('fromRight');
		}else if(projects.classList.contains('fromRight')){
			projects.classList.remove('fromRight');
			experiments.classList.add('fromRight');	
		}
	}



}



// Create the animation with css classes
// Onload open the #homePage using .scalePop
// Onchange remove excisting animation classes
// Watch for which link is clicked so you
// know which left/right class will add
// animation classes .scalePop .fromLeft .fromRight
// Animation for modal .modalPop


// function for Calculating the Speed of Cursor
let csCalculator = () => {
	let lastmousex = -1;
	let lastmousey = -1;
	let prevCallTime = -1;
	let mousetravel = 0;
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
	document.querySelector('#nav').classList.add('fromTop');
	document.getElementById('homePage').classList.add('scalePop');
	document.querySelector('.header__socials').classList.add('opacity');
	csCalculator();
	
}

