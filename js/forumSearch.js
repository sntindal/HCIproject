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
    {'name': 'Sarah', 'Question': ['whisk egg']},
    {'name': 'Joe', 'Question': ['cook']},
    {'name': 'Eric', 'Question': ['eggs']},
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

var input = localStorage.getItem("input");

console.log(input);
var source   = $("#forumResultsTemplate").html();
var template = Handlebars.compile(source);

var parentDiv = $("#forumResults");

for (var i = 0; i < forumData.length; i++) {
    var curData = forumData[i];
    if(curData["Question"] == input ){
      console.log(curData["name"]);
      var curHtml = template(curData);
        parentDiv.append(curHtml);
      //check for ingredient
     /*  for(var x = 0; x<curData["Ingredients"].length; x++){
        console.log(curData["Ingredients"][x]);
        if(curData["Ingredients"][x] == input){
          var curHtml = template(curData);
          parentDiv.append(curHtml);
        }
      } */

    }

}
})
