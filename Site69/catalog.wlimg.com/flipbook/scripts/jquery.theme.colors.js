(function($){
	$(document).ready(function(){
		var $aside = $('#aside'),
			asideLeft = $aside.css('left');

		$('#show-modify-theme').on('click', function(){
			if($($aside).is(':animated')) return;

			if(!$aside.data('visible')){
				$aside.animate({left : 0}, 'slow', function(){
					$aside.data('visible', true)
				})
			}

			else {
				$aside.animate({left : asideLeft}, 'slow', function(){
					$aside.data('visible', false)
				})
			}
			
		})
		
		
		
		var saveThemeContainer = $('#saveThemeContainer');
		var saveThemeToggle = $('#saveThemeToggle');
		var saveThemeContent = $('#saveThemeContent');
		
		saveThemeToggle.click(function(){
			if(saveThemeContent.hasClass('vh')) {
				saveThemeContent.removeClass('vh');
				saveThemeContainer.animate({left:0},500)
			}
			
			else {
				saveThemeContainer.animate({left:-171},500,function(){
					saveThemeContent.addClass('vh');
				})
			}
		})
		
		
		//$('.minicolors').find('> span').addClass('c5px dib vam')
		
		$('#bodyBgColor').CustomMiniColors('#styleBodyBgColor');
		$('#footerBgColor').CustomMiniColors('#styleFooterBgColor');
		$('#footerColor').CustomMiniColors('#styleFooterColor');
		$('#zoomColor').CustomMiniColors('#styleZoomColor');
		
	})
	
	
	
	$.fn.CustomMiniColors = function(e){
		if(!this.length) return;
		var o = $(this);
		return this.each(function(){
			o.minicolors({
				textfield : false,
			
				show : function(){
					o.data({colorCode:o.val()})
				},
				
				change : function(){
					var h = $(e).html(); //html
					var regExp = new RegExp(o.data('colorCode'),"g");
					h = h.replace(regExp,o.val());
					
					o.data({colorCode:o.val()});
					$(e).html(h);
				}
			})
		})
	}
})(jQuery)