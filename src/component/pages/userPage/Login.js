import React, { useState } from 'react'
import LOGO from '../../../images/LOGO.png'
import Modal from 'react-bootstrap/Modal';
import { FaRegWindowClose } from "react-icons/fa";
import { loginUser } from '../../../service/UserService';
const Login = (props) => {


    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const loginWithUserData = (e) => {
        e.preventDefault();
        sendUserData();
    }

    const sendUserData = async () => {
        const data = await loginUser(formData);

        if (data.body.length > 0) {
            //after login
            console.log("data.body", data.body[0]);
            localStorage.setItem("isAuthenticated", true);
            localStorage.setItem("binge-user-data", JSON.stringify(data.body[0]));
            props.closeModal();

            //to redirect and link active
            localStorage.setItem("active-nav", 'dashboard');
            window.location.href = "/dashboard";
        }
    }

    return (
        <Modal
            show={props.show}
            backdrop="static">
            <Modal.Body>
                <div class="mx-auto">
                   
                        <div class="card card1">
                        <form action='/' method='POST' onSubmit={loginWithUserData}>
                            <div class="row justify-content-center my-auto">
                                <div class="col-12 my-5">
                                    <FaRegWindowClose className='float-end binge-icon' onClick={() => props.closeModal()} />
                                    <div class="row justify-content-center px-3 mb-3">
                                        <img id="logo" src={LOGO} />
                                        <h6 class="msg-info d-flex justify-content-center mt-5">Please login to your account</h6>

                                    </div>

                                    <div class="form-group">
                                        <label class="form-control-label">Email</label>
                                        <input type="email" id="email" name="email" placeholder="Email" class="form-control" required
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value
                                                })
                                            }} />
                                    </div>

                                    <div class="form-group mt-2">
                                        <label class="form-control-label">Password</label>
                                        <input type="password" id="password" name="password" placeholder="Password" class="form-control" required
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    password: e.target.value
                                                })
                                            }} />
                                    </div>

                                    <div class="row justify-content-center my-3 px-3">
                                        <button class="btn-block btn-color" type='submit' >Login to Binge</button>
                                    </div>
                                </div>
                            </div>
                            </form>
                            <div class="bottom text-center mb-5">
                                <p href="#" class="sm-text mx-auto mb-3">Don't have an account? &nbsp;<button class="btn btn-white ml-2" onClick={() => props.signupModal(true)}>Create new</button></p>
                            </div>
                        </div>
                </div>

            </Modal.Body>
        </Modal>

    )
}

export default Login
