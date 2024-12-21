import './contact.css'
import mesage_icon from '../../Assest/msg-icon.png'
import mail_icon from '../../Assest/mail-icon.png'
import location_icon from '../../Assest/location-icon.png'
import phone_icon from '../../Assest/phone-icon.png'
import whiteArrow from '../../Assest/white-arrow.png'
import React from 'react'

const Contacts = () => {

  

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "96614379-9470-4cf6-aeff-e09dcccb9291");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send Us A Message <img src={mesage_icon}  /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium 
          officiis repellendus, sapiente dicta non itaque deleniti inventore, 
          voluptatum illum fugiat aliquam nihil, recusandae incidunt eaque.</p>

          <ul>
            <li><img src={mail_icon} alt="" />luminarycollege@gmail.com</li>
            <li> <img src={phone_icon} alt="" />+94711407173</li>
            <li><img src={location_icon} alt="" />77 Msatusets Ave <br /> MA 2236545A United States </li>
          </ul>

      </div>

      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required/>

          <label htmlFor="">Phone Number</label>
          <input type="tel" name='tel' placeholder='Enter Your Mobile Number'/>

          <label htmlFor="">Write Message Here</label>
          <textarea name="message"  placeholder='Enter Your Message' rows={6} required></textarea>

          <button type='submit' className='btn dark-btn'>Submit Now <img src={whiteArrow} alt="" /> </button>

        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contacts