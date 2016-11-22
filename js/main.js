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
		$(document).ready(function(){
			// load();
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
			
			$('.menu-item').off('click').on('click', function(e){
				 e.preventDefault();
				var posDiv = $( $(this).attr('href') ).position().top;
				 $('#parallax').animate({
	        		scrollTop: 1500 + posDiv
	    		}, 700, 'easeOutQuart');
				 return false;
		
			});
			var toggle = false;
				$("#mobile-menu").off('click').on('click', function(){
					if(toggle == false){
						$(".menu").css({
							right: '0px'
						});
						$("#mobile-menu").css({
							right:'230px'
						})
						toggle = true;
					}else{
						$(".menu").css({
							right: '-400px'
						});
						$("#mobile-menu").css({
							right:'0px'
						})
						toggle = false;
					}
				});
			if($(window).width() > 480){
			
			}
		});

		$('#parallax').scroll(function(){
			if($('#parallax').scrollTop() > 1500){
				$("#menu").show();
				$("#fake-menu").hide();
				if($(window).width() < 480){
					$("#mobile-menu").show();
				}
			}else{
				$("#fake-menu").show();
				$("#menu").hide();
				$("#mobile-menu").hide();
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

		// console.log($(".project-title-container").height());
		// $(".project-title-container").each(function(){
		// 	console.log($(this).height());
		// 	var h = $(this).height();
		// 	$(this).css({
		// 		"margin-top": h/4,
		// 		"transform": "translateY(50%)"
		// 	})
		// });
		
		   

    	
    //     function load() {
    //     	console.log("first function");
    //         var div, n,
    //             v = document.getElementsByClassName("youtube-player");
    //         for (n = 0; n < v.length; n++) {
    //             div = document.createElement("div");
    //             div.setAttribute("data-id", v[n].dataset.id);
    //             div.innerHTML = labnolThumb(v[n].dataset.id);
    //             div.onclick = labnolIframe;
    //             v[n].appendChild(div);
    //         }
    //     };
 
    // function labnolThumb(id) {
    //     var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
    //         play = '<div class="play"></div>';
    //     return thumb.replace("ID", id) + play;
    // }
 
    // function labnolIframe() {
    //     var iframe = document.createElement("iframe");
    //     var embed = "https://www.youtube.com/embed/ID?autoplay=1";
    //     iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    //     iframe.setAttribute("frameborder", "0");
    //     iframe.setAttribute("allowfullscreen", "1");
    //     this.parentNode.replaceChild(iframe, this);
    // }

	
	}

	var render = function(viewName, data){
		console.log('Rendering template for ' + viewName);
		console.log('Received data:');
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

		}
		//attachEvents();
        // We've just created some new elements,
        // so let's attach the events to them
        
        
	};	
	return {
		init: init
	};
})(mfaProjects);

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);