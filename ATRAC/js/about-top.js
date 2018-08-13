$(function(){

	$('simple-open').click(function(){
		$('#simple-inner').slideUp(slow/400/fast);
	});

	$('#menu01').click(function(){
		$('#item').slideUp();
	});
});