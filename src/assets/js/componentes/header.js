'use strict';

const Header = () => {
	const header = $('<header></header>');
	const nav  = $('<nav></nav>');
	const div = $("<div class='nav-wrapper'></div>");
	const a = $('<a href="#!" class="brand-logo">TestAPP</a>');
	const a1 = $('<a href="#" data-activates="mobile-demo" class="button-collapse right"><i class="material-icons">menu</i></a>');
	const ul = $('<ul class="side-nav" id="mobile-demo"></ul>');
	const li0 = $('<li></li>');
	const profile = $('<div class="bg_profile"></div>');
	const circle = $('<div class="circle"></div>');
	const name = $('<a class="select-label white-text" href="#"></a>');
	const span = $('<span>Hola Alonso !</span>');
	const li1 = $('<li></li>');
	const aprof = $('<a href="">Profile</a>');
	const li2 = $('<li></li>');
	const apract = $('<a href="">Practice</a>');
	const li3 = $('<li></li>');
	const aset = $('<a href="">Settings</a>');
	const li4 = $('<li></li>');
	const alog = $('<li><a href="">Log out</a></li>');

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
	div.append(a1);
	div.append(ul);


	return header;


}

 /*<nav>
	    	<div class="nav-wrapper">
		      <a href="#!" class="brand-logo">TestAPP</a>
		      <a href="#" data-activates="mobile-demo" class="button-collapse right"><i class="material-icons">menu</i></a>
		      <ul class="side-nav" id="mobile-demo">
		     	<li>
		     		<div class="bg_profile">
		     			
		     		</div>
					<div class="circle">
					</div>
					<a class="select-label white-text" href="#">
						<span>Hola Alonso !</span>
					</a>
				</li>
		        <li><a href="">Profile</a></li>
		        <li><a href="">Practice</a></li>
		        <li><a href="">Settings</a></li>
		        <li><a href="">Log out</a></li>
		      </ul>
		    </div>
	    </nav>*/