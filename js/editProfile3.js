var newtask3 = document.getElementById( 'newTask3' );
var btn = document.getElementById( 'add3' );
var nTaskPlace3 = document.getElementById( 'nTaskPlace3' );

var AddTask3 = function() {
		var containerDiv = document.createElement( 'div' );
    var paragraph = document.createElement( 'p' );
    paragraph.innerHTML = newtask3.value;
    var editInput = document.createElement( 'input' );
    editInput.style.display= 'none';
    editInput.value = newtask3.value;
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
    newtask3.value = '';
    nTaskPlace3.insertBefore( containerDiv, nTaskPlace3.firstChild );
}
 btn.addEventListener( 'click', AddTask3 );
