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
	const option1 = $('<option value="1">1</option>');
	const option2 = $('<option value="2">2</option>');
	const option3 = $('<option value="3">3</option>');
	const option4 = $('<option value="4">4</option>');
	const option5 = $('<option value="5">5</option>');
	const option6 = $('<option value="6">6</option>');
	const option7 = $('<option value="7">7</option>');
	const option8 = $('<option value="8">8</option>');
	const option9 = $('<option value="9">9</option>');
	const option10 = $('<option value="10">10</option>');
	const option11 = $('<option value="11">11</option>');
	const option12 = $('<option value="12">12</option>');
	const option13 = $('<option value="13">13</option>');
	const option14 = $('<option value="14">14</option>');
	const option15 = $('<option value="15">15</option>');
	const option16 = $('<option value="16">16</option>');
	const option17 = $('<option value="17">17</option>');
	const option18 = $('<option value="18">18</option>');
	const option19 = $('<option value="19">19</option>');
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
	select.append(option1);
	select.append(option2);
	select.append(option3);
	select.append(option4);
	select.append(option5);
	select.append(option6);
	select.append(option7);
	select.append(option8);
	select.append(option9);
	select.append(option10);
	select.append(option11);
	select.append(option12);
	select.append(option13);
	select.append(option14);
	select.append(option15);
	select.append(option16);
	select.append(option17);
	select.append(option18);
	select.append(option19);
	select.append(option20);

	return section;
	
}

/*<section id="cantidad">
		<div class="container">
			<div class="row">
				<div class="col l12 s12">
					<h3>Define una cantidad de preguntas</h3>
				</div>
			</div>
			<div class="row">
				<div class="col l12 s12 center">
					<div class="number center-block valign-wrapper" >
						<select name="number" id="questions">select
								<option value="1"></option>
								<option value="2"></option>
								<option value="3"></option>
								<option value="4"></option>
						</select>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col l12 s12 center">
					<button class="btn ">Empezar</button>
				</div>
			</div>			
		</div>		
		<button class="center btn-down select-label" >QUIZ</button>
	</section>*/