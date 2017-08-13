'use strict';
const Practicas = () => {
    $('.back').show();
    $('.back').on('click', () => {
        container.replaceWith(Cursos());
    });

    const container = $('<section class="exams-container main-container"></section>');
    const row = $('<div class="row"></div>');
    const column = $('<div class="col s12 m6 l4 center-column"></div>');

    const sub1 = $("<div class='row center'></div>");
    const h3 = $("<h4>Practicas</h4>");
    const sub2 = $("<div class='row'></div>");


    $.each(state.coursesSelected.tests, (i, obj) => {

        const divCol = $("<div class='col s10 offset-s1 test'></div>");

        let divImg = $("<a class='col s4'></a>");
        let img = $(`<img src='assets/img/${obj.image}'/>`);
        let divDetails = $(`<div class=' col s8 detail'></div>`);
        let title = $(`<p class='title'>${obj.name}</p>`);
        let temas = $(`<a class='modal-trigger' href='#modal1' id='${obj.codigo}'>Temario</a>`);
        let quiz = $("<a href='#' class='btn-danger'>Quiz</a>");

        if (obj.name == "Exámen Final"){
            divCol.css({'border-color':'#F9AC3E'});
        }

        quiz.on("click", (e) => {
            e.preventDefault();
            state.practicSelect = obj;
            //console.log(obj);
            container.replaceWith(Preguntas());
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
    column.append(sub1);
    column.append(sub2);
    row.append(column);
    container.append(row);

    return container;
};
