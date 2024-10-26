+++
title = "Contact"
description = "To reach us please use the contact form on this page."
path = "contact"
template = "pages.html"
draft = false
render = true
+++

<p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
<form name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify-honeypot="southend">
  
  <p>
    <p class="hidden">
    <label>
      Don’t fill this out if you’re human: <input name="southend" />
    </label>
  </p>
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
  <p>
    <button type="submit" id="sendMessageButton">Send</button>
  </p>
</form>
