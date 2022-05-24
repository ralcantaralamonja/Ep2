$(function () {
  //home
  $("#home").mouseenter(function () {
    $("#home").css("background-color", "#fbc204").css("color", "#000000");
  });
  $("#home").mouseleave(function () {
    $("#home").css("background-color", "#080c0c").css("color", "#FFFFFF");
  });
  //about
  $("#about").mouseenter(function () {
    $("#about").css("background-color", "#fbc204").css("color", "#000000");
  });
  $("#about").mouseleave(function () {
    $("#about").css("background-color", "#080c0c").css("color", "#FFFFFF");
  });
  //services
  $("#services").mouseenter(function () {
    $("#services").css("background-color", "#fbc204").css("color", "#000000");
  });
  $("#services").mouseleave(function () {
    $("#services").css("background-color", "#080c0c").css("color", "#FFFFFF");
  });
  //team
  $("#team").mouseenter(function () {
    $("#team").css("background-color", "#fbc204").css("color", "#000000");
  });
  $("#team").mouseleave(function () {
    $("#team").css("background-color", "#080c0c").css("color", "#FFFFFF");
  });
  //reviews
  $("#reviews").mouseenter(function () {
    $("#reviews").css("background-color", "#fbc204").css("color", "#000000");
  });
  $("#reviews").mouseleave(function () {
    $("#reviews").css("background-color", "#080c0c").css("color", "#FFFFFF");
  });
 
  //videos
  $("#videos").mouseenter(function () {
    $("#videos").css("background-color", "#fbc204").css("color", "#000000");
  });
  $("#videos").mouseleave(function () {
    $("#videos").css("background-color", "#080c0c").css("color", "#FFFFFF");
  });
  //contact
  $("#contact").mouseenter(function () {
    $("#contact").css("background-color", "#fbc204").css("color", "#000000");
  });
  $("#contact").mouseleave(function () {
    $("#contact").css("background-color", "#080c0c").css("color", "#FFFFFF");
  });
  // appoinment
  $("#appoinment").mouseenter(function () {
    $("#appoinment").css("background-color", "#fbc204").css("color", "#000000");
  });
  $("#appoinment").mouseleave(function () {
    $("#appoinment").css("background-color", "#080c0c").css("color", "#FFFFFF");
  });


  //AGREGANDO GALERIA
  $("#galeria figure").append("<figcaption>"); //agregando figcaption

  //efecto de desbanecido para la galeria
  $("#galeria figure").mouseenter(function () {
    $(this).find("figcaption").stop().fadeIn("fast");
  });

  $("#galeria figure").mouseleave(function () {
    $(this).find("figcaption").stop().fadeOut("fast");
  });

  $("#galeria figure").each(function () {
    var nombre = $(this).find("img").attr("title");

    //agregar nombre en la cortina y icono
    $(this)
      .find("figcaption")
      .html("<div><p>" + nombre + "</p></div>");
  });
});
