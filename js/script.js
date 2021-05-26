(function($) {
	
	"use strict";

	function handlePreloader() {
		var path = window.location.pathname;
            console.log("The path is ", path);
            $('#menu li a[href = "' + path + '" ]').parent().addClass("active");
	}

/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});

})(window.jQuery);