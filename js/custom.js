$(function(){


	$('#bx-home').bxSlider({
		auto:true,
		nextSelector: '#home-prev',
		prevSelector: '#home-next',
		nextText: '<i class="fa fa-angle-double-left fa-2x"></i>',
		prevText: '<i class="fa fa-angle-double-right fa-2x"></i>'
		
	});
	
	$('#menu').mmenu({
		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
		searchfield	: true,
		navbar 		: {
			title		: 'القائمة'
		},
		navbars		: [
			{
				position	: 'top',
				content		: [ 'searchfield' ]
			}, {
				position	: 'top',
				content		: [
					'prev',
					'title',
					'close'
				]
			}
		]
	});
	
	
	$(".header .navbar .form-search i").click(function () {
		
		$(".header .navbar .form-search .input-style").fadeToggle()
		
	});

	$(".header .navbar .shopping-cart .fa-angle-down").click(function () {
		
		$(".header .navbar .shopping-cart .items").fadeToggle()
		
	});
	
	  var Projects = $('#OwlProjects');
	 
	  Projects.owlCarousel({
	      
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1200,4], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,3], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      pagination:true,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });
	
	  var Projects = $('#Owlfeatures');
	 
	  Projects.owlCarousel({
	      
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1200,4], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,3], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      pagination:true,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });
	
	$('#bx-clients').bxSlider({
		auto:true,
		nextSelector: '#clients-prev',
		prevSelector: '#clients-next',
		nextText: '<i class="fa fa-angle-left fa-2x"></i>',
		prevText: '<i class="fa fa-angle-right fa-2x"></i>'
		
	});
	
	
	$('#bx-about1').bxSlider({
		auto:true,
		nextSelector: '#about1-prev',
		prevSelector: '#about1-next',
		nextText: '<i class="fa fa-angle-right fa-2x"></i>',
		prevText: '<i class="fa fa-angle-left fa-2x"></i>'
		
	});
	
	$('#bx-about2').bxSlider({
		auto:true,
		nextSelector: '#about2-prev',
		prevSelector: '#about2-next',
		nextText: '<i class="fa fa-angle-right fa-2x"></i>',
		prevText: '<i class="fa fa-angle-left fa-2x"></i>'
		
	});
	
	
	
	  var Projects = $('#OwlTips');
	 
	  Projects.owlCarousel({
	      
	      items : 3, //10 items above 1000px browser width
	      itemsDesktop : [1200,3], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,3], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      pagination:true,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });
	
	
	$('.progress .progress-bar').one('inview', function (event, visible) {
		
		if (visible === true) {
		
			var  data  =  $(this).attr("data-progress-animation");
				
			
			$(this).animate({
				
				width: data
				
			});
		
		}
	});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
