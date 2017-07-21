'use strict';
const Result = (final, correctas, preguntas) => {
    const main = $('<section id="resultado"></section>');
    const container = $('<div class="container"></div>');
    const row = $('<div class="row row-result center"></div>');
    const porcentaje = $('<div class="col l12 s12"></div>');
    const h1 = $('<h1>'+final+'% </h1>');
    const h5 = $('<h5>¡Sigue mejorando!</h5>');
    porcentaje.append(h1);
    porcentaje.append(h5);
    row.append(porcentaje);

    const row2 = $('<div class="row row-result center"></div>');
    const respuestas = $('<div class="col l12 s12"></div>');
    const dropdown = $('<a class="dropdown-button btn" data-beloworigin="true" href="#" data-activates="dropdown1">Tus respuestas <i class="material-icons">arrow_drop_down</i></a>');
    const ulDD = $('<ul id="dropdown1" class="dropdown-content"></ul>');
    const liDD1 = $('<li><a href="#!">'+correctas+'</a></li>');
    const liDD2 = $('<li><a href="#!">Incorrectas</a></li>');
    ulDD.append(liDD1);
    ulDD.append(liDD2);
    respuestas.append(dropdown);
    respuestas.append(ulDD);
    row2.append(respuestas);

    const row3 = $('<div class="row row-result center"></div>');
    const feedback = $('<div class="col l12 s12"></div>');
    const title = $('<h5>Debes repasar:</h5>');
    const tema1 = $('<div class="col l12 s6"></div>');
    const span1 = $('<span class="btn btn-tema">Tema1</span>');
    const tema2 = $('<div class="col l12 s6"></div>');
    const span2 = $('<span class="btn btn-tema">Tema2</span>');
    tema2.append(span2);
    tema1.append(span1);
    feedback.append(title);
    feedback.append(tema1);
    feedback.append(tema2);
    row3.append(feedback);

    const row4 = $('<div class="row row-result bottom-btn center"></div>');
    const aTest = $('<div class="col l12 s6 col-btn"></div>');
    const spanA1 = $('<span class="btn btn-result flex-valign bg_turquesa">LISTA TEST</span>');
    const aCurso = $('<div class="col l12 s6 col-btn"></div>');
    const spanA2 = $('<span class="btn btn-result flex-valign bg_verde">LISTA CURSOS</span>');
    aCurso.append(spanA2);
    aTest.append(spanA1);
    row4.append(aTest);
    row4.append(aCurso);

    container.append(row);
    container.append(row2);
    container.append(row3);
    container.append(row4);
    main.append(container);

    return main;
};
