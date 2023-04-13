import React from 'react'
import './CreatePost.css'

export default function CreatePost() {

  const loadfile = (event)=>{
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
    }
    }
    
  return (
    <div className='createPost'>
        
        {/* header */}
        <div className="post-header">
            <h4 style={{margin: "3px auto"}}>Create New Post</h4>
            <button id='post-btn'>Share</button>
        </div>

        {/* image preview */}
        <div className="main-div">
            <img src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png" alt="" id='output'/>
            <input type="file" accept='image/*' onChange={(event)=> loadfile(event)}/>
        </div>

        {/* details */}
        <div className="details">
            <div className="card-header">
                <div className="card-pic">
                    <img src="https://plus.unsplash.com/premium_photo-1664302511310-a0fd2e0cfead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwc3F1YXJlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <h5>Ramesh</h5>
            </div>
            <textarea type="text" placeholder='Write a caption'></textarea>
        </div>
    </div>
  )
}
