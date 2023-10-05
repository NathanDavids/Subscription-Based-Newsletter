import React from 'react'
import '../Newsletter/newsletter.css'
import iconList from '../../assets/icon-list.svg'
import desktopSignUp from '../../assets/desktop-sign-up.svg'

function Newsletter() {

  return (
    <>
      <div className='container '>
        <div className='wrapper'>
            <div className='left'>
                <div className='leftContent'>
                    <div>
                        <h1>Stay Updated!</h1>
                    </div>
                    <div>
                        <p>Join 60 000+ product managers receiving monthly updates on: </p>
                    </div>
                    <div className='list'>
                        <img src={iconList} />
                        <p>Product discovery and building what matters</p>
                    </div>
                    <div className='list'>
                        <img src={iconList} />
                        <p>Product discovery and building what matters</p>
                    </div>
                    <div className='list'>
                        <img src={iconList} />
                        <p>Product discovery and building what matters</p>
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                    </div>
                    <input type="email" name='email' placeholder='email@company.com' />
                    <button type='button' className='bg-black text-white'>Subscribe to monthly newslatter</button>
                </div>
            </div>
            <div className='right'>
                <img src={desktopSignUp} />
            </div>
        </div>
      </div>
    </>
  )
}

export default Newsletter