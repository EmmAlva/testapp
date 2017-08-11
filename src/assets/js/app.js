'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    //wrapper.append(Header);
    wrapper.append(Questions(state.courses[3].tests[3], 10));
    //wrapper.append(Result(85,4,6,[1,2,3,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4]));
    //wrapper.append(Login(_ => render(root)));

    root.append(wrapper);

};

const state = {
    userLogin: null,
    users: null,
    courses: null,
    coursesSelected: null,
    practicSelect: null,
    questions: null
};

$(_ => {

    $.getJSON("/api/users/", (data) => {
        state.users = data;
        $.getJSON("/api/courses/", (json) => {
            state.courses = json;
            //active menu
            const root = $('.root');
            render(root);
            // state.nextPage= Login;

            $(".button-collapse").sideNav();
            /*$('#modal1').modal();*/
            $('.carousel-number').owlCarousel({
                items: 5,
                loop: false,
                dots: false,
                margin: 0,
                URLhashListener: true,
                autoplay: false,
                autoplayHoverPause:true,
                startPosition: 'URLHash'
            });
            $('.carousel-question').owlCarousel({
                items: 1,
                loop: false,
                dots: false,
                margin: 0,
                URLhashListener: true,
                autoplay: false,
                startPosition: 'URLHash',
                mouseDrag: false,
                touchDrag: false
            });

        });
    });



});
