// ContactInfo.js
import "./contactInfo.scss"; // Create this file for ContactInfo-specific styles if needed

const ContactInfo = () => {
  return (
    <div className="contactInfoPage">
      <h1>Contact Information</h1>
      <div className="contactDetails">
        <p>Email: contact@gojo.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>
    </div>
  );
};

export default ContactInfo;
