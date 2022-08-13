import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar';
import BlogData from '../data/BlogData'
import { Link } from 'react-router-dom';


const Blog = () => {
  const [descriptionData, setdescription] = useState({})
  return (
    <>
      <Navbar />
      <h3>This is Blog Page 2</h3>
      <section className='container-fluid h-100'>
        <div className='row h-100'>
          <div className='col-3 overflow-auto h-100'>
            {BlogData.map((singleBlog) => {
              const { id, author, title, description } = singleBlog;
              return (
                <div className="card">
                  <div className="card-body" key={id}>
                    <h5 className="card-title">{author}</h5>
                    <p className="card-text">{title}</p>
                    <Link to={`/blog/${id}`} className="btn btn-primary">{id}</Link>
                    <button type="button" onClick={() => {
                      setdescription(singleBlog)

                    }} className="btn btn-success m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{descriptionData.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {descriptionData.description}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Blog;