import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import "./SuccessModal.css";
import AppContext from "../../Context/AppContext";
import { Modal, ModalBody, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes, { checkPropTypes } from "prop-types";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
const Success_modal = ({ success, setSuccess }) => {
  const navigate = useNavigate();
  // Initialize the component with default values
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      window.intlTelInput(inputRef.current, {
        initialCountry: 'in',
        separateDialCode: false, // Set to false to hide the flag
      });
    }
  }, []);
  return (
    <>
      <Modal
        show={success}
        onHide={() => setSuccess(false)}
        className="p-5 success_modal"
      >
        <Modal.Body className="text-center success_modal_body">
          <div className="row">
            <div className="col-lg-4">
              <div>
                <img src="https://via.placeholder.com/350x350"></img>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-5">
                <IntlTelInput inputProps={{ id: '91', name: 'india', ref: inputRef }} />
              </div>
              <div className="but">
                <button type='button' className="btn btn-primary w-100" onClick={() => setSuccess(false)}>Cantinue</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Success_modal;
