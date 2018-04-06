//  Functions

const modalAbout = e =>{
	
	const target = document.querySelector('#aboutme');
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

