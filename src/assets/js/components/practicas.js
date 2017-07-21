'use strict';
const Practicas = ()=>{
	const curso = state.courses.filter((obj)=>{
		if(obj.id == 4) return obj;
	})[0];

	const practicas = $("<section id='practicas'></section>");
	const container = $("<div class='container'></div>");
	const row = $("<div class='row'></div>");
	const col12 = $("<div class='col s12'></div>");
	const sub1 = $("<div class='col s12 center'></div>");
	const h3 = $("<h3>Practicas</h3>");
	const sub2 = $("<div class='col s12'></div>");
	const modal = $("<div id='modal1' class='modal'></div>");
	const modalContent = $("<div class='modal-content'></div>");
	const button = $("<button class='modal-close right' data-dismiss='modal' aria-label='Close'></button>");
	const aClose = $("<a class='black-text fs-2'  aria-hidden='true'>&times;</a>");	
	const rowModal = $("<div class='row'></div>");
	const divButon =$("<div class='col l12 s12 center'>");
	const butonQuiz = $("<button class='btn center btn-down'>Quiz</button>");
	
	butonQuiz.on("click", (e)=>{
		state.page = cantPreguntas;
	});

	console.log(curso.tests);
	$.each(curso.tests, (i, obj)=>{
		let divCol = $("<div class='col l4 s6 test'></div>");
		let divImg = $("<div class='nivel valign-wrapper'></div>");
		let img = $(`<img src='assets/img/${obj.image}'/>`);
		let divDetails = $(`<div class='detail'></div>`);
		let title = $(`<p class='title'>${obj.name}</p>`);
		let temas = $(`<a class='modal-trigger' href='#modal1' id='${obj.codigo}'>Temario</a>`);
		let quiz = $("<a>Quiz</a>");

		temas.on("click", (e)=>{
			rowModal.empty();

			var filtro = curso.tests.filter((obj)=>{
				return obj.codigo == $(e.target).prop("id");
			})[0];

			//llenar modal
			$.each(filtro.themes, (i, tema)=>{
				if(i<3){
					rowModal.append(`<p>${tema}</p>`);
					rowModal.append("<p>Esta es la información para el tema .Debes considerar este tema para resolver este quiz.</p>");
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

	button.append(aClose);
	modalContent.append(button);
	modalContent.append(rowModal);
	divButon.append(butonQuiz);
	modalContent.append(divButon);
	modal.append(modalContent);

	col12.append(modal);
	sub1.append(h3);
	col12.append(sub1);
	col12.append(sub2);
	row.append(modal);
	row.append(col12);
	container.append(row);
	practicas.append(container);

	return practicas;
};