import React, {useState,useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import BlogData from '../data/BlogData'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const {id}= useParams()
    const [DataBody, setBodayData] = useState("")
    useEffect(()=>{
     const newData = BlogData.filter((blog)=>blog.id === id);
      setBodayData(newData[0].author);
    },[])
  return (
    <>
    <Navbar/>
    <h1>{DataBody}</h1>
    </>
  )
}

export default BlogDetails