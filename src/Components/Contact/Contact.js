import React, { useRef } from "react";
import "./Contact.css";
import Slide from "react-reveal/Slide";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const commentRef = useRef();

  const handleSubmit = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const number = numberRef.current.value;
    const comment = commentRef.current.value;

    const allInfo = { name, email, number, comment };

    // send data to server
    fetch("https://theskyaural.herokuapp.com/send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allInfo),
    }).then((data) => {
    });
    e.preventDefault();
  };

  return (
    <div className="mainContactForm  ">
    <div className="  container">
      <Slide left>
        <form onSubmit={handleSubmit}>
          <div className="contactFm m-auto row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              {/* Name */}
              <input
                style={{ width: "80%" }}
                ref={nameRef}
                className="inputTag mt-4 p-2 ms-5  m-1 border rounded"
                required
                placeholder="Your Name"
                type="text"
              />
              <input
                style={{ width: "80%" }}
                ref={emailRef}
                className="inputTag mt-4 p-2  ms-5 m-1 border rounded"
                required
                placeholder="Your Email"
                type="email"
              />
              <input
                style={{ width: "80%" }}
                ref={numberRef}
                className="inputTag mt-4 p-2 ms-5  m-1 border rounded"
                required
                placeholder="Your Number"
                type="tel"
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <textarea
                style={{ height: "85%", width: "80%" }}
                ref={commentRef}
                className="p-3 ms-5 mt-4 border rounded textArea"
                required
                placeholder="Your Message"
              >
               
              </textarea>
            </div>

            <input
              className="rounded submitBtn p-2 border-0 mt-4"
             
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </Slide>
    </div>
    </div>
  );
};

export default Contact;
