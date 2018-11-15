function processSearch(){
    var input = $("#myQuestion").val();

    localStorage.setItem("input", input);
}

function clearSearch(){
    $('#myform').get(0).reset();
}

function retrieveSearchInfo(){
    var input = localStorage.getItem("input");
    $("#myQuestion").html("Input: " + input);
}

var forumData = [
    {'name': 'Sarah', 'Question': ['How to make egg whites fluffy?'], 'link':'forumAnswers1.html', 'keyword': ['egg', 'whites','fluffy']},
    {'name': 'Joe', 'Question': ['cook']},
    {'name': 'Eric', 'Question': ['whisk egg']},
    {'name': 'Steve', 'Question': ['pasta']},
]

/* function filterQuestion() {
    var str = "input"; 
    var n = str.search("curData["Question"][x]");
    if ( n >= 0) {
    document.getElementById("demo").innerHTML = str;
    }
    else document.getElementById("demo").innerHTML = "We're sorry, but we can't find what you're looking for. There is no data for this question. Or, you may have mispelled something wrong. Please try again! Thank you!";
} */

// for (var i = 0; i < forumData.length; i++) {
//     var curData = complexData[i];
//     var curHtml = template(curData);
//     parentDiv.append(curHtml);
//   }
$(document).ready(function() {
    console.log('hello world');

/* for (var i = 0; i < forumData.length; i++) {
    var curData = forumData[i];
    for(var x = 0; x<curData["Question"].length; x++){
        if(curData["Question"][x] == input){
        var curHtml = template(curData);
    parentDiv.append(curHtml);
    }
  }
} */

input = localStorage.getItem("input").toLowerCase();
localStorage.setItem("input", input.split(" "));
input = localStorage.getItem("input");

console.log(Array.from(input));

// console.log(input);
// console.log(input.length);

// var res = input.split(" ");
// document.getElementById("forumResults").innerHTML = res;



var source   = $("#forumResultsTemplate").html();
var template = Handlebars.compile(source);

var parentDiv = $("#forumResults");

var count = 0;
for (var i = 0; i < forumData.length; i++) {
    var curData = forumData[i];
    if(curData["keyword"] == input ){
      console.log(curData["name"]);
      var curHtml = template(curData);
        parentDiv.append(curHtml);
        count = count + 1;
    } 
    localStorage.setItem("count", count);
    count = localStorage.getItem("count");
    if (count == 0) {
            return parentDiv.append("Sorry, please try again!");
        }
    }

})

