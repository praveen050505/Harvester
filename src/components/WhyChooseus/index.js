import { FaHeadset } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import './index.css'

const WhyChooseus = ()=>{
     return(
        <div className="choose-container">
            <h1 className="why-choose-heading">Why Choose Us</h1>
            <div className="choose-container-size">
                <div className="size-container">
                    <FaHeadset />
                    <p className="customer-heading">Customer Support</p>
                    <p className="support-para">24/7 Support</p>
                </div>
                <div className="size-container">
                    <FaCalendarCheck />
                    <p className="customer-heading">Flexible rental terms</p>
                    <p className="support-para">No Commitment</p>
                </div>
            </div>
        </div>
     )
}

export default WhyChooseus