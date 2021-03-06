//	***********************************************
//	WINE LIFE
//	DISCOVER WINDOW  - DiscoverWindow.js
//	
//	MEN+1
//	Programmer:  Matthew Johnson
//	***********************************************

function DiscoverWindow(title) {
	var global = require('ui/common/globals');
	// Creates the default window with global color scheme
	var self = global.createWindow(title);
	
// create an array of anonymous objects
// Create an array of explicitly defined custom TableViewRows
var tbl_data = [];
for (var i = 0; i < 10; i++) {
	var row = Ti.UI.createTableViewRow({
		hasChild:true,
		height:90
		
	});
	// This image will be the image of the wine
		var image = Ti.UI.createImageView({ 		
  		height: 80,
  		width: 80,
  		left: 10,
  		top:5,
  		borderColor: 'black',
		borderWidth: 1,
  		contentMode: 'aspectfill',
  		clipsToBounds: false,
  		image:'/images/logo.png',
  		layout:'vertical'
	});
	
	// This is the Label for the location of the wine within the row
	var lbl_location = Ti.UI.createLabel({
		left:'40%',
		color:global.colors.dark,
		bottom:10,
		text: "Wine Location",
		font:{fontSize:18,fontWeight:'normal',fontFamily:'Helvetica Neue'},
		touchEnabled:false
	});
	
		// This is the label of the type of wine within the row
	var lbl_type = Ti.UI.createLabel({
		left:'40%',
		color:global.colors.dark,
		text: 'Wine Type',
		bottom:lbl_location.top,
		font:{fontSize:18,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		touchEnabled:false
	
	});

	// This is the Label for the location of the date within the row
	var lbl_date = Ti.UI.createLabel({
		right:5,
		top:5,
		color:global.colors.dark,
		text: "Date",
		font:{fontSize:12,fontWeight:'normal',fontFamily:'Helvetica Neue'},
		touchEnabled:false
	});


	
	row.add(image);
	row.add(lbl_location);
	row.add(lbl_type);
	row.add(lbl_date);
	
	row.addEventListener('click', function() {
	var win_review = require('ui/handheld/WineReview');
		self.containingTab.open(win_review());			
	});
	
	tbl_data.push(row);
}
// This is the tableview
var table = Titanium.UI.createTableView({
	backgroundColor:'transparent',
	top:0,
	width:'100%',
	height:'73%',
	
	data:tbl_data
});
	
	self.add(table);
	
	// This is the browse by color button
	var btn_bbc = Ti.UI.createButton({
		height:'20%',
		width:'42%',
		left:20,
		color: global.colors.dark,
		bottom:10,
		borderColor: global.colors.dark,
		borderRadius: 5,
		borderWidth: 1,
		backgroundColor: global.colors.lightest,
		backgroundImage: 'none'
	
	});
	// This label is the text for the browse by color button
	var lbl_bbc = Titanium.UI.createLabel({
    color:'black',
    font:{fontSize:18,fontWeight:'bold',fontFamily:'Helvetica Neue'},
    highlightedColor:global.colors.dark,
    text:'Browse by Color',
    textAlign:'center',
    touchEnabled:false,
    bottom:10,
    left:btn_bbc.left,
    height:btn_bbc.height,
    width:btn_bbc.width
});
	
	self.add(btn_bbc);
	self.add(lbl_bbc);
	
	// This is the browse by style button
	var btn_bbs = Ti.UI.createButton({
		height:'20%',
		width:'42%',
		right:20,
		textAlign:'center',
		color: global.colors.dark,
		bottom:10,
		borderColor: global.colors.dark,
		borderRadius: 5,
		borderWidth: 1,
		backgroundColor: global.colors.lightest,
		backgroundImage: 'none'
	
	});
	
		// This label is the text for the browse by style button
	var lbl_bbs = Titanium.UI.createLabel({
    color:'black',
    font:{fontSize:18,fontWeight:'bold',fontFamily:'Helvetica Neue'},
    highlightedColor:global.colors.dark,
    text:'Browse by Style',
    textAlign:'center',
    touchEnabled:false,
    bottom:10,
    right:btn_bbs.right,
    height:btn_bbs.height,
    width:btn_bbs.width
});
	
	self.add(btn_bbs);
	self.add(lbl_bbs);
	
	// Listener for Browse by Color
	btn_bbc.addEventListener('click', function() {
	var win_bbc = require('ui/handheld/BrowseByColor');
		self.containingTab.open(win_bbc());			
	});
	// Listener for Browse by style
	btn_bbs.addEventListener('click', function() {
	var win_bbs = require('ui/handheld/BrowseByStyle');
		self.containingTab.open(win_bbs());			
	});
	
	global.outputHook(self);
	return self;
};

module.exports = DiscoverWindow;