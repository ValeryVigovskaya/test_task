const buttonClickBlock = document.getElementById('button_one');
const blockTitle = document.getElementById('block-title');
const buttonClickReverse = document.getElementById('button_two');
const blockMiddle = document.getElementById('middle-block');
const blockLeft = document.getElementById('left-block');
const list = document.querySelectorAll('list__item');
const section = document.getElementById('list');
const items = document.querySelectorAll('li');
const popupButton = document.getElementById('popup-button');
const popup = document.getElementById('popup');

//функционал работы кнопки 1
//при проверке активного класса блок добавляется или удаляется
function openBlock(block) {
  if (!block.classList.contains('list__item_close')) {
    return block.classList.add('list__item_close');
  } else {
    return block.classList.remove('list__item_close');
  }
}

buttonClickBlock.addEventListener('click', function () {
  openBlock(blockTitle);
})

//функционал работы кнопки 2
$(function () {
  jQuery.fn.swap = function (right) {
    right = jQuery(right)[2];
    var left = this[1],
      a2 = left.cloneNode(true),
      b2 = right.cloneNode(true),
      stack = this;

    left.parentNode.replaceChild(b2, left);
    right.parentNode.replaceChild(a2, right);

    stack[0] = a2;
    return this.pushStack(stack);
  };

  $('#button_two').on('click', function () {
    $('.list__item').swap('.list__item');
  });
});

//функция закрытия попапа по escape
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
  }
}
//универсальные функции открытия и закрытия
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape)
}
openPopup(popup);

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

popupButton.addEventListener('click', function () {
  closePopup(popup);
});