//  Functions

const modalAbout = e =>{
	
	const target  = document.querySelector('#aboutme');
	const content = document.querySelector('.header__content');

	if(target.style.visibility == 'visible'){
		target.style.opacity = '0';
		target.style.visibility = 'hidden';
		// content.style.opacity = '1';
	}else{
		target.style.opacity = '1';
		target.style.visibility = 'visible';
		// content.style.opacity = '0';
	}
	

	// console.log('Event has triggered');

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

	home.style.transform = 'translateX(-100%)'
	home.style.visibility = 'hidden';
	home.style.opacity = '0';

	projects.style.transform = 'translateX(0)';
	projects.style.visibility = 'visible';
	projects.style.opacity = '1';

}