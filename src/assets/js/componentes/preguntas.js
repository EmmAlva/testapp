'use strict';

const Questions = (theme, quantity) => {
    const container = $('<div class="container"></div>');
    const row = $('<div class="row"></div>');
    const relative = $('<div class="col s12 relative-col"></div>');
    const absolute = $('<div class="absolute-child"></div>');

    theme.questions.forEach((data, index) => {
        if (index < quantity) {
            console.log(data);
            const p = $('<p>' + data.problem + '</p>');
            absolute.append(p);
        }
    });

    relative.append(absolute);
    row.append(relative);
    container.append(row);

    return container;
};