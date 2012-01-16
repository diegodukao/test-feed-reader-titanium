xhr.onload = function() {
	
	try	{
		var doc = this.responseXML.documentElement;
		var items = doc.getElementsByTagName('item');
		var doctitle = doc.evaluate("//channel/title/text()").item(0).nodeValue;
		
		var urls = new Array();
		
		for(var c=0; c<items.length;c++) {
			urls[c] = items.item(c).getElementsByTagName('link').item(0).text;
		
			postName = items.item(c).getElementsByTagName('title').item(0).text;
			postUrl = items.item(c).getElementsByTagName('link').item(0).text;

		
			row = Titanium.UI.createTableViewRow({
				title: postName,
				backgroundColor:'#000',
				color: '#FF0'
			});

			if(c == 0){
				row.header = 'Query7 RSS Feed';
			}
			
			row.addEventListener('click', function (e){						
				Ti.API.info('>>>>>' + e.index);
	
				var intent = Titanium.Android.createIntent({
				
					action: Titanium.Android.ACTION_VIEW,
					data: urls[e.index],
				
				});
				
				intent.addCategory(Titanium.Android.CATEGORY_BROWSABLE);
				Ti.Android.currentActivity.startActivity(intent);
			});
		
			tableview.appendRow(row);
		}
	
	}
	catch(E){
		alert(E);
	}
	
};