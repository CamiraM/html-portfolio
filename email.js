// Initialize EmailJS with your User ID
(function() {
    emailjs.init("qTF4gfszGJv3ZJWG3");
})();

// Function to handle form submission
function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Anti-bot honeypot check
    if (document.getElementById("honeypot").value) {
        console.log("Bot detected, form submission prevented.");
        document.getElementById("responseMessage").innerText = "Bot detected, form submission prevented.";
        return; // Exit function if the honeypot is filled in
    }

    // Gather form data
    const formData = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Send email using EmailJS
    emailjs.send("service_7mp3msk", "template_zdrmzgl", formData)
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("responseMessage").innerText = "Your message has been sent successfully!";
        document.getElementById("contactForm").reset(); // Reset the form after submission
    }, function(error) {
        console.log("FAILED...", error);
        document.getElementById("responseMessage").innerText = "There was an error sending your message. Please try again.";
    });
}
