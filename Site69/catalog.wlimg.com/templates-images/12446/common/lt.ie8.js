var Icomoon=Icomoon||{};(function(b,a,c){Icomoon.Icons={init:function(g){if(g===-1||g>=8){return false}var f=a.getElementsByTagName("*"),e,d,j,h;for(e=f.length-1;e>=0;e--){h=f[e];d=h.getAttribute("data-icon");if(d){Icomoon.Icons.addIcon(h,d)}j=h.className;j=j.match(/[^\s'"]+/);if(j&&Icomoon.Icons.icons[j[0]]){Icomoon.Icons.addIcon(h,Icomoon.Icons.icons[j[0]])}}},getIEV:function(){var f=-1;if(navigator.appName=="Microsoft Internet Explorer"){var d=navigator.userAgent;var e=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(e.exec(d)!=null){f=parseFloat(RegExp.$1)}}return f},addIcon:function(f,d){var e=f.innerHTML;f.innerHTML="<span style=\"font-family: 'icomoon'\">"+d+"</span>"+e},icons:{
	
	
	
	'b1' : '&#xe78f;','b2' : '&#xe7b5;','b3' : '&#xe827;','icon_plus_bg' : '&#xe685;','icon_minus_bg' : '&#xe686;','icon_plus' : '&#xe681;','icon_minus' : '&#xe683;','plus' : '&#xe829;','plus.act' : '&#xe828;','tglHome' : '&#xe745;','tglInquiry' : '&#xe7c3;','tglContact' : '&#xe771;','fb' : '&#xe827;'
	
	
	}};Icomoon.Icons.init(Icomoon.Icons.getIEV())})(window,document);
	
	