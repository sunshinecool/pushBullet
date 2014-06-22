$(document).ready(function(){
    $("#but").click(function(){
    var key = "";
    alert("hi");
//   var theUrl="http://localhost:7000/test/";
//    function getCookie(name) {
//    var cookieValue = null;
//    if (document.cookie && document.cookie != '') {
//        var cookies = document.cookie.split(';');
//        for (var i = 0; i < cookies.length; i++) {
//            var cookie = jQuery.trim(cookies[i]);
//            // Does this cookie string begin with the name we want?
//            if (cookie.substring(0, name.length + 1) == (name + '=')) {
//                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                break;
//            }
//        }
//    }
//    return cookieValue;
//    }
//var csrftoken = getCookie('csrftoken');
//
    $.ajax({
        type : "POST",
        dataType: "jsonp",
        crossDomain: true,
        processData: false,
//        contentType: "application/json",
        url:"http://localhost:7000/test/?data=lo",
      // {'key':key},
//       beforeSend: function (request)
//            {
//                alert("le");
//                request.setRequestHeader("Access-Control-Allow-Origin","http://192.168.78.101:7000");
//                request.setRequestHeader("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36");
//                request.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
//                request.setRequestHeader("Accept-Encoding", "gzip,deflate,sdch");
//                request.setRequestHeader("Connection", "keep-alive");
//                request.setRequestHeader("Host", "localhost:7000");
//                alert(request.headers);
//            }, 
////        headers:{
//                "User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36", 
//               "Accept":"*/*", 
//               "Origin":"null", 
//               'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', 
//               'Accept-Encoding':'gzip,deflate,sdch',
//               'Connection':'keep-alive',
//               'Host':'10.4.224.7:7000'
//                }
        success:function(result){
        alert(result);
        $("#notifs").append(result);

        }});
//if (window.XMLHttpRequest)
//    {// code for IE7+, Firefox, Chrome, Opera, Safari
//        xmlhttp=new XMLHttpRequest();
//    }
//    else
//    {// code for IE6, IE5
//        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//    }
//    xmlhttp.onreadystatechange=function()
//    {
//        if (xmlhttp.readyState==4 && xmlhttp.status==200)
//        {
//            var data = JSON.parse(xmlhttp.responseText);
//            alert(data);
//            document.getElementById("notifs").innerHTML=xmlhttp.responseText;
//        }
//    }
//    xmlhttp.open("GET", theUrl, false );
//    xmlhttp.setRequestHeader("Access-Control-Allow-Origin","http://192.168.78.101:7000");
//    xmlhttp.send();    
 });
}); 
