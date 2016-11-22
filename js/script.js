$(function(){

		$('#top').localScroll({
    target:'body'
	});

	$('#grid').on('click',function(e){
		if( $('#grelha').length > 0 ){ 
			$('#grelha').attr('id', 'lista');
			$(this).html('<span data-icon="i" class="icon"></span> Grelha');
		} else {
			$('#lista').attr('id', 'grelha');
			$(this).html('<span data-icon="k" class="icon"></span> Lista');
		}
		e.preventDefault();
	});	

});