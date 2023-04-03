import { useEffect, useState } from "react";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import {FaHospital} from 'react-icons/fa'
import {FaMoneyBill} from 'react-icons/fa'
const Admin = () => {
    const [doctorName, setDoctorName] = useState('')
    const [speciality, setSpeciality] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [clinicOrHospita1Name, setClinicOrHospitalName] = useState('')
    const [address, setAddress] = useState('')
    const [fees, setFees] = useState(0)
    const [fetchedData, setFetchedData] = useState(null)
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShow(true)
        setError(true)

        // !!!HANDLE POST REQUEST HERE
        console.log(
                doctorName, 
                speciality, 
                phoneNumber, 
                clinicOrHospita1Name, 
                address, 
                fees
            )
    }

    const fetchData = async (e) => {
        e.preventDefault();
        // !!!HANDLE GET REQUEST HERE
        try {
            const response = await axios.get(`https://random-data-api.com/api/v2/users?size=5`)
            setFetchedData(response.data)
            console.log(response.data)
        }
        catch (err) {
            console.log(err);
        }

    }

    return (
        <>
        <div id='toasts' style={{ position: "fixed", zIndex: "10", top: "3%", right: "3%" }}>
                    <Toast onClose={() => setShow(false)} bg='success' position='middle-center' show={show} delay={3000} autohide style={{ position: "fixed", zIndex: "10", top: "3%", right: "3%" }}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Doctor Added!</strong>
                            <small>Doctor {doctorName?.charAt(0).toUpperCase() + doctorName?.slice(1)}</small>
                        </Toast.Header>
                        <Toast.Body className="text-white"> 
                        <FaHospital/>
                            {clinicOrHospita1Name} <br></br>
                        <FaMoneyBill/>
                            {fees}
                        </Toast.Body>
                    </Toast>

                    <Toast onClose={() => { setError(false) }} bg='danger' position='middle-center' show={error} delay={2000} autohide style={{ position: "relative", zIndex: "10" }}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto text-danger">Enter valid details!</strong>

                        </Toast.Header>
                        <Toast.Body className='text-white'>Check all the details before submitting</Toast.Body>
                    </Toast>
                </div>

            <h1>Admin Page for Doctors</h1>
            <div className='d-flex justify-content-evenly'>
                <Form>
                    <Form.Group className="mb-3 " controlId="doctorName">
                        <Form.Label>Doctor Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setDoctorName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="doctorName">
                        <Form.Label>Speciality</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setSpeciality(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="doctorName">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setPhoneNumber(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="doctorName">
                        <Form.Label>Clinic Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setClinicOrHospitalName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="doctorName">
                        <Form.Label>Address</Form.Label>
                        <textarea type="textarea" placeholder="Enter name" onChange={(e) => setAddress(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="doctorName">
                        <Form.Label>Fees</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setFees(e.target.value)} />
                    </Form.Group>
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </Form>
                <div>
                    <button className="btn btn-primary" onClick={fetchData}>Fetch Data</button>
                    <ol style={{height:"80vh",overflowY:"scroll"}}>
                        {fetchedData && fetchedData.map((element, i) => {
                            return (<li key={i}>
                                <ul>
                                    <li key={element.first_name}>{element.first_name}</li>
                                    <li key={element.last_name}>{element.last_name}</li>
                                    <li key={element.phone_number}>{element.phone_number}</li>
                                    <li key={element.employment.title}>{element.employment.title}</li>
                                    <li key={element.address.street_address}>{element.address.street_address}</li>
                                    <li key={element.id}>{element.id}</li>
                                </ul>
                            </li>);
                        })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}
export default Admin;