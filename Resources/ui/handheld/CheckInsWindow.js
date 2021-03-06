//	***********************************************
//	WINE LIFE
//	CHECK-IN WINDOW  - CheckInWindow.js
//	
//	MEN+1
//	Programmer:  Ivan Rodriguez & David Wells
//	***********************************************



function CheckInsWindow(title) {
	var global = require('ui/common/globals');
	// Creates the default window with global color scheme
	var self = global.createWindow(title);
	
	// "Search for wine" text field
	var wines = Titanium.UI.createTextField({
		backgroundColor:'#FFF',
		top:20,
		//left:20,
		width:'80%',
		height:40,
		hintText:'  Search for a wine...',
		paddingLeft:8,
		paddingRight:8,
		borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,

	});
	
	
	
	
	//window to put results
	// This is where I am going put all the results.
	var search_results = global.createWindow(title);
	
	
//******
	
	
	
	// add my search field to my 
	search_results.add(wines);
	
	// This is the function that fires when someone hides the keyboard.
	// Maybe a button event or whatever you want.
	wines.addEventListener('blur', function(){
		// This is the search api.
		// The firsty value should be the query followed by an anonymous function
		// that will be called once the data has been retrieved. This won't be called
		// if there is a failure. 
		global.api.search(wines.value, function(result){
			// get a view with the results.
			var view = global.api.search_results(result);
			// Add this view to the view in the whole page.
			search_results.add(view);
		});
	});
	// add overview to the window.
	self.add(wines);
	
	
	// NEED SOMETHING HERE *****
	

//*******
	
	
	
	
	
	// "Year" text field
	var year = Titanium.UI.createTextField({
		backgroundColor:'#FFF',
		bottom:170,
		left:20,
		width:'40%',
		height:40,
		hintText:'  Year...',
		paddingLeft:8,
		paddingRight:8,
		borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,

	});
	
	// "Style" text field
	var style = Titanium.UI.createTextField({
		backgroundColor:'#FFF',
		bottom:170,
		right:20,
		width:'40%',
		height:40,
		hintText:'  Style...',
		paddingLeft:8,
		paddingRight:8,
		borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,

	});
	
	// Creates "Look-Up" button
	var btn = Titanium.UI.createButton({
		color:'#000',
		title:"Look-Up",
		color: global.colors.dark,
		borderColor: global.colors.dark,
		borderRadius: 5,
		borderWidth: 1,
		backgroundColor: global.colors.lightest,
		backgroundImage: 'none',
		font:{fontSize:18,fontWeight:'normal',fontFamily:'Helvetica Neue'},
		top: 70,
		width:'80%',
		height:35
		
	});
	
	// Creates "Browse" button
	var btn2 = Titanium.UI.createButton({
		color:'#000',
		title:"Browse",
		color: global.colors.dark,
		borderColor: global.colors.dark,
		borderRadius: 5,
		borderWidth: 1,
		backgroundColor: global.colors.lightest,
		backgroundImage: 'none',
		font:{fontSize:18,fontWeight:'normal',fontFamily:'Helvetica Neue'},
		bottom:120,
		width:'80%',
		height:35
	});
	
	// Creates label for "browsing by year/style"
	var label1 = Titanium.UI.createLabel({
		color:'#000',            // Black color
		text:'Browse By Year/Style',
		font:{fontSize:18,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		top: 130,
		width:'auto'
	});
	
	// Displays pop-up message after clicking buttons
	btn.addEventListener("click", function(e){
		alert(e.source + " RESULTS FOR SEARCH");
	});
	btn2.addEventListener("click", function(e){
		alert(e.source + " RESULTS FOR BROWSING");
	});
	
	self.add(wines);
	self.add(year);
	self.add(style);
	self.add(btn);
	self.add(btn2);
	self.add(label1);
	//self.open();
	global.outputHook(self);
	return self;
};

module.exports = CheckInsWindow;