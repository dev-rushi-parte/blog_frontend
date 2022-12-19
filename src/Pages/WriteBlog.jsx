import React, { useState } from 'react'
import TopNavbar from '../Component/Navbar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from 'react-router-dom';
import style from './BlogStyle.module.css'
import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { AddBlog } from '../Redux/BlogReducer/action';



function WriteBlog() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [loadingStatus, setLoadingStatus] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector((state) => state.auth.authToken);


    const SubmitForm = async (e) => {
        e.preventDefault();
        setLoadingStatus(true)
        //   Uploading the img to Cloudnary data base
        const data = new FormData();
        data.append("file", selectedFile)
        data.append("upload_preset", "insta-clone")
        data.append("cloud_name", "rushi2784")
        await fetch(`https://api.cloudinary.com/v1_1/insta-clone/image/upload`, {
            method: "POST",
            body: data
        })
            .then((res) => res.json())
            .then((data) => {


                const payload = {
                    title,
                    content,
                    img: data.url,
                    token
                }
                console.log(payload)

                dispatch(AddBlog(payload))
                    .then((res) => {
                        console.log(res)
                        setLoadingStatus(false)
                        if (res.type == 'ADD_BLOG_SUCCESS') {
                            alert("Blog Added Success")
                            navigate("/feed")
                        }
                        else {
                            alert("Try again")
                        }
                    })
            })

    }


    // Only for Preview
    useEffect(() => {

        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)


    }, [selectedFile])


    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }



    return (
        <div>
            <TopNavbar />
            <div style={{ marginTop: "8rem" }}>




                <div className='pb-4 container center_div col-md-6 border border-dark rounded-3 mt-5'>
                    <h1 className='text-center mt-5 '>Write Blog</h1>
                    <Form onSubmit={SubmitForm} className='mt-3 p-5' >




                        <Form.Group className="mb-3" >

                            <Form.Label>Image</Form.Label>
                            <br />
                            <Form.Control
                                id={!preview ? "" : style.hideFile}
                                required
                                onChange={onSelectFile}
                                type="file"
                            />
                            {!preview ? "" : <img id={style.previewImg} src={preview} alt='img' />}

                        </Form.Group>



                        <Form.Group className="mb-3" >

                            <Form.Label>Title</Form.Label>
                            <Form.Control value={title}
                                 required
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                placeholder="Write Title" />

                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Content</Form.Label>

                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Write Content Here"
                                className="mb-3"

                            >
                                <Form.Control as="textarea"
                                    value={content} required
                                    style={{ height: '300px' }}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </FloatingLabel>
                        </Form.Group>

                        <Button className='col-md-12 mt-5 ' variant="primary" type="submit">

                            {loadingStatus ? <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner> : 'Add Blog'}
                        </Button>


                    </Form>
                </div>

            </div>
        </div>
    )
}

export default WriteBlog
