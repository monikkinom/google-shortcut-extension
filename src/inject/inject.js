chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
				var i=0;
				var list = ['1','2','3','4','5','6','7','8','9','0','-','=','q','w','e','r','t','y','u','i','o','p','[',']'];
				var choice = 1;
				 chrome.storage.sync.get({
    							windowOptions: '1'
  										 }, function(items) {
  							choice = items.windowOptions;
   					 });

				$(".r a").each(function(index){
					$(this).prepend("["+list[i]+"] ");
					var url = $(this).attr('href');
					$(document).bind('keydown', list[i], function(){
						 
						 if(choice==1)
						 {
						 var a = document.createElement("a");
   						 a.href = url;
   						 a.target="_blank";
    					 var evt = document.createEvent("MouseEvents");
    					evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, true, 0, null);    					
    					a.dispatchEvent(evt);
    					}
    					else if(choice==2)
    					{
    						window.open(url,"_blank");
    					}
    					else 
    					{
    						window.open(url,"_self");
    					}
					});

					i++;

										
				})
				
								// ----------------------------------------------------------

	}
	}, 10);
});




