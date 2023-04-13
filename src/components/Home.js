import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
      {/* card */}
      <div className="card">
        {/* card header */}
          <div className="card-header">
            <div className="card-pic">
              <img src="https://plus.unsplash.com/premium_photo-1664302511310-a0fd2e0cfead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwc3F1YXJlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <h5>Ramesh</h5>
          </div>
          
          {/* card image */}
          <div className="card-image">
            <img src="https://images.unsplash.com/photo-1680955886616-55b83de7489f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" /> 
          </div>

          {/* card content */}
          <div className="card-content">
            <span className="material-symbols-outlined">
              favorite
            </span>
            <p>1 Like</p>
            <p>This is amazing</p>
          </div>

          {/* add comments */}
          <div className="add-comment">
            <span className="material-symbols-outlined">
              Mood
            </span>
            <input type="text" name="" id="" placeholder='Add a comment'/>
            <button className="comment">Post</button>
          </div>

        </div>
      </div>
  )
}
