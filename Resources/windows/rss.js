var win = Ti.UI.currentWindow;

var data = [];

var tableview = Titanium.UI.createTableView({
	data:data,
	headerTitle: 'RSS EuAndroid',
	backgroundColor:'#000'
});

win.add(tableview);

var xhr = Titanium.Network.createHTTPClient();

//-- Include our xhr
Ti.include('../includes/xhr.js');

xhr.open('GET', 'http://feeds.feedburner.com/euandroid.rss');
xhr.send();