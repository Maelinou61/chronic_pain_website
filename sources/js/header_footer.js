'use strict'
var header = `
    <h1><a href="accueil.html">EUREKA</a></h1>
      <nav>
        <ul>
          <li><a href="not_implemented.html">More detail about CAL-CP</a></li>
          <li><a href="not_implemented.html">About us</a></li>
          <li><a href="not_implemented.html">Tarif</a></li>
          <li><a href="not_implemented.html">...</a></li>
        </ul>
      </nav>
      <a href="login.html" class="button">Login</a>
   `;
document.getElementById('header').innerHTML = header;


var footer = `
    <nav>
        <ul>
            <li>
                <h2>Quick Links</h2>
                <ul class="souslist">
                    <li><a href="not_implemented.html">What is CAL-CP?</a></li>
                    <li><a href="not_implemented.html">About us</a></li>
                    <li><a href="not_implemented.html">Tarif</a></li>
                    <li><a href="not_implemented.html">Contact</a></li>
                </ul>
            </li>
            <li>
                <h2>Contact Us</h2>
                <p>Email: info@calcp.com</p>
                <p>Phone: +123 456 789</p>
            </li>
            <li>
                <h2>Follow Us</h2>
                <ul class="souslist">
                  <li><a href="sources/images/icons/facebook"><img src="sources/images/icons/facebook.png" alt="Facebook"></a></li>
                  <li><a href="#"><img src="sources/images/icons/twitter.png" alt="Twitter"></a></li>
                  <li><a href="#"><img src="sources/images/icons/linkedin.jpg" alt="LinkedIn"></a></li>
                </ul>
            </li>
        </ul>
   `;
document.getElementById('footer').innerHTML = footer;



