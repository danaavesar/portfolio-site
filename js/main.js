/*------------------------------------------------*/
// Single-Page Application
// -----------------------


var app = app || {};
var scroll = true;
app.main = (function(mfaProjects){

	console.log('Loading app.');


	var init = function(){
		console.log('Initializing app.');
		render("start", mfaProjects);
		render("menu", mfaProjects);
		attachEvents();
		//redirect();
		

		
	
	};
	
	var attachEvents = function(){
		console.log('Attaching events.');
		var mainPage = true;
		$(document).ready(function(){
			//---display the right nav-bar---//
			if($(window).width() <= 480){
				var navBar = '#nav-bar-mobile';
			}else{
				var navBar = '#nav-bar';
			}
			//---next and previous arrows---//
			$('.nav-bar').off('click').on('click', '.nav-arrow', function(){
				console.log('next/prev click')
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
			//---swipe to previous and next---//
			$( "#parallax" ).off('swipeleft').on( "swipeleft", function(){
				if(mainPage == false){
					$('#prev').trigger('click');
				}
			});
			//---close project---//
			$("body").off('click').on('click', '#close-project', function(){
				console.log('main-page')
				$('.category-section').fadeIn();
			 	$('#descr-container').hide();
			 	mainPage = true;
			 	$(navBar).hide();
			 	$('#parallax').scrollTop(1579);

			})
			//---click on project---//
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
			 	if(whichProject == 'foods-great-adventure-div'){
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
			 	}
			 	$(navBar).show();
			 	mainPage = false;
			 	$('#parallax').scrollTop(1680);
			 	var videoIds = [];
			 	$(mfaProjects).each(function(i){
			 		if(mfaProjects[i].hasOwnProperty("#"+whichProject)){
			 			var images = mfaProjects[i]["#"+whichProject].images;
		 				for(var n = 0; n<images.length; n++){
		 					if(images[n].indexOf('div id') > -1 && images[n].indexOf('THUMB-') < 0){
			 					var idStartPos = images[n].indexOf('div id') + 8;
			 					var id = images[n].substr(idStartPos,11 )
			 					videoIds.push(id);
		 					}
		 				}	
			 		}
			 	});
			 	console.log(videoIds)
			 	for(var i=0; i<videoIds.length; i++){
			 		var width = '100%';
			 		var height = 'auto';
			 		if(videoIds[i]=='D773rzJk1FA'){
			 			console.log('widthhh')
			 			width = '320px';
			 			height = '443px';
			 		}else if(videoIds[i] == 'i9MQrnrrIxY'){
			 			width= '320px';
    					height= '589px';
			 		}else if(videoIds[i] == 'n-erP_78DUA'){
			 			width= '320px';
    					height= '480px';
			 		}
			        new YT.Player(videoIds[i], {
			        	'width':width,
						'height':height,
						playerVars: {
						'autoplay': 0,
						'loop':1,
						'playlist': videoIds[i],
						'rel':0,
						'modestbranding': 1,
						'controls': 1,
						'showinfo':0,
						
						},
						events: {
						'onReady': onPlayerReady
						},
						videoId: videoIds[i]
					});
				}
				//add link
				// var currentUrl = "http://localhost:8888/hosted/";
				// var newUrl = currentUrl + "?" + whichProject;
             	// window.location.href = newUrl;
		 	});

			$( 'a[href^="http://"]' ).attr( 'target','_blank' );
			//---toggle menu section---//
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

			//---about me button---//
			$("#about-me").off('click').on('click', function(){	
				$("#menu").css({'opacity': .1});
				$("#parallax").css({'opacity': .1});
				$("#mobile-menu").css({'opacity': .1})
				$("#about-div").show();
				$("#cover").show();
				$("#about-div").css({'opacity': 1})
			});
			//---close about me---//
			$("#close-div").off('click').on('click', function(){
				$("#about-div").css({'opacity': 0});
				$("#menu").css({'opacity': 1});
				$("#parallax").css({'opacity': 1});
				$("#mobile-menu").css({'opacity': 1})
				$("#about-div").hide();
				$("#cover").hide();
			});
			var menuFixPoint = 1579;
			//---hover menu item---//
			$('.menu-item').mouseenter( function(e){
				if(mainPage == true){
					
					 var posDiv = $( $(this).attr('link') ).position().top;
					 $('#parallax').animate({
		        		scrollTop: 1579 + posDiv
		    		}, 400);
					 var name = $(this).attr('link').replace('#','');
					

					 $("#"+name).find('h1').addClass('hov');
					
				}
		
			});
			$('.menu-item').mouseout( function(e){
				if(mainPage == true){
					var name = $(this).attr('link').replace('#','');
				 	$("#"+name).find('h1').removeClass('hov');
				}
			});

			//---click on menu item---//
			$('.menu-item').off('click').on('click', function(a){
				a.preventDefault();
				var name = $(this).attr('link').replace('#','');
				console.log(name);
				$("#"+name).trigger('click');
			});
			//---click on mobile-menu icon---//
			$('#mobile-menu').off('click').on('click', function(){
				$('.menu').toggleClass('open');
			})
			//---swipe to close menu---//
			$( ".menu" ).on( "swipeleft", function(){
				$('.menu').removeClass('open');
			} );
			//---click on logo---//
			$(".side-bar-logo").off('click').on('click', function(){
				$("#close-project").trigger('click');
			})	
				
		}); //close document.ready()
		$(window).resize(function(){
			
			if($(window).width() < 480){
				$("#mobile-bar").show();
				if(mainPage != true){
					$("#nav-bar-mobile").show();
					$("#nav-bar").hide();
				}
				
			}else{
				$("#mobile-bar").hide();
				if(mainPage != true){
					$("#nav-bar-mobile").hide();
					$("#nav-bar").show();
				}
			}
		})

		//---scroll events---//
		$('#parallax').scroll(function(){
			console.log('parallax ' + $('#parallax').scrollTop())

			if($('#parallax').scrollTop() >= 1579){
				$("#menu").show();
				$("#fake-menu").hide();
				if(mainPage != true){
					$(navBar).fadeIn();
				}
				if($(window).width() < 480){
					$("#mobile-bar").show();

				}else{
					$("#mobile-bar").hide();
				}
				$(".container > img").addClass('fade');
				$(".container > p").addClass('fade');

			}else{ //less than 1579
				// if($(window).width() < 480 && scroll == true){

				// 	//goToContent();
				// }
				$(navBar).fadeOut(100);
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
	}//attach events end
	
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
			
			
			// $('#descr-container').append("<div id='nav-bar'><div class='nav-btns'><p class='nav-arrow' id='prev'>< Prev </p><p class='nav-arrow' id='next'>Next ></p></div><div id='close-project'><span class='close-about-me fat heavy'></span></div></div>");
			$('#descr-container').append(compiled(data));
		}
		
        
	};	



	return {
		init: init
	};
})(mfaProjects);

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);