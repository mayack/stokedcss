$(document).tooltip({
  items: "[data-tooltip]",
  hide: { duration: 300 },
  show: {
    delay: 500,
    duration: 300,
  },
  position: {
    my: "center top+10",
    at: "center bottom"
  },
  content: function () {
      return $(this).data('tooltip');
  },
});
