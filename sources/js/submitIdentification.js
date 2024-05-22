'use strict'

//Listen the "validate answer" button
document.getElementById("questions").addEventListener('submit', function(event){
    event.preventDefault();

    var name, surname, email, phone_number, birthdate, adress;

    name = document.getElementById('name').value;
    surname = document.getElementById('surname').value;
    email = document.getElementById('email').value;
    phone_number = document.getElementById('phone_number').value;
    birthdate = document.getElementById('birthdate').value;
    adress = document.getElementById('adress').dataset.id;

    //Add each variable of the form in a table
    var formData = new FormData();
    formData.append('name', name);
    formData.append('surname', surname);
    formData.append('email', email);
    formData.append('phone_number', phone_number);
    formData.append('birthdate', birthdate);
    formData.append('adress', adress);

    //Send the form with a AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'sources/php/submitIdentification.php', true);
    xhr.onload = function(){
        if (xhr.status === 200){
            console.log(xhr.responseText);
        } else {
            console.error("Error occured during the request");
        }
    };
    xhr.send(formData);
})