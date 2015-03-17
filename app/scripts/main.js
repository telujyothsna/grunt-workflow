'use strict';

var Edulastic = (function(window, $){
	var initializeScrollBars = function(){
		// var $customScrollbars = $('div[data-custom-scrollbar="true"]');
		// $customScrollbars.mCustomScrollbar();


		$('#rightbar .js-scroll-bar').mCustomScrollbar({
				setHeight: "100%",
				theme: "dark",
				setTop: "-110px"
			});
	};

	var listenForDomInsertionsToInitializeScrollbars = function(){

	}

	function Edulastic(){
		initializeScrollBars();
		listenForDomInsertionsToInitializeScrollbars();
	}

	return{
		initializeScrollbars: initializeScrollBars,
		init: Edulastic
	};

})(window, $) ;	

Edulastic.init();