$(function() {
    Common.initExternalLinks();
    Interface.initialize();
});
var Interface = function() {
    var _this;
    return {
        initialize: function() {
            _this = this;
			this.initJscroll();
        },
		initJscroll: function() {
			$('[data-ui="jscroll-default"]').jscroll({
			    debug: true
			});
		}
    };
}();