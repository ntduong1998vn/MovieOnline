import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Hieu ung
  });
  return (
    <React.Fragment>
      <div className="header">
        <div className="container">
          <div className="w3layouts_logo">
            <a href="index.html">
              <h1>
                One<span>Movies</span>
              </h1>
            </a>
          </div>
          <div className="w3_search">
            <form action="#" method="post">
              <input
                type="text"
                name="Search"
                placeholder="Search"
                required=""
              />
              <input type="submit" value="Go" />
            </form>
            <form></form>
          </div>

          <div className="w3l_sign_in_register">
            <ul>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i> (+000) 123
                345 653
              </li>
              <li>
                <a href="#" onClick={() => handleShow()}>
                  Login
                </a>
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>

      <Modal className=" " show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In & Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="w3_login_module">
            <div class="module form-module">
              <div class="toggle">
                <i class="fa fa-times fa-pencil"></i>
                <div class="tooltip" onClick>
                  Click Me
                </div>
              </div>
              <div class="form">
                <h3>Login to your account</h3>
                <form action="#" method="post">
                  <input
                    type="text"
                    name="Username"
                    placeholder="Username"
                    required=""
                  />
                  <input
                    type="password"
                    name="Password"
                    placeholder="Password"
                    required=""
                  />
                  <input type="submit" value="Login" />
                </form>
              </div>
              <div class="form">
                <h3>Create an account</h3>
                <form action="#" method="post">
                  <input
                    type="text"
                    name="Username"
                    placeholder="Username"
                    required=""
                  />
                  <input
                    type="password"
                    name="Password"
                    placeholder="Password"
                    required=""
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email Address"
                    required=""
                  />
                  <input
                    type="text"
                    name="Phone"
                    placeholder="Phone Number"
                    required=""
                  />
                  <input type="submit" value="Register" />
                </form>
              </div>
              <div class="cta">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default Header;
