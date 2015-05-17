(function(){jQuery(document).ready(function() {
	var change = function(from, to) {
		$(from).fadeOut("slow", function() {
			$(to).fadeIn("slow", function(){
				$("html, body").animate({ scrollTop: $(document).height() }, "slow");
			});
			
		});

	};

	jQuery(".quest_int_link").click(function(e) {
		e.preventDefault();
		var ref = jQuery(this).attr('ref');
		change(jQuery(this).closest('.slide'), ref);
	});

	jQuery(".quest_show_link").click(function() {
		var ref = jQuery(this).attr('ref');
		jQuery(ref).fadeIn('slow');
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
	});

	jQuery("#quest_link").click(function() {
		jQuery(".links").fadeOut(function(){
			change("#beginning","#quest_start");
		});

	});

	jQuery("#skip_quest").click(function() {
		change("#beginning", "#quest_end");
	});

	// Grab the current date
	var currentDate = new Date();
	var oneDay = 24*60*60*1000;
	// Set some date in the future. In this case, it's always Jan 1
	var futureDate  = new Date(currentDate.getFullYear(), 8, 16);

	// Calculate the difference in seconds between the future and current date
	var diff = Math.round(Math.abs((currentDate.getTime() - futureDate.getTime())/(oneDay)));

	jQuery("#count_down").html("Осталось дней:"+diff);
})})();