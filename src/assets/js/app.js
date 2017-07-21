'use strict';

const render = (root) => {
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Questions(state.courses[3].tests[2], 7));

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
        });
    });
});