//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=2;
var successes=0; successesMax=11; attempts=0; attemptsMax=10;
var score=0; scoreMax=22; scoreInc=2; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Vamos a jugar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#0080FF"; colorText="#000000"; colorSele="#FF8040";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Eres estupendo"; messageTime="Ya casi culmina"; messageError="Hay caramba"; messageErrorG="Hay caramba"; messageAttempts="Practica de nuevo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="VGVzdA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Es una parte de la planta?","¿Es producto del desarrollo del ovario de una flor después de la fecundación?","¿Cual de estas opciones es unfruto?","¿Son la próxima generación y sirven como el principal medio a través del cual las especies de una planta perpetúan y se propagan?","¿Es la estructura reproductiva característica de las plantas?","¿La flor es llamada tambien?","¿Es el órgano vegetativo y generalmente aplanado de las plantas vasculares, especializado principalmente para realizar la fotosíntesis?","¿Es el proceso que realizan las plantas para crear su propio alimento?","¿Mensione 2 funciones que realiza el tallo?","¿Es un Órgano de las plantas que crece generalmente en dirección inversa a la del tallo, se desarrolla en tierra o en otros medios?","¿Son seres vivos que nacen, crecen, se transforman a lo largo de su vida, muren y estas pertenecen al reino vegetal?"];
var answers1=["MVRhbGxv","MFBpbm8=","MFJvYmxl","MENhb2Jh"];
var answers2=["MUZydXRv","MExlY2hl","MFBhbg==","MEF2ZW5h","MENlcmVhbA=="];
var answers3=["MU1hbmdv","MEdhbGxldGE=","MENodXJybw==","MEdlbGF0aW5h"];
var answers4=["MVNlbWlsbGE=","MENoYW1veQ==","MFRhamlu","ME9yZWdhbm8="];
var answers5=["MUZsb3I=","MEhvamE=","MFJhaXo=","MENvcnRlemE="];
var answers6=["MUVzcGVybWF0b2ZpdGFz","MUZhbmVyw7NnYW1hcw==","MEZydXRv","MENlcmV6YQ==","ME1hbnphbmE=","MER1cmF6bm8="];
var answers7=["MUhvamE=","MEZsb3I=","MEhvcm1pZ2E=","MFJhaXo=","MFZlcmR1cmFz"];
var answers8=["MUZvdG9zw61udGVzaXM=","MENvbWlkYQ==","MEFndWE=","MFN1ZWxv","MFNvbA=="];
var answers9=["MVNvc3RpZW5lIGhvamFzLCBmcnV0b3MgeSBGbG9yZXM=","MVJlc2VydmEgZGUgYWxpbWVudG8=","MENyZWEgYWxpbWVudG8=","MFNlIHJlcHJvZHVjZQ==","MERhIGZydXRv"];
var answers10=["MVJhaXo=","MEZsb3I=","MEZydXRv","MEZvdG9zaW50ZXNpcw=="];
var answers11=["MVBsYW50YXM=","MEFuaW1hbGVz","MFZlcnRlYnJhZG9z","ME92aXBhcm9z","MERpbm9zYXVyaW8="];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8,answers9,answers10,answers11];
var err=["Tranquilo un error le pasa ha cualquira","Hay caramba","Vuelve ha intentarlo","Vamos no te rrindas","Error","Sigue intentando","La perseverancia es la clave al exito","Piensa otra vez","No te rindas","Vamos tu puedes","No te rindas"];
var ima=["PLanta.jpg","planta_2.jpg","planta_3.jpg","planta4.jpg","planta_5.jpg","planta_6.jpg","planta_7.jpg","planta_8.jpg","planta9.jpg","planta_10.jpg","planta_11.jpg"];
var mp4=["","","","","","","","","","",""];
var ogv=["","","","","","","","","","",""];
var alt=["","","","","","","","","","",""];
var info=["","","","","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Test_resources/media/";
var tiRandOrder=true;
var iT=0;var r_order=[];
var r_ans=[];var r_pos=[];var r_checks=[];var minSuccesses=1;
