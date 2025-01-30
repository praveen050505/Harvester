import './index.css'
import { IoIosContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const ContactUs = ()=>{
   return(
    <div className="contact-us-container">
        <h1 className="contact-us-heading">For Rent Contact Us</h1>
        <div className="contact-flex">
            <img src='./praveen.jpg' alt="praveen-img" className="img-praveen"/>
             <div className="contact-flex-container">
                <div className="contact-icon-text">
                   <IoIosContact className='icon-style'/>
                   <p className="name-text">Palvai Praveen</p>
                </div>
                <div className="contact-icon-text">
                    <FaPhoneAlt className='icon-style'/>
                   <p className="name-text">+91 7032727313</p>
                </div>
                <div className="contact-icon-text">
                   <MdEmail className='icon-style'/>
                   <p className="name-text">palvaipraveen05@gmail.com</p>
                </div>
                <div className="contact-icon-text">
                    <FaLocationDot className='icon-style'/>
                   <p className="name-text location-text">Thimmareddygudam,Vemullapally,<br/>Nalgonda.</p>
                </div>
             </div>
        </div>
    </div>
   )
}

export default ContactUs