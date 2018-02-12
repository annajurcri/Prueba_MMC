//Anna Jurado Cristobal, anna.jurado.cristobal@gmail.com

$.getJSON("data.json", function(json) {
    $("#personalInfo").html(`Name: ${json['name']} <br>Age: ${json['age']}<br>City: ${json['city']} <br>Phone: ${json['phone']}`);   
    
    var car = json["items"]["car"];
    $("#carInfo").html(`Brand: ${car['brand']} <br>Model: ${car['model']} <br>Type: ${car['type']} <br>Price: ${car['price']}`);

    var carComponents = "";
    carComponents += "<b>Components</b><br>";
    for(i in car["components"]){
        if(i !== "" && car["components"][i] !== null){
            carComponents += i + ': ' + car["components"][i] + '<input type="checkbox"><br>';
        }      
    }
    $("#carComponents").html(carComponents);    

    var cards = "";
    for(i in json["items"]["MTG"]["cards"]){
        cards += json["items"]["MTG"]["cards"][i].split(" - ")[0] + "<br>";
    }
    $("#cards").html(cards);
    
    var futureEvents = "";
    var pastEvents = "";
    var localTime = new Date();
    var localYear = localTime.getFullYear();
    var localMonth = localTime.getMonth();
    var localDay = localTime.getDay();
    for(i in json["events"]){
        for(j in json["events"][i]){
            for(k in json["events"][i][j]){
                var year = json["events"][i][j][k].split("-")[0];
                var month = json["events"][i][j][k].split("-")[1];
                var day = json["events"][i][j][k].split("-")[2];
                if(year < localYear){
                    pastEvents += 'Name: ' + j + '  -> Date: ' + json["events"][i][j][k] + '<br>';
                } else if ((year == localYear) && (month < localMonth)){
                    pastEvents += 'Name: ' + j + '  -> Date: ' + json["events"][i][j][k] + '<br>';
                } else if ((year == localYear) && (month == localMonth) && (day <= localDay)){
                    pastEvents += 'Name: ' + j + '  -> Date: ' + json["events"][i][j][k] + '<br>';
                } else {
                    futureEvents += 'Name: ' + j + '  -> Date: ' + json["events"][i][j][k] + '<br>';
                }           
            }                  
        }
    }
    $("#futureEvents").html(futureEvents);
    $("#pastEvents").html(pastEvents);

    var key = "";
    for(i in json["hacked_keys"]){
        if(i == "5CAC1B80-EF55-E711-8118-129DBE5738B9"){
            key += "Value: " + json["hacked_keys"][i];     
        }              
    }
    $("#key").html(key);
});