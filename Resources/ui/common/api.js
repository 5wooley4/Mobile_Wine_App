/**
 * @class api
 * This is the api documentation
 * most of the api.wine.com comes back the same way.
 * Hint: user this website to get a better understanding of how it's all formatted http://www.bodurov.com/JsonFormatter/ 
 *     @example
 *     {"Status":{"Messages":[],"ReturnCode":0},"Products":{"List":[{"Id":98841,"Name":"Goldeneye Gowan Creek Vineyard Pinot Noir 2006","Url":"http:\/\/www.wine.com\/V6\/Goldeneye-Gowan-Creek-Vineyard-Pinot-Noir-2006\/wine\/98841\/detail.aspx","Appellation":{"Id":2416,"Name":"North Coast","Url":"http:\/\/www.wine.com\/v6\/North-Coast\/wine\/list.aspx?N=7155+101+2416","Region":{"Id":101,"Name":"California","Url":"http:\/\/www.wine.com\/v6\/California\/wine\/list.aspx?N=7155+101","Area":null}},"Labels":[{"Id":"98841m","Name":"thumbnail","Url":"http:\/\/cache.wine.com\/labels\/98841m.jpg"}],"Type":"Wine","Varietal":{"Id":143,"Name":"Pinot Noir","Url":"http:\/\/www.wine.com\/v6\/Pinot-Noir\/wine\/list.aspx?N=7155+124+143","WineType":{"Id":124,"Name":"Red Wines","Url":"http:\/\/www.wine.com\/v6\/Red-Wines\/wine\/list.aspx?N=7155+124"}},"Vineyard":{"Id":6436,"Name":"Goldeneye","Url":"http:\/\/www.wine.com\/v6\/Goldeneye\/learnabout.aspx?winery=3787","ImageUrl":"http:\/\/cache.wine.com\/aboutwine\/basics\/images\/winerypics\/3787.jpg","GeoLocation":{"Latitude":-360,"Longitude":-360,"Url":"http:\/\/www.wine.com\/v6\/aboutwine\/mapof.aspx?winery=3787"}},"Vintage":"","Community":{"Reviews":{"HighestScore":0,"List":[],"Url":"http:\/\/www.wine.com\/V6\/Goldeneye-Gowan-Creek-Vineyard-Pinot-Noir-2006\/wine\/98841\/detail.aspx?pageType=reviews"},"Url":"http:\/\/www.wine.com\/V6\/Goldeneye-Gowan-Creek-Vineyard-Pinot-Noir-2006\/wine\/98841\/detail.aspx"},"Description":"","GeoLocation":{"Latitude":-360,"Longitude":-360,"Url":"http:\/\/www.wine.com\/v6\/aboutwine\/mapof.aspx?productId=98841"},"PriceMax":74.9900,"PriceMin":74.9900,"PriceRetail":74.9900,"ProductAttributes":[{"Id":36,"Name":"Collectible Wines","Url":"http:\/\/www.wine.com\/v6\/Collectible-Wines\/wine\/list.aspx?N=7155+36","ImageUrl":"http:\/\/cache.wine.com\/images\/glo_icon_collectable_big.gif"},{"Id":506,"Name":"Boutique Wines","Url":"http:\/\/www.wine.com\/v6\/Boutique-Wines\/wine\/list.aspx?N=7155+506","ImageUrl":"http:\/\/cache.wine.com\/images\/glo_icon_boutique_big.gif"}],"Ratings":{"HighestScore":94,"List":[]},"Retail":{"InStock":false,"Price":74.9900,"Sku":"DWCGOWAN_2006","State":"CALIFORNIA","Url":""},"Vintages":{"List":[]}},{"Id":98858,"Name":"Goldeneye Confluence Vineyard Pinot Noir 2006","Url":"http:\/\/www.wine.com\/V6\/Goldeneye-Confluence-Vineyard-Pinot-Noir-2006\/wine\/98858\/detail.aspx","Appellation":{"Id":2371,"Name":"Sonoma County","Url":"http:\/\/www.wine.com\/v6\/Sonoma-County\/wine\/list.aspx?N=7155+101+2371","Region":{"Id":101,"Name":"California","Url":"http:\/\/www.wine.com\/v6\/California\/wine\/list.aspx?N=7155+101","Area":null}},"Labels":[{"Id":"98858m","Name":"thumbnail","Url":"http:\/\/cache.wine.com\/labels\/98858m.jpg"}],"Type":"Wine","Varietal":{"Id":143,"Name":"Pinot Noir","Url":"http:\/\/www.wine.com\/v6\/Pinot-Noir\/wine\/list.aspx?N=7155+124+143","WineType":{"Id":124,"Name":"Red Wines","Url":"http:\/\/www.wine.com\/v6\/Red-Wines\/wine\/list.aspx?N=7155+124"}},"Vineyard":{"Id":6436,"Name":"Goldeneye","Url":"http:\/\/www.wine.com\/v6\/Goldeneye\/learnabout.aspx?winery=3787","ImageUrl":"http:\/\/cache.wine.com\/aboutwine\/basics\/images\/winerypics\/3787.jpg","GeoLocation":{"Latitude":-360,"Longitude":-360,"Url":"http:\/\/www.wine.com\/v6\/aboutwine\/mapof.aspx?winery=3787"}},"Vintage":"","Community":{"Reviews":{"HighestScore":0,"List":[],"Url":"http:\/\/www.wine.com\/V6\/Goldeneye-Confluence-Vineyard-Pinot-Noir-2006\/wine\/98858\/detail.aspx?pageType=reviews"},"Url":"http:\/\/www.wine.com\/V6\/Goldeneye-Confluence-Vineyard-Pinot-Noir-2006\/wine\/98858\/detail.aspx"},"Description":"","GeoLocation":{"Latitude":-360,"Longitude":-360,"Url":"http:\/\/www.wine.com\/v6\/aboutwine\/mapof.aspx?winery=3787"},"PriceMax":69.9900,"PriceMin":69.9900,"PriceRetail":69.9900,"ProductAttributes":[{"Id":506,"Name":"Boutique Wines","Url":"http:\/\/www.wine.com\/v6\/Boutique-Wines\/wine\/list.aspx?N=7155+506","ImageUrl":"http:\/\/cache.wine.com\/images\/glo_icon_boutique_big.gif"},{"Id":36,"Name":"Collectible Wines","Url":"http:\/\/www.wine.com\/v6\/Collectible-Wines\/wine\/list.aspx?N=7155+36","ImageUrl":"http:\/\/cache.wine.com\/images\/glo_icon_collectable_big.gif"}],"Ratings":{"HighestScore":94,"List":[]},"Retail":{"InStock":false,"Price":69.9900,"Sku":"DWCCONFLUENCE_2006","State":"CALIFORNIA","Url":""},"Vintages":{"List":[]}}],"Offset":0,"Total":148,"Url":""}}
 */
var api={};

/**
 * The user login function
 * @param {String} email
 * the email address to login with
 * @param {String} password
 * The password to login with
 * @param {Function} callback
 * The callback function to be called when the request is successful.
 */
api.login = function(email, password, callback){
	getResponse('http://winelife.ericwooley.com/user/login/', {email: email, password:password}, callback);
};

/**
 * The user registration function
 * @param {String} email
 * the email address to register with
 * @param {String} password
 * The password to register with
 * @param {Function} callback
 * The callback function to be called when the request is successful.
 */
api.register = function(email, password, callback){
	getResponse('http://winelife.ericwooley.com/user/register/', {email: email, password:password}, callback);
};

/**
 * Get the user profile information
 * @param {Function} callback
 * Callback function, to be called upon success.
 */
api.profileInformation = function(callback){
	getResponse('http://winelife.ericwooley.com/user/profile/', {}, callback);
};

/**
 * Send the server an updated profile
 * @param {String} fname
 * The users first name
 * @param {String} lname
 * The users last name
 * @param {bio} bio
 * The users biography text
 * @param {Function} callback
 * The callback function to be used 
 */
api.editProfile = function(fname, lname, bio, callback){
	getResponse('http://winelife.ericwooley.com/user/update_profile/',{
		fname: fname,
		lname: lname,
		bio: bio
	}, callback);
};

/**
 * creates a view containing a table with all the search results already formatted.
 * for an example, see search
 * @param {Object} search_results
 * All of the search data. It is easiest to just drop in the results from one of the search functions
 * @param {Function} callback
 * Callback function, to be executed when a user clicks on a row.
 * @return {View} returns a view with all the formatted data.
 */
api.search_results = require('ui/common/elements/search_results');

/**
 * general search for items
 * @param {String} query
 * A search query basically words that will be sent to the server.
 * @param {Function} callback
 * callback function that will be given the results. It is recommended that you format this data using api.search_results
 *     @example
 *     api.search("Some Wine I Want maybe", function(search_results){
 *         	Ti.API.info('Here are some search results in json format');
 *          Ti.API.info(JSON.stringify(search_results)); // Check the login for an example of how this object is formatted.
 *          var preformattedTableView = api.search_results(search_results); // Add this view to whatever you want!
 *     });
 */
api.search = function(query, callback){
	query = query.replace(' ', '+');
	getResponse( 'http://winelife.ericwooley.com/search/wine_search/', { query: query, size: 10}, callback );
};

/**
 * Creates a table of friends and returns it via the callback function
 * 
 * @param {Function} callback
 * callback function that will be given the results.
 */
api.load_friend_list = function(callback){
	getResponse('http://winelife.ericwooley.com/user/friendlist/', {}, function(data){
		Ti.API.info('Got to first maker');
		var table = require('ui/common/elements/friend_list');
		table = table(data);
		Ti.API.info('Got to second marker');
		callback(table);
	});
};

/**
 * search for wine by catagories, please note that these catagories need to line up with the wine api catagories. For more information: http://api.wine.com.
 * @param {String} cat
 * catagory id's should be space seperated or + seperated.
 *     @example
 *     "124 254 861"
 *     "124+254+861"
 * 
 * @param {Function} callback
 * callback function that will be given the results. It is recommended that you format this data using api.search_results
 *     @example
 *     api.search("124 227 7764", function(search_results){// 124 is red wine, 227 is ? and 7764 is ? I just made them up.
 *         	Ti.API.info('Here are some search results in json format');
 *          Ti.API.info(JSON.stringify(search_results)); // Check the login for an example of how this object is formatted.
 *          var preformatteedView = api.search_results(search_results); // Add this view to whatever you want!
 *     });
 */
api.catagory = function(cat, callback){
	cat = cat.replace(' ', '+');
	getResponse( 'http://winelife.ericwooley.com/search/wine_search/', { cat: cat, size: 10}, callback );
};

/**
 * General search for a query, with a catagory filter.
 * @param {String} query
 * A search query basically words that will be sent to the server.
 * @param {String} cat
 * catagory id's should be space seperated or + seperated.
 *     @example
 *     "124 254 861"
 *     "124+254+861"
 * 
 * @param {Function} callback
 * callback function that will be given the results. It is recommended that you format this data using api.search_results
 *     @example
 *     api.search("124 ", function(search_results){
 *         	Ti.API.info('Here are some search results in json format');
 *          Ti.API.info(JSON.stringify(search_results)); // Check the login for an example of how this object is formatted.
 *          var preformatteedView = api.search_results(search_results); // Add this view to whatever you want!
 *     });
 */
api.search_with_filter = function(query, cat, callback){
	query = query.replace(' ', '+');
	cat = cat.replace(' ', '+');
	getResponse( 'http://winelife.ericwooley.com/search/wine_search/', { query: query, cat: cat, size: 10}, callback );
};

/**
 * follow a friend, based on their email address
 * @param {String} friends_email
 * A search query basically words that will be sent to the server.
 * 
 * @param {Function} callback
 * callback function that will be given the results.
 */
api.befriend = function(friends_email, callback){
	Ti.API.info("Befriending: " + friends_email);
	getResponse('http://winelife.ericwooley.com/user/befriend/', {fr_email: friends_email}, function(data){
		Ti.API.info('got to here' + JSON.stringify(data));
		if(data.success)
		{
			Ti.API.info('friend success');
			callback(data);
		}
		else
		{
			Ti.API.info('friend error');
			alert(data.error);
		}
	});
};
/**
 * Grabs the data about a specific wine based on it's id.
 * @param {Integer/String} id the id of the wine you want information for.
 * @param {Function} callback The callback function to be called upon success
 */
api.get_wine_by_id = function(id, callback){
	getResponse('http://winelife.ericwooley.com/search/get_wine/', {wine_id: id}, callback);
};

/**
 * Gets the data to be displayed on the homepage.
 * @param {Function} callback function to be called on success
 */
api.get_home_results = function(callback){
	Ti.API.info("get_home_results etc");
	getResponse('http://winelife.ericwooley.com/user/', {}, callback);
	
}
// not really relevant to anyone outside of this page
api.httpInterface = Ti.Network.createHTTPClient(
	{
		onerror : function(e) {
			try{
	         Ti.API.debug(JSON.stringify(e));
	         alert('Error: '+ JSON.stringify(e));}
	        catch(e){
	        	Ti.API.info(JSON.stringify(e));}
	     },
	     timeout : 5000
	}
);
var server = api.httpInterface;
/**
 * The following is generic function to send data to the server, then get a response. 
 * You shouldn't need to use this, unless you want to form a custom request, use the functions
 * above for typical requests
 * @param {String} url
 * The url to be loaded
 * @param {Object} data
 * The post data to be sent to the server
 *     @example
 *     {query: "search terms", cat: "124+652"}
 * @param {Function} callback
 * The callback function to be called on success
 */
function getResponse(url, data, callback){
	var message = showMessage("please wait: connecting to server", 5000);
	
	if(Ti.Network.networkType == Ti.Network.NETWORK_NONE){
		closeMessage(message);
		var dialog = Ti.UI.createAlertDialog({
			title: "Connectivity Error",
			message: "An active internet connection is required"
		});
		dialog.show();
		return;
	}
	
	server.onload = function()
	{
		Ti.API.info("load successful");
		//Ti.API.info(JSON.stringify(this));
		var json = this.responseText;
		closeMessage(message);
		var response;
		try{
			response = JSON.parse(json);
		}catch(err)
		{
			Ti.API.info(json);
			showMessage("Decode Error:" + err, 5000);
			response = json;
		}
		Ti.API.info('executing load callback');
		callback(response);
	}
	
	server.open('POST', url);
	server.send(data);
	
};

showMessage = function(customMessage, interval){
	// window container
	indWin = Titanium.UI.createWindow();
	 
	//  view
	var indView = Titanium.UI.createView({
		height:50,
		width:200,
		borderRadius:10,
		backgroundColor:'black',
		opacity:.9,
		bottom: 100
	});
	indWin.add(indView);
	 
	// message
	var message = Titanium.UI.createLabel({
	    text: customMessage && typeof(customMessage!=='undefined') ? customMessage : L('please_wait'),
	    color:'#fff',width:'auto',height:'auto',textAlign:'center',
	    font:{fontFamily:'Helvetica Neue', fontSize:12,fontWeight:'bold'}
	});
	 
	indView.add(message);
	indWin.open();
 
	//interval = interval ? interval : 3000;
	if(interval > 0)
	{
		setTimeout(function(){
			indWin.close({opacity:0,duration:1000});
		},interval);
	}
	return indWin;
};

closeMessage = function(w){
	w.close({opacity:0,duration:1000});
};

module.exports = api;