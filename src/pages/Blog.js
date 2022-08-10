import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar';
import BlogData from '../data/BlogData'
import { Link } from 'react-router-dom';


const Blog = () => {
  const [Blog, setBlog] = useState(BlogData)
  console.log(Blog)
  return (
    <>
      <Navbar />
      <h3>This is Blog Page 2</h3>
      <section className='container-fluid h-100'>
        <div className='row h-100'>
          <div className='col-3 overflow-auto h-100'>
            {Blog.map((singleBlog) => {
              const { id, author, title, description } = singleBlog;
              return (
                <div className="card">
                  <div className="card-body" key={id}>
                    <h5 className="card-title">{author}</h5>
                    <p className="card-text">{title}</p>
                    <Link to={`/blog/${id}`} className="btn btn-primary">{id}</Link>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>


    </>
  )
}

export default Blog;