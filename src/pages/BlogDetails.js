import React, {useState,useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import BlogData from '../data/BlogData'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const {id}= useParams()
    const [bodyData, setBodyData] = useState("")
    useEffect (()=>{
      const blogD = BlogData.filter((singleBlog)=>singleBlog.id === parseInt(id))
      setBodyData(blogD[0])
    },[id])
    // console.log(bodyData.author)
  return (
    <>
    <Navbar/>
    <h1>{id}</h1>
    <h5>{bodyData.author} - {bodyData.title}</h5>
    <p>{bodyData.description}</p>
    </>
  )
}

export default BlogDetails