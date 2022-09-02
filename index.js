var currentDate = new Date();
var weekNumber = Date_ = Month = Year = 0;
var currentmonth = currentDate.getMonth();
var ctn = 0;
var months = {"1":{"Name":"January", "Days":"31"},
              "2":{"Name":"Feburary", "Days":"28"},
              "3":{"Name":"March",  "Days":"31"},
              "4":{"Name":"April", "Days":"30"},
              "5":{"Name":"May", "Days":"31"},
              "6":{"Name":"June", "Days":"30"},
              "7":{"Name":"July", "Days":"31"},
              "8":{"Name":"August", "Days":"31"},
              "9":{"Name":"September", "Days":"30"},
              "10":{"Name":"October", "Days":"31"},
              "11":{"Name":"November", "Days":"30"},
              "12":{"Name":"December", "Days":"31"}}

var orignalDates = `              
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d1"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d2"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d3"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d4"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d5"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d6"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d7"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d8"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d9"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d10"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d11"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d12"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d13"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d14"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d15"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d16"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d17"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d18"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d19"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d20"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d21"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d22"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d23"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d24"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d25"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d26"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d27"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d28"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d29"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d30"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d31"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d32"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d33"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d34"></button>
              <button class = "childnode font-SizeSml font-ColBlack stroke" id = "d35"></button>
              </div>`


//Load this function at the start of the page load to load the date time information in the variables            
function loadDateTime(){
    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    let days = Math.floor((currentDate - startDate) /(24 * 60 * 60 * 1000));
    weekNumber = Math.ceil(days / 7).toString();
    Date_ = currentDate.getDate().toString();
    Month = months[currentDate.getMonth() + 1]["Name"];
    // Month = a["Name"];
    Year = currentDate.getFullYear().toString();
}

function getPreviousDay(value) {
    const reqDate = new Date(currentDate.getTime());
    reqDate.setDate(currentDate.getDate() - value);
    return reqDate.getDate();
}

function getComingDay(value) {
    const reqDate = new Date(currentDate.getTime());
    reqDate.setDate(currentDate.getDate() + value).toString();
    return reqDate.getDate();
}


function writeOnPage(){
    //The function to load data in of the current day, Weeknumber, Month and Year 
    loadDateTime();
    //Writing data on the page
    $("#Year").text(Month + ", " + Year);
    writeDates(2);
    setTimeout(changeCol, 200);
}


function writeDates(LR){
    let days = 0

    if(LR === 1){
        if(currentmonth == 1){
            Year = parseInt(Year) - 1;
            currentmonth = 12;
        }
        else if(currentmonth > 1){
            currentmonth -= 1;
        }
        days = parseInt(months[currentmonth]["Days"])
    }

    else if(LR === 2){
        if(currentmonth == 12){
              Year = parseInt(Year) + 1;
              currentmonth = 1;
        }
        else if(currentmonth < 12){
            currentmonth += 1;
        }
        days = parseInt(months[currentmonth]["Days"])
    }
    else{
        days = parseInt(months[currentmonth]["Days"])
    }

    
    for(let i = 28; i <= 35; i++){
        $("#d"+i.toString()).text("");
    }
    $("#Year").text(months[currentmonth]["Name"] + ", " + Year.toString());;

    if(parseInt(Year) % 4 == 0 && currentmonth == 2){
        days += 1;
    }
    
    for(let i = 1; i <= days; i++){
        $("#d"+i.toString()).text(i.toString());
    }
    setTimeout(changeCol, 200);
    setTimeout(hightlightDate, 50);
}

// Function to write things on the doc at the first load 
$(document).ready(function(){
    $("#backbtn").hide();
    loadingscr();
    setTimeout(function(){$("loader").hide()},3000)
    setTimeout(writeOnPage, 3000)
    setTimeout(hightlightDate, 3100);
}
);

$(document).ready(function(){
    //Load previous month if left click
    $("#ArrLeft").click(function(){
        writeDates(1);
    })

    //Load next month if right click
    $("#ArrRight").click(function(){
        writeDates(2);
    })

    $("#backbtn").click(function(){{
        $(this).hide();
        $("#Dates").addClass("datesCol");
        $("#Dates").html(orignalDates);
        writeDates(0);
    }})
});


function taskCheck(month, year){
    Rkey = "-" + month + "-" + year;
    datearr = []
    count = 0;
    for(let i = 1; i < 32; i++){
        key = i.toString() + Rkey
        if(localStorage.getItem(key) != null){
            datearr[count] = i
            count++;
        }
    }
    return datearr
}
var prev = []
function changeCol(){
    let RMonthnYear = ($("#Year").text()).split(",");
    month = RMonthnYear[0]
    year = RMonthnYear[1].trim();
    arr = taskCheck(month, year);

    for(let i = 0; i < prev.length; i++){
        let ele = "#d" + prev[i].toString()
        $(ele).removeClass("font-ColRed");
        $(ele).addClass("font-ColBlack");
    }

    for(let i = 0; i < arr.length; i++){
        prev[i] = arr[i]
        let ele = "#d" + arr[i].toString()
        $(ele).removeClass("font-ColBlack");
        $(ele).addClass("font-ColRed");
    }
}

function loadingscr(){
    var loader = document.getElementsByTagName("loader")[0];
    var degree = document.getElementsByTagName("degree")[0];
    setInterval(function(){
        loader.classList.add("spin");
        degree.classList.add("degree-spin");},1000);
        
    setInterval(function(){
        loader.classList.remove("spin");
        degree.classList.remove("degree-spin");
    },2000);
}

function hightlightDate(){
    if(currentmonth == currentDate.getMonth() + 1){
        $("#d"+Date_.toString()).addClass("font-ColPink")
    }
    else{
        $("#d"+Date_.toString()).removeClass("font-ColPink")
    }
}