'use strict';

const Questions = (theme, quantity) => {

    const container = $('<div class="question-container main-container"></div>');
    const row = $('<div class="row"></div>');
    const relative = $('<div class="col s12"></div>');

    const carouselNumber = $('<div class="owl-carousel owl-theme center carousel-number"></div>');
    const carruselQuestion = $('<div class="owl-carousel owl-theme center carousel-question"></div>');

    const submit = $('<button class="btn btn-submit">Enviar prueba</button>');

    const easy = [];
    const medium = [];
    const difficult = [];

    const showQuestion = [];
    const quesquan = {
        "5": [2, 2, 1],
        "10": [4, 3, 3],
        "15": [5, 5, 5],
        "20": [7, 7, 6]
    };


    theme.questions.forEach((data) => {
        if (data.difficult == 1) {
            easy.push(data);
        } else if (data.difficult == 2) {
            medium.push(data);
        } else if (data.difficult == 3) {
            difficult.push(data);
        }
    });
    const selectQuantity = quesquan["" + quantity + ""];

    easy.forEach((e, index) => {
        if (index < selectQuantity[0]) {
            showQuestion.push(e);
        }
    });
    medium.forEach((e, index) => {
        if (index < selectQuantity[1]) {
            showQuestion.push(e);
        }
    });
    difficult.forEach((e, index) => {
        if (index < selectQuantity[2]) {
            showQuestion.push(e);
        }
    });

    const percentQ = 100 / showQuestion.length;
    let percentFinal = 0;

    let totalQuestion = 0;

    showQuestion.forEach((data, index) => {
        console.log(data);
        if (index < showQuestion.length) {
            const i = index + 1;
            const title = $('<h5>Pregunta ' + i + ':</h5>');
            const problem = $('<h4 class="problem">' + data.problem + '</h4>');

            const itemNumber = $('<div class="item"><a href="#' + i + '"><div' +
                ' class="item-number">' + i + '</div></a></div>');
            const itemQuestion = $('<div class="item item-question" data-hash="' + i + '"></div>');

            itemQuestion.append(title);
            itemQuestion.append(problem);

            const array = [1, 2, 3, 4];
            array.forEach((ind) => {
                const btn = $('<button class="btn btn-info">' + data["" + ind + ""] + '</button>');
                btn.on('click', () => {
                    if (ind.toString() === data.correct.toString()) {
                        percentFinal += percentQ;
                        totalQuestion += index;
                    }
                });
                itemQuestion.append(btn);
            });
            carouselNumber.append(itemNumber);
            carruselQuestion.append(itemQuestion);
        }
    });

    submit.on('click', (e) =>{
        //Result(percentFinal, totalQuestion,showQuestion);
        $('.col.s12').replaceWith(Result(percentFinal, totalQuestion,showQuestion));
    });


    relative.append(carouselNumber);
    relative.append(carruselQuestion);
    row.append(relative);
    container.append(row);


    return container;
};


/*const counterContainer = $('<div class="counter-container"></div>');
const questionsLength = (quantity * 64 );
counterContainer.css('width', questionsLength + 'px');

theme.questions.forEach((e, index) => {
    const windowWith = Math.floor($(window).width() / 64);

    if (index < quantity) {
        const counter = $('<div class="counter"></div>');
        console.log(windowWith);

        const i = index + 1;
        //const medida =
        if (index < windowWith) {
            counter.addClass('active');
        }
        counter.append(i);
        counterContainer.append(counter);
    }
});*/
