//open xml
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","builders_catalog.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

var xtag =xmlDoc.getElementsByTagName("GRID");

/*
//loop
var xmlinc = 1;
while (xmlinc < 3600)
  {
var itag = xmlinc - 1;

var tench = xtag[itag].getElementsByTagName("BUSINESS")[0].childNodes[0].nodeValue;

  }
*/
