document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Prepare the email data
    const emailData = {
      from_name: name,
      from_email: email,
      message: message
    };
  
    // Send the email via EmailJS
    emailjs.send('service_hjfc6xp', 'template_g7shzqz', emailData)
      .then(function (response) {
        console.log('Success!', response);
        // Optionally, notify the user the message was sent
        alert('Your message has been sent successfully!');
        // Clear form fields
        document.getElementById('contact-form').reset();
      }, function (error) {
        console.error('Failed to send email', error);
        alert('There was an error sending your message. Please try again later.');
      });
  });
  