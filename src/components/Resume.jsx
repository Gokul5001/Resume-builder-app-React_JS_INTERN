import React, { useEffect, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { BsTelephone } from 'react-icons/bs'

const Resume = ({ imageSource, userObject }) => {
  const [skills, setSkills] = useState([]);

  return (
    <div className="resume-card">
      <div className="resume-card-inner">
        <div className="section section-1">
          <h3 className="full-name">{userObject.firstName} {userObject.lastName} </h3>
          <p className="age">{userObject.age} years old</p>
          <img className="pfp" alt={`${userObject.firstName}'s profile`}  src={imageSource} />
        </div>
     <div className="section section-3">
          <h3>Summary</h3>
          <p className="profile-info">{userObject.profile}</p>
        </div>
     <div className="section section-2">
        <ul>
           <li className= 'phoneNumber'><BsTelephone classname='icons'/>{userObject.phoneNumber}</li>
            <li className ='email'><AiOutlineMail className='icon'/>{userObject.email} </li>
            {userObject.website ? <li className = 'website'><CgWebsite className='icon'/>{userObject.website}</li>:''}
         </ul>

      <div className="section section-4">
        <h4 className = 'horizontal'>Experience</h4>
        <p>{userObject.experience}</p>
      </div>
      <div className = 'section section-6 column'>
        <h4 className = 'horizontal'>Education</h4>
        <p className = 'university-name'>{userObject.university}</p>
      </div>
      <div className='section section-7 column'/>
      <h4 className='horizontal'>Accomplishment</h4>
      <p>{userObject.accomplishment}</p>
      </div>
      <div className='section section-8'>
        <h2 className='grad-year'>CLASS OF {userObject.graduationYear}</h2>
      </div>

    </div>
    </div>
  )
}
export default Resume

                    


           
