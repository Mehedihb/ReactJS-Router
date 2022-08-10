import React, {useState,useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import BlogData from '../data/BlogData'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const {id}= useParams()
    
  return (
    <>
    <Navbar/>
    <h1>{id}</h1>
    </>
  )
}

export default BlogDetails