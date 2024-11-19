

 // Function to show the pop-up when the form is submitted
 function showPopup(event) {
    event.preventDefault();  // Prevent form submission and page refresh

    // Show the pop-up by changing its display to 'block'
    document.getElementById('popup').style.display = 'block';
    
    // Apply styles to make background unscrollable and unclickable
    document.body.classList.add('no-scroll');
}

// Function to close the pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    
    // Remove the no-scroll class to allow scrolling and interaction
    document.body.classList.remove('no-scroll');
}