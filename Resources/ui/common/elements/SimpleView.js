function SimpleView(){
	
	var self = Ti.UI.createView({
		width: 'auto',
		height: Ti.UI.SIZE,
		right: '5%',
		left: '5%',
		top: '5%',
		borderRadius: 3,
		outline: 2,
		outlineColor: 'black',
		padding: 10,
		backgroundColor: global.colors.lightest
	});
	
	return self;
};

module.exports = SimpleView;