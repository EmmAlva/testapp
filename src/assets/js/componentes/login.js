'use strict';

const Login  = () =>{
	const section = $('<section id="register"></section>');
	const div = $('<div class="container"></div>');
	const row0 = $('<div class="row"></div>');
	const col0 = $('<div class="col l12 s12 center"></div>');
	const logo = $('<img src="assets/img/logo-utp.png" alt="logo">');

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

	const btn = $('<button class="center btn-down bg_morado select-label" >INGRESAR</button>')

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