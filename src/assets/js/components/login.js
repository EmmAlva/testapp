'use strict';

const Login = (update, wrapper) => {
    const container = $('<section class="login-container main-container"></section>');
    const row = $('<div class="row"></div>');
    const column = $('<div class="col s12 m6 l4 center-column"></div>');

    const row0 = $('<div class="row login-logo"></div>');
    const col0 = $('<div class="col l12 s12 center"></div>');
    const logo = $('<img src="assets/img/logo-utp.png" alt="logo">');

    const row1 = $('<div class="row"></div>');
    const col1 = $('<div class="col l12 s12 center"></div>');
    const title = $('<h1 class="font-logo">TestAPP</h1>');

    const row2 = $('<div class="row"></div>');
    const form = $('<form class="col l12 s12"></form>');
    const divIn0 = $('<div class="input-field col s12"></div>');
    const span0 = $('<span id="response0" class="login_error"></span>');
    const input0 = $('<input id="user_name" value="1234" type="text" class="validate m-0">');
    const label0 = $(' <label for="user_name">Usuario</label>');

    const divIn1 = $('<div class="input-field col s12"></div>');
    const input1 = $('<input id="password" value="1234" type="password" class="validate m-0">');
    const label1 = $('<label for="password">Password</label>');
    const span1 = $('<span id="response1" class="login_error"></span>');

    const btn = $('<button class="center bg_morado btn btn-bottom">INGRESAR</button>');

    let userInput = null;
    let userPassword = null;
    const inputCorrect = {'border-bottom-color': '#ABCB6A', 'box-shadow': '0 1px 0 0 #ABCB6A'};
    const inputError = {'border-bottom-color': '#B01E31', 'box-shadow': '0 1px 0 0 #B01E31'};
    input0.on('blur', () => {
        const findUser = jQuery.grep(state.users, function (n) {
            return n.id == input0.val();
        });
        if (findUser.length === 1) {
            userInput = findUser[0];
            input0.css(inputCorrect);
            span0.text('');
        } else {
            userInput = null;
            userPassword = null;
            input0.css(inputError);
            span0.text('*Usuario Inválido');
        }
    });
    input1.on('blur', () => {
        if (userInput !== null) {
            const findUser = jQuery.grep([userInput], function (n) {
                return n.password == input1.val();
            });
            if (findUser.length === 1) {
                userPassword = findUser[0];
                input1.css(inputCorrect);
                span1.text('');
            } else {
                input1.css(inputError);
                span1.text('*Contraseña Inválida');
            }
        } else {
            userPassword = null;
            userInput = null;
            input0.css(inputError);
            span0.text('*Ingrese Usuario');
            input1.css(inputError);
            span1.text('*Ingrese Contraseña');
        }
    });

    btn.on('click', (e) => {
        e.preventDefault();
        if (userPassword == userInput && userPassword !== null) {
            state.userLogin = userInput;
            wrapper.prepend(Header(state.userLogin));
            container.replaceWith(Cursos());
            $(".button-collapse").sideNav({
                menuWidth: 250,
                closeOnClick: true
            });
        } else if (userInput !== null) {
            input0.css(inputCorrect);
            span0.text('');
        } else if (userPassword == null) {
            userInput = null;
            input0.css(inputError);
            span0.text('*Ingrese Usuario Válido');
        }

    });

    col0.append(logo);
    row0.append(col0);
    column.append(row0);

    col1.append(title);
    row1.append(col1);
    column.append(row1);

    divIn0.append(input0);
    divIn0.append(label0);
    divIn0.append(span0);

    divIn1.append(input1);
    divIn1.append(label1);
    divIn1.append(span1);

    form.append(divIn0);
    form.append(divIn1);
    row2.append(form);
    column.append(row2);

    column.append(btn);
    row.append(column);
    container.append(row);
    return container;
};
