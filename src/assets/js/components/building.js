'use strict';

const Construccion = () =>{
	const section = $('<section id="build" class="relative-col bg_morado" ></section>');
	const div = $('<div class="container absolute-child "></div>');
	const row0 = $('<div class="row"></div>');
	const col0 = $('<div class="col l12 s12 center relative-col white-text"></div>');
	const img = $('<img src="assets/img/data.svg" alt ="construccion">');
	const title = $('<h3><strong>¡EN CONSTRUCCIÓN</strong></h3>');
	const p = $('<p><strong>Esta sección estará disponible para ti muy pronto</strong></p>');

	section.append(div);
	div.append(row0);
	row0.append(col0);
	col0.append(img);
	col0.append(title);
	col0.append(p);

	return section;

};