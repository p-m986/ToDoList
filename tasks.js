var currentDate = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var ctn = 0;
var text = currentDate.getDate()+ " - " + days[currentDate.getDay()];

$(document).ready(function(){
    $("#Dates").on('click', "#d1", function(){name1("d1")});
    $("#Dates").on('click', "#d2", function(){name1("d2")});
    $("#Dates").on('click', "#d3", function(){name1("d3")});
    $("#Dates").on('click', "#d4", function(){name1("d4")});
    $("#Dates").on('click', "#d5", function(){name1("d5")});
    $("#Dates").on('click', "#d6", function(){name1("d6")});
    $("#Dates").on('click', "#d7", function(){name1("d7")});
    $("#Dates").on('click', "#d8", function(){name1("d8")});
    $("#Dates").on('click', "#d9", function(){name1("d9")});
    $("#Dates").on('click', "#d10", function(){name1("d10")});
    $("#Dates").on('click', "#d11", function(){name1("d11")});
    $("#Dates").on('click', "#d12", function(){name1("d12")});
    $("#Dates").on('click', "#d13", function(){name1("d13")});
    $("#Dates").on('click', "#d14", function(){name1("d14")});
    $("#Dates").on('click', "#d15", function(){name1("d15")});
    $("#Dates").on('click', "#d16", function(){name1("d16")});
    $("#Dates").on('click', "#d17", function(){name1("d17")});
    $("#Dates").on('click', "#d18", function(){name1("d18")});
    $("#Dates").on('click', "#d19", function(){name1("d19")});
    $("#Dates").on('click', "#d20", function(){name1("d20")});
    $("#Dates").on('click', "#d21", function(){name1("d21")});
    $("#Dates").on('click', "#d22", function(){name1("d22")});
    $("#Dates").on('click', "#d23", function(){name1("d23")});
    $("#Dates").on('click', "#d24", function(){name1("d24")});
    $("#Dates").on('click', "#d25", function(){name1("d25")});
    $("#Dates").on('click', "#d26", function(){name1("d26")});
    $("#Dates").on('click', "#d27", function(){name1("d27")});
    $("#Dates").on('click', "#d28", function(){name1("d28")});
    $("#Dates").on('click', "#d29", function(){name1("d29")});
    $("#Dates").on('click', "#d30", function(){name1("d30")});
    $("#Dates").on('click', "#d31", function(){name1("d31")});

    // $("#ArrLeft").click(function(){
    //     if(ctn != 0){
    //         date = ((document.getElementById("DateDay").textContent).split("-"))[0].trim();
    //         name1("d"+date)
    //     }
    // })

    // //Load next month if right click
    // $("#ArrRight").click(function(){
    //     console.log("Yep");
    // })

});

$("body").on("keypress", function(){
    if(event.which == 13){
        if($("#inBox").val() == ""){
            return;
        }

        let RMonthnYear = ($("#Year").text()).split(",");
        month = RMonthnYear[0]
        year = RMonthnYear[1].trim();
        date = ((document.getElementById("DateDay").textContent).split("-"))[0].trim();

        setTask(date, month, year, $("#inBox").val())
        var newItem = '<li class = "font-SizeSml"><span><input type="checkbox"></span>' + $("#inBox").val() + "</li>";
        $("#TaskList").append(newItem);
        $("#inBox").val("");
    }
   });


function setTask(date, month, year, task){
    let key = date.toString() + "-" + month.toString() + "-" + year.toString()
    let currcount = 1;
    let data = "";
        let a = JSON.parse(localStorage.getItem(key));

        if(a === null){
            data = {"TaskCount":currcount, "Tasks": {[currcount]:{"done":"False", "task":task}}}
        }
        else{
            currcount = a["TaskCount"] + 1;
            let prevdata = a["Tasks"]
            a["Tasks"][currcount] = {"done":"False", "task":task}
            data = {"TaskCount":currcount, "Tasks":a["Tasks"]}
        }
        localStorage.setItem(key, JSON.stringify(data));
        return;
}

function getTask(date, month, year){
    let key = date.toString() + "-" + month.toString() + "-" + year.toString()
    let currcount = 0;
    taskarr = []
    let a = JSON.parse(localStorage.getItem(key));
    if(a === null){
        return taskarr;
    }
    else{
        currcount = a["TaskCount"];
        for(let i = 1; i <= currcount; i++){
            taskarr[i] = a["Tasks"][i]
        }
    }
    return taskarr;
}


function name1(id){
    ctn += 1;
    let date = $("#"+id.toString()).text();
        let RMonthnYear = ($("#Year").text()).split(",");
        month = RMonthnYear[0]
        year = RMonthnYear[1].trim();


        dateobj = new Date(month + " " + date + ", " + year + " 00:00:00")


        let arr = getTask(date, month, year)
        var items = ""
        for(let i = 1; i < arr.length; i++){
            if(arr[i]["done"] == "True"){
                items = items + ('<li class = "font-SizeSml"><span><input type="checkbox" checked></span>' + arr[i]["task"] + "</li>");
            }
            else{
                items = items + ('<li class = "font-SizeSml"><span><input type="checkbox"></span>' + arr[i]["task"] + "</li>");
            }
        }
        $("#backbtn").show();
        $("#Dates").removeClass("datesCol");
        $("#Dates").html(
            `<div class = "container disgrid Vcenter">
                <div id = "inputbox" class = "">
                    <b><div id = "DateDay" class = "padding-med disflex Vcenter font-SizeMed"> </div></b>
                    <input type="text" placeholder="Add New Item" id = "inBox" class = "font-SizeSml">
                    <ul id = "TaskList">
                    ${items}
                    </ul>
            </div>
            </div>
        </div>`
        );

        $("#DateDay").text(date + " - " + days[dateobj.getDay()]);
}