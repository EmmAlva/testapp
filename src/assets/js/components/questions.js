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
