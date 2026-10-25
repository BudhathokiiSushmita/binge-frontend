import { React, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { FaRegWindowClose } from "react-icons/fa";
import LOGO from '../../../images/LOGO.png'
import { registerUser } from '../../../service/UserService';

const Signup = (props) => {
    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email: "",
        password : ""
    })

    const registerUserData = (e) => {
        e.preventDefault();
        sendUserData();
    }

    const sendUserData = async () => {
        const user = await registerUser(formData);
        if(user !== undefined && user.body.length > 0) {
        props.loginModal(true);
        }
      }

    return (
        <Modal
            show={props.show}
            backdrop="static">
            <Modal.Body>
                <div class="mx-auto">
                    <div class="card card0">
                        <div class="d-flex flex-lg-row flex-column-reverse">
                            <div class="card card1">
                            <form action="/"  method='POST' onSubmit={registerUserData}>

                                <div class="row justify-content-center my-auto">
                                    <div class="col-12 my-5">
                                        <FaRegWindowClose className='float-end binge-icon' onClick={() => props.closeModal()}/>
                                        <div class="row justify-content-center px-3 mb-3">
                                            <img id="logo" src={LOGO} />
                                        <h3 class="mb-2 text-center heading mt-4">Binge with us</h3>

                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">First Name</label>
                                            <input type="text" id="firstName" name="firstName" placeholder="First Name" class="form-control" 
                                            onChange={(event) => {
                                                setFormData({
                                                        ...formData, 
                                                        firstName: event.target.value
                                                    })
                                            }} />
                                        </div>
                                        <div class="form-group mt-2">
                                            <label class="form-control-label">Last Name</label>
                                            <input type="text" id="lastName" name="lastName" placeholder="Last Name" class="form-control" required
                                              onChange={(event) => {
                                                setFormData({
                                                        ...formData, 
                                                        lastName: event.target.value
                                                    })
                                            }} />
                                        </div>
                                        <div class="form-group mt-2">
                                            <label class="form-control-label">Email</label>
                                            <input type="email" id="email" name="email" placeholder="Email" class="form-control" required
                                              onChange={(event) => {
                                                setFormData({
                                                        ...formData, 
                                                        email: event.target.value
                                                    })
                                            }} />
                                        </div>
                                        <div class="form-group mt-2">
                                            <label class="form-control-label">Password</label>
                                            <input type="password" id="password" name="password" placeholder="Password" class="form-control" required
                                              onChange={(event) => {
                                                setFormData({
                                                        ...formData, 
                                                        password: event.target.value
                                                    })
                                            }} />
                                        </div>

                                        <div class="row justify-content-center my-3 px-3">
                                            <button class="btn-block btn-color" type='submit'>Signup</button>
                                        </div>
                                    </div>
                                </div>
                                </form>

                                <div class="bottom text-center mb-5">
                                    <p href="#" class="sm-text mx-auto mb-3">Already have an account? &nbsp;<button class="btn btn-white ml-2" onClick={() => props.loginModal(true)}>Login Instead</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal.Body>
        </Modal>

    )
}

export default Signup
