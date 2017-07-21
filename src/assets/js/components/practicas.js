'use strict';
const Practicas = ()=>{
/*	console.log(state.coursesSelected);*/
	const practicas = $("<section id='practicas'></section>");
	const container = $("<div class='container'></div>");
	const row = $("<div class='row'></div>");
	const sub1 = $("<div class='col s12 center'></div>");
	const h3 = $("<h3>Practicas</h3>");
	const sub2 = $("<div class='col s12'></div>");

	$('.back').show();
	$('.back').on('click', ()=>{
		state.coursesSelected = null;
		$('section').replaceWith(Cursos());
	})

	$.each(state.coursesSelected.tests, (i, obj)=>{
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

		quiz.on("click", (e)=>{
		    		e.preventDefault();
						state.practicSelect = obj;
						console.log(obj);
		    		$('section').replaceWith(Preguntas());
		});

		temas.on("click", (e)=>{
			e.preventDefault();
			state.practicSelect = obj;
			console.log(obj);
			$('section').replaceWith(Temario());
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
	row.append(sub1);
	row.append(sub2);
	container.append(row);
	practicas.append(container);

	return practicas;
};
