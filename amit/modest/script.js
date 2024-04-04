document.addEventListener("DOMContentLoaded", function() {

    var showMoreButton = document.getElementById("showmore");
    var hiddenImages = document.querySelectorAll(".forhide");

    function showMoreImages() {
      
        hiddenImages.forEach(function(image) {
            image.style.display = "block";
        });

        
        showMoreButton.style.display = "none";
    }

    // Adding  event listener to the button
    
    showMoreButton.addEventListener("click", showMoreImages);
});

