'use strict';

const render = (root) => {
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Login);

    root.append(wrapper);
};

const state = {
    users: null,
    courses: null
};

$(_ => {


    $.getJSON("/api/users/", (data) => {
        state.users = data;
        console.log(data);
        $.getJSON("/api/courses/", (json) => {
            state.courses = json;
            console.log(json);
            const root = $('.root');
            render(root);
             //active menu
            $(".button-collapse").sideNav();

        });

    });  


});