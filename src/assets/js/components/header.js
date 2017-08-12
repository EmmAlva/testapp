'use strict';
const Header = () => {
	const header = $('<header></header>');
	const nav  = $('<nav class="bg_morado"></nav>');
	const div = $("<div class='nav-wrapper'></div>");
	const back = $('<a href="#!" class="back left" style="display: none;"><i class="material-icons ">chevron_left</i></a>');
	const a = $('<a href="#!" class="brand-logo typo">TestAPP</a>');
	const aMenu = $('<a href="#" data-activates="mobile-demo" class="button-collapse right"></a>');
	const iconMenu = $("<i class='material-icons'>menu</i>");
	const ul = $('<ul class="side-nav" id="mobile-demo"></ul>');
	const li0 = $('<li></li>');
	const profile = $('<div class="bg_profile"></div>');
	const circle = $('<div class="circle"></div>');
	const name = $('<a class="select-label white-text" href="#"></a>');
	const span = $('<span>Hola Alonso !</span>');
	const li1 = $('<li></li>');
	const aprof = $('<a href="">Inicio</a>');
	const li2 = $('<li></li>');
	const apract = $('<a href="">Perfil</a>');
	const li3 = $('<li></li>');
	const aset = $('<a href="">Settings</a>');
	const li4 = $('<li></li>');
	const alog = $('<li><a href="">Log out</a></li>');
	apract.on('click', (e)=>{
		e.preventDefault();
		$('section').replaceWith(Construccion());
	});

	header.append(nav);
	nav.append(div);
	name.append(span);
	li0.append(profile);
	li0.append(circle);
	li0.append(name);
	li1.append(aprof);
	li2.append(apract);
	li3.append(aset);
	li4.append(alog);
	ul.append(li0);
	ul.append(li1);
	ul.append(li2);
	ul.append(li3);
	ul.append(li4);
	div.append(a);
	aMenu.append(iconMenu);
	div.append(aMenu);
	div.append(back);
	div.append(ul);


	return header;

};
