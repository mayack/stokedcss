// Popover
// Requires jQueryUI positioning


function popoverFloat() {
  var targetId = $(this).data('popover'),
      target = document.getElementById(targetId),
      offsetX = $(this).data('popover-offset-x'),
      offsetY = $(this).data('popover-offset-y'),
      position = $(this).data('popover-position'),
      popover = $('.s-floatingPopover.popoverVisible');

  if (position === undefined) {
    position = 'center';
  }

  if (offsetX === undefined) {
    offsetX = 0;
  }

  if (offsetY === undefined) {
    offsetY = 15;
  }

  $(target).position({
    my: position + "+" + offsetX + " top+" + offsetY,
    at: position + " bottom",
    of: $(this),
    collision: "flip",
    using: function(obj, info){
      var item_top = (info.vertical!== "top"? "bottom" : "top");
      $(this).addClass("s-popover--" + item_top + position);
      $(this).removeClass("s-popover--" + (item_top === "top"? "bottom" : "top") + position);
      $(this).css({
        left: obj.left + 'px',
        top: obj.top + 'px'
      });
    }
  });

  if ($(popover).length && $(popover).attr('id') === targetId && $(this).hasClass('popoverActive')) {
    $(target).removeClass('popoverVisible');
    $(this).removeClass('popoverActive');
  } else if ($(popover).length && $(popover).attr('id') === targetId && $(this).hasClass('popoverActive') === false) {
    // This case exists because timeline actions' popover is not unique.
    $('[data-popover].popoverActive').removeClass('popoverActive');
    $(this).addClass('popoverActive');
  } else if ($(popover).length && $(popover).attr('id') !== targetId) {
    $(popover).removeClass('popoverVisible');
    $('[data-popover].popoverActive').removeClass('popoverActive');
    $(target).addClass('popoverVisible');
    $(this).addClass('popoverActive');
  } else {
    $(target).addClass('popoverVisible');
    $(this).addClass('popoverActive');
  }

}

$(function(){
  $('[data-popover]').each(function(){
    var eventType = $(this).data('popover-event');
    if (eventType === 'click' || eventType === undefined) {
      $(this).click(popoverFloat);
    } else if (eventType === 'hover') {
      $(this).hover(popoverFloat);
    }
  });
});


// popoverFloat Disabler

function ClickOutsideCheck(e) {
  var el = e.target,
      popup = $('.s-floatingPopover.popoverVisible')[0];
  if (popup === undefined) {
    return true;
  }
  while (true) {
    if (el === popup || $(el).attr('data-popover') !== undefined) {
      return true;
    } else if (el === document) {
      $('.s-floatingPopover.popoverVisible').removeClass('popoverVisible');
      $('.popoverActive[data-popover]').removeClass('popoverActive');
      return false;
    } else {
      el = $(el).parent()[0];
    }
  }
}

$(document).bind('mousedown.popup', ClickOutsideCheck);
