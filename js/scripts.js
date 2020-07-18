$(document).ready(function () {
  $('#portfolio-btn').click(function() {
    $('html, body').animate({
        scrollTop: $('#portfolio-section').offset().top
    }, 1500);
  });
});

//Modal effect
 $('#exampleModal').modal();

 function afterModalTransition(e) {
   e.setAttribute("style", "display: none !important;");
   
 }
 $('#exampleModal').on('hide.bs.modal', function (e) {
   setTimeout( () => afterModalTransition(this), 500);
   
})
