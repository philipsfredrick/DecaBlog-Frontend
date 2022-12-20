import React from 'react'
import emailBox from '../../assets/email/emails.svg'
import Blogger from '../../assets/email/blogger-logo.svg'
import Body from '../../assets/email/blogger-body.svg'

const Email = () => {
  return (
    <>
    <div className="email">
    <div>
      <img src={Blogger} alt="blog-logo" className="blogger-logo" />
      <img src={Body} alt="blogger-body" className="blogger-body" />
      <img src={emailBox} alt="email-box" className="email-icons" />
    </div>
    <form className="form-row">
      <input type="email" placeholder="Email" />
      <button>Subscribe Now</button>
    </form>
  </div>
  </>
  )
}

export default Email