import React from 'react'
import "./CreateModal.css";
import cancel from "./cancel.png"
import Button from '../../../common/Button';


export default function (props){
const { CloseModal } = props;
  return (
    <div className="modal-bg">
    <div className="modal">
    <form>
        <div className='topDiv'>
        <p className='heading'>Create a Space</p>
        <img src={cancel} alt="" className="cancelButton" onClick={CloseModal}/>
        </div>
    <p className='text1'>Share your interests, curate content, host discussions, and more.</p>
    <p className='nameLabel'>Name</p>
    <label className='text2'>You can use your nickname in space.</label>
    <input type="text" className='firstInput' placeholder='Type your name'/>
    <label className='label'>Brief Description</label>
    <textarea className='textArea' name="story"
          rows="5" cols="33" placeholder='Write here...'>
</textarea>
<label className='label'>Attach picture</label>
<input type="file" className='firstInput'/>
 <div className='buttonDiv'>
    <Button
          className="button"
          text="Cancel"
          color="#101828"
          url="/login"
          background="#ffffff"
          height= "44px"
          width = "130px"
        />

<Button
          className="button"
          text="Create Space"
          background="#34A853"
          color="white"
          url="/login"
          height= "44px"
          width = "130px"
        />
 </div>
 </form>
    </div>
    </div>
  )
}
