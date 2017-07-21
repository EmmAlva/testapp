(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const render = (root) => {
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Header);
    wrapper.append(Result);

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
'use strict';

const Header = () => {
    const nav = $('<nav class="bg_nav"></nav>');
    const navWrap = $('<div class="nav-wrapper"></div>');
    const aLogo = $('<a href="#!" class="brand-logo">TestAPP</a>');
    const menu = $(' <a href="#" data-activates="mobile-demo" class="button-collapse right"><i class="material-icons">menu</i></a>');
    const ul = $('<ul class="side-nav" id="mobile-demo"></ul>');
    const li1 = $('<li><div class="bg_profile"></div><div class="circle"></div><a class="select-label white-text" href="#"><span>Hola Alonso !</span></a></li>');
    const li2 = $('<li><a href="">Profile</a></li>');
    const li3 = $('<li><a href="">Practice</a></li>');
    const li4 = $('<li><a href="">Settings</a></li>');
    const li5 = $('<li><a href="">Log out</a></li>');

    ul.append(li1);
    ul.append(li2);
    ul.append(li3);
    ul.append(li4);
    ul.append(li5);
    navWrap.append(aLogo);
    navWrap.append(menu);
    navWrap.append(ul);
    nav.append(navWrap);

    return nav;
};

const Result = () => {
    const main = $('<section id="resultado"></section>');
    const container = $('<div class="container"></div>');
    const row = $('<div class="row center"></div>');
    const porcentaje = $('<div class="col l12 s12"></div>');
    const h1 = $('<h1>60%</h1>');
    const h5 = $('<h5>¡Sigue mejorando!</h5>');
    porcentaje.append(h1);
    porcentaje.append(h5);
    row.append(porcentaje);

    const row2 = $('<div class="row center"></div>');
    const respuestas = $('<div class="col l12 s12"></div>');
    const dropdown = $('<a class="dropdown-button btn" data-beloworigin="true" href="#" data-activates="dropdown1">Tus respuestas <i class="material-icons">cloud</i></a>');
    const ulDD = $('<ul id="dropdown1" class="dropdown-content"></ul>');
    const liDD1 = $('<li><a href="#!">Correctas</a></li>');
    const liDD2 = $('<li><a href="#!">Incorrectas</a></li>');
    ulDD.append(liDD1);
    ulDD.append(liDD2);
    respuestas.append(dropdown);
    respuestas.append(ulDD);
    row2.append(respuestas);

    // const row3 = $('<div class="row center"></div>');
    // const feedback = $('<div class="col l12 s12"></div>');

    container.append(row);
    container.append(row2);
    main.append(container);
    return main;
};
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
},{}]},{},[1])