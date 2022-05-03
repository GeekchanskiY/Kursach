$.get('xml/intro-plates.xml')
  .done(function(data){
    // parse the xml
    data = $.parseXML(data);
    //
    // do anything you want with the parsed data
  })
  .fail(function(){
    alert('something went wrong!');
  })
;