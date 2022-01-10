import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import AddCertificate from './AddCertificate'
import EditCerificate from './EditCerificate'

function Certification() {

  const [showAddModal, setshowAddModal] = useState(false)
  const [showEditModal, setshowEditModal] = useState(false)
  const [certificateName, setcertificateName] = useState([])
  const [selectedCertificate, setselectedCertificate] = useState([])
  const [selectedCertificateIndex, setselectedCertificateIndex] = useState('')

 //Add Certification
  let updateShowAddModal = () => {
    setshowAddModal(true);
  }
  let hideShowAddModal = () => {
    setshowAddModal(false);
  }
  let showCert = (certAdd) => {
    console.log('show', certAdd);
    let certCopy = [...certificateName]
    certCopy.push(certAdd)
    setcertificateName(certCopy)
  }

  //Edit Certificate
  let updateSelectedCertificate = (value, index) => {
    setshowEditModal(true);
    setselectedCertificate(value);
    setselectedCertificateIndex(index)
  }

  let hideShowEditModal = () => {
    setshowEditModal(false);
  }
  let showCert1=(certAdd)=>{
    let certCopy = [...certificateName]
    certCopy.splice(setselectedCertificateIndex,1,certAdd)
    setcertificateName(certCopy)
  }
  //Delete Certificate
  let deleteCert = (index) => {
    let certCopy = [...certificateName]
    certCopy.splice(index, 1)
    setcertificateName(certCopy)
  }

    return (
        <div>
       <Table striped bordered hover>
        
          <thead>
            <tr>
              <th>Certification Name</th>
              <th>Certificate From</th>
              <th>Year of Completion  </th>
              <th>
                <button className="btn btn-warning" onClick={updateShowAddModal}>
                  ADD
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {certificateName.length > 0 &&
              certificateName.map((value, index) => {
                return (
                  <tr key={index}>
                    {/* <td>{cert.id}</td> */}
                    <td>{value.name}</td>
                    <td>{value.certified}</td>
                    <td>{value.year}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          updateSelectedCertificate(value, index);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteCert(index);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <AddCertificate
          showAddModal={showAddModal}
          hideShowAddModal={hideShowAddModal}
          showCert={showCert}
        />
        <EditCerificate
          showEditModal={showEditModal}
          hideShowEditModal={hideShowEditModal}
          showCert1={showCert1}
          selectedCertificate={selectedCertificate}
        />
      </div>
    )
}

export default Certification
