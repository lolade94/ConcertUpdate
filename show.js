/**
 * @author lolade94
 */
$(document).ready(function(){
	
	function rotator(){
		
		$('ul li:first-child').slideUp(1000, function(){
			
			$(this).appendTo($('ul')).show();
		});
	}
	
	setInterval(rotator, 3000);
	rotator.show();
	
	
	
});
