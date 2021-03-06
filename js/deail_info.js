$.ajaxSetup({ cache: false });
$.get('https://raw.githubusercontent.com/GeekchanskiY/Kursach/master/xml/intro-plates.xml')
  .done(function(data){
    // parse the xml
    data = $.parseXML(data);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('name')
    $(data).find("crypto").each(
        function(index, element){
          let field = $(element)
          if (field.find("name").text() == name){
            document.getElementById("coinlogo").setAttribute("src", field.find("image").text())
            document.getElementById("coinname").innerText = field.find("name").text()
            document.getElementById("coinshortname").innerText = field.find("short-name").text()
            document.getElementById("coinabout").innerText = field.find("about").text()
            document.getElementById("coincurrentprice").innerText = field.find("price").text()
            price_change_1h = parseFloat(field.find("price_1h_change").text())
            price_change_24h = parseFloat(field.find("price_24h_change").text())
            price_change_7d = parseFloat(field.find("price_7d_change").text())
            price_change_1m = parseFloat(field.find("price_1m_change").text())
            document.getElementById("coinpricechange1h").innerText = price_change_1h +"%"
            document.getElementById("coinpricechange24h").innerText = price_change_24h +"%"
            document.getElementById("coinpricechange7d").innerText = price_change_7d +"%"
            document.getElementById("coinpricechange1m").innerText = price_change_1m +"%"
            document.getElementById("coinpricechange1h").classList.add(price_change_1h > 0 ? "green" : "red")
            document.getElementById("coinpricechange24h").classList.add(price_change_24h > 0 ? "green" : "red")
            document.getElementById("coinpricechange7d").classList.add(price_change_7d > 0 ? "green" : "red")
            document.getElementById("coinpricechange1m").classList.add(price_change_1m > 0 ? "green" : "red")
            document.getElementById("mkt_cap").innerText = field.find("market_cap_short").text().replace("B", " Billion").replace("M", " Million").replace("K", " Thouthand")
            document.getElementById("volume").innerText = field.find("volume_24h_short").text()
            document.getElementById("supply").innerText = field.find("circulating_supply").text()
          }
        }
    )
  })
  .fail(function(){
    alert('Check internet connection!');
  })
;