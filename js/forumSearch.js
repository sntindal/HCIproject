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
    {'name': 'Joe', 'Question': ['How to bake cookies'], 'link':'forumAnswers1.html', 'keyword': ['sugar', 'cookie','flour']},
    {'name': 'Eric', 'Question': ['How to use a crock pot'], 'link':'forumAnswers1.html', 'keyword': ['egg', 'whites','fluffy']},
    {'name': 'Steve', 'Question': ['How to cook pasta'], 'link':'forumAnswers1.html', 'keyword': ['egg', 'whites','fluffy']},
]

var forumDataTEMP = forumData;
 

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
// localStorage.setItem("input", input.split(' '));
input = localStorage.getItem("input").split(' ');
// var wordArray=input.split(' ');


console.log(input);
// console.log(wordArray);

// var wordArray = [];
// var words = input;
// for ( //1 ) {
// wordArray.push( //2 );
// }

// console.log(Array.from(input));

// console.log(input);
// console.log(input.length);

// var res = input.split(" ");
// document.getElementById("forumResults").innerHTML = res;



var source   = $("#forumResultsTemplate").html();
var template = Handlebars.compile(source);

var parentDiv = $("#forumResults");

var count = 0;

/* for (var i = 0; i < forumData.length; i++) { //goes through all data
    var curData = forumData[i];
    if(curData["keyword"] == input ){ //
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
    } */


/* new CODE */
    var count = 0;
for (var i = 0; i < forumDataTEMP.length; i++) { //goes through all data
    var curData = forumDataTEMP[i];
    console.log(forumDataTEMP[i]);
    for (var j = 0; j < curData["keyword"].length; j++){
        //console.log("secondforloop");
        for (var k = 0; k < input.length; k++) {
            //console.log("thirdforloop")
            if (curData["keyword"][j] == input[k] ) {
                // console.log(forumData["name"]);
                //console.log("ITS WORKING");
                var forumHtml = template(curData);
                parentDiv.append(forumHtml);
                //forumDataTEMP.splice(i,1); //to remove element array
                delete forumDataTEMP[ i ];
                //forumDataTEMP[i].push("'name': 'blank', 'question': 'blank', 'keyword': ['blank']");
                count = count + 1;
                console.log(forumHtml);
                console.log(forumDataTEMP);
                break;
            }
        }
        break;
    }
}


/* 
    if (curData["keyword"] == input ){ //
      console.log(curData["name"]);
      var forumHtml = template(forumData);
        parentDiv.append(forumHtml);
        count = count + 1;
    } 


    localStorage.setItem("count", count);
    count = localStorage.getItem("count");
    if (count == 0) {
            return parentDiv.append("Sorry, please try again!");
        }
    } */

})

