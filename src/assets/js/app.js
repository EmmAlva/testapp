'use strict';

const render = (root) => {
    const wrapper = $('<div class="wrapper"></div>');
<<<<<<< HEAD
    wrapper.append(Header);
    wrapper.append(Result);
=======
    wrapper.append(Questions(state.courses[3].tests[2], 7));
>>>>>>> fac7dbab10d28de1026b3e96763c8a7ea2f9ceca

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

            $(".button-collapse").sideNav();
            $('.dropdown-button').dropdown('open');
            $('.dropdown-button').dropdown('close');
        });
    });
});