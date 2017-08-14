(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const Construccion = () => {
 const container = $('<section class="build-container main-container"></section>');
 const row = $('<div class="row"></div>');
 const column = $('<div class="col s12 m6 l4 center-column  bg_morado"></div>');
 const div = $('<div class="container absolute-child "></div>');
 const row0 = $('<div class="row"></div>');
 const col0 = $('<div class="col l12 s12 center relative-col white-text"></div>');
 const img = $('<img src="assets/img/data.svg" alt ="construccion">');
 const title = $('<h3><strong>¡En Construcción!</strong></h3>');
 const p = $('<p><strong>Esta sección estará disponible para ti muy pronto.</strong></p>');

 column.append(div);
 div.append(row0);
 row0.append(col0);
 col0.append(img);
 col0.append(title);
 col0.append(p);

 row.append(column);
 container.append(row);
 return container;

};
const Cursos = () => {
 $('.back').hide();
 const container = $('<section class="cursos-container main-container"></section>');
 const row = $('<div class="row"></div>');
 const column = $('<div class="col s12 m6 l4 center-column"></div>');

 const columna1 = $('<div class="row center"></div>');
 const title = $('<div class="col l12 s12"><h4>Cursos</h4></div>');
 const columna2 = $('<div class="row"></div>');

 const numCursos = state.userLogin.courses;
 numCursos.forEach((e) => {
  columna2.append(curso(state.courses[e - 1]));
 });

 columna1.append(title);
 column.append(columna1);
 column.append(columna2);

 row.append(column);
 container.append(row);
 return container;
};

const curso = (data) => {
 const fila = $('<div class="col s6 curso"></div>');
 const curso = $(`<div class="course course${data.id}"></div>`);
 const titleCourse = $(`<h5>${data.course}</h5>`);
 const practica = $(`<div class="practica coursebg${data.id}"><span class="right">Practicas</span><span>${data.tests.length}</span></div>`);

 curso.append(titleCourse);
 curso.append(practica);
 fila.append(curso);

 fila.on('click', () => {
  state.coursesSelected = data;
  $('section').replaceWith(Practicas());
 });
 return fila;
};

'use strict';

const Header = (data) => {
 const container = $('<header class="main-container"></header>');
 const row = $('<div class="row"></div>');
 const column = $('<div class="col s12 m6 l4 center-column"></div>');

 const nav = $('<nav class="bg_morado"></nav>');
 const div = $("<div class='nav-wrapper'></div>");
 const back = $('<a href="#!" class="back left" style="display: none;"><i class="material-icons ">chevron_left</i></a>');
 const logoTest = $('<a href="#!" class="brand-logo font-logo">TestAPP</a>');
 const aMenu = $('<a href="#" data-activates="mobile-demo" class="button-collapse right"></a>');
 const iconMenu = $("<i class='material-icons'>menu</i>");
 const ul = $('<ul class="side-nav" id="mobile-demo"></ul>');
 const li0 = $('<li></li>');
 const profile = $('<div class="bg_morado bg_profile"></div>');
 const circle = $('<div class="circle"></div>');
 circle.css({'background-image': 'url("' + data.image + '")'});
 const name = $('<a class=" white-text" href="#"></a>');

 const span = $('<span>Hola ' + data.name + ' !</span>');
 const menuCourses = $('<a href="#">Cursos</a>');
 const menuProfile = $('<a href="#">Perfil</a>');
 const menuSettings = $('<a href="#">Configuración</a>');
 const menuLogOut = $('<li><a href="">Salir</a></li>');
 const li1 = $('<li></li>');
 const li2 = $('<li></li>');
 const li3 = $('<li></li>');
 const li4 = $('<li></li>');

 menuProfile.on('click', () => {
  $('section').replaceWith(Construccion());
 });
 menuSettings.on('click', () => {
  $('section').replaceWith(Construccion());
 });
 menuCourses.on('click', () => {
  $('section').replaceWith(Cursos());
 });

 column.append(nav);
 nav.append(div);
 name.append(span);
 profile.append(circle);
 profile.append(name);
 li0.append(profile);
 li2.append(menuProfile);
 li1.append(menuCourses);
 li3.append(menuSettings);
 li4.append(menuLogOut);
 ul.append(li0);
 ul.append(li1);
 ul.append(li2);
 ul.append(li3);
 ul.append(li4);
 div.append(logoTest);
 aMenu.append(iconMenu);
 div.append(aMenu);
 div.append(back);
 div.append(ul);

 row.append(column);
 container.append(row);
 return container;

};

'use strict';

const Login = (update, wrapper) => {
 const container = $('<section class="login-container main-container"></section>');
 const row = $('<div class="row"></div>');
 const column = $('<div class="col s12 m6 l4 center-column"></div>');

 const row0 = $('<div class="row login-logo"></div>');
 const col0 = $('<div class="col l12 s12 center"></div>');
 const logo = $('<img src="assets/img/logo-utp.png" alt="logo">');

 const row1 = $('<div class="row"></div>');
 const col1 = $('<div class="col l12 s12 center"></div>');
 const title = $('<h1 class="font-logo">TestAPP</h1>');

 const row2 = $('<div class="row"></div>');
 const form = $('<form class="col l12 s12"></form>');
 const divIn0 = $('<div class="input-field col s12"></div>');
 const span0 = $('<span id="response0" class="login_error"></span>');
 const input0 = $('<input id="user_name" type="text" class="validate m-0">');
 const label0 = $(' <label for="user_name">Usuario</label>');

 const divIn1 = $('<div class="input-field col s12"></div>');
 const input1 = $('<input id="password" type="password" class="validate m-0">');
 const label1 = $('<label for="password">Password</label>');
 const span1 = $('<span id="response1" class="login_error"></span>');

 const btn = $('<button class="center bg_morado btn btn-bottom">INGRESAR</button>');

 let userInput = null;
 let userPassword = null;
 const inputCorrect = {'border-bottom-color': '#ABCB6A', 'box-shadow': '0 1px 0 0 #ABCB6A'};
 const inputError = {'border-bottom-color': '#B01E31', 'box-shadow': '0 1px 0 0 #B01E31'};
 input0.on('blur', () => {
  const findUser = jQuery.grep(state.users, function (n) {
   return n.id == input0.val();
  });
  if (findUser.length === 1) {
   userInput = findUser[0];
   input0.css(inputCorrect);
   span0.text('');
  } else {
   userInput = null;
   userPassword = null;
   input0.css(inputError);
   span0.text('*Usuario Inválido');
  }
 });
 input1.on('blur', () => {
  if (userInput !== null) {
   const findUser = jQuery.grep([userInput], function (n) {
    return n.password == input1.val();
   });
   if (findUser.length === 1) {
    userPassword = findUser[0];
    input1.css(inputCorrect);
    span1.text('');
   } else {
    input1.css(inputError);
    span1.text('*Contraseña Inválida');
   }
  } else {
   userPassword = null;
   userInput = null;
   input0.css(inputError);
   span0.text('*Ingrese Usuario');
   input1.css(inputError);
   span1.text('*Ingrese Contraseña');
  }
 });

 btn.on('click', (e) => {
  e.preventDefault();
  if (userPassword == userInput && userPassword !== null) {
   state.userLogin = userInput;
   wrapper.prepend(Header(state.userLogin));
   container.replaceWith(Cursos());
   $(".button-collapse").sideNav({
    menuWidth: 250,
    closeOnClick: true
   });
  } else if (userInput !== null) {
   input0.css(inputCorrect);
   span0.text('');
  } else if (userPassword == null) {
   userInput = null;
   input0.css(inputError);
   span0.text('*Ingrese Usuario Válido');
  }

 });

 col0.append(logo);
 row0.append(col0);
 column.append(row0);

 col1.append(title);
 row1.append(col1);
 column.append(row1);

 divIn0.append(input0);
 divIn0.append(label0);
 divIn0.append(span0);

 divIn1.append(input1);
 divIn1.append(label1);
 divIn1.append(span1);

 form.append(divIn0);
 form.append(divIn1);
 row2.append(form);
 column.append(row2);

 column.append(btn);
 row.append(column);
 container.append(row);
 return container;
};

'use strict';

const Practicas = () => {
 $('.back').show();
 $('.back').on('click', () => {
  container.replaceWith(Cursos());
 });

 const container = $('<section class="exams-container main-container"></section>');
 const row = $('<div class="row"></div>');
 const column = $('<div class="col s12 m6 l4 center-column"></div>');

 const sub1 = $("<div class='col s12 center'></div>");
 const h3 = $("<h4>Practicas</h4>");
 const sub2 = $("<div class='col s12'></div>");


 $.each(state.coursesSelected.tests, (i, obj) => {

  let divCol = $("<div class='col s6'></div>");
  if (i > 3) {
   divCol = $("<div class='col s12'></div>");
  }
  const containerTest = $(`<div class='col s12 test test-${obj.codigo}'></div>`);
  let divImg = $("<div class='col s12 center'></div>");
  let img = $(`<img src='assets/img/${obj.image}'/>`);
  let title = $(`<p class='title'>${obj.name}</p>`);
  let themes = $(`<a class='modal-trigger' href='#modal${obj.codigo}'></a>`);
  let divDetails = $(`<div class=' col s12 detail detail-${obj.codigo} center'></div>`);
  const detailText = $('<span>Temario</span>');
  if (obj.name == "Exámen Final") {
   containerTest.css({'border-color': '#F9AC3E'});
  }

  //Modal of Themes
  const modalContainer = $(`<div id="modal${obj.codigo}" class="modal"></div>`);
  const modalContent = $('<div class="modal-content"></div>');
  const modalClose = $('<span class="modal-action modal-close icon-close">&#10005</span>');
  const modalQuiz = $('<button class="btn btn-modal bg_naranja modal-action modal-close">Prueba</button>');
  modalContent.append(modalClose);

  $.each(obj.themes, (index, data) => {
   if (index < 3) {
    const titleTheme = $(`<strong><p>${data}</p></strong>`);
    const textTheme = $(`<span class="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci amet consequatur debitis deserunt, excepturi.</span>`);
    modalContent.append(titleTheme);
    modalContent.append(textTheme);
   }
  });

  modalQuiz.on('click', () => {
   state.practicSelect = obj;
   container.replaceWith(Preguntas());
  });
  modalContent.append(modalQuiz);

  divImg.on("click", (e) => {
   state.practicSelect = obj;
   container.replaceWith(Preguntas());
  });

  divImg.append(img);
  divImg.append(title);

  divDetails.append(detailText);
  themes.append(divDetails);

  modalContainer.append(modalContent);
  containerTest.append(divImg);
  containerTest.append(themes);
  containerTest.append(modalContainer);
  modalContainer.modal();

  divCol.append(containerTest);
  sub2.append(divCol);
 });

 sub1.append(h3);
 column.append(sub1);
 column.append(sub2);
 row.append(column);
 container.append(row);

 return container;
};

'use strict';

const Questions = (theme, quantity) => {
 $(".button-collapse").hide();
 $('.back').hide();
 const container = $('<section class="question-container main-container"></section>');
 const row = $('<div class="row"></div>');
 const column = $('<div class="col s12 m6 l4 center-column"></div>');

 const carouselNumber = $('<div class="owl-carousel owl-theme center carousel-number"></div>');
 const carruselQuestion = $('<div class="owl-carousel owl-theme center carousel-question"></div>');

 const submit = $('<button class="btn btn-submit" disabled>Enviar Prueba</button>');

 const easy = [];
 const medium = [];
 const difficult = [];

 //Total de preguntas que se muestran
 const showQuestion = [];
 //Cantidad de preguntas y cantidad por nivel facil/intermedio/dificil
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
 //Cantidad de preguntas
 const selectQuantity = quesquan[quantity.toString()];

 //filtrando niveles de preguntas por cantidad
 const questionLevel = (level, i) => {
  level.forEach((e, index) => {
   if (index < selectQuantity[i]) {
    showQuestion.push(e);
   }
  });
 };
 questionLevel(easy, 0);
 questionLevel(medium, 1);
 questionLevel(difficult, 2);

 //Porcentajes de respuesta
    const percentQ = 100 / showQuestion.length; // porcentaje por respuesta
    let percentFinal = 0;
    let totalQuestion = 0;
    const correctAnswer = [];

 //Nombre de input radio // Respuestas Correctas
 const inputName = [];
 const correctQuestion = [];

 showQuestion.forEach((data, index) => {
  if (index < showQuestion.length) {
   const i = index + 1;
   const problem = $(`<div class="problem"><p>${data.problem }</p></div>`);
   const itemNumber = $('<div class="item item-hash" ></div>');
   const itemNumberHref = $(`<a href="#${i}"><div class="item-number">${i}</div></a>`);
   const itemQuestion = $(`<div class="item item-question" data-hash="${i}"></div>`);

   //default selected
   if (i === 1) {
    itemNumber.addClass('selected')
   }

   itemNumber.append(itemNumberHref);
   itemQuestion.append(problem);

   inputName.push(data.name);
   correctQuestion.push(data.correct);
   const array = [1, 2, 3, 4];
   array.forEach((ind) => {
    const input = $(`<input type="radio" name="${data.name}" value="${ind}" id="${data.name + ind}">`);
    const label = $(`<label for="${data.name + ind}">${data[ind.toString()]}</label>`);

    label.on('click', () => {
     totalQuestion += 1;
     setTimeout(() => {
      //Agregar color a la pregunta marcada
      $('.item-hash')[i - 1].classList.add('question-checked');

      //change hash
      if (i < showQuestion.length) {
       location.hash = (i + 1).toString();
      }
      //active tranform
      const owl = $('.carousel-number');
      owl.owlCarousel();
      owl.trigger('next.owl.carousel');
     }, 700);

     //Activar boton de enviar
     if (totalQuestion === (showQuestion.length - Math.round(showQuestion.length / 2))) {
      submit.removeAttr('disabled');
     }
    });
    itemQuestion.append(input);
    itemQuestion.append(label);
   });
   carouselNumber.append(itemNumber);
   carruselQuestion.append(itemQuestion);
  }
 });
 submit.on('click', () => {
  //Filtrando respuestas
  inputName.forEach((name, index) => {
   const nameVal = $(`input[name="${name}" ]:checked`);
   if (nameVal.val() === correctQuestion[index].toString()) {
    correctAnswer.push(nameVal.parent().data('hash'));
   }
  });
  percentFinal = Math.round(correctAnswer.length * percentQ);
  setTimeout(() => {
   location.hash = "";
   container.replaceWith(Result(percentFinal, correctAnswer, showQuestion));
  }, 500);
 });

 column.append(carouselNumber);
 column.append(carruselQuestion);
 column.append(submit);
 row.append(column);
 container.append(row);
 return container;
};

//Change Hash Carousel
$(window).bind('hashchange', () => {
 const windowHash = location.hash;
 $('.item-hash a').each((i, data) => {
  if (data.hash == windowHash) {
   //add color to number selected
   $('.item-hash')[i].classList.add('selected');
  } else {
   $('.item-hash')[i].classList.remove('selected');
  }
 });
});
'use strict';

const Preguntas = () => {
 $('.back').on('click', () => {
  container.replaceWith(Practicas());
 });

 const container = $('<section class="quantity-container main-container"></section>');
 const row = $('<div class="row"></div>');
 const column = $('<div class="col s12 m6 l4 center-column"></div>');

 const row0 = $('<div class="row"></div>');
 const col0 = $('<div class="col l12 s12 center"></div>');
 const title = $('<h4>Cantidad de Preguntas</h4>');

 const row1 = $('<div class="row"></div>');
 const col1 = $('<div class="col s12 center"></div>');
 const select = $('<select name="number" id="questions"></select>');
 const option5 = $('<option value="5">5</option>');
 const option10 = $('<option value="10">10</option>');
 const option15 = $('<option value="15">15</option>');
 const option20 = $('<option value="20">20</option>');

 const btn = $('<button class="center btn btn-bottom bg_naranja" >Empezar Prueba</button>');

 col0.append(title);
 row0.append(col0);
 column.append(row0);
 column.append(row1);
 column.append(btn);

 select.append(option5);
 select.append(option10);
 select.append(option15);
 select.append(option20);
 col1.append(select);
 row1.append(col1);

 btn.on('click', (e) => {
  e.preventDefault();
  state.questions = $("select option:selected").text();
  container.replaceWith(Questions(state.practicSelect, state.questions));

   //Activar carousel
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
  });

 row.append(column);
 container.append(row);
 return container;
};

'use strict';

const Result = (percentFinal, correctAnswer, questions) => {
 $(".button-collapse").show();
 const container = $('<section class="result-container main-container"></section>');
 const row = $('<div class="row"></div>');
 const column = $('<div class="col s12 m6 l4 center-column"></div>');

 const row1 = $('<div class="row center"></div>');
 const h1 = $('<h1>' + percentFinal + '% </h1>');
 let message;
 percentFinal >= 85 ? message = "¡Excelente!" : message = "¡Sigue Practicando!";
 const h5 = $('<h5>' + message + '</h5>');
 row1.append(h1);
 row1.append(h5);

 const themesWrongAnswer = [];
 const row2 = $('<div class="row row-result center"></div>');
 questions.forEach((data, i) => {
  themesWrongAnswer.push(data.theme);

  const index = i + 1;
  const modalAnswer = $('<a class="modal-trigger" href="#modal' + index + '"></a>');
  const containerNumber = $('<div class="general-answer" ></div>');
  const number = $('<span>' + index + '</span>');
  if (correctAnswer.length > 0) {
   correctAnswer.forEach((data) => {
    if (data === index) {
     containerNumber.addClass('correct-answer');
    }
   });
  }
  const modalContainer = $('<div id="modal' + index + '" class="modal"></div>');
  const modalContent = $(' <div class="modal-content"></div>');
  const closeModal = $('<span class="modal-action modal-close icon-close">&#10005</span>');
  const questionNumber = $('<p>Pregunta ' + index + ':</p>');
  const questionText = $('<h5>' + data.problem + '</h5>');
  const questionAnswer = $('<p>Respuesta Correcta:<br><h3>' + data[data.correct.toString()] + '</h3></p>');
  modalContent.append(closeModal);
  modalContent.append(questionNumber);
  modalContent.append(questionText);
  modalContent.append(questionAnswer);
  modalContainer.append(modalContent);
  modalContainer.modal();

  containerNumber.append(number);
  modalAnswer.append(containerNumber);
  row2.append(modalContainer);
  row2.append(modalAnswer);
 });

 //Filtrar elementos repitentes
 Array.prototype.unique = function (a) {
  return function () {
   return this.filter(a)
  }
 }(function (a, b, c) {
  return c.indexOf(a, b + 1) < 0
 });

 const newTheme = themesWrongAnswer.unique();
 const row3 = $('<div class="row center"></div>');
 const title = $('<h5>Repasar:</h5>');
 row3.append(title);
 newTheme.forEach((theme) => {
  const tema = $('<div class="btn-tema"></div>');
  const span = $('<span class="">'+theme+'</span>');
  tema.append(span);
  row3.append(tema);
 });

 column.append(row1);
 column.append(row2);
 column.append(row3);
 row.append(column);
 container.append(row);

 return container;
};

'use strict';

const render = (root) => {
 root.empty();
 const wrapper = $('<div class="wrapper"></div>');
 wrapper.append(Login(_ => render(root), wrapper));

 root.append(wrapper);

};

const state = {
 users: null,
 courses: null,
 userLogin: null,
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

   $('.carousel-number').owlCarousel({
    items: 5,
    loop: false,
    dots: false,
    margin: 0,
    URLhashListener: true,
    autoplay: false,
    autoplayHoverPause: true,
    startPosition: 'URLHash'
   });
   $('.carousel-question').owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    margin: 0,
    URLhashListener: true,
    autoplay: false,
    startPosition: 'URLHash',
    mouseDrag: false,
    touchDrag: false
   });
  });
 });
});

},{}]},{},[1])