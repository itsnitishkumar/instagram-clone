import React,{useState, useEffect} from 'react'
import './Profile.css'


export default function Profile() {

  const [pic, setPic] = useState([])

  useEffect(() => {
    fetch("http://localhost:5001/myposts", {
      headers: {
        Authorization: "Bearer "+ localStorage.getItem("jwt")
      }
    }).then(res=> res.json())
    .then((result)=> {
      console.log(result);
      setPic(result)
    })
  }, [])
  

  return (
    <div className='profile'>
      {/* profile frame */}
      <div className="profile-frame">
        <div className="profile-pic">
          <img src="https://plus.unsplash.com/premium_photo-1664302511310-a0fd2e0cfead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwc3F1YXJlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className="profile-data">
          <h1>{ JSON.parse(localStorage.getItem("user")).name}</h1>
          <div className="profile-info" style={{display: "flex"}}>
            <p>40 posts</p>
            <p>40 followers</p>
            <p>40 following</p>
          </div>
        </div>
      </div>

      <hr style={{width: "90%", opacity:"0.8", margin: "25px auto"}}/>

      {/* Gallery */}
      <div className="gallery">
        {pic.map((pics)=>{
          return <img key={pics._id} src={pics.photo} className='item' alt="" />
        })}
      </div>

    </div>
  )
}
