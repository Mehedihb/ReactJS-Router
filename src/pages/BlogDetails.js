import React from 'react'
import { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import { useParams } from 'react-router-dom'
import BlogData from '../data/BlogData'

const BlogDetails = () => {
    
    const {id}= useParams()
    console.log (id)
  return (
    <>
    <Navbar/>
    <div>BlogDetails</div>
    </>
  )
}

export default BlogDetails