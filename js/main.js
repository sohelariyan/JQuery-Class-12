
$(document).ready(function(){



	
$(".add-task").keypress(function(e){
	
		 if(e.keyCode==13 && $(".add-task").val()!=''){

		 	var task = $('<div class="task"></div>').text($(".add-task").val());

		 	var del =  $('<i class="fa-solid fa-trash text-danger ms-4"></i>').click(function(){

		 	var p =	$(this).parent();
		 	p.fadeOut(function(){
		 		p.hide();
		 	});
		 	

		 		});

		 	var ok =  $('<i class="fa-solid fa-check text-success"></i>').click(function(){

		 			var p =	$(this).parent();
		 			
		 			p.fadeIn(function(){
		 		$('.c-task').append(p);
		 	});
		 			p.hide();

		 		});

		 		task.append(del,ok);
		 		$('.ic-task').append(task);
		 		$(".add-task").val('');
		 }
		

		});

		});