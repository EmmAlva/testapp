(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const render = (root) => {
    const wrapper = $('<div class="wrapper"></div>');

    wrapper.append(Practicas);

    root.append(wrapper);
};

const state = {
    users: null,
    courses: null
};

$(_ => {

    $.getJSON("/api/users/", (data) => {
        state.users = data;

        $.getJSON("/api/courses/", (json) => {
            state.courses = json;

            const root = $('.root');
            render(root);
        });
    });
});
'use strict';
const Practicas = ()=>{
	const curso = state.courses.filter((obj)=>{
		if(obj.id == 4) return obj;
	})[0];

	const practicas = $("<section id='practicas'></section>");
	const container = $("<div class='container'></div>");
	const row = $("<div class='row'></div>");
	const col12 = $("<div class='col s12'></div>");
	const absol = $("<div></div>");

	console.log(curso.tests);
	$.each(curso.tests, (i, obj)=>{
		let divCol = $("<div class='col l4 s6 test'></div>");
		let divImg = $("<div class='nivel valign-wrapper'></div>");
		let img = $(`<img src='assets/img/${obj.image}'/>`);
		let divDetails = $(`<div></div>`);
		let title = $(`<p>${obj.name}</p>`);
		let temas = $("<a class='modal-trigger' href='#modal1'>Temas</a>");
		let quiz = $("<a class='right right'>Quiz</a>");

		divImg.append(img);

		divDetails.append(title);
		divDetails.append(temas);
		divDetails.append(quiz);

		divCol.append(divImg);
		divCol.append(divDetails);

		absol.append(divCol);
	});

	col12.append(absol);
	row.append(col12);
	container.append(row);
	practicas.append(container);

	return practicas;
};
},{}]},{},[1])