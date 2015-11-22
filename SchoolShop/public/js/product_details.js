//function del(){
//    var num = document.getElementById("exampleInputName2").value;
//		if (num == 1) {

//		}
//		else {
//		    num = num - 1;
//		    document.getElementById("exampleInputName2").value = num;
//		}
		
//		}
		
	
//	function add(){
//	    var num = parseInt(document.getElementById("exampleInputName2").value);
//	    document.getElementById("exampleInputName2").value = "";
//		num = num+1;
//		document.getElementById("exampleInputName2").value = num;
//	}
$(document).ready(function () {
    $("#num-del").click(function () {
        var num = parseInt($("#exampleInputName2").val());
        if (num == 1) {
        }
        else {
            num--;
            $("#exampleInputName2").val(num);
            $("#exampleInputName2").change();
        }     
    });
    $("#num-add").click(function () {
        var num = parseInt($("#exampleInputName2").val());
        num++;
        $("#exampleInputName2").val(num);
        $("#exampleInputName2").change();
    });   
});