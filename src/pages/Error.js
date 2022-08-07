import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='errorPage'>
        <div className='errorContent'>
          <img src={require('../assets/img/error-404.svg').default} alt='mySvgImage' />
          <button
            onClick={() => {
              navigate('/')
            }}
            type="button" class="btn btn-primary">Back to Home</button>
        </div>
      </div>
    </>
  )
}

export default Error;