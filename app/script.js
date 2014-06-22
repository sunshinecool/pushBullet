function process()
{
	var auth_key = document.getElementById("auth_key")
	if (auth_key.value.length == 0)
		alert("Enter Authorization key");
	else
		localStorage.setItem("auth_key",auth_key.value);
}

function checkAuthorization()
{
	if (localStorage.getItem("auth_key") != 0)
		window.location.href = "logged.html";
}
$(document).ready(function(){
    $("#but").click(function(){
    var key = "testkey";
   $.ajax({
        dataType: "jsonp",
        crossDomain: true,
        url:"http://10.129.26.108:7000/getnotifs/?key=sam",
        success:function(result){
		data = result;
   	//	alert(data["count"]+" alert");
		var text = "<table border=1>";
		for (x=0;x<3;x++)
			text += "<tr><td>"+data["notifarr"][x]+"</td></tr>";
		text += "</table>"
		$("#notifs").html(text);
        },
        error:getData
//       function(result){
//        console.log(result)
//        alert(result.status);
//        var i = $.parseJSON((JSON.stringify(result)))    
//        console.log(i)
//        alert("hu");
        });
   function getData(data){
      var dataJson = data;
     alert("getData called");
     console.log(data);
    alert(data["notifarr"]);
	var text = "<table border=1>";
	for (x=0;x<data["notifarr"].length;x++)
		text += "<tr><td>"+data["notifarr"][x]+"</td></tr>";
	text += "</table>"
	$("#notifs").html(text);
   }
    });
}); 
/*
$(document).ready(function(){
$("#but").click(function(){
$("#notify").html("Processing request ...");
 $.ajax({
            url: 'http://localhost:7000/test/?data=key',
            dataType: 'jsonp',
            beforeSend: function (request) {request.setRequestHeader("Access-Control-Allow-Origin","true");},
	    error: function (data) {
              //  var i = jQuery.parseJSON(JSON.stringify(data));
		console.log(data[0]);
			}
		});
	});
	});
    */
