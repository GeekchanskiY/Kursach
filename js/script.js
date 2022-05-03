$.get('https://raw.githubusercontent.com/GeekchanskiY/Kursach/master/xml/intro-plates.xml')
  .done(function(data){
    // parse the xml
    data = $.parseXML(data);
    alert($(data).find("crypto").length)
    $(data).find("crypto").each(
        function(index, element){
            let field = $(element).find("name")
            alert(field.text())
            let newblock = document.createElement("div")
            newblock.classList.add("plate");
            newblock.innerHTML = "<span>YAY</span>"
            document.getElementsByClassName("plates")[0].appendChild(newblock);
        }
    )
  })
  .fail(function(){
    alert('something went wrong!');
  })
;