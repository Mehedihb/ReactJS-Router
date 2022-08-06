import React from 'react'
// const ErrorIllustration = require('../assets/img/error-404.svg')

const Error = () => {
  return (
    <>
      <div className='errorPage'>
        <div className='errorContent'>
          <img src={require('../assets/img/error-404.svg').default} alt='mySvgImage' />
          <div>Error</div>
        </div>
      </div>
    </>
  )
}

export default Error;