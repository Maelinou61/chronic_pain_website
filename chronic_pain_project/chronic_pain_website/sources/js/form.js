'use strict'

function printMovementPain(){
    ajaxRequest("GET", "sources/php/database.php", function(response){
        var div = document.getElementById("pain_movement");
        const data = JSON.parse(response);
        const descriptionPainMovement = data.painMovement.map(item => ({id: item.ID, value: item.response}));

        descriptionPainMovement.forEach(function(item) {
            var id = item.id;
            var value = item.value;

            var radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = "pain_movement";
            radioInput.value = id;
            radioInput.id = 'move_'+ id;

            var radioLabel = document.createElement('label');
            radioLabel.htmlFor = 'move_' + id;
            radioLabel.textContent = value;

            div.appendChild(radioInput);
            div.appendChild(radioLabel);
        });
    })
}


function printPainBeginning(){
    ajaxRequest("GET", "sources/php/database.php", function(response){
        var select = document.getElementById("pain_beginning");
        const data = JSON.parse(response);
        const painBeginning = data.painBeginning.map(item => ({id: item.ID, value: item.pain_beginning}));

        painBeginning.forEach(function(item) {
            var id = item.id;
            var value = item.value;

            var option = document.createElement('option');
            option.text = value;
            option.value = parseInt(id);
            select.add(option);
        });
    })
}


function printTemporalPattern(){
    ajaxRequest("GET", "sources/php/database.php", function(response){
        var div = document.getElementById("temporal_pattern");
        const data = JSON.parse(response);
        const descriptionTemporalPattern = data.descriptionTemporalPattern.map(item => ({id: item.ID, value: item.temporal_pattern, image: item.image}));

        descriptionTemporalPattern.forEach(function(item) {
            var id = item.id;
            var value = item.value;
            var imageSrc = item.image;

            var radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = "temporal_pattern"
            radioInput.value = id;
            radioInput.id = 'temporal_pattern_' + id;

            var radioLabel = document.createElement('label');
            radioLabel.htmlFor = 'temporal_pattern_' + id;
            radioLabel.textContent = value;

            var image = document.createElement('img');
            image.src = imageSrc;
            image.alt = 'Temporal Pattern Image';

            div.appendChild(radioInput);
            div.appendChild(image);
            div.appendChild(radioLabel);

            div.appendChild(document.createElement('br'));
        });
    });
}



function printCancer(){
    ajaxRequest("GET", "sources/php/database.php", function(response){
        var div = document.getElementById("had_cancer");
        const data = JSON.parse(response);
        const descriptionCancer = data.cancer.map(item => ({id: item.ID, value: item.response}));

        descriptionCancer.forEach(function(item) {
            var id = item.id;
            var value = item.value;

            var radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = "cancer";
            radioInput.value = id;
            radioInput.id = 'cancer_'+ id;

            var radioLabel = document.createElement('label');
            radioLabel.htmlFor = 'cancer_' + id;
            radioLabel.textContent = value;

            div.appendChild(radioInput);
            div.appendChild(radioLabel);
        });
    })
}

function printCancerTreatment(){
    ajaxRequest("GET", "sources/php/database.php", function(response){
        var div = document.getElementById("cancer_treatment");
        const data = JSON.parse(response);
        const descriptionCancerTreatment = data.cancerTreatment.map(item => ({id: item.ID, value: item.response}));

        descriptionCancerTreatment.forEach(function(item) {
            var id = item.id;
            var value = item.value;

            var radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = "cancer_treatment";
            radioInput.value = id;
            radioInput.id = 'cancer_treatment_'+ id

            var radioLabel = document.createElement('label');
            radioLabel.htmlFor = 'cancer_treatment_' + id;
            radioLabel.textContent = value;

            div.appendChild(radioInput);
            div.appendChild(radioLabel);
        });
    })
}


function printBeginAfterSurgery(){
    ajaxRequest("GET", "sources/php/database.php", function(response){
        var div = document.getElementById("begin_after_surgery");
        const data = JSON.parse(response);
        const descriptionBeginAfterSurgery = data.beginAfterSurgery.map(item => ({id: item.ID, value: item.response}));

        descriptionBeginAfterSurgery.forEach(function(item) {
            var id = item.id;
            var value = item.value;

            var radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = "begin_after_surgery";
            radioInput.value = id;
            radioInput.id = 'begin_after_surgery_'+ id;

            var radioLabel = document.createElement('label');
            radioLabel.htmlFor = 'begin_after_surgery_' + id;
            radioLabel.textContent = value;

            div.appendChild(radioInput);
            div.appendChild(radioLabel);
        });
    })
}


function printWorseAfterSurgery(){
    ajaxRequest("GET", "sources/php/database.php", function(response){
        var div = document.getElementById("worse_after_surgery");
        const data = JSON.parse(response);
        const descriptionWorseAfterSurgery = data.worseAfterSurgery.map(item => ({id: item.ID, value: item.response}));

        descriptionWorseAfterSurgery.forEach(function(item) {
            var id = item.id;
            var value = item.value;

            var radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = "worse_after_surgery";
            radioInput.value = id;
            radioInput.id = 'worse_after_surgery_'+ id;

            var radioLabel = document.createElement('label');
            radioLabel.htmlFor = 'worse_after_surgery_' + id;
            radioLabel.textContent = value;

            div.appendChild(radioInput);
            div.appendChild(radioLabel);
        });
    })
}


function printAreaSurgery(){
    ajaxRequest("GET", "sources/php/database.php", function(response){
        var div = document.getElementById("area_surgery");
        const data = JSON.parse(response);
        const descriptionAreaSurgery = data.areaSurgery.map(item => ({id: item.ID, value: item.response}));

        descriptionAreaSurgery.forEach(function(item) {
            var id = item.id;
            var value = item.value;

            var radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = "area_surgery";
            radioInput.value = id;
            radioInput.id = 'area_surgery_'+ id;

            var radioLabel = document.createElement('label');
            radioLabel.htmlFor = 'area_surgery_' + id;
            radioLabel.textContent = value;

            div.appendChild(radioInput);
            div.appendChild(radioLabel);
        });
    })
}

function printPaintSpreadSurgery(){
    ajaxRequest("GET", "sources/php/database.php", function(response){
        var div = document.getElementById("spread_pain_surgery");
        const data = JSON.parse(response);
        const descriptionSpreadPainSurgery = data.painSpreadSurgery.map(item => ({id: item.ID, value: item.response}));

        descriptionSpreadPainSurgery.forEach(function(item) {
            var id = item.id;
            var value = item.value;

            var radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = "spread_pain_surgery";
            radioInput.value = id;
            radioInput.id = 'spread_pain_surgery_'+ id;

            var radioLabel = document.createElement('label');
            radioLabel.htmlFor = 'spread_pain_surgery_' + id;
            radioLabel.textContent = value;

            div.appendChild(radioInput);
            div.appendChild(radioLabel);
        });
    })
}



function printAreaSurgery(){
    ajaxRequest("GET", "sources/php/database.php", function(response){
        var div = document.getElementById("area_surgery");
        const data = JSON.parse(response);
        const descriptionAreaSurgery = data.areaSurgery.map(item => ({id: item.ID, value: item.response}));

        descriptionAreaSurgery.forEach(function(item) {
            var id = item.id;
            var value = item.value;

            var radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = "area_surgery";
            radioInput.value = id;
            radioInput.id = 'area_surgery_'+ id;

            var radioLabel = document.createElement('label');
            radioLabel.htmlFor = 'area_surgery_' + id;
            radioLabel.textContent = value;

            div.appendChild(radioInput);
            div.appendChild(radioLabel);
        });
    })
}

function printBrainNerves(){
    ajaxRequest("GET", "sources/php/database.php", function(response){
        var div = document.getElementById("brain_nerves_illness");
        const data = JSON.parse(response);
        const descriptionBrainNervesIllness = data.brainNerves.map(item => ({id: item.ID, value: item.response}));

        descriptionBrainNervesIllness.forEach(function(item) {
            var id = item.id;
            var value = item.value;

            var radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = "brain_nerves_illness";
            radioInput.value = id;
            radioInput.id = 'brain_nerves_illness_'+ id;

            var radioLabel = document.createElement('label');
            radioLabel.htmlFor = 'brain_nerves_illness_' + id;
            radioLabel.textContent = value;

            div.appendChild(radioInput);
            div.appendChild(radioLabel);
        });
    })
}

function printInternalOrgans(){
    ajaxRequest("GET", "sources/php/database.php", function(response){
        var div = document.getElementById("internal_organs_issues");
        const data = JSON.parse(response);
        const descriptionInternalOrgans = data.internalOrgans.map(item => ({id: item.ID, value: item.response}));

        descriptionInternalOrgans.forEach(function(item) {
            var id = item.id;
            var value = item.value;

            var radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = "internal_organs";
            radioInput.value = id;
            radioInput.id = 'internal_organs_'+ id;

            var radioLabel = document.createElement('label');
            radioLabel.htmlFor = 'internal_organs_' + id;
            radioLabel.textContent = value;

            div.appendChild(radioInput);
            div.appendChild(radioLabel);
        });
    })
}

function printMuskuloskeletalPain(){
    ajaxRequest("GET", "sources/php/database.php", function(response){
        var div = document.getElementById("muskuloskeletal_pain");
        const data = JSON.parse(response);
        const descriptionMuskuloskeletalPain = data.muskuloskeletalPain.map(item => ({id: item.ID, value: item.response}));

        descriptionMuskuloskeletalPain.forEach(function(item) {
            var id = item.id;
            var value = item.value;

            var radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = "muskuloskeletal_pain";
            radioInput.value = id;
            radioInput.id = 'muskuloskeletal_pain_'+ id;

            var radioLabel = document.createElement('label');
            radioLabel.htmlFor = 'muskuloskeletal_pain_' + id;
            radioLabel.textContent = value;

            div.appendChild(radioInput);
            div.appendChild(radioLabel);
        });
    })
}

function printHeadaches(){
    ajaxRequest("GET", "sources/php/database.php", function(response){
        var div = document.getElementById("headaches_pain_face");
        const data = JSON.parse(response);
        const descriptionHeadaches = data.headaches.map(item => ({id: item.ID, value: item.response}));

        descriptionHeadaches.forEach(function(item) {
            var id = item.id;
            var value = item.value;

            var radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = "headaches";
            radioInput.value = id;
            radioInput.id = 'headaches_'+ id;

            var radioLabel = document.createElement('label');
            radioLabel.htmlFor = 'headaches_' + id;
            radioLabel.textContent = value;

            div.appendChild(radioInput);
            div.appendChild(radioLabel);
        });
    })
}


function printPainQualities() {
    ajaxRequest("GET", "sources/php/database.php", function(response) {
        var div = document.getElementById("pain_qualities");
        div.innerHTML = "";  // Clear the div first

        const data = JSON.parse(response);
        console.log(data);  // Inspect the entire data structure

        var title = document.createElement('h3');
        title.textContent = "How would you describe the quality of this chronic pain (tick all that apply";
        div.appendChild(title);

        if (Array.isArray(data.pain_qualities)) {
            const descriptionPainQualities = data.pain_qualities.map(item => {
                console.log(item);  // Inspect each item in pain_qualities
                return { id: item.ID, value: item.pain_qualities };
            });

            descriptionPainQualities.forEach(function(item) {
                var id = item.id;
                var value = item.value;
                console.log(id, value);  // Check the values

                if (id !== undefined && value !== undefined) {
                    var inputElement;
                    
                    if (value === "None of the above") {
                        // Create radio button
                        inputElement = document.createElement('input');
                        inputElement.type = 'radio';
                        inputElement.name = "pain_qualities";
                        inputElement.value = id;
                        inputElement.id = 'pain_qualities_' + id;
                        
                        // Add event listener for radio button
                        inputElement.addEventListener('change', function() {
                            if (this.checked) {
                                uncheckCheckboxes();
                            }
                        });
                    } else {
                        // Create checkbox
                        inputElement = document.createElement('input');
                        inputElement.type = 'checkbox';
                        inputElement.name = "pain_qualities";
                        inputElement.value = id;
                        inputElement.id = 'pain_qualities_' + id;
                        
                        // Add event listener for checkbox
                        inputElement.addEventListener('change', function() {
                            if (this.checked) {
                                uncheckRadioButton();
                            }
                        });
                    }

                    // Create label for the input element
                    var labelElement = document.createElement('label');
                    labelElement.htmlFor = 'pain_qualities_' + id;
                    labelElement.textContent = value;

                    // Append input and label to the div
                    div.appendChild(inputElement);
                    div.appendChild(labelElement);

                    // Add a line break for better readability
                    div.appendChild(document.createElement('br'));
                } else {
                    console.error('Invalid item:', item);  // Log any invalid items
                }
            });

            var validateButton = document.createElement('button');
            validateButton.textContent = "Validate the choice";
            validateButton.addEventListener('click', function(){
                displaySelectedChoice("pain_qualities");
            })
            div.appendChild(validateButton);
        } else {
            console.error('Invalid data structure:', data);
        }
    });
}


function uncheckCheckboxes() {
    var checkboxes = document.querySelectorAll('#pain_qualities input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
}

// Uncheck the radio button
function uncheckRadioButton() {
    var radioButton = document.querySelector('#pain_qualities input[type="radio"]');
    if (radioButton) {
        radioButton.checked = false;
    }
}

var isAddingLocation = false;  // Flag to track if adding location is in progress

// Manage the add of pain location
document.getElementById("addLocation").onclick = function() {
    console.log("Bonjour");
    var addLocationButton = document.getElementById('addLocation');
    addLocationButton.disabled = true; // disabled the button

    // Display checkboxes and radiobuttons
    var painQualitiesDiv = document.getElementById('pain_qualities');
    painQualitiesDiv.style.display = 'block';

    // Possibility to use the button after validation
    displaySelectedChoice("pain_qualities", function() {
        addLocationButton.disabled = false; // Réactiver le bouton Add a location après validation
    });
}


// Display selected choice after validation
function displaySelectedChoice(divId) {
    var div = document.getElementById(divId);
    var selectedText = divId + " : ";
    var selectedInputs = div.querySelectorAll('input[name='+ divId + ']:checked');
    console.log(selectedInputs);

    if (selectedInputs.length > 0) {
        selectedInputs.forEach(function(input, index) {
            if (index > 0) {
                selectedText += ", ";
            }
            selectedText += input.nextSibling.textContent.trim();  // Get the label text
        });
    } else {
        selectedText += "No choice selected";
    }

    // Clear the div and display the selected text
    div.innerHTML = "";
    var resultText = document.createElement('p');
    resultText.textContent = selectedText;
    div.appendChild(resultText);

    if (callback && typeof callback === 'function') {
        callback();
    }
}


function nextSection(sectionNumber) {
    const currentSection = document.querySelector('.form-section.active');
    const nextSection = document.getElementById('section' + sectionNumber);
    if (currentSection && nextSection) {
        currentSection.classList.remove('active');
        nextSection.classList.add('active');
    }
}


function previousSection(sectionNumber) {
    const currentSection = document.querySelector('.form-section.active');
    const previousSection = document.getElementById('section' + sectionNumber);
    if (currentSection && previousSection) {
        currentSection.classList.remove('active');
        previousSection.classList.add('active');
    }
}




printPainBeginning();
printTemporalPattern();
printCancer();
printCancerTreatment();
printAreaSurgery();
printMovementPain();
printPaintSpreadSurgery();
printWorseAfterSurgery();
printBeginAfterSurgery();
printBrainNerves();
printInternalOrgans();
printMuskuloskeletalPain();
printHeadaches();
printPainQualities();