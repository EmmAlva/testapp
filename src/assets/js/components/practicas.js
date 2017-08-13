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
   console.log(obj);
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
