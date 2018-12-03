// Dialog

function modalDialog() {
  var targetId = $(this).data('dialog'),
      target = document.getElementById(targetId),
      width = $(this).data('dialog-width'),
      className = $(this).data('dialog-class');

  if (width === undefined) {
    width = 400;
  }
  if (className === undefined) {
    className = 'dialogMinimal';
  }

  $(target).dialog({
    modal: true,
    draggable: false,
    dialogClass: className,
    width: width
  });

}

$('[data-dialog]').click(modalDialog);
