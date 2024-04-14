'use strict'

function printTemporalPattern(){
    ajaxRequest("GET", "sources/php/database.php", function(response){
        var select = document.getElementById("temporal_pattern");
        const data = JSON.parse(response);
        const descriptionTemporalPattern = data.descriptionTemporalPattern.map(item => ({id: item.ID, value: item.temporal_pattern}));

        descriptionTemporalPattern.forEach(function(item) {
            var id = item.id;
            var value = item.value;

            var option = document.createElement('option');
            option.text = value;
            option.value = parseInt(id);
            select.add(option);
        });
    })
}


function printPainLocation(){
    ajaxRequest("GET", "sources/php/database.php", function(response){
        var map = document.getElementById("painMap");
        const data = JSON.parse(response);
        const descriptionPainLocation = data.descriptionPainLocation.map(
            item => ({
                id: item.ID,
                values: {
                    painAnatomy : item.pain_location,
                    painCoordinates : item.coordinates
                }
            }));

        descriptionPainLocation.forEach(function(item) {
            var id = item.id;
            var painAnatomy = item.values.painAnatomy;
            var painCoordinates = item.values.painCoordinates

            var area = document.createElement('area');
            area.shape = "poly";
            area.coords = painCoordinates;
            area.alt = painAnatomy;
            area.addEventListener("click", function() {
                var textPainLocation = document.getElementById("painLocation")
                textPainLocation.value = painAnatomy; // Pass the pain anatomy instead of ID
                textPainLocation.dataset.id = id;
            });
            map.appendChild(area);
        });
    })
}

printTemporalPattern();
printPainLocation();