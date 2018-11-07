var userList = document.getElementById('userList');
var nameInput = document.getElementById('nameInput');
var ageInput = document.getElementById('ageInput');
var addButton = document.getElementById('addButton');


//Ao clicar no botão salvar
addButton.addEventListener('click',function(){
    create(nameInput.value,ageInput.value);
});

function create(name,age){
    var data ={
        teste: name,
        age: age
    };
    return firebase.database().ref().child('valdinei').push(data);
}

firebase.database().ref('clientes').on('value',function(snapshot){
    userList.innerHTML='';
    snapshot.forEach(function(item){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(intem.val().name + ': ' + item.val().age));
    });
});