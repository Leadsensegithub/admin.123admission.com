import React, { useState, useEffect, useRef } from "react";
import { Modal, ModalBody } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import axios from 'axios';
import image from '../../assets/GF.svg';
import "./FromModle.css";

const FormModle = ({ success, setSuccess }) => {
    const inputRef = useRef(null);
    const [tankyou, setTankyou] = useState(true)

    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (inputRef.current) {
            window.intlTelInput(inputRef.current, {
                initialCountry: 'in',
                separateDialCode: false,
            });
        }
    }, []);

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = "Name is required";
        if (!formData.contact) errors.contact = "Contact is required";
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            const data = JSON.stringify({
                contact: formData.contact,
                name: formData.name,
                email: formData.email
            });

            const config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://api.123admissions.com/api/v1/studentform',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    setTankyou(false)

                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    useEffect(() => {
        // Set success to true after 10 seconds (10000 milliseconds)
        const timer = setTimeout(() => {
            setSuccess(true);
        }, 10000);

        // Cleanup the timer if the component is unmounted before 10 seconds
        return () => clearTimeout(timer);
    }, []);

    const handlePhoneNumberChange = (isValid, value, countryData, number, id) => {
        setFormData({ ...formData, ['contact']: value });
    };


    return (
        <Modal
            show={success}
            onHide={() => setSuccess(false)}
            className="p-5 formmodle"
        >
            <Modal.Body className="text-center formmodle_body">
                {tankyou ? <div className="row">
                    <div className="col-lg-5 nnn">
                        <img src={image} style={{ width: "100%" }} alt="Contact" />
                    </div>
                    <div className="col-lg-7 col-12" style={{ padding: "30px 6%" }}>
                        <div className="text-y">
                            <h3>Enter your details to start the application</h3>
                        </div>
                        <div className="mt-5">
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                        </div>
                        <div className="mt-3 g" style={{ marginLeft: "-1.5%" }}>
                            <IntlTelInput
                                inputProps={{ id: '91', name: 'india', ref: inputRef }}
                                onPhoneNumberChange={handlePhoneNumberChange}
                                defaultCountry="in"
                                required
                            />

                        </div>
                        <div className="mt-3">
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                        </div>
                        <div style={{ textAlign: "start", marginTop: "10px" }}>
                            <small>By Submitting this form you accept and agree to our
                                <br /><a style={{ color: "blue" }} href="#">Terms Of Use.</a></small>
                        </div>
                        <div className="mt-5">
                            <button type="button" className="btn btn-primary w-100 event_submit" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div> : <>
                    <div className="row" style={{ textAlign: "center", marginTop: "20%", marginBottom: "20%" }}>
                        <div>

                            <h4 style={{ color: "var(--green1)" }}>Thank you for submitting form our consultant contact you</h4>
                        </div>
                    </div>
                </>}
            </Modal.Body>
        </Modal>
    );
};



export default FormModle;
