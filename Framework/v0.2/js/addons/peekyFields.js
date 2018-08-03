// Peeky Fields

function blurCb(target) {
  target.classList
    [target.value ? 'add' : 'remove']
    ('occupied');
}

$(function(){

  $('.s-peekyField input, .s-peekyField select').blur(function(){
     blurCb(this);
  });
  $('.s-peekyField select').prop("selectedIndex", -1);

});
