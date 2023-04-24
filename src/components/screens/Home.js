import React,{useEffect, useState} from 'react'
import '../styles/Home.css'
import {useNavigate} from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate()

  const [data, setData] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("jwt")
    if(!token){
      navigate("./signup")
    }

  //fetching all the posts
  fetch("http://localhost:5001/allPosts",{
    method: "get",
    headers: {
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("jwt")
    },
  }).then(res=>res.json())
  .then(result=> setData(result))
  .catch(err => console.log(err))
  },[])
  
  const likePost = (id)=>{
    fetch("http://localhost:5001/like", {
      method: "put",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        postId: id
      })
    }).then(res=> res.json())
    .then((result)=>{
      const newData = data.map((posts)=>{
        if(posts._id === result._id){
          return result
        }else{
          return posts
        }
      })
      setData(newData)
      console.log(result);
    })
  }

  const unlikePost = (id)=>{
    fetch("http://localhost:5001/unlike", {
      method: "put",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        postId: id
      })
    }).then(res=> res.json())
    .then((result)=>{
      const newData = data.map((posts)=>{
        if(posts._id === result._id){
          return result
        }else{
          return posts
        }
      })
      setData(newData)
      console.log(result);
    })
  }

  return (
    <div className='home'>
      {/* card */}
      {data.map((posts)=>{
        return (
          <div className="card">
            {/* card header */}
              <div className="card-header">
                <div className="card-pic">
                  <img src="https://plus.unsplash.com/premium_photo-1664302511310-a0fd2e0cfead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwc3F1YXJlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <h5>{posts.postedBy.name}</h5>
              </div>
              
              {/* card image */}
              <div className="card-image">
                <img src={posts.photo} alt="" /> 
              </div>

              {/* card content */}
              <div className="card-content">
                {
                  posts.likes.includes(JSON.parse(localStorage.getItem("user"))._id) 
                  ?
                  (
                    <span className="material-symbols-outlined material-symbols-outlined-red" onClick={()=> unlikePost(posts._id)}>
                      favorite
                    </span>
                  )
                  :
                  (
                    <span className="material-symbols-outlined" onClick={()=> likePost(posts._id)}>
                      favorite
                    </span>
                  )
                }
                
                <p>{posts.likes.length} Likes</p>
                <p>{posts.body}</p>
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
        )
      })}
      </div>
  )
}
