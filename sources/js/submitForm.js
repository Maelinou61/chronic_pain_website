'use strict'

//Listen the "validate answer" button
document.getElementById("questions").addEventListener('submit', function(event){
    event.preventDefault();

    var pain_begining, pain_intensity, temporal_pattern, distress, interference, pain_location;

    pain_begining = document.getElementById('pain_begining').value;
    pain_intensity = document.getElementById('pain_intensity').value;
    distress = document.getElementById('distress').value;
    interference = document.getElementById('interference').value;
    temporal_pattern = document.getElementById('temporal_pattern').value;
    pain_location = document.getElementById('painLocation').dataset.id;

    //Add each variable of the form in a table
    var formData = new FormData();
    formData.append('pain_begining', pain_begining);
    formData.append('pain_intensity', pain_intensity);
    formData.append('pattern', temporal_pattern);
    formData.append('distress', distress);
    formData.append('interference', interference);
    formData.append('pain_location', pain_location);

    //Send the form with a AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'sources/php/submitForm.php', true);
    xhr.onload = function(){
        if (xhr.status === 200){
            console.log(xhr.responseText);
        } else {
            console.error("Error occured during the request");
        }
    };
    xhr.send(formData);
})