import React from 'react'
import '../Modal/modal.css'
import Success from '../../assets/icon-success.svg'

function Modal() {

  return (
    <>
      <div className="container">
        <div className="modal">
          <div className="modalContent">
            <div>
              <img src={Success} alt="" />
            </div>
            <div>
              <h1>Thanks for subscribing!</h1>
            </div>
            <div>
              <p>
                A confirmation email has been sent to <b>email@company.com</b>. Please open it and click the button inside to confirm your subscription.
              </p>
            </div>
            <div>
              <button type='button' className='bg-black text-white'> Dismiss Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
