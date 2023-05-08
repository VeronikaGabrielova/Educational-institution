// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import { Tooltip, Toast, Popover } from 'bootstrap'

$(document).ready(function() {
    // Získání aktuální URL adresy
    var currentUrl = window.location.href;
  
    // Nalezení odkazu v navigaci, který odkazuje na aktuální stránku
    $('.nav-item a').filter(function() {
      return this.href == currentUrl;
    }).addClass('active'); // přidání třídy active pro zvýraznění odkazu
  });
  