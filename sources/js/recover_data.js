'use strict';

document.addEventListener("DOMContentLoaded", function() {
    // AJAX request to fetch data from the database
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "sources/php/user_information_for_patient.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            console.log(data);

            if (data.error) {
                console.error("Error:", data.error);
                document.getElementById("user-info").innerHTML = "Error fetching user data: " + data.error;
                return;
            }

            if (data.length > 0) {
                displayUserInfo(data[0]); // Display user info from the first record
                displayResults(data);     // Display all records
                setupDownloadButton(data); // Pass the entire data array for PDF generation
            } else {
                document.getElementById("user-info").innerHTML = "No user data found.";
                document.getElementById("form_answer").innerHTML = "No results found.";
            }
        }
    };
    xhr.send();
});

function displayUserInfo(user) {
    var userInfoDiv = document.getElementById("user-info");
    if (user) {
        var userInfoHtml = "<h2 style='color: red; text-align: center;'>User Information</h2>";
        userInfoHtml += "<p style='text-align: center;'><strong>First Name:</strong> " + user.first_name + "</p>";
        userInfoHtml += "<p style='text-align: center;'><strong>Last Name:</strong> " + user.last_name + "</p>";
        userInfoHtml += "<p style='text-align: center;'><strong>Email:</strong> " + user.email + "</p>";
        userInfoDiv.innerHTML = userInfoHtml;
    } else {
        userInfoDiv.innerHTML = "User information not found.";
    }
}

function displayResults(data) {
    var resultsDiv = document.getElementById("form_answer");
    if (data && data.length > 0) {
        var resultHtml = "<div class='form_answer'>";
        resultHtml += "<h1 style='text-align: center;'><strong>General information about the pain:</strong></h1>";
        resultHtml += "<p style='text-align: center;'><strong>Pain Intensity:</strong> " + data[0].pain_intensity + "</p>";
        resultHtml += "<p style='text-align: center;'><strong>Pain-Related Distress:</strong> " + data[0].pain_related_distress + "</p>";
        resultHtml += "<p style='text-align: center;'><strong>Pain-Related Interference:</strong> " + data[0].pain_related_interference + "</p>";
        resultHtml += "<p style='text-align: center;'><strong>Pain Beginning:</strong> " + data[0].ID_pain_beginning + "</p>";
        resultHtml += "<p style='text-align: center;'><strong>Temporal Pattern:</strong> " + data[0].ID_temporal_pattern + "</p>";

        resultHtml += "<h1 style='text-align: center;'><strong>Pain location:</strong></h1>";
        for (var i = 0; i < data.length; i++) {
            resultHtml += "<p style='text-align: center;'><strong>Pain location " + (i + 1) + " : </strong>" + data[i].ID_vertebrae + " - " + data[i].ID_pain_location + "</p>";
        }

        // Load the image, crop it, and display it
        var base64Image = data[0].bodychart_image;
        var img = new Image();
        img.src = base64Image;
        img.onload = function() {
            //Cropped the image to display it on the center of the page
            var desiredWidth = img.width - 0;
            var desiredHeight = img.height - 0; 

            var canvas = document.createElement('canvas');
            canvas.width = desiredWidth;
            canvas.height = desiredHeight;

            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, desiredWidth, desiredHeight, 0, 0, desiredWidth, desiredHeight);

            var croppedBase64Image = canvas.toDataURL('image/jpeg');
            resultHtml += "<img src='" + croppedBase64Image + "' alt='Bodychart Image' style='max-width: 100%; display: block; margin: 0 auto;' />";
            resultHtml += "<h1 style='text-align: center;'><strong>Questions about cancer:</strong></h1>";
            resultHtml += "<p style='text-align: center;'><strong>Cancer:</strong> " + data[0].cancer + "</p>";
            resultHtml += "<p style='text-align: center;'><strong>Cancer Treatment:</strong> " + data[0].cancer_treatment + "</p>";

            resultHtml += "<h1 style='text-align: center;'><strong>Questions about surgery:</strong></h1>";
            resultHtml += "<p style='text-align: center;'><strong>Begin After Surgery:</strong> " + data[0].begin_after_surgery + "</p>";
            resultHtml += "<p style='text-align: center;'><strong>Worse After Surgery:</strong> " + data[0].worse_after_surgery + "</p>";
            resultHtml += "<p style='text-align: center;'><strong>Spread of Pain:</strong> " + data[0].spread_of_pain + "</p>";
            resultHtml += "<p style='text-align: center;'><strong>Area of Surgery:</strong> " + data[0].area_of_surgery + "</p>";

            resultHtml += "<h1 style='text-align: center;'><strong>Other questions:</strong></h1>";
            resultHtml += "<p style='text-align: center;'><strong>Brain/Nerves Illness:</strong> " + data[0].brain_nerves_illness + "</p>";
            resultHtml += "<p style='text-align: center;'><strong>Internal Organs Issues:</strong> " + data[0].internal_organs_issues + "</p>";
            resultHtml += "<p style='text-align: center;'><strong>Musculoskeletal Pain:</strong> " + data[0].musculoskeletal_pain + "</p>";
            resultHtml += "<p style='text-align: center;'><strong>Headaches/Pain in Face:</strong> " + data[0].headaches_pain_face + "</p>";

            resultHtml += "<h1 style='text-align: center;'><strong>Patient opinion and expectation:</strong></h1>";
            resultHtml += "<p style='text-align: center;'><strong>Ideas About Pain:</strong> " + data[0].ideas_about_pain + "</p>";
            resultHtml += "<p style='text-align: center;'><strong>Concerns About Pain:</strong> " + data[0].concerns_about_pain + "</p>";
            resultHtml += "<p style='text-align: center;'><strong>Expectations:</strong> " + data[0].expectations + "</p>";
            resultHtml += "<p style='text-align: center;'><strong>Closing Thoughts:</strong> " + data[0].closing_thoughts + "</p>";

            resultHtml += "</div>";
            resultsDiv.innerHTML = resultHtml;
        };
        
    } else {
        resultsDiv.innerHTML = "No results found.";
    }
}


function setupDownloadButton(data) {
    document.getElementById("download-pdf").addEventListener("click", function() {
        downloadPDF(data);
    });
}

function downloadPDF(data) {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    const userInfo = document.getElementById("user-info").innerText;
    const formAnswer = document.getElementById("form_answer").innerText;

    const userInfoLines = pdf.splitTextToSize(userInfo, 180);
    const formAnswerLines = pdf.splitTextToSize(formAnswer, 180);

    let y = 10; // Start at top
    userInfoLines.forEach(line => {
        if (y > 280) { // If exceeds page, add new page
            pdf.addPage();
            y = 10;
        }
        pdf.text(10, y, line);
        y += 10;
    });

    formAnswerLines.forEach(line => {
        if (y > 280) { // If exceeds page, add new page
            pdf.addPage();
            y = 10;
        }
        pdf.text(10, y, line);
        y += 10;
    });

    // Add the bodychart image to the PDF
    var base64Image = data[0].bodychart_image;
    if (base64Image) {
        var img = new Image();
        img.src = base64Image;
        img.onload = function() {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            var imgData = canvas.toDataURL('image/jpeg');
            
            pdf.addPage();

            //calculate the ratio
            var pageWidth = pdf.internal.pageSize.getWidth() - 20;
            var pageHeight = pdf.internal.pageSize.getHeight() - 20;
            var imgWidth = img.width;
            var imgHeight = img.height;
            var ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
            var newWidth = imgWidth * ratio;
            var newHeight = imgHeight * ratio;

            pdf.addImage(imgData, 'JPEG', 10, 10, newWidth, newHeight);
            pdf.save(`patient_recap_${data[0].first_name}_${data[0].last_name}.pdf`);
        };
    } else {
        pdf.save(`patient_recap_${data[0].first_name}_${data[0].last_name}.pdf`);
    }
}
