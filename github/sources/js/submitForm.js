'use strict'

//Listen the "validate answer" button
document.getElementById("questions").addEventListener('submit', function(event){
    event.preventDefault();

    var pain_begining, pain_intensity, temporal_pattern, distress, interference, pain_location, pain_movement, cancer, cancer_treatment, begin_after_surgery, worse_after_surgery, area_surgery, spread_pain_surgery;

    pain_begining = document.getElementById('pain_beginning').value;
    pain_movement = getRadioButtonValue('pain_movement');
    pain_intensity = getRadioButtonValue('pain_intensity');
    distress = getRadioButtonValue('distress');
    interference = getRadioButtonValue('interference');
    temporal_pattern = getRadioButtonValue('temporal_pattern');
    cancer = getRadioButtonValue('cancer');
    cancer_treatment = getRadioButtonValue('cancer_treatment');
    begin_after_surgery = getRadioButtonValue('begin_after_surgery');
    worse_after_surgery = getRadioButtonValue('worse_after_surgery');
    area_surgery = getRadioButtonValue('area_surgery');
    spread_pain_surgery = getRadioButtonValue('spread_pain_surgery');
    pain_location = document.getElementById('painLocation').dataset.id;

    function getRadioButtonValue(name) {
        var radios = document.getElementsByName(name);
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                return radios[i].value;
            }
        }
        return null; // Return null if no radio button is checked
    }


    //Add each variable of the form in a table
    var formData = new FormData();
    formData.append('pain_begining', pain_begining);
    formData.append('pain_intensity', pain_intensity);
    formData.append('pattern', temporal_pattern);
    formData.append('distress', distress);
    formData.append('interference', interference);
    formData.append('pain_location', pain_location);
    formData.append('cancer', cancer);
    formData.append('cancer_treatment', cancer_treatment);
    formData.append('begin_after_surgery', begin_after_surgery);
    formData.append('worse_after_surgery', worse_after_surgery);
    formData.append('area_surgery', area_surgery);
    formData.append('spread_pain_surgery', spread_pain_surgery);


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