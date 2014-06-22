
$(document).ready(function(){
    $("#but").click(function(){
    var key = "testkey";
    alert("hi");
    var json = '{"result":"true","count":"1"}';
    obj=JSON.parse(json);
    alert(obj.count);
   $.ajax({
        dataType: "jsonp",
        crossDomain: true,
        url:"http://localhost:7000/test/?data=key",
        success:function(result){
        alert(result);
        console.log("success");
        $("#notifs").append(result);
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
     alert(data[0]); 
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
