'use strict'

var logoutButton = document.getElementById("logout_button");

logoutButton.addEventListener('click', function(event) {
    var confirmLogout = confirm("Are you sure that you want to logout ?");

    if (confirmLogout) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'sources/php/disconnect.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                window.location.href = "login.html";
            } else {
                console.error("Une erreur est survenue lors de la déconnexion");
            }
        };
        xhr.send();
    }
});
