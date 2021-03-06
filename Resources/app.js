 
//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}


// This is a single context application with mutliple windows in a stack
(function() {
	var global = require('ui/common/globals');
	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	loginWindow = require('ui/handheld/Login')();
	var email = global.get_string('email');
	var password = global.get_string('password');
	if(email && password)
	{
		
		var dia = Ti.UI.createAlertDialog({
			title: "logging you in",
			message: "one moment..."
		});
		dia.show();
		
		global.api.login(email, password, function(response){
			dia.hide();
			if(response.success)
			{
				var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
				new ApplicationTabGroup().open();
			}
			else
			{
				loginWindow.open();
			}
		});
	}
	else if(global.config.requireLogin){
		loginWindow.open();
	}
	else
	{
		var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
		new ApplicationTabGroup().open();
	}
})();
