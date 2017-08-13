'use strict';

const render = (root) => {
 root.empty();
 const wrapper = $('<div class="wrapper"></div>');
 wrapper.append(Login(_ => render(root), wrapper));

 root.append(wrapper);

};

const state = {
 users: null,
 courses: null,
 userLogin: null,
 coursesSelected: null,
 practicSelect: null,
 questions: null
};

$(_ => {

 $.getJSON("/api/users/", (data) => {
  state.users = data;
  $.getJSON("/api/courses/", (json) => {
   state.courses = json;
   //active menu
   const root = $('.root');
   render(root);

   $('.carousel-number').owlCarousel({
    items: 5,
    loop: false,
    dots: false,
    margin: 0,
    URLhashListener: true,
    autoplay: false,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
   });
   $('.carousel-question').owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    margin: 0,
    URLhashListener: true,
    autoplay: false,
    startPosition: 'URLHash',
    mouseDrag: false,
    touchDrag: false
   });
  });
 });
});
