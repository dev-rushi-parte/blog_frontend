import React from 'react'
import TopNavbar from '../Component/Navbar'


function HomePage() {
    return (
        <>
            <TopNavbar />

            <div style={{ marginTop: "8rem" }}>

                <h1 className="col-md-12 text-center fs-1">Wel-Come To Home Page</h1>
                <div className='col-md-5 text-center container center_div'>
                    <img className='col-md-12 rounded-5 mt-5 text-center container center_div'
                        src='https://img.freepik.com/free-photo/toy-bricks-table-with-word-my-blog_144627-47466.jpg?w=1060&t=st=1671214772~exp=1671215372~hmac=466bd56c83f0640eac74df285a190d95317840fd061da266ba477ee99ac05472'
                        alt='img' />
                </div>
            </div>

        </>
    )
}

export default HomePage
