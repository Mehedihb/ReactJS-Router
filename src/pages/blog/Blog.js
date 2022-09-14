import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import BlogData from '../../data/BlogData'
import { Link } from 'react-router-dom';

const Blog = () => {
  const [passData, setPassData] = useState({})
  return (
    <>
      <Navbar />
      <section className='container-fluid h-100'>
        <div className='row h-100'>
          <BlogSidebar getData={setPassData} />
          <BlogInDetails title={passData.author} author={passData.title} description={passData.description} />
        </div>
      </section>
    </>
  )
}

export const BlogSidebar = (props) => {
  const [descriptionData, setdescription] = useState({})
  return (
    <>
      <div className='col-3 overflow-auto h-100'>
        {BlogData.map((singleBlog) => {
          const { id, author, title } = singleBlog;
          return (
            <div className="card" key={id}>
              <div className="card-body">
                <h5 className="card-title">{author}</h5>
                <p className="card-text">{title}</p>
                <Link to={`/blog/${id}`} className="btn btn-primary">View Page</Link>
                <button type="button" className="btn btn-success m-2" onClick={() => { setdescription(singleBlog) }} data-bs-toggle="modal" data-bs-target="#exampleModal">View BModal</button>
                <button onClick={() => { props.getData(singleBlog) }} type="button" className="btn btn-dark">View Details</button>
              </div>
            </div>
          )
        })}
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
      </div>
    </>
  )
}

export const BlogInDetails = (props) => {
  return (
    <div className='col-9'>
      <h5>{props.title}</h5>
      <h6>{props.author}</h6>
      <p>{props.description}</p>
    </div>
  )
}

export default Blog;