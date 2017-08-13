'use strict';

const Header = (data) => {
 const container = $('<header class="main-container"></header>');
 const row = $('<div class="row"></div>');
 const column = $('<div class="col s12 m6 l4 center-column"></div>');

 const nav = $('<nav class="bg_morado"></nav>');
 const div = $("<div class='nav-wrapper'></div>");
 const back = $('<a href="#!" class="back left" style="display: none;"><i class="material-icons ">chevron_left</i></a>');
 const logoTest = $('<a href="#!" class="brand-logo font-logo">TestAPP</a>');
 const aMenu = $('<a href="#" data-activates="mobile-demo" class="button-collapse right"></a>');
 const iconMenu = $("<i class='material-icons'>menu</i>");
 const ul = $('<ul class="side-nav" id="mobile-demo"></ul>');
 const li0 = $('<li></li>');
 const profile = $('<div class="bg_morado bg_profile"></div>');
 const circle = $('<div class="circle"></div>');
 circle.css({'background-image': 'url("' + data.image + '")'});
 const name = $('<a class=" white-text" href="#"></a>');

 const span = $('<span>Hola ' + data.name + ' !</span>');
 const menuCourses = $('<a href="#">Cursos</a>');
 const menuProfile = $('<a href="#">Perfil</a>');
 const menuSettings = $('<a href="#">Configuración</a>');
 const menuLogOut = $('<li><a href="">Salir</a></li>');
 const li1 = $('<li></li>');
 const li2 = $('<li></li>');
 const li3 = $('<li></li>');
 const li4 = $('<li></li>');

 menuProfile.on('click', () => {
  $('section').replaceWith(Construccion());
 });
 menuSettings.on('click', () => {
  $('section').replaceWith(Construccion());
 });
 menuCourses.on('click', () => {
  $('section').replaceWith(Cursos());
 });

 column.append(nav);
 nav.append(div);
 name.append(span);
 profile.append(circle);
 profile.append(name);
 li0.append(profile);
 li2.append(menuProfile);
 li1.append(menuCourses);
 li3.append(menuSettings);
 li4.append(menuLogOut);
 ul.append(li0);
 ul.append(li1);
 ul.append(li2);
 ul.append(li3);
 ul.append(li4);
 div.append(logoTest);
 aMenu.append(iconMenu);
 div.append(aMenu);
 div.append(back);
 div.append(ul);

 row.append(column);
 container.append(row);
 return container;

};
