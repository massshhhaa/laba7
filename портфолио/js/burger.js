(function () {
	const burgerItem=document.querySelector('.burger');
	const menu=document.querySelector('.header__nav');
	const menuCloseItem=document.querySelector('.header__nav-close');
	burgerItem.addEventListener('click', ()=>{
		menu.classlist.add('.header__nav_active');
	})
	menuCloseItem.addEventListener('click', ()=>{
		menu.classlist.remove('.header__nav_active');
	});
}());

