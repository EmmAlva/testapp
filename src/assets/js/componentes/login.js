'use strict';

const Login  = (update) =>{
	const section = $('<section id="register"></section>');
	const div = $('<div class="container"></div>');
	const row0 = $('<div class="row"></div>');
	const col0 = $('<div class="col l12 s12 center"></div>');
	const logo = $('<img src="assets/img/logo-utp.png" alt="logo">');

	const row1 = $('<div class="row"></div>');
	const col1 = $('<div class="col l12 s12 center"></div>');
	const title =$('<h1 class="typo">TestAPP</h1>');

	const row2 = $('<div class="row"></div>');
	const form =$('<form class="col l12 s12"></form>');
	const divIn0 = $('<div class="input-field col s12"></div>');
	const span0 = $('<span id="response0" class="login_error"></span>');
	const input0 = $('<input id="user_name" type="text" class="validate m-0">');
	const label0 = $(' <label for="user_name">Usuario</label>');

	const divIn1 = $('<div class="input-field col s12"></div>');
	const input1 = $('<input id="password" type="password" class="validate m-0">');
	const label1 = $('<label for="password">Password</label>');
	const span1 = $('<span id="response1" class="login_error"></span>');


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
	divIn0.append(span0);

	divIn1.append(input1);
	divIn1.append(label1);
	divIn1.append(span1);


	btn.on('click', (e) =>{
		e.preventDefault();
		state.users.forEach((e,i)=>{
			if($('#user_name').val() != e.id && $('#password').val() != e.password){
				span0.text('*Campo inválido');
				$('#response1').text('*Campo inválido');
			}
			else if($('#user_name').val() == e.id && $('#password').val() == e.password){
				state.userLogin = i;
				console.log(state.userLogin);
				update();
			}
			else{
				span0.text('*Completar campos');
				$('#response1').text('*Completar campos');
			}
		})
	});

	return section;
}
