$(document).ready(function () {
  


  chrome.storage.sync.get({
    windowOptions: '1'
  }, function(items) {
    jQuery("#windowOptions-"+items.windowOptions).attr('checked', 'checked');  });



  function save_option()
{
  var value = $('input[name=windowOptions]:checked').val();
  chrome.storage.sync.set({
    windowOptions: value
  }, function() {

    alert("Changes Saved!");
    // Update status to let user know options were saved.

     });




}


$("#save").click(function(){
  save_option();
})




});

