(function(){jQuery(document).ready(function() {
	var noSlide = {
		img: "img/14.jpg"
	};
	var questSlides = [
		{
			img : "img/0.jpg",
			text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aspernatur nulla assumenda minus similique reprehenderit modi, quaerat commodi repellendus mollitia accusantium nam blanditiis hic laudantium quasi reiciendis debitis nemo consequatur?",
			yes_text : "asdasd",
			no_text : "asdasdasd"
		},

		{
			img : "img/01.jpg",
			text : "qweqweqweqweqwe"
		},

		{
			img : "img/02.jpg",
			text : "dsfkaf;ad;fnasd;fnas;dfas;dofnas;df",
			yes_text : "asdasd",
			no_text : "asdasdasd"
		},

		{
			img : "img/03.jpg",
			text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ipsum, autem eligendi quam sapiente alias nihil sunt suscipit ipsam tenetur dolorem nobis! Quo quam architecto in corporis quibusdam eius placeat."
		},

		{
			img : "img/04.jpg",
			text : "aasdasdasdasdas"
		}
	];

	var currentSlide = 0;

	var showSlide = function(num) {
		currentSlide = num;

		var slide = questSlides[currentSlide];

		jQuery("#quest-slide-img").attr('src', slide.img);
		jQuery("#quest-slide-text > p").html(slide.text);

		var yt = slide.yes_text || "Yes";
		var nt = slide.no_text || "No";

		jQuery("#quest-yes-button").text(yt);
		jQuery("#quest-no-button").text(nt);
	};

	jQuery("#quest-yes-button").click(function() {
		showSlide(currentSlide+1);
	});

	showSlide(0)
})})();