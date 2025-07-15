/*

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

*/

// Function to encode form data as Netlify expects
function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

// Function to handle submit and show popup
function showPopup(event) {
    event.preventDefault(); // Stop default form submit

    const form = event.target;
    const formData = {
        "form-name": form.getAttribute("name"),
        name: form.name.value,
        number: form.number.value,
        email: form.email.value,
        message: form.message.value
    };

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(formData)
    })
    .then(() => {
        document.getElementById('popup').style.display = 'block';
        document.body.classList.add('no-scroll');
    })
    .catch(() => {
        alert("Oops! There was a problem submitting your form.");
    });
}

// Function to close the popup and reload page
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.body.classList.remove('no-scroll');
    window.location.reload();
}
