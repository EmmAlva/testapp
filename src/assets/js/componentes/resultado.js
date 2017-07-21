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