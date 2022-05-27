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
//text-video
$(".text-video").mouseenter(function () {
    $(".text-video").css("background-color", "#ff0000").css("color", "#ffffff");
  });
  $(".text-video").mouseleave(function () {
    $(".text-video").css("background-color", "#000000").css("color", "#fbc204");
  });
//text-about
$(".text-about").mouseenter(function () {
    $(".text-about").css("background-color", "#fbc204").css("color", "#ffffff");
  });
  $(".text-about").mouseleave(function () {
    $(".text-about").css("background-color", "#000000").css("color", "#fbc204");
  });
//text-tittle-ourteam
$(".text-tittle-ourteam").mouseenter(function () {
    $(".text-tittle-ourteam").css("background-color", "#fbc204").css("color", "#ffffff");
  });
  $(".text-tittle-ourteam").mouseleave(function () {
    $(".text-tittle-ourteam").css("background-color", "#000000").css("color", "#fbc204");
  });
//text-tittle-review
$(".text-tittle-review").mouseenter(function () {
    $(".text-tittle-review").css("background-color", "#fbc204").css("color", "#ffffff");
  });
  $(".text-tittle-review").mouseleave(function () {
    $(".text-tittle-review").css("background-color", "#000000").css("color", "#fbc204");
  });
//tex-contacts 
$(".tex-contactss").mouseenter(function () {
    $(".tex-contactss").css("background-color", "#fbc204").css("color", "#ffffff");
  });
  $(".tex-contactss").mouseleave(function () {
    $(".tex-contactss").css("background-color", "#000000").css("color", "#fbc204");
  });
//text-title-app
$(".text-title-appo").mouseenter(function () {
    $(".text-title-appo").css("background-color", "#fbc204").css("color", "#ffffff");
  });
  $(".text-title-appo").mouseleave(function () {
    $(".text-title-appo").css("background-color", "#000000").css("color", "#fbc204");
  });
//.btn
$(".btn").mouseenter(function () {
    $(".btn").css("background-color", "#fbc204").css("color", "#ffffff");
  });
  $(".btn").mouseleave(function () {
    $(".btn").css("background-color", "#009dff").css("color", "#ffffff");
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
  
  //fetch
  $("#lista-componentes li").click(function(){
    var nombrearchivo = $(this).attr("archivo-componentes");

    $("#lista-componentes li").removeClass("active");
    $(this).addClass("active"); /* Añadir clase */

    fetch("componentes/" + nombrearchivo + ".html")
        .then(function(response){
            return response.text(); //Indica el tipo de dato que devuelve al leer el archivo
        })
        .then(function(data){
            //la variable data contiene los datos
            console.log(data);
            $("#visor-componentes").html(data);
        })
})



});
