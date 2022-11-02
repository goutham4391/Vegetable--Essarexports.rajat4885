(function($){
	$(document).ready(function(){ // document ready starts
	
		var $applychildrenscrollerplugin = $('[data-plugin~="childrenscroller"]'); //childrenscroller start
		for(i=0, j=$applychildrenscrollerplugin.length; i<j; i++){
			$($applychildrenscrollerplugin[i]).childrenscroller();
		}//childrenscroller end
		
		fddcw();
		
		
		
		
		if( $('.formatView').length ) {
			var $formatView = $('.formatView'),
				$a = $formatView.children('a');
				$classifieds = $('#classifieds'),
				$bxslider = $classifieds.find('.bxslider'),
				$li = $bxslider.children('li'),
				liHeight = 0;

			if( !$a.length ) return;

			if( $li.length ) {
				$li.each(function(){
					liHeight = Math.max($(this).height(), liHeight)
				})
			}

			$formatView.children('a').each(function(){
				$(this).click(function(){
					if ( $(this).hasClass('on') ) return;

					else {
						$(this).addClass('on').siblings('a').removeClass('on');

						if( $classifieds.length ) {
							$classifieds.toggleClass('classified3Images classified_detailview');

							if( $classifieds.hasClass('classified_detailview') ) {
								$li.css({height : 'auto'})
							}

							else {
								$li.css({height : liHeight})
							}
						}
					}
				})
			})
		}
		
		
		
		
		$('#projectMoreLinksA').mouseover(function(){//Project JS Starts
			//if($('#projectLinks').css('display')=='none'){
				$('#projectMoreLinksDiv').slideDown('slow',function(){})	
			//}
		})
		$('#projectMoreLinksA, #projectMoreLinksDiv').mouseleave(function(){
			t=setTimeout(hideObj, 1000)
		})
		function hideObj(){
			$('#projectMoreLinksDiv').slideUp('slow')
		}
		$('#projectMoreLinksA, #projectMoreLinksDiv').mouseover(function(){
			clearTimeout(t)
		})
		
		function openMenus(src,destination){
			$(src).mouseover(function(){
				$(destination).slideDown('slow',function(){})
			})
		}//Project JS Ends
		
	
	}); // document ready ends
	
	
	
	
	
	jQuery(window).load(function(e) {
		var bxslider = $('[class *= "bxslider"]');
			
		if(bxslider.length){
			bxslider.each(function(){
				
				$(this).children('li').css({height : 'auto'});
				$(this).children('li').EqualHeight();
			})
		}
	});
		
		
	jQuery(window).resize(function(){
		var bxslider = $('[class *= "bxslider"]');
		
		if(bxslider.length){
			bxslider.each(function(){
				$(this).children('li').css({height : 'auto'});
				$(this).children('li').EqualHeight();
			})
		}
		
		fddcw();
	})
	
	
	
	$.fn.childrenscroller=function(){ /* childrenscroller plugin starts */
		if(!this.length) return;
		var $this = $(this);
		var defaults = {
			delay				:	1000,
			pause				:	1000,
			speed				:	500
		};
		
		var options = $.extend({}, defaults, $(this).data('childrenscroller-settings'))
		
		var interval_id			=	null,
			pause				=	false
			height				=	$(this).height(),
			tags				=	$(this).children();
		
		return this.each(function(){
			var start = function (){
				var child_height = $this.children().eq(0).outerHeight(true);

				if ($this.height() - $this.scrollTop() >= child_height){
					interval_id = setInterval(scroll, options.pause);
				}
			};

			
			var scroll = function (){
				if (pause) {return;}
				clearInterval(interval_id);
				var child_height = $this.children().eq(0).outerHeight(true);
				
				$this.animate({scrollTop:child_height}, options.speed, function(){
					$this.append($this.children().eq(0))
					$this.scrollTop(0);
					setTimeout(start, options.pause);
				})
			};
			
			$this.on("mouseover", function (){pause = true;});
			$this.on("mouseout", function (){pause = false;});
			setTimeout(start, options.delay);
		})
	/* childrenscroller plugin ends */ };	
	
	
	
	 $.fn.EqualHeight = function(){
		var _this = $(this)
		var max = 0;
		this.each(function(){
			max = Math.max( max, $(this).height());
		});
		
		_this.css('height',max)
	} 
	
	
	
})(jQuery);


function fddcw(){
	var s = jQuery('.dynamic-data-container');
	s.css('width', 'auto');
	
	if(s && s.length){
		s.children().hide();
		var w = s.css('width');
		s.children().show();
		s.css({'width':w,'overflow-x':'auto'})
	}
}


function imgDisplay(img,n) {
	document.getElementById('imgZoomThumb').src=img;
	document.getElementById('imgZoom').href=img;
	as=document.getElementById('imgCounter').getElementsByTagName('a');
	for (i=0; i<as.length; i++) {
		if(i==n) {
			as[i].className='on';
		}
		else as[i].className='';
	}
}