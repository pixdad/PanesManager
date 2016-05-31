define(function (require, exports, module) {

	"use strict";
	var Commands = app.getModule("command/Commands");
	var CommandManager = app.getModule("command/CommandManager");
	var ExtensionUtils = app.getModule("utils/ExtensionUtils");

	//Buttons creation with jQuery, in the statusbar
	var $right = $('#statusbar .right-section');

	var leftImgPath = ExtensionUtils.getModulePath(module, "src/left-alignment.png");
	var rightImgPath = ExtensionUtils.getModulePath(module, "src/right-alignment.png");

	var $closeLeftPannel = $('<div class="close-left item" title="Toggle Sidebar" style="padding:0 1em"><span><img class="k-sprite" src="'+leftImgPath+'" /></span></div>');
	var $closeRightPannel = $('<div class="close-right item" title="Toggle Navigator" style="padding:0 1em"><span><img class="k-sprite" src="'+rightImgPath+'" /></span></div>');

	$right.append($closeLeftPannel);
	$right.append($closeRightPannel);

	//Execute the command "hide" & "show" on the click of the button
	$('.close-right').click(function() {
		CommandManager.execute(Commands.VIEW_HIDE_NAVIGATOR);
	});
	$('.close-left').click(function() {
		CommandManager.execute(Commands.VIEW_HIDE_SIDEBAR);
	});
	

});
