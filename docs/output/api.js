Ext.data.JsonP.api({"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/api.html#api' target='_blank'>api.js</a></div></pre><div class='doc-contents'><p>This is the api documentation</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-catagory' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='api'>api</span><br/><a href='source/api.html#api-method-catagory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/api-method-catagory' class='name expandable'>catagory</a>( <span class='pre'>cat</span> )</div><div class='description'><div class='short'>search for a catagories, please note that these catagories need to line up with the wine api catagories. ...</div><div class='long'><p>search for a catagories, please note that these catagories need to line up with the wine api catagories. For more information: http://api.wine.com.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cat</span> : String<div class='sub-desc'><p>catagory id's should be space seperated or + seperated.</p>\n\n<pre class='inline-example '><code>\"124 254 861\"\n\"124+254+861\"\n</code></pre>\n\n<p>@param {Function} callback\ncallback function that will be given the results. It is recommended that you format this data using api.search_results</p>\n\n<pre class='inline-example '><code>api.search(\"124 227 7764\", function(search_results){// 124 is red wine, 227 is ? and 7764 is ? I just made them up.\n        Ti.API.info('Here are some search results in json format');\n     Ti.API.info(JSON.stringify(search_results)); // Check the login for an example of how this object is formatted.\n     var preformatteedView = api.search_results(search_results); // Add this view to whatever you want!\n});\n</code></pre>\n</div></li></ul></div></div></div><div id='method-editProfile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='api'>api</span><br/><a href='source/api.html#api-method-editProfile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/api-method-editProfile' class='name expandable'>editProfile</a>( <span class='pre'>fname, lname, bio, callback</span> )</div><div class='description'><div class='short'>Send the server an updated profile ...</div><div class='long'><p>Send the server an updated profile</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fname</span> : String<div class='sub-desc'><p>The users first name</p>\n</div></li><li><span class='pre'>lname</span> : String<div class='sub-desc'><p>The users last name</p>\n</div></li><li><span class='pre'>bio</span> : bio<div class='sub-desc'><p>The users biography text</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback function to be used</p>\n</div></li></ul></div></div></div><div id='method-getResponse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='api'>api</span><br/><a href='source/api.html#api-method-getResponse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/api-method-getResponse' class='name expandable'>getResponse</a>( <span class='pre'>url, data</span> )</div><div class='description'><div class='short'>The following is generic function to send data to the server, then get a response. ...</div><div class='long'><p>The following is generic function to send data to the server, then get a response.\nYou shouldn't need to use this, unless you want to form a custom request, use the functions\nabove for typical requests</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The url to be loaded</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The post data to be sent to the server</p>\n\n<pre class='inline-example '><code>{query: \"search terms\", cat: \"124+652\"}\n</code></pre>\n\n<p>@param {Function} callback\nThe callback function to be called on success</p>\n</div></li></ul></div></div></div><div id='method-login' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='api'>api</span><br/><a href='source/api.html#api-method-login' target='_blank' class='view-source'>view source</a></div><a href='#!/api/api-method-login' class='name expandable'>login</a>( <span class='pre'>email, password, callback</span> )</div><div class='description'><div class='short'>The user login function ...</div><div class='long'><p>The user login function</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>email</span> : String<div class='sub-desc'><p>the email address to login with</p>\n</div></li><li><span class='pre'>password</span> : String<div class='sub-desc'><p>The password to login with</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback function to be called when the request is successful.</p>\n</div></li></ul></div></div></div><div id='method-profileInformation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='api'>api</span><br/><a href='source/api.html#api-method-profileInformation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/api-method-profileInformation' class='name expandable'>profileInformation</a>( <span class='pre'>callback</span> )</div><div class='description'><div class='short'>Get the user profile information ...</div><div class='long'><p>Get the user profile information</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>Callback function, to be called upon success.</p>\n</div></li></ul></div></div></div><div id='method-register' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='api'>api</span><br/><a href='source/api.html#api-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/api-method-register' class='name expandable'>register</a>( <span class='pre'>email, password, callback</span> )</div><div class='description'><div class='short'>The user registration function ...</div><div class='long'><p>The user registration function</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>email</span> : String<div class='sub-desc'><p>the email address to register with</p>\n</div></li><li><span class='pre'>password</span> : String<div class='sub-desc'><p>The password to register with</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback function to be called when the request is successful.</p>\n</div></li></ul></div></div></div><div id='method-search' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='api'>api</span><br/><a href='source/api.html#api-method-search' target='_blank' class='view-source'>view source</a></div><a href='#!/api/api-method-search' class='name expandable'>search</a>( <span class='pre'>query, callback</span> )</div><div class='description'><div class='short'>general search for items ...</div><div class='long'><p>general search for items</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String<div class='sub-desc'><p>A search query basically words that will be sent to the server.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>callback function that will be given the results. It is recommended that you format this data using api.search_results</p>\n\n<pre class='inline-example '><code>api.search(\"Some Wine I Want maybe\", function(search_results){\n        Ti.API.info('Here are some search results in json format');\n     Ti.API.info(JSON.stringify(search_results)); // Check the login for an example of how this object is formatted.\n     var preformatteedView = api.search_results(search_results); // Add this view to whatever you want!\n});\n</code></pre>\n</div></li></ul></div></div></div><div id='method-search_results' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='api'>api</span><br/><a href='source/api.html#api-method-search_results' target='_blank' class='view-source'>view source</a></div><a href='#!/api/api-method-search_results' class='name expandable'>search_results</a>( <span class='pre'>search_results, callback</span> ) : View</div><div class='description'><div class='short'>creates a view containing a table with all the search results already formatted. ...</div><div class='long'><p>creates a view containing a table with all the search results already formatted.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>search_results</span> : Object<div class='sub-desc'><p>All of the search data. It is easiest to just drop in the results from one of the search functions</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>Callback function, to be executed when a user clicks on a row.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>View</span><div class='sub-desc'><p>returns a view with all the formatted data.</p>\n</div></li></ul></div></div></div><div id='method-search_with_filter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='api'>api</span><br/><a href='source/api.html#api-method-search_with_filter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/api-method-search_with_filter' class='name expandable'>search_with_filter</a>( <span class='pre'>query, cat</span> )</div><div class='description'><div class='short'>General search for a query, with a catagory filter. ...</div><div class='long'><p>General search for a query, with a catagory filter.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String<div class='sub-desc'><p>A search query basically words that will be sent to the server.</p>\n</div></li><li><span class='pre'>cat</span> : String<div class='sub-desc'><p>catagory id's should be space seperated or + seperated.</p>\n\n<pre class='inline-example '><code>\"124 254 861\"\n\"124+254+861\"\n</code></pre>\n\n<p>@param {Function} callback\ncallback function that will be given the results. It is recommended that you format this data using api.search_results</p>\n\n<pre class='inline-example '><code>api.search(\"124 \", function(search_results){\n        Ti.API.info('Here are some search results in json format');\n     Ti.API.info(JSON.stringify(search_results)); // Check the login for an example of how this object is formatted.\n     var preformatteedView = api.search_results(search_results); // Add this view to whatever you want!\n});\n</code></pre>\n</div></li></ul></div></div></div></div></div></div></div>","component":false,"linenr":1,"extends":null,"aliases":{},"uses":[],"meta":{},"mixedInto":[],"requires":[],"superclasses":[],"parentMixins":[],"inheritdoc":null,"statics":{"css_mixin":[],"cfg":[],"method":[],"event":[],"css_var":[],"property":[]},"members":{"css_mixin":[],"cfg":[],"method":[{"meta":{},"owner":"api","tagname":"method","name":"catagory","id":"method-catagory"},{"meta":{},"owner":"api","tagname":"method","name":"editProfile","id":"method-editProfile"},{"meta":{},"owner":"api","tagname":"method","name":"getResponse","id":"method-getResponse"},{"meta":{},"owner":"api","tagname":"method","name":"login","id":"method-login"},{"meta":{},"owner":"api","tagname":"method","name":"profileInformation","id":"method-profileInformation"},{"meta":{},"owner":"api","tagname":"method","name":"register","id":"method-register"},{"meta":{},"owner":"api","tagname":"method","name":"search","id":"method-search"},{"meta":{},"owner":"api","tagname":"method","name":"search_results","id":"method-search_results"},{"meta":{},"owner":"api","tagname":"method","name":"search_with_filter","id":"method-search_with_filter"}],"event":[],"css_var":[],"property":[]},"inheritable":null,"singleton":false,"override":null,"private":null,"tagname":"class","name":"api","mixins":[],"enum":null,"html_meta":{},"id":"class-api","subclasses":[],"files":[{"href":"api.html#api","filename":"api.js"}],"alternateClassNames":[]});