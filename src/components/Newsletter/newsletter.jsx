import React, { useEffect, useState } from 'react'
import '../Newsletter/newsletter.css'
import iconList from '../../assets/icon-list.svg'
import desktopSignUp from '../../assets/desktop-sign-up.svg'
import mobileSignUp from '../../assets/mobile-sign-up.svg'
import Modal from '../Modal/modal'

function Newsletter() {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [view, setView] = useState(window.innerWidth);

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

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEmail("")
    }

    useEffect(() => {
        const handleResize = () => {
            setView(window.innerWidth)
        }

        window.addEventListener("resize", handleResize);
    
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })

  return isModalOpen ? (
    <Modal name={email || "Subscriber"} onCloseModal={handleCloseModal} />
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
                    <div className='emailLabel'>
                        <label htmlFor="email">Email Address</label>
                        {!validEmail && email !== "" && (
                        <p className='warning'>Valid email required </p>
                        )}
                    </div>
                    <input type="email" name='email' placeholder='email@company.com' value={email} onChange={handleEmailChange}  className={ email !== "" && !validEmail ? 'inputerror' : ""}/>
                    <button type='button' onClick={handleSubmit} disabled={!validEmail || email === ""} className='bg-black text-white'>Subscribe to monthly newslatter</button>
                </div>
            </div>
            <div className='right'>
                <img src={view >= 375 ? desktopSignUp : mobileSignUp} />
            </div>
        </div>
      </div>
    </>
  )
}

export default Newsletter