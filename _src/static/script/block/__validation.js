$.mask.definitions['9'] = false;
$.mask.definitions['2'] = "[0-9]";
$("#phone-1").mask("+7 (495) 222-2222");

$("#phone-2").mask("+7(222) 222-2222");

$("#center_ok").click(function () {
  $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");
$("#center_not_ok").mask("+7(999) 999-9999");

