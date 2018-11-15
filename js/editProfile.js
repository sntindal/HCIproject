var newtask = document.getElementById( 'newTask' );
var btn = document.getElementById( 'add' );
var nTaskPlace = document.getElementById( 'nTaskPlace' );
var userTools = [];

//localStorage.setItem("tool", newtask);
userTools[0] = newtask;
userTools.push(newtask);
console.log(userTools);
alert("Saved: " + localStorage.getItem("newtask"));

    var tool = $("#newTask").val();

    localStorage.setItem("tool", tool);
    userTools.push(tool);
    alert("Saved: " + localStorage.getItem("tool"));




var AddTask = function() {
		var containerDiv = document.createElement( 'div' );
    var paragraph = document.createElement( 'p' );
    paragraph.innerHTML = newtask.value;
    var editInput = document.createElement( 'input' );
    editInput.style.display= 'none';
    editInput.value = newtask.value;
    var btnEdit = document.createElement( 'button' );
    btnEdit.innerHTML = 'Edit';
    var btnSave = document.createElement( 'button' );
    btnSave.innerHTML = 'Save';
    btnSave.style.display= 'none';
    btnEdit.addEventListener( 'click', function(){
        editInput.style.display = 'inline-block';
        paragraph.style.display = 'none';
        btnSave.style.display = 'inline-block';
        btnEdit.style.display = 'none';
        paragraph.innerHTML = editInput.value;
    });
    btnSave.addEventListener( 'click',function(){
        editInput.style.display = 'none';
        paragraph.style.display = 'inline-block';
        btnSave.style.display = 'none';
        btnEdit.style.display = 'inline-block';
        paragraph.innerHTML = editInput.value;
    });
    containerDiv.appendChild( paragraph );
    containerDiv.appendChild( editInput );
    containerDiv.appendChild( btnEdit );
    containerDiv.appendChild( btnSave );
    newtask.value = '';
    nTaskPlace.insertBefore( containerDiv, nTaskPlace.firstChild );
}
 btn.addEventListener( 'click', AddTask );
