import React,{useState, useEffect} from 'react'
import '../styles/Profile.css'
import PostDetail from './PostDetail'
import { useParams } from 'react-router-dom'

export default function UserProfile() {

  const { userid } = useParams()
  console.log(userid);
  const [user, setUser] = useState("")
  const [posts, setPosts] = useState([])


  useEffect(() => {
    fetch(`http://localhost:5001/user/${userid}`, {
      headers: {
        Authorization: "Bearer "+ localStorage.getItem("jwt")
      }
    }).then(res=> res.json())
    .then((result)=> {
        console.log(result);
        setUser(result.user)
        setPosts(result.post)
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
          <h1>{ user.name}</h1>
          <div className="profile-info" style={{display: "flex"}}>
            <p>{posts.length} posts</p>
            <p>40 followers</p>
            <p>40 following</p>
          </div>
        </div>
      </div>

      <hr style={{width: "90%", opacity:"0.8", margin: "25px auto"}}/>

      {/* Gallery */}
      <div className="gallery">
        {posts.map((pics)=>{
          return <img key={pics._id} src={pics.photo} 
        //   onClick={()=>{toggleDetails(pics)}}
          className='item' alt="" />
        })}
      </div>

      {/* {show &&
        <PostDetail item={posts} toggleDetails={toggleDetails}/>
      } */}

    </div>
  )
}
