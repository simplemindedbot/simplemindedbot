+++
title = "Contact"
description = "To reach us please use the contact form on this page."
path = "contact"
template = "pages.html"
draft = false
render = true
+++

<h1>Contact</h1>
<p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
<form name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify-honeypot="southend"
      onsubmit="return validateContentWithFunction(event)">

  <!-- Hidden honeypot field -->
  <input type="hidden" name="southend" />

  <p>
    <label for="name">Name</label>
    <input type="text" placeholder="Name" id="name" name="name" required data-validation-required-message="Please enter your name, does not have to be your real name." />
  </p>

  <p>
    <label for="email">Email Address</label>
    <input type="email" placeholder="name@example.com" id="email" name="email" data-validation-required-message="Please enter your email address. Not required, only include if you want a response." />
  </p>

  <p>
    <label for="message">Message</label>
    <textarea rows="5" placeholder="Message" id="message" name="message" required data-validation-required-message="Please enter a message."></textarea>
  </p>

  <div id="success"></div>
  <div data-netlify-recaptcha></div>
  <p style="text-align: center;">
    <button type="submit"
            id="sendMessageButton"
            style="background-color: #007bff;
                   color: white;
                   padding: 12px 24px;
                   border: none;
                   border-radius: 4px;
                   cursor: pointer;
                   font-size: 1rem;
                   transition: background-color 0.3s ease;">Send</button>
  </p>
</form>

<style>
button[type="submit"]:hover {
    background-color: #0056b3;
}
</style>

<script>
async function validateContentWithFunction(event) {
    event.preventDefault();

    const messageText = document.querySelector('textarea[name="message"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const name = document.querySelector('input[name="name"]').value;

    try {
        // First check content with our function
        const response = await fetch('/.netlify/functions/filter-profanity', {
            method: 'POST',
            body: JSON.stringify({
                feedback: messageText
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();

        if (!response.ok) {
            alert(result.message);
            return false;
        }

        // If content is clean, submit the form
        if (result.isClean) {
            const form = event.target;
            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData,
            }).then(() => {
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            }).catch(error => {
                alert('There was an error submitting your message. Please try again.');
            });
        }

    } catch (error) {
        alert('There was an error processing your submission. Please try again.');
        return false;
    }

    return false;
}
</script>
