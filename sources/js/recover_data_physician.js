'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const firstName = urlParams.get('first_name');
    const lastName = urlParams.get('last_name');

    if (!firstName || !lastName) {
        console.error("Missing parameters");
        return;
    }
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `sources/php/user_information_for_physician.php?first_name=${encodeURIComponent(firstName)}&last_name=${encodeURIComponent(lastName)}`, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText); // Log the response text to see what the server returns
            try {
                var data = JSON.parse(xhr.responseText);
                console.log(data);
                if (data.length > 0) {
                    showModal(data[0], data);     // Display all records
                } else {
                    document.getElementById("form_answer").innerHTML = "No results found.";
                }
            } catch (e) {
                console.error("Error parsing JSON:", e);
                document.getElementById("form_answer").innerHTML = "An error occurred while processing the data.";
            }
        }
    };
    xhr.send();
});


function showModal(user, data) {
    var modal = document.getElementById("dateModal");
    var datesContainer = document.getElementById("dates_container");
    var span = document.getElementsByClassName("close")[0];

    // Filter out entries with undefined or invalid dates
    var validEntries = data.filter(entry => entry.date);

    // Use a Set to get unique dates
    var uniqueDates = new Set(validEntries.map(entry => entry.date));

    // Empty the existing dates
    datesContainer.innerHTML = "";

    // Add date selection buttons to the container
    uniqueDates.forEach(date => {
        var listItem = document.createElement("li");
        var button = document.createElement("button");
        button.textContent = formatDate(date); // Use formatDate() to display formatted date
        button.addEventListener("click", function() {
            modal.style.display = "none";
            var selectedEntries = validEntries.filter(entry => entry.date === date);

            const url = new URL(window.location.href);
            url.searchParams.set('date', date);
            window.history.replaceState({}, '', url);

            displayResults(user, selectedEntries);  // Display results for the selected date
        });
        listItem.appendChild(button);
        datesContainer.appendChild(listItem);
    });

    // Show the modal
    modal.style.display = "block";

    // Prevent closing modal if user clicks outside or presses escape key
    window.onclick = function(event) {
        if (event.target == modal) {
            // Do nothing if clicking outside modal
        }
    }

    window.onkeydown = function(event) {
        if (event.key === "Escape") {
            // Do nothing if pressing escape key
        }
    }

    // Do not close modal when clicking on <span> (x)
    span.onclick = function() {
    };
}


function formatDate(timestamp) {
    if (!timestamp) {
        return 'Invalid Date';
    }
    var formattedDate = new Date(timestamp);
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
    return formattedDate.toLocaleDateString('en-US', options); 
}

function displayResults(user, data) {
    var patientName = document.getElementById("patient_name");
    patientName.textContent = "Answers of " + user.first_name + ' ' + user.last_name;
    var resultsDiv = document.getElementById("form_answer");
    if (data && data.length > 0) {
        var resultHtml = "<div class='form_answer'>";
        var firstEntry = data[0];

        // Load the image, crop it, and display it
        var base64Image = firstEntry.bodychart_image;
        var img = new Image();
        img.src = base64Image;
        img.onload = function() {
            var desiredWidth = img.width - 800;
            var desiredHeight = img.height - 210; 

            var canvas = document.createElement('canvas');
            canvas.width = desiredWidth;
            canvas.height = desiredHeight;

            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, desiredWidth, desiredHeight, 0, 0, desiredWidth, desiredHeight);

            var croppedBase64Image = canvas.toDataURL('image/jpeg');

            // Build the HTML to display image and text side by side
            resultHtml += "<div style='display: flex; align-items: center;'>";

            // Image container
            resultHtml += "<div style='flex: 1; text-align: center'>";
            resultHtml += "<img src='" + croppedBase64Image + "' alt='Bodychart Image' style='max-width: 100%;'/>";
            
            // Display pain locations and vertebrae for all entries
            data.forEach((entry, index) => {
                resultHtml += "<p><strong>Pain location " + (index + 1) + " :</strong> " + entry.ID_vertebrae + " - " + entry.ID_pain_location + "</p>";
            });

            resultHtml += "</div>";

            resultHtml += "<div style='flex: 1;'>";

            // Display all details from the first entry
            resultHtml += "<p><strong>Pain begininning:</strong> " + firstEntry.ID_pain_beginning + "</p>";
            resultHtml += "<p><strong>Pain moves to other parts of the body:</strong> " + firstEntry.spread_of_pain + "</p>";
            resultHtml += "<p><strong>Pain intensity at present:</strong> " + firstEntry.pain_intensity + "</p>";
            resultHtml += "<p><strong>Temporal pattern:</strong> " + firstEntry.ID_temporal_pattern + "</p>";
            resultHtml += "<p><strong>Pain interference:</strong> " + firstEntry.pain_related_interference + "</p>";
            resultHtml += "<p><strong>Pain related to emotional distress:</strong> " + firstEntry.pain_related_distress + "</p>";

            resultHtml += "</div>";
            resultHtml += "</div>"; // Close flex container

            resultHtml += "<br>";

            resultHtml += "<h1 style='text-align: center;'><strong>Questions of the questionnaire where the patient has answered 'Yes':</strong></h1>";

            if (firstEntry.cancer === "Yes") {
                resultHtml += "<p style='text-align: center;'><strong>Cancer:</strong> " + firstEntry.cancer + "</p>";
            }
            if (firstEntry.cancer_treatment === "Yes") {
                resultHtml += "<p style='text-align: center;'><strong>Cancer Treatment:</strong> " + firstEntry.cancer_treatment + "</p>";
            }
            if (firstEntry.begin_after_surgery === "Yes") {
                resultHtml += "<p style='text-align: center;'><strong>Begin After Surgery:</strong> " + firstEntry.begin_after_surgery + "</p>";
            }
            if (firstEntry.worse_after_surgery === "Yes") {
                resultHtml += "<p style='text-align: center;'><strong>Worse After Surgery:</strong> " + firstEntry.worse_after_surgery + "</p>";
            }
            if (firstEntry.spread_of_pain === "Yes") {
                resultHtml += "<p style='text-align: center;'><strong>Spread of Pain:</strong> " + firstEntry.spread_of_pain + "</p>";
            }
            if (firstEntry.area_of_surgery === "Yes") {
                resultHtml += "<p style='text-align: center;'><strong>Area of Surgery:</strong> " + firstEntry.area_of_surgery + "</p>";
            }

            if (firstEntry.brain_nerves_illness === "Yes") {
                resultHtml += "<p style='text-align: center;'><strong>Brain/Nerves Illness:</strong> " + firstEntry.brain_nerves_illness + "</p>";
            }
            if (firstEntry.internal_organs_issues === "Yes") {
                resultHtml += "<p style='text-align: center;'><strong>Internal Organs Issues:</strong> " + firstEntry.internal_organs_issues + "</p>";
            }
            if (firstEntry.musculoskeletal_pain === "Yes") {
                resultHtml += "<p style='text-align: center;'><strong>Musculoskeletal Pain:</strong> " + firstEntry.musculoskeletal_pain + "</p>";
            }
            if (firstEntry.headaches_pain_face === "Yes") {
                resultHtml += "<p style='text-align: center;'><strong>Headaches/Pain in Face:</strong> " + firstEntry.headaches_pain_face + "</p>";
            }

            resultHtml += "<h1 style='text-align: center;'><strong>Patient opinion and expectation:</strong></h1>";
            resultHtml += "<p style='text-align: center;'><strong>Ideas About Pain:</strong> " + firstEntry.ideas_about_pain + "</p>";
            resultHtml += "<p style='text-align: center;'><strong>Concerns About Pain:</strong> " + firstEntry.concerns_about_pain + "</p>";
            resultHtml += "<p style='text-align: center;'><strong>Expectations:</strong> " + firstEntry.expectations + "</p>";
            resultHtml += "<p style='text-align: center;'><strong>Closing Thoughts:</strong> " + firstEntry.closing_thoughts + "</p>";

            resultHtml += "</div>";
            resultsDiv.innerHTML += resultHtml;
        };
    } else {
        resultsDiv.innerHTML = "No results found.";
    }
    
}
