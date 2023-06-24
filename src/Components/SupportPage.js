import React from 'react';
import './SupportPage.css'; 

function SupportPage() {
  return (
    <div className="support-container">
      <h1>Customer Support</h1>
      <p>If you have any questions or need assistance, please fill out the form below:</p>
      <form className="support-form">
        <label>Name:</label>
        <input type="text" id="name" />

        <label>Email:</label>
        <input type="email" id="email" />

        <label>Message:</label>
        <textarea id="message" rows="5"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SupportPage;
