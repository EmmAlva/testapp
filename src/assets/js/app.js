'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Header);

    wrapper.append(Login(_ => render(root)));
    //}
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

        });
    });
});
