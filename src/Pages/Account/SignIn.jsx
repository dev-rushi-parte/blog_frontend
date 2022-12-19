import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import styles from './All.module.css'
import { useDispatch } from 'react-redux';
import TopNavbar from '../../Component/Navbar';
import { UserLogin } from '../../Redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';

function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    let dispatch = useDispatch()
    let navigate = useNavigate()


    const handleClick = () => setShow(!show);

    const SubmitForm = (e) => {
        e.preventDefault()

        const payload = {
            email,
            password
        }
        console.log(payload)
        dispatch(UserLogin(payload))
            .then((res) => {

                // console.log(res)
                if (res.type == "LOGIN_SUCCESS") {
                    setEmail("")
                    setPassword("")
                    alert("Singin Success")
                    navigate("/feed")

                }
                else if (res.payload.response.status == 401) {

                    alert("Invalid user Credentials")

                }
                else {
                    alert("Try again")
                }




            })
    }

    return (
        <div>
            <TopNavbar />
            <div style={{ marginTop: "8rem" }}>



                <div className='pb-4 container center_div col-md-4 border border-dark rounded-3 mt-5'>
                    <h1 className='text-center mt-5 '>SignIn</h1>

                    <Form onSubmit={SubmitForm} className='mt-3 p-5' >


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={email}
                                maxLength="30" required
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>

                            <Form.Control
                                value={password}
                                minLength="6" required
                                onChange={(e) => setPassword(e.target.value)}
                                type={show ? 'text' : 'password'}
                                placeholder="Password" />

                            <div id={styles.showBtn} onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </div>
                        </Form.Group>

                        <Button className='col-md-12 mt-5 ' variant="primary" type="submit">
                            LogIn
                        </Button>
                        <Button onClick={() => navigate("/signup")} style={{ marginLeft: '45%' }} variant="link"> Have an account? Sign up</Button>

                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
