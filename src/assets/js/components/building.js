'use strict';

const Construccion = () => {
    const container = $('<section class="build-container main-container"></section>');
    const row = $('<div class="row"></div>');
    const column = $('<div class="col s12 m6 l4 center-column  bg_morado"></div>');
    const div = $('<div class="container absolute-child "></div>');
    const row0 = $('<div class="row"></div>');
    const col0 = $('<div class="col l12 s12 center relative-col white-text"></div>');
    const img = $('<img src="assets/img/data.svg" alt ="construccion">');
    const title = $('<h3><strong>¡En Construcción!</strong></h3>');
    const p = $('<p><strong>Esta sección estará disponible para ti muy pronto.</strong></p>');

    column.append(div);
    div.append(row0);
    row0.append(col0);
    col0.append(img);
    col0.append(title);
    col0.append(p);

    row.append(column);
    container.append(row);
    return container;

};