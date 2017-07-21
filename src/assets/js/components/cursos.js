const Cursos = () => {
  const section = $('<section></section>');
  const containerPrincipal = $('<div class="container"></div>');
  const columna1 = $('<div class="row center"></div>');
  const title = $('<div class="col l12 s12"><h3>CURSOS DISPONIBLES</h3></div>');
  const columna2 =$('<div class="row"></div>');

  for (var i = 0; i < 6; i++) {
    columna2.append(curso(state.courses[i]));
  console.log(state.courses[i]);
  }
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

  section.on('click', ()=>{
    state.coursesSelected = data.id;
  });

  return fila1;
}
