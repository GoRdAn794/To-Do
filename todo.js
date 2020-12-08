$(document).ready(function(){
	var count=0;
	$("#butn1").click(function(){
		var x=$("#inp").val();
		console.log(x);
		var ch= $('#box').append('<div class="d">'+'<input type="checkbox" id="che"/><span>' +x+'</span> <button class="btn btn-outline-info" id="btn1'+count+'">Edit</button>'+'<button class="btn btn-outline-danger btn2">Delete</button>'+'</div>'+'<br>');
		console.log("value=",ch);
		$('#box').append(ch);


	$(".btn2").click(function(){
		
		$(this).parent().remove();
	});	

	$("#btn1"+count).click(function(){

		$(this).prev().attr('contenteditable','true');
		$(this).prev().focus();
	});
	count++;
	$("#box").on("click","#che",function(){
		$(this).parent().appendTo(".box2");
	});
	$(".box2").on("click","#che",function(){
		$(this).parent().appendTo("#box");
	});
		// var ele = $('#left').append('<input type="checkbox" class="id_1"/>' + x);

$("#inp").val("");
	});
	



});
