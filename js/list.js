$.ajaxSetup({ cache: false });
$.get('https://raw.githubusercontent.com/GeekchanskiY/Kursach/master/xml/intro-plates.xml')
  .done(function(data){
    // parse the xml
    data = $.parseXML(data);
    list = $(data).find("crypto").sort(
        function(a,b){
            let el1 = $(a)
            let el2 = $(b)
            return el2.find("price_24h_change").text().replace("%", "") - el1.find("price_24h_change").text().replace("%", "")
        }
    )
    list.each(
        function(index, element){
          let field = $(element)
          document.getElementById("coinlist").innerHTML += '<tr><td><a href="detail.html?name='+field.find("name").text()+'">'+field.find("name").text()+'</a></td>'+
          '<td>'+field.find("short-name").text()+'</td>'+
          '<td>'+field.find("price").text()+'</td>'+
          '<td class="mobile-hidden">'+field.find("market_cap_short").text()+'</td>'+
          '<td class="mobile-hidden '+ (parseInt(field.find("price_1h_change").text()) > 0? "green":"red") +'">'+field.find("price_1h_change").text()+'</td>'+
          '<td class="'+ (parseInt(field.find("price_24h_change").text()) > 0? "green":"red") +'">'+field.find("price_24h_change").text()+'</td></tr>'
        }
    )
  })
  .fail(function(){
    alert('Check internet connection!');
  })
;