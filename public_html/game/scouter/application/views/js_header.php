<script type="text/javascript" src="<?=base_url()?>js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="<?=base_url()?>js/header.js"></script>
<script type="text/javascript" >
$(function() {

	var $el, leftPos, newWidth,
		$mainNav = $("#menu_bar");

	$mainNav.append("<li id='magic-line'></li>");
	var $magicLine = $("#magic-line");

	$magicLine
		.width($(".current_page_item").width())
		.css("left", $(".current_page_item a").position().left)
		.data("origLeft", $magicLine.position().left)
		.data("origWidth", $magicLine.width());

	$("#menu_bar li a").hover(function() {
		$el = $(this);
		leftPos = $el.position().left;
		newWidth = $el.parent().width();
		$magicLine.stop().animate({
			left: leftPos,
				width: newWidth
		});
	}, function() {
		$magicLine.stop().animate({
			left: $magicLine.data("origLeft"),
				width: $magicLine.data("origWidth")
		});
	});
});	
</script>

