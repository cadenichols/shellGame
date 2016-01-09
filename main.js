'use strict';

var $boxes;
var $message;
var $reset;

$(document).ready(init);

function init(){
  $reset = $('#reset');
  $boxes = $('.box');
  $message = $('#message');
  $boxes.on('click', boxClicked);
}

function boxClicked(event) {
  $reset.on('click', resetClicked);
  $boxes.off('click');
  var $this = $(this);

  var boxIndex = $(event.target).index();
  var randomIndex = Math.floor(Math.random() * 3);

  if(boxIndex === randomIndex) {
    $this.css('background-color', 'green');
    $message.text('Right!');
  } else {
    $this.css('background-color', 'red');
    $boxes.eq(randomIndex).css('background-color', 'green');
    $message.text('Wrong!');
  }
}

function resetClicked() {
  $boxes.css('background-color', 'white');
  $boxes.on('click', boxClicked);
  $reset.off('click');
  $message.text('Pick!');
}

