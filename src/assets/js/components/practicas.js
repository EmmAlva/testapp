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