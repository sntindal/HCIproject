function processLogin(){
    var username = $("#username").val();
    var password = $("#password").val();

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Saved: " + localStorage.getItem("username") + ", and " + localStorage.getItem("password"));
}

function processSignup(){
    var username = $("#name").val();
    var location = $("#location").val();

    localStorage.setItem("username", username);
    localStorage.setItem("location", location);
    alert("Saved: " + localStorage.getItem("username") + ", and " + localStorage.getItem("location"));
}

function clearSearch(){
    $('#loginform').get(0).reset();
}

function retrieveSearchInfo(){
    var input = localStorage.getItem("username");
    $("#username").html("Input: " + username);

    /*var address = localStorage.getItem("address");
    $("#address").html("Address: " + address);
    return address;*/
}

var userData = [
    {'name': 'Steve', 'location': 'SAN DIEGO, CA', 'Ingredients': ['rice', 'sugar', 'cinnamon', 'baking soda'], 'Tools': ['spatula', 'strainer', 'pan']},
    {'name': 'Amy', 'location': 'SAN JOSE, CA', 'Ingredients': ['black pepper', 'sugar', 'saffron', 'baking soda'], 'Tools': ['pot', 'strainer', 'blender', 'hand-mixer']},
    {'name': 'Joe', 'location': 'SAN DIEGO, CA', 'Ingredients': ['rice', 'flour', 'cinnamon', 'vanilla extract'], 'Tools': ['spatula', 'pot', 'whisk', 'can-opener']},
    {'name': 'Jenny', 'location': 'SAN JOSE, CA', 'Ingredients': ['honey', 'clove', 'maple syrup', 'agave'], 'Tools': ['food processor', 'crock pot', 'whisk', 'juicer']},
    {'name': 'Bob', 'location': 'SAN DIEGO, CA', 'Ingredients': ['clove', 'salt', 'black pepper', 'vinegar'], 'Tools': ['measuring spoon', 'tongs', 'grater']},
    {'name': 'Chloe', 'location': 'SAN FRANCISCO, CA', 'Ingredients': ['vegetable oil', 'agave', 'brown sugar', 'nutmeg'], 'Tools': ['measuring cup', 'rolling pin', 'peeler']},
    {'name': 'Chris', 'location': 'SAN FRANCISCO, CA', 'Ingredients': ['cumin', 'paprika', 'hot sauce', 'vanilla extract'], 'Tools': ['crock pot', 'masher', 'pan', 'whisk']},
    {'name': 'Kim', 'location': 'SAN DIEGO, CA', 'Ingredients': ['honey', 'nutmeg', 'curry', 'garlic'], 'Tools': ['food processor', 'measuring spoon', 'wok', 'peeler']},



  ]
