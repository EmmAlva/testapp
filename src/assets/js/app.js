'use strict';

const render = (root) => {
    const wrapper = $('<div class="wrapper"></div>');

    root.append(wrapper);
};

$( _ => {
    const root = $('.root');
    render(root);
});