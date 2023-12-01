import React from "react";
import { Formik, Form, Field, prepareDataForValidation } from "formik";

const ContactWithMap = () => {
  const messageRef = React.useRef(null);
  const BtnTextRef = React.useRef(null);
  const [successMsg, setSuccessMsg] = React.useState(false);

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  const sendMessage = async (data) => {
    const response = await fetch('/api/notify', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const response_data = await response.json();

    return response_data;
  };

  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch.</h4>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  onSubmit={async (values) => {
                    BtnTextRef.current.textContent = "Sending...";
                    BtnTextRef.current.disabled = true;
                    // Send msg
                    const res = await sendMessage(values);
                    // alert(JSON.stringify(values, null, 2));

                    // Error in response
                    if (res.error) {
                      BtnTextRef.current.textContent = "Send Message";
                      BtnTextRef.current.disabled = false;
                      alert("Something went wrong, please feel free to leave me an email or send me a direct message through my social accounts.");
                      return;
                    }

                    // Success in response
                    if (res.msg) {
                      BtnTextRef.current.textContent = "Send Message";
                      BtnTextRef.current.disabled = false;
                    }

                    setSuccessMsg(true);
                    messageRef.current.innerText =
                      "Your message was recieved successfully, I'll be contacting you shortly.";
                    // Reset the values
                    values.name = "";
                    values.email = "";
                    values.message = "";
                    // clear message
                    setTimeout(() => {
                      messageRef.current.innerText = "";
                      setSuccessMsg(false);
                    }, 7000);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contact-form">
                      {successMsg &&
                        <div style={{ fontSize: '13px' }} className="messages p-3 bg-secondary text-center text-white rounded" ref={messageRef}></div>}

                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required="required"
                          />
                        </div>

                        <div className="form-group">
                          <Field
                            validate={validateEmail}
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                          />
                          {errors.email && touched.email && (
                            <div className="text-danger">{errors.email}</div>
                          )}
                        </div>

                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required="required"
                          />
                        </div>

                        <button type="submit" className="btn-curve btn-lit">
                          <span ref={BtnTextRef}>Send Message</span>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
                <h3 className="custom-font wow" data-splitting>
                  Let&apos;s Talk.
                </h3>
                <div className="item mb-40">
                  <h5>
                    <a href="mailto:emmanuel.philipel@yahoo.com">
                      emmanuel.philipel@yahoo.com
                    </a>
                  </h5>
                  <h5>
                    <a href="tel:+447448354050">
                      (+44) 744 835 4050
                    </a>
                  </h5>
                </div>

                <div className="social mt-50">
                  <a target="_blank" rel="noreferrer" href="https://github.com/lebe24" className="icon">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/emmanuelphilipel" className="icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/emmanuellebe24" className="icon">
                    <i className="fab fa-x"></i>
                  </a>
                  <a href="https://www.instagram.com/" className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="map" id="ieatmaps">
        <iframe
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.45932571165!2d3.143870718242269!3d6.548376812166327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1658637704491!5m2!1sen!2sng"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}

      <footer className="footer-half sub-bg">
        <div className="container">
          <div className="copyrights text-center mt-0">
            <p>
              © 2023 - {new Date().getFullYear()} <a href="#0" className="portfolio-logo-footer"> LEBE PAGE</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactWithMap;
