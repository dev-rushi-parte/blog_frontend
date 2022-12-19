import React from 'react'
import style from './BlogStyle.module.css';


function UserAllPost(props) {
    console.log(props)
    return (
        <div id={style.User_Post_Img_box}>

            <img src={props?.item?.img} alt='img' />

        </div>
    )
}

export default UserAllPost