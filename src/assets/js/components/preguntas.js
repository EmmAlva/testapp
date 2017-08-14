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