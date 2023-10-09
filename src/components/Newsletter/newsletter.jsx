import React, { useState } from 'react'
import '../Newsletter/newsletter.css'
import iconList from '../../assets/icon-list.svg'
import desktopSignUp from '../../assets/desktop-sign-up.svg'
import Modal from '../Modal/modal'

function Newsletter() {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        setValidEmail(emailRegex.test(inputEmail) || inputEmail === "")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validEmail){
            console.log('Form Submitted Successfully!')
            setIsModalOpen(true);
        }
        else{
            console.log('Error')
        }
    }



  return isModalOpen ? (
    <Modal />
    ) : (
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
                    <input type="email" name='email' placeholder='email@company.com' value={email} onChange={handleEmailChange}/>
                    <button type='button' onClick={handleSubmit} className='bg-black text-white'>Subscribe to monthly newslatter</button>
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