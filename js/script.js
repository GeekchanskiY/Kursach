$.ajaxSetup({ cache: false });
$.get('https://raw.githubusercontent.com/GeekchanskiY/Kursach/master/xml/intro-plates.xml')
  .done(function(data){
    // parse the xml
    data = $.parseXML(data);
    $(data).find("crypto").each(
        function(index, element){
            let field = $(element)
            let newblock = document.createElement("div")
            newblock.classList.add("plate");
            newblock.innerHTML = '<div class="plateintro">'+
            "<img src='"+field.find("image").text()+"' alt='"+field.find('short-name').text()+"' />"+
            "<br/><span class='plate-text'>"+field.find("name").text()+"</span>"+
        "</div>"+
        '<div class="platedata">'+
            '<span class="name">'+field.find("name").text()+'</span><br>'+
            '<span class="dataattr">mkt cap:</span><span class="dataattrvalue">'+field.find("market_cap_short").text()+'</span><br>'+
            '<span class="dataattr">volume:</span><span class="dataattrvalue">'+field.find("volume_24h_short").text()+'</span><br>'+
            '<span class="pricechanges">Price changes:</span> <br>'+
            '<span class="price_change_time">1h:</span> <span class="price_change green">13%</span>'+
            '<span class="price_change_time">24h:</span> <span class="price_change red">-13%</span><br>'+
            '<span class="price_change_time">1w:</span> <span class="price_change green">13%</span>'+
            '<span class="price_change_time">1m:</span> <span class="price_change green">13%</span>'+
        '</div>'
            document.getElementsByClassName("plates")[0].appendChild(newblock);
        }
    )
  })
  .fail(function(){
    alert('Check internet connection!');
  })
;