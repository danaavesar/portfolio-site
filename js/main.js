/*------------------------------------------------*/
// Single-Page Application
// -----------------------


var app = app || {};

app.main = (function(mfaProjects){

	console.log('Loading app.');


	var init = function(){
		console.log('Initializing app.');
		render("start", mfaProjects);
		render("menu", mfaProjects);
		
		for(var i=2; i< 18; i++){
			var div = $("<div class='draggable'>");
			var innerDiv = $("<div class='rotate-resizeable'>");
			var img = $('<img class="imgdrag">');
			img.attr('src', 'img/mfadt/foods-great-adventure/sketches/' + i + '.jpg');
			innerDiv.append(img);
			div.append(innerDiv);
			var randomPosX; var randomPosY; var randomRotation;
			// randomPosX = ((Math.random()*830)+0);
			// randomPosY = ((Math.random()*200)+0);
			randomPosX = ((Math.random()*80)+0);
			randomPosY = ((Math.random()*200)+0);
			randomRotation = ((Math.random()*10)+-5);
			div.attr("style",'left:' + randomPosX + '%;top:' + randomPosY + 'px; -webkit-transform:rotate('+randomRotation + 'deg); transform:rotate('+randomRotation + 'deg)');

			$(".dragdrop").append(div);
			
			var params = {
    			wheelRotate: false
			}
			 $(".rotate-resizeable").resizable({aspectRatio:true, maxWidth: 350}).rotatable(params);
			 $(".draggable").draggable({
				stack: ".draggable",
				containment: "parent" 
			});
			
			if(i == 17){
				attachEvents();
			}
		}
		
	
	};

	var attachEvents = function(){
		console.log('Attaching events.');
		var mainPage = true;
      
		$(document).ready(function(){
			$('#descr-container').on('click', '.nav-btns > p', function(){
				var currentProject;
				$('.project-description').each(function(){
					if($(this).is(":visible")){
						currentProject = "#"+$(this).attr('description-name');
					};
				})
				console.log(currentProject)
				if($(this).attr('id')=='next'){
					var next = $('[link='+currentProject+']').next();
					
					if(next[0] == null){
						console.log("is end");
						next = $('[link='+currentProject+']').parent().next().next().find('p:first-child');
					}
					next.trigger('click');
				}else if($(this).attr('id')=='prev'){
					var prev = $('[link='+currentProject+']').prev();
					if(prev[0] == null){
						console.log("is end");
						prev = $('[link='+currentProject+']').parent().prev().prev().find('p:last-child');
					}
					prev.trigger('click');
				}
				
			})

			$('#descr-container').off('click').on('click', '#close-project',function(){
				$('.category-section').fadeIn();
			 	$('#descr-container').hide();
			 	mainPage = true;
			})
			$('.project-section').off('click').on('click', function(){
			 	$('.category-section').hide();
			 	var whichProject = $(this).attr('name');
			 	$('#descr-container').fadeIn();
			 	$(".project-description").hide();
			 	var num;
			 	
			 	for(var i=0; i < mfaProjects.length; i++){
			 		if(mfaProjects[i].hasOwnProperty('#'+whichProject)){
			 			num = i;
			 		}
			 	}
			 	//if it doesnt already exist, render it
			 	if($('[description-name='+whichProject+']').length == 0){
			 		render("descr", {value:mfaProjects[num]});
			 	}
			 	
			 	$('project-description').hide();
			 	$('[description-name='+whichProject+']').show();
			 	$('#nav-bar').show();
			 	mainPage = false;
			 	$('#parallax').scrollTop(1700);
		 	})
			console.log("document ready");
			$( 'a[href^="http://"]' ).attr( 'target','_blank' );
			$('.slider').slick({
			  	dots: true,
			  	arrows: true,
			  	slidesToShow: 1,
			  	slidesToScroll: 1,
			  	rows: 1,
			  	 adaptiveHeight: true,
			  	 nextArrow: "<a class='slick-prev slide-prev slide-arrow'><span class='slide-icon-wrap'></span></a>",
			  	 prevArrow: "<a class='slick-next slide-next slide-arrow'><span class='slide-icon-wrap'></span></a>"
			});
			$('.menu .nav-diamond a').off('click').on('click', function(e){
				var category = $(this).attr('id');
				var categoryDiv = ".category-div-" + category;
				// console.log(categoryDiv);
				var id= $(this).attr('id');
				$('.' + id +'-diamond').toggleClass('open');
				$('.' + id+'-diamond').toggleClass('close');
			 	$(categoryDiv).slideToggle(800);
			 	$('.'+ category).slideToggle(800);
			});

			$('.smooth').off('click').on('click', function(e){

				 var par = $(this).parents().eq(0);
				 var content = par.prev();
				  // console.log(content);
				 content.slideToggle(500);
			    
	    		if ($(this).hasClass('up')){
	    			console.log(this + " has class up so im scrolling");
	    			var height = content.height();
		    		currentScrollPosition = $('#parallax').scrollTop();
		    		$('#parallax').animate({
		    			scrollTop: (currentScrollPosition - height)
		    		}, 800)
	    		}
	    		$(this).toggleClass('down');
			 	$(this).toggleClass('up');
			 
			 	 

			})

			$("#about-me").off('click').on('click', function(){
				
				$("#menu").css({'opacity': .1});
				$("#parallax").css({'opacity': .1});
				$("#mobile-menu").css({'opacity': .1})
				$("#about-div").show();
				$("#about-div").css({'opacity': 1})


			});

			$("#close-div").off('click').on('click', function(){
				$("#about-div").css({'opacity': 0});
				$("#menu").css({'opacity': 1});
				$("#parallax").css({'opacity': 1});
				$("#mobile-menu").css({'opacity': 1})
				$("#about-div").hide();
				
			});
			var menuFixPoint = 1579;
			$('.menu-item').mouseenter( function(e){
				if(mainPage == true){
					 e.preventDefault();
					 var posDiv = $( $(this).attr('link') ).position().top;
					 $('#parallax').animate({
		        		scrollTop: 1579 + posDiv
		    		}, 700, 'easeOutQuart');
					 var name = $(this).attr('link').replace('#','');
					

					 $("#"+name).find('h1').addClass('hov');
					 return false;
				}
		
			});
			$('.menu-item').mouseout( function(e){
				if(mainPage == true){
					var name = $(this).attr('link').replace('#','');
				 	$("#"+name).find('h1').removeClass('hov');
				}
				
			});

			$('.menu-item').click(function(a){
				a.preventDefault();
				var name = $(this).attr('link').replace('#','');
				console.log(name);
				$("#"+name).trigger('click');
			});

			$('#mobile-menu').off('click').on('click', function(){
				$('.menu').addClass('open');
			})
			$( ".menu" ).on( "swipeleft", function(){
				$('.menu').removeClass('open');
			} );

		
				
		});
		$(window).resize(function(){
			if($(window).width() < 480){
					$("#mobile-bar").show();
				}else{
					$("#mobile-bar").hide();
				}
		})
		if($(window).width() < 480){
			$( "#parallax" ).on( "scrollstart", function( event ) {
				console.log('scroll') 
				$('#parallax').animate({scrollTop:'1572px'},700) ;
			 } )
					
		}
		$('#parallax').scroll(function(){
			//console.log($('#parallax').scrollTop())
			if($('#parallax').scrollTop() >= 1579){
				$("#menu").show();
				$("#fake-menu").hide();

				if($(window).width() < 480){
					$("#mobile-bar").show();
				}else{
					$("#mobile-bar").hide();
				}
				$(".container > img").addClass('fade');
				$(".container > p").addClass('fade');
			}else{
				$("#mobile-bar").hide();
				$("#fake-menu").show();
				$("#menu").hide();
				$(".container > img").removeClass('fade');
				$(".container > p").removeClass('fade');
				
			}
			if($('#parallax').scrollTop() > 10){
				$("#scroll-down-text").fadeOut();
				$("#scroll-down-arrow").fadeOut();
			}
			if($('#parallax').scrollTop() < 10){
				$("#scroll-down-text").fadeIn();
				$("#scroll-down-arrow").fadeIn();
			}

		});
		
		 videos()  
		 

	
	}

	var render = function(viewName, data){
		console.log('Rendering template for ' + viewName);
		console.log('Received data: ' + data);
		// console.log(data);

		// Load the template from the html file
		var templateToCompile = $('#tpl-' + viewName).html();
		// Attach the template to the underscore function
		var compiled =  _.template(templateToCompile);

		// Send the data and display the result
		if(viewName == "start"){
			$('#view').html(compiled(data));
			
		}else if(viewName == "menu"){
			$('#menu').html(compiled(data));
			$('#fake-menu').html(compiled(data));
			
		}else if(viewName == "descr"){
			$('#descr-container').append("<div id='nav-bar'><div class='nav-btns'><p id='prev'>< Prev </p><p id='next'>Next ></p></div><div id='close-project'><span class='close-about-me fat heavy'></span></div></div>");
			$('#descr-container').append(compiled(data));
		}
		
        
	};	

	var videos = function(){

	} //end videos

	return {
		init: init
	};
})(mfaProjects);

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);