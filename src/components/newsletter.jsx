import React from 'react'
import '../components/newsletter.css'

function Newsletter() {

  return (
    <>
      <div className='container'>
        <div className='wrapper'>
            <div className='left'>
                <div className='leftContent'>
                    <div>
                        <h1>Stay Updated!</h1>
                    </div>
                    <div>
                        <p>Join 60 000+ product managers receiving monthly updates on: </p>
                    </div>
                    <div>
                        <p>Image</p>
                        <p>Product discovery and building what matters</p>
                    </div>
                    <div>
                        <p>Image</p>
                        <p>Product discovery and building what matters</p>
                    </div>
                    <div>
                        <p>Image</p>
                        <p>Product discovery and building what matters</p>
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name='email' />
                    </div>
                    <button type='button'>Subscribe to monthly newslatter</button>
                </div>
            </div>
            <div className='right'>
                <h2>Image</h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default Newsletter