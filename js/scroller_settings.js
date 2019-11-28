var settings = {};

var birthday = d3.select("#birthday");
var mom = d3.select("#mom");
var dad = d3.select("#dad");
var boyfriend = d3.select("#boyfriend");
var girlfriend = d3.select("#girlfriend");
var teacher = d3.select("#teacher");

var update = function(value) {

        var show_birthday = false;
        var show_mom = false;
        var show_dad = false;
        var show_boyfriend = false;
        var show_girlfriend =  false;
        var show_teacher =  false;

        switch(value) {

        case 1:
            console.log("in case", value);
            show_birthday = true;
            show_mom = false;
            show_dad = false;
            show_boyfriend = false;
            show_girlfriend =  false;
            show_teacher =  false;
        break;

        case 2:
            console.log("in case", value);
             show_birthday = false;
            show_mom = true;
            show_dad = false;
            show_boyfriend = false;
            show_girlfriend =  false;
            show_teacher =  false;
        break;

        case 3:
            console.log("in case", value);
             show_birthday = false;
            show_mom = false;
            show_dad = true;
            show_boyfriend = false;
            show_girlfriend =  false;
            show_teacher =  false;
        break;

        case 4:
            console.log("in case", value);
           show_birthday = false;
            show_mom = false;
            show_dad = false;
            show_boyfriend = true;
            show_girlfriend =  false;
            show_teacher =  false;
          break;

          case 5:
            console.log("in case", value);
           show_birthday = false;
            show_mom = false;
            show_dad = false;
            show_boyfriend = false;
            show_girlfriend =  true;
            show_teacher =  false;
          break;

          case 6:
            console.log("in case", value);
            show_birthday = false;
            show_mom = false;
            show_dad = false;
            show_boyfriend = false;
            show_girlfriend =  false;
            show_teacher =  true;
          break;

        default:
           show_birthday = false;
            show_mom = false;
            show_dad = false;
            show_boyfriend = false;
            show_girlfriend =  false;
        break;
        }
//    console.log("show viz", show_birthday, show_mom, show_boyfriend);

        if (show_birthday) {
        birthday.style("display", "block");
        } else {
        birthday.style("display", "none");
        }
        if (show_mom) {
        mom.style("display", "inline-block");
        } else {
        mom.style("display", "none");
        }
          if (show_dad) {
        dad.style("display", "inline-block");
        } else {
        dad.style("display", "none");
        }
          if (show_boyfriend) {
        boyfriend.style("display", "inline-block");
        } else {
        boyfriend.style("display", "none");
        }
        if (show_girlfriend) {
        girlfriend.style("display", "inline-block");
        } else {
        girlfriend.style("display", "none");
        }
        if (show_teacher) {
        teacher.style("display", "inline-block");
        } else {
        teacher.style("display", "none");
        }
        };


//window.addEventListener("scroll", handleScroll);
//
//function handleScroll(){
//  var container = document.getElementById ("graphic");
//  var graph = document.getElementById ("agechart");
//  var containerRect = container.getBoundingClientRect();
//  var graphRect = graph.getBoundingClientRect();
//  var graphHeight = graphRect.bottom - graphRect.top;
//
//  if (containerRect.top > 0){
//    //above
//    $("#agechart").css({
//      "position":"absolute",
//      "top":"0",
//      "bottom":"auto"
//    });
//  } else if(containerRect.bottom > graphHeight){
//    $("#agechart").css({
//      "position":"fixed",
//      "top":"0",
//      "bottom":"auto"
//    });
//  } else{
//    $("#agechart").css({
//      "position":"absolute",
//      "top":"auto",
//      "bottom":"0"
//    });
//  }
//}
