import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react'
import './style.css'

function AddCertificate(props) {
    const [certAdd, setcertAdd] = useState({
        name: '',
        certificate: '',
        year: ''
    })
    let handleClose = () => {
        props.hideShowAddModal();
        props.showCert();
    };
    let handleChange = (event) => {
        setcertAdd({
            ...certAdd,
            [event.target.name]: event.target.value,
        });
    };

    //validation
    let addCertification = (event) => {
        validateName();
        validateCertified();
        validateYear();

        if (validateName() && validateCertified() && validateYear()) {
            props.hideShowAddModal();
            props.showCert(certAdd);
           setcertAdd({
                
                name: '',
                certificate: '',
                year: ''
            })
        }
    }

  const [nameError, setnameError] = useState("")
    const validateName = () => {
        if (certAdd.name) {
            let regex = /^[a-zA-Z ]{4,30}$/;
            if (regex.test(certAdd.name)) {
                setnameError("");
                return true;
            }
            else {
                setnameError("Enter valid Certicicate Name");
            }
        }
        else {
            setnameError("Certicicate Name is Required");
        }
        return false;
    };

    const [certifiedError, setcertifiedError] = useState("")
    const validateCertified = () => {
        if (certAdd.certified) {
            let regex = /^[a-zA-Z ]{4,30}$/;
            if (regex.test(certAdd.certified)) {
                setcertifiedError("");
                return true;
            }
            else {
                setcertifiedError("enter valid Certificate Form Name");
            }
        }
        else {
            setcertifiedError("Certificate Form is Required");
        }
        return false;
    };

    const [yearError, setyearError] = useState("")
    const validateYear = () => {
        if (certAdd.year) {
            let regex = /^(197\d|19[89]\d|20[01]\d|202[0-2])$/;
            if (regex.test(certAdd.year)) {
                setyearError("");
                return true;
            }
            else {
                setyearError("Enter Year between 1970 to 2022");
            }
        }
        else {
            setyearError("Year is Required");
        }
        return false;
    };
    return (
        <>

            <Modal show={props.showAddModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Certification</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>

                        <div>
                            <label>Certification Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={certAdd.name}
                                onChange={handleChange}
                            />
                            {nameError && <div className="errMsg">{nameError}</div>}

                        </div>
                        <div>
                            <label>Certificate From</label>
                            <input
                                type="text"
                                className="form-control"
                                name="certified"
                                value={certAdd.certified}
                                onChange={handleChange}
                            />
                            {certifiedError && <div className="errMsg">{certifiedError}</div>}


                        </div>
                        <div>
                            <label>Year of Completion</label>
                            <input
                                type="number"
                                className="form-control"
                                name="year"
                                value={certAdd.year}
                                onChange={handleChange}
                            />
                            {yearError && <div className="errMsg">{yearError}</div>}


                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={addCertification}>
                        Add
                    </Button>
                </Modal.Footer>
                </Modal>
        </>
    )
}

export default AddCertificate
