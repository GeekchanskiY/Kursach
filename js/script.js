$.ajaxSetup({ cache: false });
$.get('https://raw.githubusercontent.com/GeekchanskiY/Kursach/master/xml/intro-plates.xml')
  .done(function(data){
    // parse the xml
    data = $.parseXML(data);
    $(data).find("crypto").each(
        function(index, element){
          let field = $(element)
          if (index <= 11){
            let field = $(element)
            let newblock = document.createElement("div")
            newblock.classList.add("plate");
            
            let t1, t2, t3, t4
            if (parseFloat(field.find("price_1h_change").text()) >= 0){
              t1 = '<span class="price_change green">'+field.find("price_1h_change").text()+'</span><br class="mobilebr">'
            } else {
              t1 = '<span class="price_change red">'+field.find("price_1h_change").text()+'</span><br class="mobilebr">'
            }
            if (parseFloat(field.find("price_24h_change").text()) >= 0){
              t2 = '<span class="price_change green">'+field.find("price_24h_change").text()+'</span>'
            } else {
              t2 = '<span class="price_change red">'+field.find("price_24h_change").text()+'</span>'
            }
            t2 += "<br>"
            if (parseFloat(field.find("price_7d_change").text()) >= 0){
              t3= '<span class="price_change green">'+field.find("price_7d_change").text()+'</span><br class="mobilebr">'
            } else {
              t3 = '<span class="price_change red">'+field.find("price_7d_change").text()+'</span><br class="mobilebr">'
            }
            if (parseFloat(field.find("price_1m_change").text()) >= 0){
              t4 = '<span class="price_change green">'+field.find("price_1m_change").text()+'</span>'
            } else {
              t4 = '<span class="price_change red">'+field.find("price_1m_change").text()+'</span>'
            }
            newblock.innerHTML = '<div class="plateintro">'+
            "<img src='"+field.find("image").text()+"' alt='"+field.find('short-name').text()+"' />"+
            "<br/><span class='plate-text'>"+field.find("name").text()+"</span>"+
        "</div>"+
        '<div class="platedata">'+
            '<span class="name">'+field.find("name").text()+'</span><br>'+
            '<span class="dataattr">mkt cap:</span><span class="dataattrvalue">'+field.find("market_cap_short").text()+'</span><br>'+
            '<span class="dataattr">volume:</span><span class="dataattrvalue">'+field.find("volume_24h_short").text()+'</span><br>'+
            '<span class="pricechanges">Price changes:</span> <br>'+
            '<span class="price_change_time">1h:</span>'+t1+
            '<span class="price_change_time">24h:</span>'+t2+
            '<span class="price_change_time">7d:</span>'+t3+
            '<span class="price_change_time">1m:</span>'+t4+
            '</div>'
            document.getElementsByClassName("plates")[0].appendChild(newblock);
          }
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