var stop = false;
var riset = false;
var thistime = 4;
var lose = false;

$(document).ready(function () {
    $("#playWindow").hide();
    var timer = setInterval(function () {
        
        if (stop != true && lose != true && riset !=true) {
            thistime--;
        } else if (riset == true) {
            thistime = 4;
            lose = false;
            riset = false;
            $("#player").fadeIn(200);
            $("#Bubble").fadeIn(200);
        }
        if (thistime == 0) {
            if (lose == false) {
                youlose();
            }
            lose = true;
            
        }
        var stringTime = "זמן: " + thistime.toString() + " שניות";
        $("#Ptime").html(stringTime);

        
    }, 1000);

    var minufo = 20;
    var maxufo = 30;
    var myufo = 20;
    var maxmin = "max";
    var ufo = setInterval(function () {
        if (maxmin == "max") {
            myufo++;
        } else {
            myufo--;
        }
        if (myufo == 20) {
            maxmin = "max";
        } else if (myufo == 30) {
            maxmin = "min";
        }
        $("#monster").css("top", myufo + "px");


    }, 50);

});
//------------------stop but------------
function stopGame() {
    if (stop == false) {
        $("#playWindow").show();
        stop = true;
        $("#stopGame").css("background-image", "url(../image/play-05.png)");
    } else {
        $("#playWindow").hide();
        stop = false;
        $("#stopGame").css("background-image", "url(../image/stop-04.png)");
    }
   
}
//-------------lose---------------
function youlose() {
    $("#player").fadeOut(200);
    $("#Bubble").fadeOut(200);
    var pum = 0;
    var loser = setInterval(function () {
        pum++
        if (pum < 5) {
        if (pum % 2 != 0) {
            $("#monster").css("background-image", "url(https://raw.githubusercontent.com/ofirm109/gamefortest1/master/image/monsterlose-06.png)");
        } else {
            $("#monster").css("background-image", "url(https://raw.githubusercontent.com/ofirm109/gamefortest1/master/image/monster-03.png)");
            }
        }
        else {
            riset = true;
            
            clearInterval(loser);
        }
    }, 500);
}
//------------------- drag and drop------------------
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    //ev.preventDefault();
    //var data = ev.dataTransfer.getData("text");
    //ev.target.appendChild(document.getElementById(data));
    if (lose == false) {
        goal();
    }
    
}
//--------------------sesses----------------
function goal() {
    $("#player").fadeOut(200);
    $("#Bubble").fadeOut(200);

    stop = true;

    var pum = 0;
    var loser = setInterval(function () {
        pum++
        if (pum < 5) {
            if (pum % 2 != 0) {
                $("#monster").css("background-image", "url(https://raw.githubusercontent.com/ofirm109/gamefortest1/master/image/monsterSe-07.png)");
            } else {
                $("#monster").css("background-image", "url(https://raw.githubusercontent.com/ofirm109/gamefortest1/master/image/monster-03.png)");
            }
        }
        else {
            riset = true;
            stop = false;
            clearInterval(loser);
        }
    }, 500);
}