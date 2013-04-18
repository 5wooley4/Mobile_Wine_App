/**
 * @class globals
 * This file gives us easy access to things we are probably going to need on every page.
 */
var globals  =
{
	
	imagefactory: require('ti.imagefactory'),
	/**
	 * @cfg {boject} colors
	 * Our color scheme
	 */
	colors: {
		lightest: '#ffdc95',
		lighter:'#ffb36f',
		light: '#ed5f4a',
		lessDark: '#c42d30',
		dark: '#3c0017'
	},
	TU: require ('/TitanUp/TitanUp'),
	user_id: Ti.App.Properties.getInt('user_id'),
	android: Ti.Platform.osname == 'android',
	/**
	 * Elements to be added
	 */
	elements: {
		/**
		 * A simple view for quick creation
		 */
		SimpleView: require('ui/common/elements/SimpleView'),
		/**
		 * Simple label for quick creation
		 */
		SimpleLabel: require('ui/common/elements/SimpleLabel'),
		/**
		 * the title bar
		 */
		SetTitleBar: require('ui/common/elements/SetTitleBar')
	},
	/**
	 * The config for our app
	 */
	config: require('ui/common/config'),
	/**
	 * Our api to interact with the server.
	 */
	api: require('ui/common/api'),
	/**
	 * if you want to encrypt or decrypt things, here you go.
	 */
	crypt: require('ui/common/crypt')
};
module.exports = globals;

Ti.Facebook.appid = 591074907588038;
Ti.Facebook.permissions = ['email'];
//$.socialWin.open();

/**
 * function to check if the user has logged in, unimplemented
 * @return {Boolean} always returns true
 */
module.exports.userIsLoggedIn = function()
{
	return true;
};
// This is the theme for all of the global aspects




/**
 * Global creation window function
 * Use this to create a new window, so that all of our windows will remain standardized
 * one change here will affect all the windows
 * @param {String} title
 * This is the tile of the window that will be returned.
 */

function createWindow(title){

	var self = Ti.UI.createWindow({
		title:title,
		height:'100%',
		width: '100%',
		//barColor: module.exports.colors.dark,
		barColor: 'black',
		//backgroundColor: "#f8e0ae",//module.exports.colors.lightest,
		//backgroundColor: '#520E07'
		// backgroundGradient: {
	        // type: 'radial',
	        // startPoint: { x: 50, y: 50 },
	        // endPoint: { x: 50, y: 50 },
	        // colors: [ 'f7e6c4','f8e0ae' ],
	        // startRadius: '95%',
	        // endRadius: 0,
	        // backfillStart: true
	    // }
		backgroundImage:'images/Background1.png'
		//backgroundGradient: {
	        //type: 'radial',
	        //startPoint: { x: 50, y: 50 },
	        //endPoint: { x: 50, y: 50 },
	        //colors: [ 'f7e6c4','f8e0ae' ],
	        //startRadius: '95%',
	        //endRadius: 0,
	        //backfillStart: true
	    //}
	});	
	
	return self;
};
module.exports.createWindow = createWindow;


module.exports.loading_animation = function(){
	var style;
	if (Ti.Platform.name === 'iPhone OS'){
	  style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
	}
	else {
	  style = Ti.UI.ActivityIndicatorStyle.DARK;
	}
	return Ti.UI.createActivityIndicator({
		  color: 'red',
		  font: {fontFamily:'Helvetica Neue', fontSize:26, fontWeight:'bold'},
		  //message: 'Loading...',
		  style:style,
		  top:30,
		  //left:10,
		  height:Ti.UI.SIZE,
		  width:Ti.UI.SIZE
		});
	
	
}
/**
 * This is the output hook and should be the last thing called by each page.
 * This allows us to add screen layovers or whatever we want.
 * @param {Window} win
 * Pass in the window to be built upon.
 */
function outputHook(win){
	var settingsButton = Ti.UI.createImageView(
	{	
		height: 30,
		width: 30,
		top: 0,
		right: '10%',
		borderColor: 'black',
		borderWidth: 0,
		contentMode: 'aspectfill',
		clipsToBounds: false,
		image:'/images/gearIcon.png',
		layout:'vertical'
	});
	if(!globals.android)
	{
		win.setRightNavButton(settingsButton);
	}
	settingsButton.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		var settingsWindow = createWindow('');
		settingsWindow.exitOnClose = false;
		Ti.API.info("opening settings window");
		var createSettingsPage = require('ui/common/settings');
		createSettingsPage(settingsWindow);
		win.containingTab.open(settingsWindow);
	});
};
module.exports.outputHook = outputHook;

/**
 * Store an encrypted string that will survive application closes
 * @param {Object} name
 * The name of the string, so you can get it back out.
 * @param {Object} value
 * the value to be encrypted and stored.
 */
function store_string(name, value)
{
	Ti.App.Properties.setString(name, globals.crypt.encrypt(value, globals.config.encryptionpw));
};
module.exports.store_string = store_string;


/**
 * Adds pull to refresh to a scrollView and fires events
 * @param {Ti.UI.ScrollView} scrollView
 * the view to thave the things added
 */
function add_ptr(scrollView){
		if(!scrollView)
			scrollView = Ti.UI.createScrollView({
	            contentHeight : 'auto',
	            layout : 'vertical',
	            showVerticalScrollIndicator: true,
	            verticalBounce: true,
	            overScrollMode:global.android? Titanium.UI.Android.OVER_SCROLL_ALWAYS: null,
	            });
	    else{
	    	scrollView.contentHeight = 'auto';
	    	if(global.android) scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_ALWAYS;
	    	scrollView.verticalBounce = true;
	    }
	   
		var tableHeader = Ti.UI.createView({
            width: '100%',
            height: 60,
            top: -60
        });
 
        var arrow = Ti.UI.createView({
            backgroundImage : "/images/arrow.png",       //your custom image path here.
            width : '23dp',
            height : '40dp',
            bottom : '10dp',
            left : '25dp'
        });
        tableHeader.add(arrow);
         
        var statusLabel = Ti.UI.createLabel({
            text : 'Pull To Refresh',
            textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
            bottom : '30dp',
            height : "auto",
            font : {
                fontSize : '11sp',
                fontWeight : "bold"
            }
        });
        tableHeader.add(statusLabel);
        scrollView.add(tableHeader);
		var offset = 0;
		var do_refresh = false;
		scrollView.addEventListener('scroll', function(e) {
		    if (e.y!=null) {
		        offset = e.y;
		    }

		    if (offset <= -60) {
		    	
		        var t = Ti.UI.create2DMatrix();
		        t = t.rotate(-180);
		        arrow.animate({
		            transform : t,
		            duration : 180
		        });
		        statusLabel.text = 'Release To Reload';
				do_refresh= true;
				
		    }
		    else if (offset >= 0) {             
		        var t = Ti.UI.create2DMatrix();
		        arrow.animate({
		            transform : t,
		            duration : 180
		        });
		        statusLabel.text = 'Pull To Refresh';
            	Ti.API.info('removing touchEnd');
            	
	        	//scrollView.removeEventListener('touchend', refresh);
	        	if(do_refresh)
					scrollView.fireEvent('refreshContents'); 
	        	do_refresh = false;
		      
		    }
		     
		});

		
        // var init = setInterval(function(e){
            // if (offset==0) {
                // clearInterval(init);
            // }
            // scrollView.scrollTo(0,0);
        // },100);
        
        
        return scrollView;
	
};
module.exports.add_ptr = add_ptr; 
/**
 * retrieve and decrypt a stored string.
 * @param {Object} name
 * The name of the string to be retrieved.
 */
function get_string(name)
{
	var text = Ti.App.Properties.getString(name);
	if(text)
		return globals.crypt.decrypt(text, globals.config.encryptionpw);
	return false;
}
module.exports.get_string = get_string;
