import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import './style.css'

function EditCerificate(props) {
    const [certificateAdd, setcertificateAdd] = useState({
         name: '',
        certificate: '',
        year: ''
    })

    useEffect(() => {
        setcertificateAdd({ ...props.selectedCertificate });
    }, [props.selectedCertificate])

    let handleClose = () => {
        props.hideShowEditModal();
    }

    let handleChange = (event) => {
        setcertificateAdd({
            ...certificateAdd,
            [event.target.name]: event.target.value,
        });
    };
    //validation
    let editCertification = (event) => {
        validateName();
        validateCertified();
        validateYear();
        if (validateName() && validateCertified() && validateYear()) {
            props.showCert1(certificateAdd)
            console.log('certificateadd', certificateAdd);
            props.hideShowEditModal();
        }
       
    }

    const [nameError, setnameError] = useState("")
    const validateName = () => {
        if (certificateAdd.name) {
            let regex = /^[a-zA-Z ]{4,30}$/;
            if (regex.test(certificateAdd.name)) {
                setnameError("");
                return true;
            }
            else {
                setnameError("Enter valid Cerificate Name");
            }
        }
        else {
            setnameError("Certificate Name is Required");
        }
        return false;
    };

    const [certifiedError, setcertifiedError] = useState("")
    const validateCertified = () => {
        if (certificateAdd.certified) {
            let regex = /^[a-zA-Z ]{4,30}$/;
            if (regex.test(certificateAdd.certified)) {
                setcertifiedError("");
                return true;
            }
            else {
                setcertifiedError("enter valid Certficate From");
            }
        }
        else {
            setcertifiedError("Certificate Form is Required");
        }
        return false;
    };

    const [yearError, setyearError] = useState("")
    const validateYear = () => {
        if (certificateAdd.year) {
            let regex = /^(197\d|19[89]\d|20[01]\d|202[0-2])$/;
            if (regex.test(certificateAdd.year)) {
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
        
            <Modal show={props.showEditModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Certificate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div>
                            <label>Certification Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={certificateAdd.name}
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
                                value={certificateAdd.certified}
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
                                value={certificateAdd.year}
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
                    <Button variant="primary" onClick={editCertification}>
                        Save 
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditCerificate
