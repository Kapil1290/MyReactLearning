import React from "react";

const Post = React.memo(({value})=>{

    console.log("Post is printing");

    return(
        <>
        <h2>This is {value.name} and age is {value.age} </h2>
        </>
    )
})

export default Post;