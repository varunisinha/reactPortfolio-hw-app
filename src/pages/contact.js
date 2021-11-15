//importing required files

import React, { useState } from "react";
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { validateEmail } from "../utils/helpers";
function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessageName, setErrorMessageName] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessageM, setErrorMessageMessage] = useState("");

  const { name, email, message } = formState;


  function handleChangeEmail(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessageEmail("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessageEmail(`${e.target.name} is required.`);
        } else {
          setErrorMessageEmail("");
        }
      }
    }

    if (!errorMessageEmail) {
      setFormState({ ...formState, [e.target.email]: e.target.value });
    }
  }
  function handleBlankName(e) {
    if (e.target.name === "name") {
      if (!e.target.value.length) {
        setErrorMessageName(`${e.target.name} is required.`);
      } else {
        setErrorMessageName("");
      }
    }

    if (!errorMessageName) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  function handleBlank(e) {
    if (e.target.message === "message") {
      if (!e.target.value.length) {
        setErrorMessageMessage(`${e.target.message} is required.`);
      } else {
        setErrorMessageMessage("");
      }
    }

    if (!errorMessageM) {
      setFormState({ ...formState, [e.target.message]: e.target.value });
    }
  }

  return (
    <div style={{ backgroundColor: "black", textAlign: 'center' }}>
      <Jumbotron
        style={{ backgroundColor: "grey" }}
      >
        <h1 >Contact Me</h1>
      </Jumbotron>
      <Container >

        <Row>
          <Col size="md-12" style={{ width: "100%" }}>
            <div className="card-container bg-light padding-2 margin-2" style={{ padding: 50, marginBottom: 50 }}>
              <div className="form-container padding-2">
                <form
                  className="padding-2 margin-2"
                  id="contactForm"

                >
                  <div className="form-group text-left ">
                    <label >Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameInput"
                      placeholder="Name"
                      defaultValue={name}
                      onBlur={handleBlankName}
                      name="name"
                    />
                  </div>
                  {errorMessageName && (
                    <div>
                      <p className="error-text">{errorMessageName}</p>
                    </div>
                  )}
                  <div className="form-group text-left padding-2 margin-2">
                    <label >
                      E-mail address:
        </label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailInput"
                      placeholder="Email"
                      defaultValue={email}
                      name="email"
                      onBlur={handleChangeEmail}
                    />
                  </div>
                  {errorMessageEmail && (
                    <div>
                      <p className="error-text">{errorMessageEmail}</p>
                    </div>
                  )}
                  <div className="form-group padding-2 margin-2 text-left ">
                    <label >
                      Comment:
        </label>
                    <textarea
                      className="form-control"
                      id="textArea"
                      rows="3"
                      name="message"
                      placeholder="Comment"
                      defaultValue={message}
                      onBlur={handleBlank}
                    ></textarea>
                  </div>
                  {errorMessageM && (
                    <div>
                      <p className="error-text">{errorMessageM}</p>
                    </div>
                  )}
                  <div>
                    <button
                      type="submit"
                      className="btn btn-secondary padding-2 margin-2"
                      id="submitButton"
                      value="Send"
                    >
                      Submit
        </button>
                  </div>
                </form>



              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

//exporting contact 
export default Contact;
