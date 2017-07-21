'use strict';

const render = (root) => {
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Questions(state.courses[3].tests[3], 15));

    root.append(wrapper);
};

const state = {
    users: null,
    courses: null
};

$(_ => {

    $.getJSON("/api/users/", (data) => {
        state.users = data;
        $.getJSON("/api/courses/", (json) => {
            state.courses = json;
            const root = $('.root');
            render(root);
            $('.carousel-number').owlCarousel({
                items:5,
                loop:false,
                dots: false,
                margin:0,
                URLhashListener:true,
                autoplay:false,
                startPosition: 'URLHash',
            });
            $('.carousel-question').owlCarousel({
                items:1,
                loop:false,
                dots: false,
                margin:0,
                URLhashListener:true,
                autoplay:false,
                startPosition: 'URLHash',
            });
        });
    });
});