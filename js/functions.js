const openModal = () =>{
	const target = document.querySelector('#aboutme');
	const bgWhite = document.querySelector('#bgWhite');
	const bgDark = document.querySelector('#bgDark');

	target.classList.add('modal-open');
	bgDark.style.transform = 'translateY(0%)';
	bgWhite.style.transform = 'translateY(0%)';

}
const closeModal = () => {
	const target = document.querySelector('#aboutme');
	const bgWhite = document.querySelector('#bgWhite');
	const bgDark = document.querySelector('#bgDark');

	target.classList.remove('modal-open');
	bgDark.style.transform = 'translateY(-200%)';
	bgWhite.style.transform = 'translateY(200%)';
}


let calculateSpeed = () => {
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

const navTrigger = () => {
	const openButton = document.querySelector('.nav-trigger');
	const closeButton = document.querySelector('.close-trigger');
	const mobileMenu = document.querySelector('.header-content');

	openButton.addEventListener('click', (event) => {
		event.preventDefault();

		mobileMenu.classList.add('active');
	});

	closeButton.addEventListener('click', (event) => {
		event.preventDefault();

		mobileMenu.classList.remove('active');
	});
}

window.addEventListener('load', () => {
	calculateSpeed();

	navTrigger();
});
