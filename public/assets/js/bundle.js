(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
const Cursos = () => {
  const section = $('<section></section>');
  const containerPrincipal = $('<div class="container"></div>');
  const columna1 = $('<div class="row center"></div>');
  const title = $('<div class="col l12 s12"><h3>CURSOS DISPONIBLES</h3></div>');
  const columna2 =$('<div class="row"></div>');

  const numCursos = state.users[state.userLogin].courses;
    numCursos.forEach((e)=>{
      columna2.append(curso(state.courses[e-1]));
      //console.log(state.courses[e-1]);
    });

  columna1.append(title);
  containerPrincipal.append(columna1);
  containerPrincipal.append(columna2);
  section.append(containerPrincipal);

  return section;
};

const curso = (data)  => {
  const fila1 = $('<div class="col l4 s6 curso"></div>');
  const curso1 = $('<div class="course course'+data.id+'"></div>');
  const titleCourse = $('<h5>'+data.course+'</h5>');
  const practica = $('<div class="practica coursebg'+data.id+'"><span>'+"Practicas"+'</span class="right">'+'#'+'<span></span></div>')
  $('.back').hide();

  curso1.append(titleCourse);
  curso1.append(practica);
  fila1.append(curso1);

  fila1.on('click', ()=>{
    state.coursesSelected = data;
    //console.log(data);
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
	// aMenu.hide();
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


	const btn = $('<button class="center btn-down bg_morado select-label" >INGRESAR</button>');

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
				//console.log(state.userLogin);
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
/*	console.log(state.coursesSelected);*/
	const practicas = $("<section id='practicas'></section>");
	const container = $("<div class='container'></div>");
	const row = $("<div class='row'></div>");
	const sub1 = $("<div class='col s12 center'></div>");
	const h3 = $("<h3>Practicas</h3>");
	const sub2 = $("<div class='col s12'></div>");

	$('.back').show();
	$('.back').on('click', ()=>{
		state.coursesSelected = null;
		$('section').replaceWith(Cursos());
	});

	$.each(state.coursesSelected.tests, (i, obj)=>{
		let divCol;
		if(i>3){
			divCol = $("<div class='col l4 s12 test'></div>");
		}else{
			divCol = $("<div class='col l4 s6 test'></div>");
		}
		let divImg = $("<a class='nivel valign-wrapper'></a>");
		let img = $(`<img src='assets/img/${obj.image}'/>`);
		let divDetails = $(`<div class='detail'></div>`);
		let title = $(`<p class='title'>${obj.name}</p>`);
		let temas = $(`<a class='modal-trigger' href='#modal1' id='${obj.codigo}'>Temario</a>`);
		let quiz = $("<a href='# class='btn-danger'>Quiz</a>");

		quiz.on("click", (e)=>{
		    		e.preventDefault();
						state.practicSelect = obj;
						//console.log(obj);
		    		$('section').replaceWith(Preguntas());
		});

		temas.on("click", (e)=>{
			e.preventDefault();
			state.practicSelect = obj;
			//console.log(obj);
			$('section').replaceWith(Temario());
		});
		divImg.append(img);

		divDetails.append(title);
		divDetails.append(temas);
		divDetails.append(quiz);

		divCol.append(divImg);
		divCol.append(divDetails);

		sub2.append(divCol);
	});

	sub1.append(h3);
	row.append(sub1);
	row.append(sub2);
	container.append(row);
	practicas.append(container);

	return practicas;
};

'use strict';

const Questions = (theme, quantity) => {
    console.log(theme);
    const container = $('<div class="container"></div>');
    const row = $('<div class="row"></div>');
    const relative = $('<div class="col s12 relative-col"></div>');
    const absolute = $('<div class="absolute-child"></div>');

    const carouselNumber = $('<div class="owl-carousel owl-theme center carousel-number"></div>');
    const carruselQuestion = $('<div class="owl-carousel owl-theme center' +
        ' carousel-question"></div>');

    const submit = $('<button class="btn btn-submit">Enviar prueba</button>');

    const easy = [];
    const medium = [];
    const difficult = [];

    const showQuestion = [];
    const quesquan = {
        "5": [2, 2, 1],
        "10": [4, 3, 3],
        "15": [5, 5, 5],
        "20": [7, 7, 6]
    };


    theme.questions.forEach((data) => {
        if (data.difficult == 1) {
            easy.push(data);
        } else if (data.difficult == 2) {
            medium.push(data);
        } else if (data.difficult == 3) {
            difficult.push(data);
        }
    });
    const selectQuantity = quesquan["" + quantity + ""];

    easy.forEach((e, index) => {
        if (index < selectQuantity[0]) {
            showQuestion.push(e);
        }
    });
    medium.forEach((e, index) => {
        if (index < selectQuantity[1]) {
            showQuestion.push(e);
        }
    });
    difficult.forEach((e, index) => {
        if (index < selectQuantity[2]) {
            showQuestion.push(e);
        }
    });

    const percentQ = 100 / showQuestion.length;
    let percentFinal = 0;

    let totalQuestion = 0;

    showQuestion.forEach((data, index) => {
        if (index < showQuestion.length) {
            const i = index + 1;
            const title = $('<h5>Pregunta ' + i + ':</h5>');
            const problem = $('<h4 class="problem">' + data.problem + '</h4>');

            const itemNumber = $('<div class="item"><a href="#' + data.name + '"><div' +
                ' class="item-number">' + i + '</div></a></div>');
            const itemQuestion = $('<div class="item item-question" data-hash="' + data.name + '"></div>');

            itemQuestion.append(title);
            itemQuestion.append(problem);

            const array = [1, 2, 3, 4];
            array.forEach((ind) => {
                const btn = $('<button class="btn btn-info">' + data["" + ind + ""] + '</button>');
                btn.on('click', () => {
                    if (ind.toString() === data.correct.toString()) {
                        percentFinal += percentQ;
                        totalQuestion += index;
                    }
                });
                itemQuestion.append(btn);
            });
            carouselNumber.append(itemNumber);
            carruselQuestion.append(itemQuestion);
        }
    });

    submit.on('click', (e) =>{
      e.preventDefault();
        Result(percentFinal, totalQuestion,showQuestion);
        submit.attr('disabled','disabled');
        $('section').replaceWith(Result());
    });


    absolute.append(carouselNumber);
    absolute.append(carruselQuestion);
    absolute.append(submit);
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
	const option5 = $('<option value="5">5</option>');
	const option10 = $('<option value="10">10</option>');
	const option15 = $('<option value="15">15</option>');
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
	select.append(option5);
	select.append(option10);
	select.append(option15);
	select.append(option20);
	console.log(state.practicSelect);

	btn.on('click',(e)=>{
		const questions = $("select option:selected" ).text();
		state.questions = questions;
		e.preventDefault();

		$('section').replaceWith(Questions(state.practicSelect, state.questions));
      $('.carousel-number').owlCarousel({
          items: 5,
          loop: false,
          dots: false,
          margin: 0,
          URLhashListener: true,
          autoplay: false,
          startPosition: 'URLHash'
      });
      $('.carousel-question').owlCarousel({
          items: 1,
          loop: false,
          dots: false,
          margin: 0,
          URLhashListener: true,
          autoplay: false,
          startPosition: 'URLHash'
      });
		console.log(state.questions);
	});
	return section;
};

// wrapper.append(Questions(state.courses[3].tests[3], 15));

'use strict';
const Result = () => {
    const main = $('<section id="resultado"></section>');
    const container = $('<div class="container"></div>');
    const row = $('<div class="row row-result center"></div>');
    const porcentaje = $('<div class="col l12 s12"></div>');
    const h1 = $('<h1>60%</h1>');
    const h5 = $('<h5>¡Sigue mejorando!</h5>');
    porcentaje.append(h1);
    porcentaje.append(h5);
    row.append(porcentaje);

    const row2 = $('<div class="row row-result center"></div>');
    const respuestas = $('<div class="col l12 s12"></div>');
    const dropdown = $('<a class="dropdown-button btn" data-beloworigin="true" href="#" data-activates="dropdown1">Tus respuestas <i class="material-icons">arrow_drop_down</i></a>');
    const ulDD = $('<ul id="dropdown1" class="dropdown-content"></ul>');
    const liDD1 = $('<li><a href="#!">Correctas</a></li>');
    const liDD2 = $('<li><a href="#!">Incorrectas</a></li>');
    ulDD.append(liDD1);
    ulDD.append(liDD2);
    respuestas.append(dropdown);
    respuestas.append(ulDD);
    row2.append(respuestas);

    const row3 = $('<div class="row row-result center"></div>');
    const feedback = $('<div class="col l12 s12"></div>');
    const title = $('<h5>Debes repasar:</h5>');
    const tema1 = $('<div class="col l12 s6"></div>');
    const span1 = $('<span class="btn btn-tema">Tema1</span>');
    const tema2 = $('<div class="col l12 s6"></div>');
    const span2 = $('<span class="btn btn-tema">Tema2</span>');
    tema2.append(span2);
    tema1.append(span1);
    feedback.append(title);
    feedback.append(tema1);
    feedback.append(tema2);
    row3.append(feedback);

    const row4 = $('<div class="row row-result bottom-btn center"></div>');
    const aTest = $('<div class="col l12 s6 col-btn"></div>');
    const spanA1 = $('<span class="btn btn-result flex-valign bg_turquesa">LISTA TEST</span>');
    const aCurso = $('<div class="col l12 s6 col-btn"></div>');
    const spanA2 = $('<span class="btn btn-result flex-valign bg_verde">LISTA CURSOS</span>');
    aCurso.append(spanA2);
    aTest.append(spanA1);
    row4.append(aTest);
    row4.append(aCurso);

    container.append(row);
    container.append(row2);
    container.append(row3);
    container.append(row4);
    main.append(container);
    return main;
};


'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Header);

    wrapper.append(Login(_ => render(root)));
    //}
    root.append(wrapper);

};

const state = {
    userLogin: null,
    users: null,
    courses: null,
    coursesSelected: null,
    practicSelect: null,
    questions: null
};

$(_ => {
    $.getJSON("/api/users/", (data) => {
        state.users = data;
        $.getJSON("/api/courses/", (json) => {
            state.courses = json;
            //active menu
            const root = $('.root');
            render(root);
            // state.nextPage= Login;

            /*$(".button-collapse").sideNav();*/
            /*$('#modal1').modal();*/

        });
    });
});

},{}]},{},[1])