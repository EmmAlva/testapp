'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  // wrapper.append(Construccion);
  wrapper.append(Header());

  if (state.userLogin == null) {
    wrapper.append(Login(_ => render(root)));
  }
  else {
    wrapper.append(Cursos(_ => render(root)));
  }
  root.append(wrapper);
};

const state = {
    userLogin : null,
    users: null,
    courses: null,
    coursesSelected : null
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
