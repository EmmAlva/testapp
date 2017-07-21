'use strict';

const Header = () => {
    const nav = $('<nav></nav>');
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
    const main = $('<section id="results"></section>');
    const container = $('<div class="container"></div>');
    const row = $('<div class="row center"></div>');
    const col12 = $('<div class="col l12 s12"></div>');

    return main;
};