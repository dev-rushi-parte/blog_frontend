import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import TopNavbar from '../Component/Navbar'
import { GetUser, Get_All_Blog } from '../Redux/BlogReducer/action';
import BlogPost from './BlogPost'
import Spinner from 'react-bootstrap/Spinner';
import style from './BlogStyle.module.css'
function BlogFeed() {
    const [data, setData] = useState()
    const [updates, setUpdates] = useState(false)
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.authToken);

    useEffect(() => {
        dispatch(Get_All_Blog(token))
            .then((res) => {
                setData(res.payload)
            })
    }, [updates])


    useEffect(() => {
        dispatch(GetUser(token))
    }, [])
 
    return (
        <div>
            <TopNavbar />
            <div style={{ marginTop: "8rem" }}>

                {data == null ? <div id={style.SpinnerPosition}>
                    <Spinner style={{ width: "6rem", height: "6rem" }} className='container center_div mt-5 ' animation="border" role="status" />
                </div> : <div style={{ width: '40rem' }}
                    className='pb-4 container center_div col-md-6 '>
                    {
                        data?.map((item, i) => (
                            <div key={i}>
                                <BlogPost item={item} setUpdates={setUpdates} />

                            </div>
                        ))
                    }



                </div>}

            </div>
        </div>
    )
}

export default BlogFeed
