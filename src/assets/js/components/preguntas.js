'use strict';

const Questions = (theme, quantity) => {

    const container = $('<div class="question-container main-container"></div>');
    const row = $('<div class="row"></div>');
    const relative = $('<div class="col s12 m4"></div>');

    const carouselNumber = $('<div class="owl-carousel owl-theme center carousel-number"></div>');
    const carruselQuestion = $('<div class="owl-carousel owl-theme center carousel-question"></div>');

    const submit = $('<button class="btn btn-submit" disabled>Enviar prueba</button>');

    const easy = [];
    const medium = [];
    const difficult = [];

    //Total de preguntas que se muestran
    const showQuestion = [];
    //Cantidad de preguntas y cantidad por nivel facil/intermedio/dificil
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

    //Cantidad de preguntas
    const selectQuantity = quesquan["" + quantity + ""];

    //filtrando niveles de preguntas por cantidad
    const questionLevel = (level, i) => {
        level.forEach((e, index) => {
            if (index < selectQuantity[i]) {
                showQuestion.push(e);
            }
        });
    };
    questionLevel(easy, 0);
    questionLevel(medium, 1);
    questionLevel(difficult, 2);

    //Porcentajes de respuesta
    const percentQ = 100 / showQuestion.length; // porcentaje por respuesta
    let percentFinal = 0;
    let totalQuestion = 0;

    //Nombre de input radio // Respuestas Correctas
    const inputName = [];
    const correctAnswer = [];

    showQuestion.forEach((data, index) => {
        if (index < showQuestion.length) {
            const i = index + 1;
            const problem = $('<div class="problem"><p>' + data.problem + '</p></div>');
            const itemNumber = $('<div class="item item-hash" ></div>');
            const itemNumberHref = $('<a href="#' + i + '"><div class="item-number">' + i + '</div></a>');
            const itemQuestion = $('<div class="item item-question" data-hash="' + i + '"></div>');

            //default selected
            if (i === 1) {
                itemNumber.addClass('selected')
            }


            itemNumber.append(itemNumberHref);
            itemQuestion.append(problem);

            inputName.push(data.name);
            correctAnswer.push(data.correct);
            const array = [1, 2, 3, 4];
            array.forEach((ind) => {
                const input = $('<input type="radio" name="' + data.name + '" value="' + ind + '" id="' + data.name + ind + '">');
                const label = $(' <label for="' + data.name + ind + '">' + data["" + ind + ""] + '</label>');

                label.on('click', () => {
                    totalQuestion += 1;
                    setTimeout(() => {
                        //Agregar color a la pregunta marcada
                        $('.item-hash')[i - 1].classList.add('question-checked');

                        //change hash
                        if (i < showQuestion.length) {
                            location.hash = (i + 1).toString();
                        }
                        //active tranform
                        const owl = $('.carousel-number');
                        owl.owlCarousel();
                        owl.trigger('next.owl.carousel');
                    }, 700);

                    //Activar boton de enviar
                    if (totalQuestion === (showQuestion.length - Math.round(showQuestion.length / 2))) {
                        submit.removeAttr('disabled');
                    }
                });
                itemQuestion.append(input);
                itemQuestion.append(label);
            });
            carouselNumber.append(itemNumber);
            carruselQuestion.append(itemQuestion);
        }

    });

    submit.on('click', () => {
        totalQuestion = 0;
        //Filtrando respuestas
        inputName.forEach((name, index) => {
            const nameVal = $("input[name=" + name + " ]:checked").val();
            if (nameVal === correctAnswer[index].toString()) {
                totalQuestion += 1;
            }
        });

        percentFinal = Math.round(totalQuestion * percentQ);
        setTimeout(() => {
            location.hash = "";
            relative.replaceWith(Result(percentFinal, totalQuestion, showQuestion));
        }, 500);
    });


    relative.append(carouselNumber);
    relative.append(carruselQuestion);
    relative.append(submit);
    row.append(relative);
    container.append(row);


    return container;
};

//Change Hash Carousel
$(window).bind('hashchange', () => {
    const windowHash = location.hash;
    $('.item-hash a').each((i, data) => {
        if (data.hash == windowHash) {
            //add color to number selected
            $('.item-hash')[i].classList.add('selected');
        } else {
            $('.item-hash')[i].classList.remove('selected');
        }
    });
});
