//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require prettify/prettify
//= require prettyprint
//= require jquery.jsPlumb-1.4.0-all-min
//= require plans
//= require checkout
//= require autoresize
//= require wistia_helper
//= require headhesive.min.js

$(function() {
  $('textarea').autosize();

  if ($('.landing #header-wrapper').length) {
    var header = new Headhesive('.landing #header-wrapper', { offset: 500 });
  }
});
