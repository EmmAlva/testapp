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
