(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const render = (root) => {
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Cursos());

    root.append(wrapper);
};

const state = {
    users: null,
    courses: null
};

$(_ => {
    $.getJSON("/api/users/", (data) => {
        state.users = data;
        console.log(data);
        $.getJSON("/api/courses/", (json) => {
            state.courses = json;

            console.log(json);
            const root = $('.root');
            render(root);
        });
    });
});

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

  section.on('click', ()=>{
    
  })

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
  return fila1;
}

},{}]},{},[1])