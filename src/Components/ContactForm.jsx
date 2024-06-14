import Button from "./Button";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";


const ContactForm = () => {
  return (
    <section className="cont">
      <div className="contactform">
        <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage />} />
        <Button text="VIA CALL" icon={<FaPhone />} />
      </div>
      <div className="secondary-btn">
        <Button 
          isOutline={true}
          text="VIA  EMAIL  FORM"
          icon={<MdOutlineMailOutline />}
        />
      </div>
      <form>
        <div className="Form-container">
        <label htmlFor="">Name : </label>
        <input type="text" />

        </div>
        <div className="Form-container">
        <label htmlFor="">Email : </label>
        <input type="email" />

        </div>
        <div className="Form-container">
        <label htmlFor="">Text: </label>
        <textarea className="text-area"></textarea>

        </div>
        <button className="btn-my">SUBMIT</button>
        
        <div className="contactimg">
        <img src="Images/contact.svg" alt="" />
      </div>
      </form>

      
    </section>
  );
};

export default ContactForm;
