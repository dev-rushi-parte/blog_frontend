import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from "./Navbar.module.css"


function TopNavbar() {

    // let token = ''
    const navigate = useNavigate()
    const [drop, setDrop] = useState(false)

    const token = useSelector((state) => state.auth.authToken);
    const user = useSelector((state) => state.blog.userData);
    // console.log(user)

    // console.log(token)

    const LogOut = () => {
        window.localStorage.clear()
        navigate("/signin")

        window.location.reload()
    }


    const HomePageNavigate = () => {
        if (token != "") {
            navigate("/feed")
        }
        else {
            navigate("/")
        }

    }

    return (
        <div>
            <Navbar bg="dark" fixed="top" className='p-3' variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand style={{ cursor: "pointer", fontWeight: '700' }} onClick={HomePageNavigate}>Blog App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            {token != "" ? <>

                                <Nav.Link onClick={() => navigate("/write")} style={{ fontWeight: '600' }} className='rounded-3 me-3 bg-light text-dark '>
                                    Write Blog
                                </Nav.Link>
                                <Nav.Link onClick={() => { setDrop(prv => !prv) }} className=" bg-light" id={style.img}>
                                    {user?.img == '' ? <img src="\img\ProfilePic.jpg" alt='img1' /> : <img src={user?.img} alt='img2' />}

                                </Nav.Link>
                                {drop ? <div id={style.dropDown_outer}>
                                    <Nav.Link id={style.dropDown} className='flex flex-col'>

                                        <p onClick={() => navigate("/profile")} className='mt-1'>Profile</p>
                                        <p onClick={LogOut}>Logout</p>

                                    </Nav.Link>

                                </div> : ""}</> :
                                <>
                                    <Nav.Link style={{ fontWeight: '600' }} className="rounded-3 me-3 bg-success text-light" onClick={() => navigate("/signin")}   >SignIn</Nav.Link>
                                    <Nav.Link style={{ fontWeight: '600' }} className="rounded-3 me-3 bg-light text-dark" onClick={() => navigate("/signup")}>SignUp</Nav.Link>
                                </>



                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopNavbar