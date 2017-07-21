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
            
            $('.modal').modal();
        });
    });

});
'use strict';
const Practicas = ()=>{

	const curso = state.courses.filter((obj)=>{
		if(obj.id == 4) return obj;
	})[0];
	console.log(curso);
/*	console.log(state.coursesSelected);*/
	const practicas = $("<section id='practicas'></section>");
	const container = $("<div class='container'></div>");
	const row = $("<div class='row'></div>");	
	const sub1 = $("<div class='col s12 center'></div>");
	const h3 = $("<h3>Practicas</h3>");
	const sub2 = $("<div class='col s12'></div>");
	const modal = $("<div id='modal1' class='modal'></div>");
    const modalContent = $("<div class='modalContent'></div>");      
    const aClose = $("<a class='modal-close'>&times;</a>");
    const divInfo = $("<div class='col s12'></div>");
    const divButon =$("<div class='col l12 s12 center'>");
    const butonQuiz = $("<button class='btn center btn-down'>Quiz</button>");
/*    modal.hide();*/

    divButon.append(butonQuiz);
    modalContent.append(aClose);
    modalContent.append(divInfo);
    modalContent.append(divButon);     
    modal.append(modalContent);

    	aClose.on("click", (e)=>{
    		e.preventDefault();
    	/*	modal.hide();*/
    	});
	
	$.each(curso.tests, (i, obj)=>{
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
		let quiz = $("<a href='#'>Quiz</a>");

		temas.on("click", (e)=>{
			divInfo.empty();
			var filtro = curso.tests.filter((obj)=>{
				return obj.codigo == $(e.target).prop("id");
			})[0];

			//llenar modal
			$.each(filtro.themes, (i, tema)=>{
				if(i<3){
					divInfo.append(`<p>${tema}</p>`);
					divInfo.append("<p>Esta es la información para el tema .Debes considerar este tema para resolver este quiz.</p>");
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



	sub1.append(h3);
	row.append(modal);
	row.append(sub1);
	row.append(sub2);
	container.append(row);
	practicas.append(container);

	return practicas;
};

/*const modal =(data)=>{

    const modal = $("<div id='modal1' class='modal'></div>");
    const modalContent = $("<div class='modal-content'></div>");      
    const aClose = $("<a class='black-text fs-2'  aria-hidden='true'>&times;</a>");
    const divInfo = $("<div class='info'></div>");
    const divButon =$("<div class='col l12 s12 center'>");
    const butonQuiz = $("<button class='btn center btn-down'>Quiz</button>");


    divButon.append(button);
    modalContent.append(butonQuiz);
    modalContent.append(row);
    modalContent.append(divButton);
    modal.append(modalContent);
};*/
'use strict';

console.log('preguntas');
},{}]},{},[1])