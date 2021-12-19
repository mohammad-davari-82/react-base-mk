import './Contact.css';
import React, {useState} from 'react';
import Button from '../Button/Button';
import {validateEmail , validateSubject} from '../../utils/Validation';
const Contact = () => {
    const [subject, setSubject] = useState('');

    const [email, setEmail] = useState('');

    const [message, setMessage] = useState('');

    const [errors,setErrors] = useState({});

    const handleChangeInputSubject = (event) => {
        if (validateSubject(event.target.value)) {
          setSubject(event.target.value);
          setErrors({
            ...errors,
            subject: null,
          });
        } 
        else {
          setErrors({
            ...errors,
            subject: "Subject must be more than 8 characters",
          });
        }
      };
  
      const handleChangeInputEmail = (event) => {
          if (validateEmail(event.target.value)){
              setEmail(event.target.value);
              setErrors({
                  ...errors,
                  email: null,
              })
          }
          else {
              setErrors({
                ...errors,
                email: 'Email is not valid'
              });
          }
      };

    const handleChangeTextArea = (event) => {
        setMessage(event.target.value);
    }
    
    const handleSubmit = (event) => {
        console.log("subject:", subject);
        console.log("email:", email);
        console.log("message:", message);    }
    return(
        <div className="Contact">
        <div className="formControl">
          <input
            onChange={handleChangeInputSubject}
            type="text"
            placeholder="subject"
          />
          {errors.subject && <span>{errors.subject}</span>}
        </div>
        <div className="formControl">
          <input
            onChange={handleChangeInputEmail}
            type="email"
            placeholder="Email"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="formControl">
          <textarea onChange={handleChangeTextArea}>Your request here</textarea>
        </div>
        <div className="formControl">
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    
    );
}
export default Contact;
