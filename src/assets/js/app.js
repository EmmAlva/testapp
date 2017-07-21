'use strict';

const render = (root) => {
    const wrapper = $('<div class="wrapper"></div>');

    wrapper.append(Practicas);

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
        });
    });
});