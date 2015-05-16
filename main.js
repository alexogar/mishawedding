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

})})();