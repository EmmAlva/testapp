'use strict';

const Result = (percentFinal, correctAnswer, questions) => {

    const container = $('<div class="result-container main-container"></div>');
    const row = $('<div class="row"></div>');
    const column = $('<div class="col s12 m4 center-column"></div>');

    const row1 = $('<div class="row center"></div>');
    const h1 = $('<h1>' + percentFinal + '% </h1>');
    let message;
    percentFinal >= 85 ? message = "¡Excelente!" : message = "¡Sigue Practicando!";
    const h5 = $('<h5>' + message + '</h5>');
    row1.append(h1);
    row1.append(h5);

    const themesWrongAnswer = [];
    const row2 = $('<div class="row row-result center"></div>');
    questions.forEach((data, i) => {
        themesWrongAnswer.push(data.theme);

        const index = i + 1;
        const modalAnswer = $('<a class="modal-trigger" href="#modal' + index + '"></a>');
        const containerNumber = $('<div class="general-answer" ></div>');
        const number = $('<span>' + index + '</span>');
        if (correctAnswer.length > 0) {
            correctAnswer.forEach((data) => {
                if (data === index) {
                    containerNumber.addClass('correct-answer');
                }
            });
        }
        const modalContainer = $('<div id="modal' + index + '" class="modal"></div>');
        const modalContent = $(' <div class="modal-content"></div>');
        const closeModal = $('<a href="#!" class="modal-action modal-close">&#10005</a>');
        const questionNumber = $('<p>Pregunta ' + index + ':</p>');
        const questionText = $('<h5>' + data.problem + '</h5>');
        const questionAnswer = $('<p>Respuesta Correcta:<br><h3>' + data[data.correct.toString()] + '</h3></p>');
        modalContent.append(closeModal);
        modalContent.append(questionNumber);
        modalContent.append(questionText);
        modalContent.append(questionAnswer);
        modalContainer.append(modalContent);
        modalContainer.modal();

        containerNumber.append(number);
        modalAnswer.append(containerNumber);
        row2.append(modalContainer);
        row2.append(modalAnswer);
    });

    //Filtrar elementos repitentes
    Array.prototype.unique = function (a) {
        return function () {
            return this.filter(a)
        }
    }(function (a, b, c) {
        return c.indexOf(a, b + 1) < 0
    });

    const newTheme = themesWrongAnswer.unique();
    const row3 = $('<div class="row center"></div>');
    const title = $('<h5>Repasar:</h5>');
    row3.append(title);
    newTheme.forEach((theme) => {
        const tema = $('<div class="btn-tema"></div>');
        const span = $('<span class="">'+theme+'</span>');
        tema.append(span);
        row3.append(tema);
    });

    column.append(row1);
    column.append(row2);
    column.append(row3);
    row.append(column);
    container.append(row);

    return container;
};
