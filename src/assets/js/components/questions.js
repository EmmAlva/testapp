'use strict';

const Preguntas = () =>{
	const section = $('<section id="cantidad"></section>');
	const div = $('<div class="container"></div>');
	const row0 = $('<div class="row"></div>');
	const col0 = $('<div class="col l12 s12 center"></div>');
	const title = $('<h3>¿CUÁNTAS PREGUNTAS QUIERES?</h3>');

	const row1 = $('<div class="row"></div>');
	const col1 = $('<div class="col l12 s12 center"></div>');
	const select = $('<select name="number" id="questions"></select>');
	const option5 = $('<option value="5">5</option>');
	const option10 = $('<option value="10">10</option>');
	const option15 = $('<option value="15">15</option>');
	const option20 = $('<option value="20">20</option>');

	const btn = $('<button class="center btn-down select-label " >QUIZ</button>');

	section.append(div);
	section.append(btn);
	div.append(row0);
	row0.append(col0);
	col0.append(title);
	div.append(row1);

	row1.append(col1);
	col1.append(select);
	select.append(option5);
	select.append(option10);
	select.append(option15);
	select.append(option20);


	btn.on('click',(e)=>{
		const questions = $("select option:selected" ).text();
		state.questions = questions;
		e.preventDefault();
		
		$('section').replaceWith(Questions(state.practicSelect,state.questions));
		console.log(state.practicSelect);
	});
	return section;
}

// wrapper.append(Questions(state.courses[3].tests[3], 15));
