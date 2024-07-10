//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var indice, indiceMul, taboaContidos, maxIndice, menuLateral, menuActividades, anchoContidoIni,horaInicio, taboaIntentos;
function inicia(){
$("#botonPechar").keydown(function(e){if (e.which!=9){PechaVentana();}});$("#suggestPost").keydown(function(e){if (e.which!=9){$("#suggestPost").click();}})
$("#suggestPost").click(function() {
window.open("avalia/avalia.htm","width=800,height=600,scrollbars='");
});
var data=new Date();//1
horaInicio=String(data.getHours()).padStart(2, '0')+":"+String(data.getMinutes()).padStart(2, '0')+":"+String(data.getSeconds()).padStart(2, '0')+" h";
   taboaIntentos=new Array();
   menuLateral='';
   menuActividades='<li>	<h2></h2><table width="130" border="0"><ul><tr><td width="26"><a href="javascript:irA(0)" title="Inicio - Partes de la Planta">1</a></td><td width="26"><a href="javascript:irA(1)" title="Album - Partes de la Planta">2</a></td><td width="26"><a href="javascript:irA(2)" title="Aprende - Partes de la Planta">3</a></td><td width="26"><a href="javascript:irA(3)" title="Test - Partes de la Planta">4</a></td></tr></ul></table></li>';
   if (window.opener == null){
      indice=0;
      }else{
      if (window.opener.indice == null){
         indice=0;
      }else{
         indice=window.opener.indice;
      }
   }
   maxIndice=3;
	taboaContidos=new Array();
taboaContidos[0]=new act("Inicio - Partes de la Planta","Inicio - Partes de la Planta","","<object class='ardobject' width='100%' height='420' type='text/html' data='Inicio/inicio.html'></object>",true,"",true,false,false);
taboaContidos[1]=new act("Album - Partes de la Planta","Album - Partes de la Planta","","<object class='ardobject' width='100%' height='420' type='text/html' data='AlbunAct/AlbunAct.htm'></object>",true,"",true,false,false);
taboaContidos[2]=new act("Aprende - Partes de la Planta","Aprende - Partes de la Planta","","<object class='ardobject' width='100%' height='420' type='text/html' data='PanelGraficoActi/PanelGraficoActi.htm'></object>",true,"",true,false,false);
taboaContidos[3]=new act("Test - Partes de la Planta","Test - Partes de la Planta","","<object class='ardobject' width='100%' height='420' type='text/html' data='Test/Test.htm'></object>",true,"",true,false,false);
document.getElementById("botonAdiante").href="javascript:avanza()";
document.getElementById("botonAtras").href="javascript:retrocede()";
document.getElementById("botonAxuda").target="_blank";
anchoContidoIni=document.getElementById("areaContido").style.width;
//2
actualiza();
$(window).on("resize",function(){do_responsive();});
time_startYT=new Array();time_startYT[0]=0;time_startYT[1]=-1;time_startYT[2]=-1;time_startYT[3]=-1;time_endYT=new Array();time_endYT[0]=132;time_endYT[1]=-1;time_endYT[2]=-1;time_endYT[3]=-1;text_YT=new Array();text_YT[0]="APRENDE CON EL VIDEO";text_YT[1]="";text_YT[2]="";text_YT[3]="";
$("#areaContido").css("visibility","hidden");
$("#content").append("<div id='areaMedia'></div>");
$("#areaMedia").width($("#areaContido").width());$("#areaMedia").css({"position":"absolute"});
$("#areaContido").append("<div id='p_review' title='Watch it again'>↶</div>");var position=$("#areaContido").offset();$("#p_review").css(position);$("#p_review").css("top",(position.top+200).toString()+"px");
$("#p_review").draggable({});$("#p_review").on('click touchstart', function () {$("#areaContido").css("visibility", "hidden");$("#areaMedia").css("visibility", "visible");rew_top();});
$("#areaMedia").position().top=$("#areaContido").position().top;var nheig=taboaContidos[indice].areaContido.substr(taboaContidos[indice].areaContido.indexOf("height")+8);nheig=nheig.substr(0,nheig.indexOf("'"));$("#areaMedia").height($("#areaContido").height()+parseInt(nheig));
$("#areaMedia").append('<div id="ytrepo"><div id="player"></div><div id="repo"><div><button class="butt" id="bot01"> << </button></div><div><button  class="butt" id="bot02"> ◀ </button></div><div id="nameact"></div><div><button  class="butt" id="bot03"> > </button></div><div><button class="butt" id="bot04"> >> </button></div></div></div>');
$("#areaMedia").append("<div id='ardoraenuMedia'></div>");
$("#bot01").html('<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 5.292 5.292"><g class="svgico" fill="#fc0" stroke="#000" stroke-width=".265" transform="translate(-117.929 -86.09)"><path d="M123.22 86.09l-.03 5.291-3.476-2.87z"/><rect ry=".916" y="86.074" x="117.905" height="5.355" width="1.833"/></g></svg>');
$("#bot02").html('<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 5.292 5.292"><path class="svgico" d="M5.292 0l-.03 5.292L0 2.398z" fill="#fc0" stroke="#000" stroke-width=".265"/></svg>');
$("#bot03").html('<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 5.292 5.292"><path class="svgico" d="M0 0l.03 5.292 5.262-2.894z" fill="#fc0" stroke="#000" stroke-width=".265"/></svg>');
$("#bot04").html('<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 5.292 5.292"><g class="svgico" stroke="#000" stroke-width=".265" transform="matrix(-1 0 0 1 123.196 -86.09)" fill="#fc0"><path d="M123.22 86.09l-.03 5.291-3.476-2.87z"/><rect ry=".916" y="86.074" x="117.905" height="5.355" width="1.833"/></g></svg>');
$(".svgico").css("fill","#408053");$(".svgico").hover(function(){$(this).css("fill", "#E3EEEC");}, function(){$(this).css("fill", "#408053");});
document.getElementById("bot01").addEventListener("click", rew_top);document.getElementById("bot02").addEventListener("click", rew_seg);document.getElementById("bot03").addEventListener("click", go_seg);document.getElementById("bot04").addEventListener("click", go_top);
$("#player").append('<video id="video" width="600" height="270"><source src="video.mp4" type="video/mp4"></video>');var video = document.getElementById("video");video.addEventListener("loadedmetadata", function() {video.currentTime=time_startYT[indice];
video.disablePictureInPicture=true;video.oncontextmenu=function(){return false};video.addEventListener("click",function(){if (video.paused) {video.play();} else {video.pause();}},false);
if (time_startYT[indice]>-1) {$("#nameact").text(taboaContidos[indice].descricion);$("#ardoraenuMedia").text(text_YT[indice]);} else { $("#areaContido").css("visibility", "visible"); $("#areaMedia").css("visibility", "hidden");} setInterval("checkYT()", 1000);}, false);
}
$( document ).ready(function() {
inicia();
});
function colorToRgb(color) {var fakeDiv = $("<div>").css("color", color).appendTo("body");var computedColor = getComputedStyle(fakeDiv[0]).color;fakeDiv.remove();return computedColor;}
function do_responsive(){var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);var isTablet = /iPad|Android/i.test(navigator.userAgent) && !/Mobile/i.test(navigator.userAgent);var deviceType = "PC";if (isMobile && !isTablet) {deviceType = "Mobile";} else if (isTablet) {deviceType = "Tablet";}if (deviceType=="PC"){do_responsivePC()}if (deviceType=="Mobile"){do_responsiveMobile()}if (deviceType=="Tablet"){do_responsiveMobile()}}
function do_responsiveMobile(){$("body").css("width","");$("body").css("height","");$("body").css("transform-origin","0 0");$("body").css("transform","scale(1)");$("#header").css("transform-origin","0 0");$("#header").css("transform","scale(1)");$("#header").css("width","");$("#header").css("height","");$("#suggestPost").css("z-index",10);var ori="top left";if ($("#menu").css("float")=="right"){ori="top right"}
$("#menu").ready(function() {$("#menu").css("transform-origin",ori);$("#menu").css("transform","scale(1)");$("#menu").show();$("#m_v").remove();$("#m_l").remove();});
$("#areaContido").css("transform-origin","0 0");$("#areaContido").css("transform","scale(1)");$("#page").css("transform-origin","0 0");$("#page").css("transform","scale(1)");$("#page").css("height","");var ardact=$(".ardobject").contents().find("#ardoraAct");$(ardact).ready(function() {ardact.css("transform-origin","0 0");ardact.css("transform","scale(1)");});
var ardenu=$(".ardobject").contents().find("#ardoraEnu");ardenu.css("transform-origin","0 0");ardenu.css("transform","scale(1)");ardenu.css("width","");$("#footer").ready(function() {$("#footer").css("transform-origin","0 0");$("#footer").css("transform","scale(1)");$("#footer").css("position","relative");$("#footer").css("bottom","auto");$("#footer").css("width","");$("#footer").css("height","");});
var ardtab=$(".ardobject").contents().find("#ardoraTab");$(ardtab).ready(function() {$(ardtab).show();ardtab.append($(".ardobject").contents().find("#buttonOk"));$(".ardobject").contents().find("#buttonOk").css("margin-left",0);var ardv_tab=$(".ardobject").contents().find("#v_tab");$(ardv_tab).remove();var score_tab=$(".ardobject").contents().find("#score_tab");$(score_tab).remove();$(".ardobject").css("height","");});var sc=1;
if ($( window ).height()>$( window ).width()) {//V E R T I C A L == M O B I L E
$(ardact).ready(function() {$("body").css("width", "");$("body").css("transform-origin", "0 0");$("body").css("transform", "scale(1)");do_responsiveml("left");$("#menu").hide();$(ardtab).hide();$("#areaContido").width("");
var vmargin = 10 + parseInt($("body").css("margin-left")) + parseInt($("body").css("margin-right")) + parseInt($("#page").css("margin-right")) + parseInt($("#page").css("margin-left")) + parseInt($("#areaContido").css("margin-right")) + parseInt($("#areaContido").css("margin-left")) + parseInt($("#areaContido").css("padding-left")) + parseInt($("#areaContido").css("padding-right")) + parseInt($(ardact).css("padding-right")) + parseInt($(ardact).css("margin-right")) + parseInt($(ardact).css("padding-left")) + parseInt($(ardact).css("margin-left"));
sc = ($(window).width() - vmargin) / ($(ardact).width() + vmargin);$("body").width(($(window).width() - 10) / sc);$("body").height($(window).height() - 10 / sc);if ($("#m_v").width() * sc > 60) {$("#m_v").width(60 / sc);$("#m_v").height(60 / sc);$("#m_v svg").attr("width", 50 / sc);$("#m_v svg").attr("height", 50 / sc);};
$("#botonAdiante svg").attr("height", 48 / sc);$("#botonAdiante svg").attr("width", 48 / sc);$("#botonAtras svg").attr("height", 48 / sc);$("#botonAtras svg").attr("width", 48 / sc);$("#botonPechar svg").attr("height", 48 / sc);$("#botonPechar svg").attr("width", 48 / sc);$("#botonAxuda svg").attr("height", 48 / sc);$("#botonAxuda svg").attr("width", 48 / sc);
$("#page").height(($(window).height() - $("#header").height() - $("#footer").height() - 100) / sc);$("#areaContido").width(($("#page").width() + vmargin) / sc);$("body").css("transform-origin", "0 0");$("body").css("transform", "scale(" + sc.toString() + ")");$("#page").css("overflow", "hidden");var ardmain = $(".ardobject").contents().find("body");$(ardmain).append("<div id='v_tab'></div>");var ardv_tab = $(".ardobject").contents().find("#v_tab");
$(ardv_tab).css("clear", "both");$(ardv_tab).css("position", "inherit");$(ardv_tab).css("margin-left","40px");$(ardv_tab).css("padding-top", "20px");ardv_tab.append($(".ardobject").contents().find("#buttonOk"));$(".ardobject").contents().find("#buttonOk").css("position", "inherit");$(".ardobject").contents().find("#buttonOk").css("float", "right");$(ardtab).hide();$(ardv_tab).append("<div id='score_tab'></div>");$(ardv_tab).css("width", $("body").width() - 100);var score_tab = $(".ardobject").contents().find("#score_tab");
$(score_tab).css("width", "auto");$(score_tab).css("float", "left");$(".ardobject").height($("#page").height() - 40 - $(".ardobject").contents().find("#buttonOk").height());while ($(".ardobject").contents().find("#ardoraEnu").width() * sc > $(window).width() - 20) {$(".ardobject").contents().find("#ardoraEnu").width($(".ardobject").contents().find("#ardoraEnu").width() - 1);}
$(ardv_tab).width($(".ardobject").contents().find("#ardoraEnu").width() - vmargin);$(".ardobject").height($("#page").height() - $(".ardobject").contents().find("#ardoraEnu").height());$(".ardobject").width($("#page").width());$(ardmain).css("overflow", "hidden");$("#header").css("overflow", "hidden");});
}else{  //H O R I Z O N T A L == M O B I L E
$(ardact).ready(function() {$("body").css("width", "");$("body").css("transform-origin", "0 0");$("body").css("transform", "scale(1)");var hmargin = 10 + parseInt($("body").css("margin-top")) + parseInt($("body").css("margin-bottom"));
var vmargin = 10 + parseInt($("body").css("margin-left")) + parseInt($("body").css("margin-right")) + parseInt($("#page").css("margin-right")) + parseInt($("#page").css("margin-left")) + parseInt($("#areaContido").css("margin-right")) + parseInt($("#areaContido").css("margin-left")) + parseInt($("#areaContido").css("padding-left")) + parseInt($("#areaContido").css("padding-right")) + parseInt($(ardact).css("padding-right")) + parseInt($(ardact).css("margin-right")) + parseInt($(ardact).css("padding-left")) + parseInt($(ardact).css("margin-left"));
sc = $(window).height() / $("body").height();$("body").width(($(window).width() - 10) / sc);$("body").height($(window).height() -10/ sc);$("#botonAdiante svg").attr("height", 28 / sc);$("#botonAdiante svg").attr("width", 28 / sc);$("#botonAtras svg").attr("height", 28 / sc);$("#botonAtras svg").attr("width", 28 / sc);
$("#botonPechar svg").attr("height", 28 / sc);$("#botonPechar svg").attr("width", 28 / sc);$("#botonAxuda svg").attr("height", 28 / sc);$("#botonAxuda svg").attr("width", 28 / sc);$("#page").height(($(window).height() - $("#header").height() - $("#footer").height()) / sc);$("body").css("transform-origin", "0 0");
$("body").css("transform", "scale(" + sc.toString() + ")");while ($("body").width() * sc < $(window).width()) {$("body").width($("body").width() + 1);};$("#page").css("overflow", "hidden");})}
}
function do_responsivePC(){var ori="top left";if ($("#menu").css("float")=="right"){ori="top right"}$("#contidoAct").css("transform-origin","0 0");$("#contidoAct").css("transform","scale(1)");$("#areaContido").css("transform-origin","0 0");$("#areaContido").css("transform","scale(1)");$("#page").css("transform-origin","0 0");$("#page").css("transform","scale(1)");$("#page").css("height","");$("#header").css("transform-origin","0 0");$("#header").css("transform","scale(1)");
$("#footer").css("transform-origin","0 0");$("#footer").css("transform","scale(1)");$("#suggestPost").css("z-index",10);$("#menu").css("transform-origin",ori);$("#menu").css("transform","scale(1)");$("body").css("scale","");$("body").css("width","");$("body").css("height","");var ardact=$(".ardobject").contents().find("#ardoraAct");$(ardact).ready(function() {ardact.css("transform-origin","0 0");ardact.css("transform","scale(1)");});var ardenu=$(".ardobject").contents().find("#ardoraEnu");ardenu.css("transform-origin","0 0");ardenu.css("transform","scale(1)");ardenu.css("width","");
$("#menu").ready(function() {$("#menu").show();$("#m_v").remove();$("#m_l").remove();});$("#footer").ready(function() {$("#footer").css("position","relative");});var ardtab=$(".ardobject").contents().find("#ardoraTab");
$(ardtab).ready(function() {$(ardtab).show();ardtab.append($(".ardobject").contents().find("#buttonOk"));$(".ardobject").contents().find("#buttonOk").css("margin-left",0);var ardv_tab=$(".ardobject").contents().find("#v_tab");$(ardv_tab).remove();var score_tab=$(".ardobject").contents().find("#score_tab");$(score_tab).remove();$(".ardobject").css("height","");});var sc=1;$("body").css("transform-origin","0 0");$("body").css("transform","scale(1)");
if ($( window ).height()>$( window ).width()) {//V E R T I C A L
$(ardact).ready(function() {$("body").css("width", "");$("body").css("transform-origin", "0 0");$("body").css("transform", "scale(1)");do_responsiveml("left");$("#menu").hide();$(ardtab).hide();var vmargin=10+parseInt($("body").css("margin-left"))+parseInt($("body").css("margin-right"))+parseInt($("#page").css("margin-right"))+parseInt($("#page").css("margin-left"))+parseInt($("#areaContido").css("margin-right"))+parseInt($("#areaContido").css("margin-left"))+parseInt($("#areaContido").css("padding-left"))+parseInt($("#areaContido").css("padding-right"))+parseInt($(ardact).css("padding-right"))+parseInt($(ardact).css("margin-right"))+parseInt($(ardact).css("padding-left"))+parseInt($(ardact).css("margin-left"));
sc=($(window).width()-vmargin)/($(ardact).width()+vmargin);$("body").width(($(window).width()-10)/sc);$("body").height($(window).height()-10/sc);if ($("#m_v").width() * sc > 20) {$("#m_v").width(20/sc);$("#m_v").height(20/sc);$("#m_v svg").attr("width",15/sc);$("#m_v svg").attr("height",15/sc);};$("#page").height(($(window).height()-$("#header").height() - $("#footer").height())/sc);$("#areaContido").width(($("#page").width())/sc);
$("body").css("transform-origin", "0 0");$("body").css("transform", "scale(" + sc.toString() + ")");$("#page").css("overflow", "hidden");var ardmain = $(".ardobject").contents().find("body");$(ardmain).append("<div id='v_tab'></div>");var ardv_tab = $(".ardobject").contents().find("#v_tab");$(ardv_tab).css("clear", "both");$(ardv_tab).css("position", "inherit");$(ardv_tab).css("margin-left", "5px");$(ardv_tab).css("padding-top", "20px");ardv_tab.append($(".ardobject").contents().find("#buttonOk"));$(".ardobject").contents().find("#buttonOk").css("position", "inherit");$(".ardobject").contents().find("#buttonOk").css("float", "right");
$(ardv_tab).append("<div id='score_tab'></div>");$(ardv_tab).css("width", $("body").width()-100);var score_tab=$(".ardobject").contents().find("#score_tab");$(score_tab).css("width", "auto");$(score_tab).css("float", "left");$(".ardobject").height($("#page").height()-40-$(".ardobject").contents().find("#buttonOk").height());
while ($(".ardobject").contents().find("#ardoraEnu").width() * sc + vmargin > $(window).width()) {$(".ardobject").contents().find("#ardoraEnu").width($(".ardobject").contents().find("#ardoraEnu").width() - 1);};$(ardv_tab).width($(".ardobject").contents().find("#ardoraEnu").width()-vmargin);$(".ardobject").height($("#page").height()-$(".ardobject").contents().find("#ardoraEnu").height());$(ardmain).css("overflow", "hidden");$("#header").css("overflow", "hidden");});
}else{  //H O R I Z O N T A L
$(ardact).ready(function() {var menuw = $("#menu").width();var ardtab=$(".ardobject").contents().find("#ardoraTab");var hmargin=10+parseInt($("body").css("margin-top"))+parseInt($("body").css("margin-bottom"))+parseInt($("#page").css("margin-top")) + parseInt($("#page").css("margin-bottom"))+parseInt($("#areaContido").css("margin-top"))+parseInt($("#areaContido").css("margin-bottom"))+parseInt($("#areaContido").css("padding-top"))+parseInt($("#areaContido").css("padding-bottom"))+parseInt($(ardact).css("padding-top"))+parseInt($(ardact).css("margin-top"))+parseInt($(ardact).css("padding-bottom"))+parseInt($(ardact).css("margin-bottom"));
$("#areaContido").css("width", "");var nh = $(ardtab).height();if ($(ardact).height() > nh) {nh = $(ardact).height()}
if ($(ardact).width() + $(ardtab).width() + menuw >= $(window).width() + 10 || nh + $("#header").height() + $("#footer").height()+hmargin >= $(window).height()) { //R E D U C I R
sc=1;$(ardact).ready(function() {do_responsiveml("right");$("#menu").hide();var vmargin = 10 + parseInt($("body").css("margin-left")) + parseInt($("body").css("margin-right")) + parseInt($("#page").css("margin-right")) + parseInt($("#page").css("margin-left")) + parseInt($("#areaContido").css("margin-right")) + parseInt($("#areaContido").css("margin-left")) + parseInt($("#areaContido").css("padding-left")) + parseInt($("#areaContido").css("padding-right")) + parseInt($(ardact).css("padding-right")) + parseInt($(ardact).css("margin-right")) + parseInt($(ardact).css("padding-left")) + parseInt($(ardact).css("margin-left"));
while ((($(ardact).width() + $(ardtab).width() + menuw+vmargin) * sc > $(window).width() - 10) || ($("body").height() * sc > $(window).height() - hmargin)) {sc=sc-0.001;}
$("body").width(($(window).width() - 10) / sc);$("body").height($(window).height() - 10 / sc);$("#areaContido").width(($("#page").width()) / sc);$("body").css("transform-origin", "0 0");$("body").css("transform", "scale(" + sc.toString() + ")");while ($("body").width() * sc < $(window).width()) {$("body").width($("body").width() + 1);}
if ($("#m_v").width() * sc > 20) {$("#m_v").width(20 / sc);$("#m_v").height(20 / sc);$("#m_v svg").attr("width", 15 / sc);$("#m_v svg").attr("height", 15 / sc);};
while ($(".ardobject").contents().find("#ardoraEnu").width() * sc + vmargin > $(window).width()) {$(".ardobject").contents().find("#ardoraEnu").width($(".ardobject").contents().find("#ardoraEnu").width() - 1);};});
}else{ // A M P L I A R
sc=1;$(ardact).ready(function() {while((($(ardact).width()+$(ardtab).width()+menuw)*sc<$(window).width()-10)
&& ($("body").height()*sc<$(window).height()-hmargin) ){sc=sc+0.001;}$("body").css("transform-origin","0 0");$("body").css("transform","scale("+sc.toString()+")");while($("body").width()*sc>$(window).width()){$("body").width($("body").width()-1);}});}})
}}
function do_responsiveml(ori){$("#m_v").remove();if ((taboaContidos[indice].ml) || (taboaContidos[indice].ma)){var me_ori=document.getElementById("menu");var me_oricopy=me_ori.cloneNode(true);var col="#408053";var m_i='<svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Second menu</desc><path d="M19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" stroke="'+col+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="fill:#f60;stroke:'+col+';stroke-opacity:1"/></svg>';
$("#page").append("<div id='m_v'>"+m_i+"</div>");if (ori=="right"){$("#m_v").css("right",5)}if (ori=="left"){$("#m_v").css("left",10)};$("#m_v").css({"width":"60px","height":"60px","position":"absolute","border":"solid","bottom":$("#footer").height()+10,"border-color":col,"border-radius": "10px","padding-left": "8px","cursor": "pointer","box-shadow": "rgba(50, 50, 50, 0.5) 2px 2px 2px","z-index":20});
$("#m_v").attr("tabindex","0");$("#m_v").on("touchstart click", function(event){$("#page").append("<div id='m_l'></div>");if (ori=="right"){$("#m_l").css({"right":0,"border-left": "solid","border-left-color":col,"border-left-width":"2px"});};if (ori=="left"){$("#m_l").css({"left":0,"border-right": "solid","border-right-color":col,"border-right-width":"2px"});}
document.getElementById("m_l").appendChild(me_oricopy);$(me_oricopy).css({"width": $("body").width()/2,"height": "100%"});
$("#m_l").css({"width":$(me_oricopy).width(),"height":"100%","position":"absolute","top":0,"backgroundColor":"white","z-index":50000});
var b_csvg='<svg alt="close menu" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6 6 12 12m0-12L6 18" stroke="'+col+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke:'+col+';stroke-opacity:1"/></svg>';
$("#m_l").append("<div id='close_m_l'>"+b_csvg+"<div>");if (ori=="right"){$("#close_m_l").css("left",5)};if (ori=="left"){$("#close_m_l").css("right",5)};$("#close_m_l").css({"width":"35px","height":"35px","position":"absolute","bottom":5,"cursor": "pointer"});
$("#close_m_l").attr("tabindex","0");$("#close_m_l").on("touchstart click", function(event){$("#m_l").remove();});$("#close_m_l").keydown(function(e){if (e.which!=9){$("#close_m_l").click();}});$("#menu a").css({"font-size":"20px","margin":"10px 0 10px 50px"});$("#menu h4").css({"display":"inline"});});$("#m_v").keydown(function(e){if (e.which!=9){$("#m_v").click();}});}}
function checkYT() {var video=document.getElementById("video");if (!!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)) {if (Math.round(video.currentTime) == time_endYT[indice]) {video.pause();$("#areaContido").css("visibility", "visible");$("#areaMedia").css("visibility", "hidden");}}}
function actualiza(){
   document.getElementById("tituloAct").innerHTML=taboaContidos[indice].descricion;
   document.getElementById("enunciadoAct").innerHTML=taboaContidos[indice].enunciado;
   document.getElementById("contidoAct").innerHTML=taboaContidos[indice].areaContido;
   document.getElementById("botonAdiante").style.visibility="hidden";
   document.getElementById("botonAtras").style.visibility="hidden";
   document.getElementById("botonAxuda").style.visibility="hidden";
   if (eval(document.getElementById("menu")) != null){document.getElementById("menu").style.visibility="hidden";}
   if (taboaContidos[indice].seg_ant){
      if (indice>0){
         document.getElementById("botonAtras").title=taboaContidos[indice-1].descricionUTF8;
         document.getElementById("botonAtras").style.visibility="visible";
      }
      if (indice<maxIndice){
         document.getElementById("botonAdiante").title=taboaContidos[indice+1].descricionUTF8;
         document.getElementById("botonAdiante").style.visibility="visible";
      }
   }
   if (taboaContidos[indice].mp){
      document.getElementById("menuPrincipal").style.visibility="visible";
   }
   else{
      document.getElementById("menuPrincipal").style.visibility="hidden";
   }
   if (taboaContidos[indice].bAxuda.length>0){
      document.getElementById("botonAxuda").href=taboaContidos[indice].bAxuda;
      document.getElementById("botonAxuda").style.visibility="visible";
   }
   if ((taboaContidos[indice].ml) || (taboaContidos[indice].ma)){
	   contido="";
	   document.getElementById("menu").style.height="auto";
      document.getElementById("areaContido").style.width=anchoContidoIni;
	   if (taboaContidos[indice].ml){ contido=menuLateral;}
	   if (taboaContidos[indice].ma){ contido=contido+menuActividades;}
	   document.getElementById("menu").innerHTML=contido;
	   document.getElementById("menu").style.visibility="visible";
   }
   else{
        if (eval(document.getElementById("menu")) != null){document.getElementById("menu").style.height="0px";}
        document.getElementById("areaContido").style.width="calc(100% - 30px)";
   }
var ardobject=document.querySelector('.ardobject');ardobject.addEventListener("load", function() {do_responsive();});
}
function avanza(){if (indice<maxIndice){indice++; actualiza();
if (time_startYT[indice]>-1) {var video=document.getElementById("video");video.currentTime=time_startYT[indice];$("#nameact").text(taboaContidos[indice].descricion);$("#ardoraenuMedia").text(text_YT[indice]);$("#areaContido").css("visibility", "hidden");$("#areaMedia").css("visibility", "visible");} else {$("#areaContido").css("visibility", "visible");$("#areaMedia").css("visibility", "hidden");}
}}
function irA(num){
if (indice==num) {actualiza();} else {indice=num;actualiza();if (time_startYT[indice]>-1) {var video = document.getElementById("video");video.currentTime=time_startYT[indice];$("#nameact").text(taboaContidos[indice].descricion);$("#ardoraenuMedia").text(text_YT[indice]);
$("#areaContido").css("visibility", "hidden");$("#areaMedia").css("visibility", "visible");} else {$("#areaContido").css("visibility", "visible");$("#areaMedia").css("visibility", "hidden");}}
}
function recarga(){irA(indice);}
function retrocede(){indice--; actualiza();
if (time_startYT[indice]>-1) {var video=document.getElementById("video");video.currentTime=time_startYT[indice];$("#nameact").text(taboaContidos[indice].descricion);$("#ardoraenuMedia").text(text_YT[indice]);$("#areaContido").css("visibility", "hidden");$("#areaMedia").css("visibility", "visible");
} else {$("#areaContido").css("visibility", "visible");$("#areaMedia").css("visibility", "hidden");}
}
function act( descricion, descricionUTF8, enunciado, areaContido,ma, bAxuda, seg_ant, mp, ml ) {this.descricion=descricion;this.descricionUTF8=descricionUTF8;
   this.enunciado=enunciado;this.areaContido=areaContido;this.mp=mp;this.ml=ml;this.ma=ma;this.seg_ant=seg_ant;this.bAxuda=bAxuda;}
function iniciaActividade(){
var data=new Date();//3
hI=String(data.getHours()).padStart(2, '0')+":"+String(data.getMinutes()).padStart(2, '0')+":"+String(data.getSeconds()).padStart(2, '0')+" h";
   var x=taboaIntentos.length;
   taboaIntentos[x]=new infoAct(indice,hI,0,"exec","xx:xx",0);
}
function iniciaActividadeMul(){
   indiceMul=indice;
var data=new Date();//4
hI=String(data.getHours()).padStart(2, '0')+":"+String(data.getMinutes()).padStart(2, '0')+":"+String(data.getSeconds()).padStart(2, '0')+" h";
   var x=taboaIntentos.length;
   taboaIntentos[x]=new infoAct(indice,hI,0,"exec","xx:xx",0);
}
function infoAct( ind, hinicio, intentos, estado, hfin, puntos){
	this.ind=ind;
	this.hinicio=hinicio;
	this.intentos=intentos;
	this.estado=estado;
	this.hfin=hfin;
this.puntos=puntos;
}
function actualizaInfoAct(puntos,intentos,estado){
var data=new Date();
hF=String(data.getHours()).padStart(2, '0')+":"+String(data.getMinutes()).padStart(2, '0')+":"+String(data.getSeconds()).padStart(2, '0')+" h";
	var x=taboaIntentos.length-1;
	var hI=taboaIntentos[x].hinicio;
	taboaIntentos[x]=new infoAct(indice,hI,intentos,estado,hF,puntos);
}
function actualizaInfoActMul(){
var data=new Date();
hF=String(data.getHours()).padStart(2, '0')+":"+String(data.getMinutes()).padStart(2, '0')+":"+String(data.getSeconds()).padStart(2, '0')+" h";
	var x=taboaIntentos.length-1;
	var hI=taboaIntentos[x].hinicio;
	taboaIntentos[x]=new infoAct(indiceMul,hI,0,"--",hF,0);
}
function PechaVentana(){window.close()}
function AbreCentrada(theURL,winName,features, myWidth, myHeight, isCenter,aNume) {
	if(window.screen)if(isCenter)if(isCenter=="true"){
      var myLeft = (screen.width-myWidth)/2;
      var myTop = (screen.height-myHeight)/2;
      features+=(features!='')?',':'';
      features+=',left='+myLeft+',top='+myTop;
    }
    window.open(theURL,winName,features+((features!='')?',':'')+'width='+myWidth+',height='+myHeight);
    indice=aNume;
}
function mostrar(capa){
var obj = document.getElementById(capa)
if(obj.style.display == "block"){
   obj.style.display = "none"
   document.getElementById("contenido").style.width="95%";
}else{
   obj.style.display = "block";
   document.getElementById("contenido").style.width="75%";
}}
function hideMenu(menu,contido,wC){var obj=document.getElementById(menu);var con=document.getElementById(contido);
if (obj.style.display=="block"){obj.style.display="none";con.style.width="95%";}
else{obj.style.display="block";con.style.width=wC;}}
function MM_preloadImages() {
   var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
   var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
   if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_swapImgRestore() {var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;}
function MM_findObj(n, d) { //v4.01
   var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
   d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
   if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
   for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
      if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
   var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
$(window).resize(function() {$("#areaMedia").width($("#areaContido").width());});function rew_top() {var video = document.getElementById("video");video.currentTime=time_startYT[indice];}
function rew_seg() {var video = document.getElementById("video");var timenow = Math.round(video.currentTime);if (timenow-5 > time_startYT[indice]) {video.currentTime=timenow-5;}}
function go_top() {var video = document.getElementById("video");video.currentTime=time_endYT[indice]-1;}
function go_seg() {var video=document.getElementById("video");var timenow = Math.round(video.currentTime);if (timenow+5< time_endYT[indice]) {video.currentTime=timenow+5;}}
