import React from 'react'
import Navbar from '../components/navbar/Navbar';
import { useState } from 'react';
import BlogData from '../data/BlogData'
import { Link } from 'react-router-dom';


const Blog = () => {
  const [Blog, setBlog] = useState(BlogData)
  console.log(Blog)
  return (
    <>
      <Navbar />
      <h3>This is Blog Page</h3>
      <section>
        {Blog.map((singleBlog) => {
          const { id, author, title, description } = singleBlog;
          return (
            <article>
              <Link to={id}>{id}</Link>
              <h5>{author}</h5>
              <h6>{title}</h6>
            </article>
          )
        })}
      </section>


    </>
  )
}

export default Blog;