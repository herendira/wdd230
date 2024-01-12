 // JavaScript code to dynamically populate the current year and last modified date
 document.addEventListener('DOMContentLoaded', function () {
    // Get the current year
    var currentYear = new Date().getFullYear();

    // Populate the first paragraph in the footer
    document.getElementById('copyright').innerHTML = '&copy; ' + currentYear + '<br>&#x1F33B;Herendira Gomez Herrera &#x1F33B<br>Mexico';
    

    // Populate the last modified date in the second paragraph
    var lastModifiedElement = document.getElementById('lastModified');
    var lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.innerHTML = 'Last Modified: ' + lastModifiedDate.toDateString();
});