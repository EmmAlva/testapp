(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const render = (root) => {
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Login);

    root.append(wrapper);
};

const state = {
    users: null,
    courses: null
};

$(_ => {


    $.getJSON("/api/users/", (data) => {
        state.users = data;
        console.log(data);
        $.getJSON("/api/courses/", (json) => {
            state.courses = json;
            console.log(json);
            const root = $('.root');
            render(root);
             //active menu
            $(".button-collapse").sideNav();

        });

    });  


});
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
'use strict';

const Login  = () =>{
	const section = $('<section id="register"></section>');
	const div = $('<div class="container"></div>');
	const row0 = $('<div class="row"></div>');
	const col0 = $('<div class="col l12 s12 center"></div>');
	const logo = $('<img src="img/logo-utp.png" alt="logo">');

	const row1 = $('<div class="row"></div>');
	const col1 = $('<div class="col l12 s12 center"></div>');
	const title =$('<h1>TestAPP</h1>');

	const row2 = $('<div class="row"></div>');
	const form =$('<form class="col l12 s12"></form>');
	const divIn0 = $('<div class="input-field col s12"></div>');
	const input0 = $('<input id="last_name" type="text" class="validate">');
	const label0 = $(' <label for="last_name">Usuario</label>');

	const divIn1 = $('<div class="input-field col s12"></div>');
	const input1 = $('<input id="password" type="password" class="validate">');
	const label1 = $('<label for="password">Password</label>');

	const btn = $('<button class="center btn-down purple select-label" >INGRESAR</button>')

	section.append(div);
	section.append(btn);
	div.append(row0);
	row0.append(col0);
	col0.append(logo);

	div.append(row1);
	row1.append(col1);
	col1.append(title);

	div.append(row2);
	row2.append(form);
	form.append(divIn0);
	form.append(divIn1);

	divIn0.append(input0);
	divIn0.append(label0);
	divIn1.append(input1);
	divIn1.append(label1);

	return section;
}



/*<section id="register">
		<div class="container">
			<div class="row">
				<div class="col l12 s12 center">
					<img src="img/logo-utp.png" alt="logo">
				</div>
			</div>
			<div class="row">
				<div class="col l12 s12 center">
					<h1>TestAPP</h1>
				</div>
			</div>
			<div class="row">
				<form class="col l12 s12">
					<div class="input-field col s12">
				        <input id="last_name" type="text" class="validate">
				        <label for="last_name">Usuario</label>
			        </div>
				    <div class="input-field col s12">
			          	<input id="password" type="password" class="validate">
			          	<label for="password">Password</label>
			        </div>
				</form>
			</div>
		</div>
		<button class="center btn-down purple select-label" >INGRESAR</button>
	</section>*/
'use strict';

console.log('preguntas');
},{}]},{},[1])