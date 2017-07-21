(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  // wrapper.append(Construccion);
  wrapper.append(Header());

  wrapper.append(Login(_ => render(root)));

  root.append(wrapper);

};

const state = {
    userLogin : null,
    users: null,
    courses: null,
    coursesSelected : null,
    nextPage : null,
    practicSelect:null
};

$(_ => {
    $.getJSON("/api/users/", (data) => {
        state.users = data;
        console.log(data);
        $.getJSON("/api/courses/", (json) => {
            state.courses = json;
            console.log(json);
             //active menu
            const root = $('.root');
            render(root);
            state.nextPage= Login;

            $(".button-collapse").sideNav();
            $('#modal1').modal();
        });
    });

});

'use strict';

const Construccion = () =>{
	const section = $('<section id="build" class="relative-col bg_morado" ></section>');
	const div = $('<div class="container absolute-child "></div>');
	const row0 = $('<div class="row"></div>');
	const col0 = $('<div class="col l12 s12 center relative-col white-text"></div>');
	const img = $('<img src="assets/img/data.svg" alt ="construccion">');
	const title = $('<h3><strong>¡EN CONSTRUCCIÓN</strong></h3>');
	const p = $('<p><strong>Esta sección estará disponible para ti muy pronto</strong></p>');

	section.append(div);
	div.append(row0);
	row0.append(col0);
	col0.append(img);
	col0.append(title);
	col0.append(p);

	return section;

}
const Cursos = (update) => {
  const section = $('<section></section>');
  const containerPrincipal = $('<div class="container"></div>');
  const columna1 = $('<div class="row center"></div>');
  const title = $('<div class="col l12 s12"><h3>CURSOS DISPONIBLES</h3></div>');
  const columna2 =$('<div class="row"></div>');

  const numCursos = state.users[state.userLogin].courses;
    numCursos.forEach((e)=>{
      columna2.append(curso(state.courses[e-1]));
      console.log(state.courses[e-1]);
    });

  columna1.append(title);
  containerPrincipal.append(columna1);
  containerPrincipal.append(columna2);
  section.append(containerPrincipal);

  return section;
}

const curso = (data)  => {
  const fila1 = $('<div class="col l4 s6 curso"></div>');
  const curso1 = $('<div class="course course'+data.id+'"></div>');
  const titleCourse = $('<h5>'+data.course+'</h5>');
  const practica = $('<div class="practica coursebg'+data.id+'"><span>'+"Practicas"+'</span class="right">'+'#'+'<span></span></div>')

  curso1.append(titleCourse);
  curso1.append(practica);
  fila1.append(curso1);

  fila1.on('click', ()=>{
    state.coursesSelected = data.id;
    console.log(state.coursesSelected);
    $('section').replaceWith(Practicas());
  });

  return fila1;
}

'use strict';

const Header = () => {
	const header = $('<header></header>');
	const nav  = $('<nav class="bg_morado"></nav>');
	const div = $("<div class='nav-wrapper'></div>");
	const back = $('<a href="#!" class="back  left"><i class="material-icons ">chevron_left</i></a>');
	const a = $('<a href="#!" class="brand-logo typo">TestAPP</a>');
	const a1 = $('<a href="#" data-activates="mobile-demo" class="button-collapse right"><i class="material-icons">menu</i></a>');
	const ul = $('<ul class="side-nav" id="mobile-demo"></ul>');
	const li0 = $('<li></li>');
	const profile = $('<div class="bg_profile"></div>');
	const circle = $('<div class="circle"></div>');
	const name = $('<a class="select-label white-text" href="#"></a>');
	const span = $('<span>Hola Alonso !</span>');
	const li1 = $('<li></li>');
	const aprof = $('<a href="">Perfil</a>');
	const li2 = $('<li></li>');
	const apract = $('<a href="">Pruebas</a>');
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
	div.append(back);
	div.append(ul);


	return header;

}

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
				// state.nextPage = Cursos;
				console.log(state.userLogin);
				// update();
				$('section').replaceWith(Cursos());
			}
			else{
				span0.text('*Completar campos');
				$('#response1').text('*Completar campos');
			}
		})
	});

	return section;
}

'use strict';
const Practicas = ()=>{

	const curso = state.courses.filter((obj)=>{
		if(obj.id == state.coursesSelected) return obj;
	})[0];

	const practicas = $("<section id='practicas'></section>");
	const container = $("<div class='container'></div>");
	const row = $("<div class='row'></div>");
	const col12 = $("<div class='col s12'></div>");
	const sub1 = $("<div class='col s12 center'></div>");
	const h3 = $("<h3>Practicas</h3>");
	const sub2 = $("<div class='col s12'></div>");
	const modal = $("<div id='modal1' class='modal'></div>");
	const modalContent = $("<div class='modal-content'></div>");
	const button = $("<button class='modal-close right' data-dismiss='modal' aria-label='Close'></button>");
	const aClose = $("<a class='black-text fs-2'  aria-hidden='true'>&times;</a>");
	const rowModal = $("<div class='row'></div>");
	const divButon =$("<div class='col l12 s12 center'>");
	const butonQuiz = $("<button class='btn center btn-down'>Quiz</button>");

	button.append(aClose);
	modalContent.append(button);
	modalContent.append(rowModal);
	divButon.append(butonQuiz);
	modalContent.append(divButon);
	modal.append(modalContent);

	col12.append(modal);
	sub1.append(h3);
	col12.append(sub1);
	col12.append(sub2);
	row.append(modal);
	row.append(col12);
	container.append(row);
	practicas.append(container);

	butonQuiz.on("click", (e)=>{
		state.page = cantPreguntas;
	});

	console.log(curso.tests);
	$.each(curso.tests, (i, obj)=>{
		let divCol;
		if(i>3){
			divCol = $("<div class='col l4 s12 test'></div>");
		}else{
			divCol = $("<div class='col l4 s6 test'></div>");
		}

		let divImg = $("<div class='nivel valign-wrapper'></div>");
		let img = $(`<img src='assets/img/${obj.image}'/>`);
		let divDetails = $(`<div class='detail'></div>`);
		let title = $(`<p class='title'>${obj.name}</p>`);
		let temas = $(`<a class='modal-trigger' href='#modal1' id='${obj.codigo}'>Temario</a>`);
		let quiz = $("<a>Quiz</a>");

		quiz.on('click',(e)=>{
			e.preventDefault();
			state.practicSelect = obj.codigo
			$('section').replaceWith(Preguntas());
		})

		temas.on("click", (e)=>{
			rowModal.empty();

			var filtro = curso.tests.filter((obj)=>{
				return obj.codigo == $(e.target).prop("id");
			})[0];

			//llenar modal
			$.each(filtro.themes, (i, tema)=>{
				if(i<3){
					rowModal.append(`<p>${tema}</p>`);
					rowModal.append("<p>Esta es la información para el tema .Debes considerar este tema para resolver este quiz.</p>");
				}
			});

		});

		divImg.append(img);

		divDetails.append(title);
		divDetails.append(temas);
		divDetails.append(quiz);

		divCol.append(divImg);
		divCol.append(divDetails);

		sub2.append(divCol);
	});



	return practicas;
};

'use strict';

const Questions = (theme, quantity) => {
    const container = $('<div class="container"></div>');
    const row = $('<div class="row"></div>');
    const relative = $('<div class="col s12 relative-col"></div>');
    const absolute = $('<div class="absolute-child"></div>');

    theme.questions.forEach((data, index) => {
        if (index < quantity) {
            console.log(data);
            const p = $('<p>' + data.problem + '</p>');
            absolute.append(p);
        }
    });

    relative.append(absolute);
    row.append(relative);
    container.append(row);

    return container;
};
'use strict';

const Preguntas = () =>{
	const section = $('<section id="cantidad"></section>');
	const div = $('<div class="container"></div>');
	const row0 = $('<div class="row"></div>');
	const col0 = $('<div class="col l12 s12 center"></div>');
	const title = $('<h3>¿CUÁNTAS PREGUNTAS QUIERES?</h3>');

	const row1 = $('<div class="row"></div>');
	const col1 = $('<div class="col l12 s12 center"></div>');
	const select = $('<select name="number" id="questions"></select>');
	const option1 = $('<option value="1">1</option>');
	const option2 = $('<option value="2">2</option>');
	const option3 = $('<option value="3">3</option>');
	const option4 = $('<option value="4">4</option>');
	const option5 = $('<option value="5">5</option>');
	const option6 = $('<option value="6">6</option>');
	const option7 = $('<option value="7">7</option>');
	const option8 = $('<option value="8">8</option>');
	const option9 = $('<option value="9">9</option>');
	const option10 = $('<option value="10">10</option>');
	const option11 = $('<option value="11">11</option>');
	const option12 = $('<option value="12">12</option>');
	const option13 = $('<option value="13">13</option>');
	const option14 = $('<option value="14">14</option>');
	const option15 = $('<option value="15">15</option>');
	const option16 = $('<option value="16">16</option>');
	const option17 = $('<option value="17">17</option>');
	const option18 = $('<option value="18">18</option>');
	const option19 = $('<option value="19">19</option>');
	const option20 = $('<option value="20">20</option>');

	const btn = $('<button class="center btn-down select-label " >QUIZ</button>');

	section.append(div);
	section.append(btn);
	div.append(row0);
	row0.append(col0);
	col0.append(title);
	div.append(row1);

	row1.append(col1);
	col1.append(select);
	select.append(option1);
	select.append(option2);
	select.append(option3);
	select.append(option4);
	select.append(option5);
	select.append(option6);
	select.append(option7);
	select.append(option8);
	select.append(option9);
	select.append(option10);
	select.append(option11);
	select.append(option12);
	select.append(option13);
	select.append(option14);
	select.append(option15);
	select.append(option16);
	select.append(option17);
	select.append(option18);
	select.append(option19);
	select.append(option20);

	return section;
	
}

/*<section id="cantidad">
		<div class="container">
			<div class="row">
				<div class="col l12 s12">
					<h3>Define una cantidad de preguntas</h3>
				</div>
			</div>
			<div class="row">
				<div class="col l12 s12 center">
					<div class="number center-block valign-wrapper" >
						<select name="number" id="questions">select
								<option value="1"></option>
								<option value="2"></option>
								<option value="3"></option>
								<option value="4"></option>
						</select>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col l12 s12 center">
					<button class="btn ">Empezar</button>
				</div>
			</div>			
		</div>		
		<button class="center btn-down select-label" >QUIZ</button>
	</section>*/
},{}]},{},[1])