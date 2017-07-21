'use strict';

const Questions = (theme, quantity) => {
    const container = $('<div class="container"></div>');
    const row = $('<div class="row"></div>');
    const relative = $('<div class="col s12 relative-col"></div>');
    const absolute = $('<div class="absolute-child"></div>');

    const carouselNumber = $('<div class="owl-carousel owl-theme center carousel-number"></div>');
    const carruselQuestion = $('<div class="owl-carousel owl-theme center' +
        ' carousel-question"></div>');

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

    showQuestion.forEach((data, index) => {
        if (index < showQuestion.length) {
            const i = index + 1;
            const title = $('<h5>Pregunta ' + i + ':</h5>');
            const problem = $('<h4 class="problem">' + data.problem + '</h4>');

            const itemNumber = $('<div class="item"><a href="#' + data.name + '"><div' +
                ' class="item-number">' + i + '</div></a></div>');
            const itemQuestion = $('<div class="item item-question" data-hash="' + data.name + '"></div>');

            itemQuestion.append(title);
            itemQuestion.append(problem);

            const array = [1, 2, 3, 4];
            array.forEach((ind) => {
                const btn = $('<button class="btn btn-info">' + data["" + ind + ""] + '</button>');
                btn.on('click', () => {
                    if (ind.toString() === data.correct.toString()) {
                        console.log('bien');
                        const hash = itemQuestion.data('hash');
                        console.log(hash);

                    } else {
                        console.log('mal');
                    }
                });

                itemQuestion.append(btn);
            });

            carouselNumber.append(itemNumber);
            carruselQuestion.append(itemQuestion);
        }
    });

    absolute.append(carouselNumber);
    absolute.append(carruselQuestion);
    relative.append(absolute);
    row.append(relative);
    container.append(row);

    return container;
};